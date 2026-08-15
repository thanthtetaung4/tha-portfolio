import { readFile, readdir } from "node:fs/promises";
import { ChatOpenRouter } from "@langchain/openrouter"
import { HumanMessage, SystemMessage, AIMessage } from "langchain";
import path from "node:path";

import { checkRateLimit, getClientKey } from "./rate-limit";

const DEFAULT_MODEL = "google/gemma-4-26b-a4b-it";
const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 4_000;

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

let contextPromise: Promise<string> | undefined;

async function loadPortfolioContext(): Promise<string> {
  const projectRoot = process.cwd();
  const promptPath = path.join(
    projectRoot,
    "src",
    "app",
    "api",
    "ai",
    "prompt.yaml",
  );
  const dataDirectory = path.join(projectRoot, "data");

  const [prompt, dataFiles] = await Promise.all([
    readFile(promptPath, "utf8"),
    readdir(dataDirectory, { withFileTypes: true }),
  ]);

  const markdownFiles = dataFiles
    .filter((file) => file.isFile() && file.name.endsWith(".md"))
    .sort((a, b) => a.name.localeCompare(b.name));

  const documents = await Promise.all(
    markdownFiles.map(async (file) => ({
      name: file.name,
      content: (await readFile(path.join(dataDirectory, file.name), "utf8")).trim(),
    })),
  );

  const portfolioData = documents
    .filter((document) => document.content.length > 0)
    .map(
      (document) =>
        `<document name="${document.name}">\n${document.content}\n</document>`,
    )
    .join("\n\n");

  return `${prompt.trim()}\n\n<portfolio_data>\n${
    portfolioData || "No portfolio information is currently available."
  }\n</portfolio_data>`;
}

function getPortfolioContext(): Promise<string> {
  contextPromise ??= loadPortfolioContext().catch((error) => {
    contextPromise = undefined;
    throw error;
  });

  return contextPromise;
}

function parseMessages(value: unknown): ChatMessage[] | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_MESSAGES) {
    return null;
  }

  const messages: ChatMessage[] = [];

  for (const item of value) {
    if (typeof item !== "object" || item === null) return null;

    const { role, content } = item as Record<string, unknown>;
    if (
      (role !== "user" && role !== "assistant") ||
      typeof content !== "string" ||
      content.trim().length === 0 ||
      content.length > MAX_MESSAGE_LENGTH
    ) {
      return null;
    }

    messages.push({ role, content: content.trim() });
  }

  if (messages.at(-1)?.role !== "user") return null;

  return messages;
}

function formatWait(seconds: number): string {
  if (seconds < 60) return `${seconds} second${seconds === 1 ? "" : "s"}`;

  const minutes = Math.ceil(seconds / 60);
  return `${minutes} minute${minutes === 1 ? "" : "s"}`;
}

function jsonError(message: string, status: number): Response {
  return Response.json({ error: message }, { status });
}

function setupChat(): ChatOpenRouter {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const langSmithApiKey = process.env.LANGSMITH_API_KEY;
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is not configured");
  }

  return new ChatOpenRouter({
    model: process.env.OPENROUTER_MODEL || DEFAULT_MODEL,
    maxTokens: 600,
    temperature: 0.2,
  });
}

export async function POST(request: Request): Promise<Response> {
  const rateLimit = checkRateLimit(getClientKey(request));
  if (!rateLimit.allowed) {
    return Response.json(
      {
        error: `You're sending messages too quickly. Try again in ${formatWait(
          rateLimit.retryAfterSeconds,
        )}.`,
        retryAfter: rateLimit.retryAfterSeconds,
      },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  let llm: ChatOpenRouter;
  try {
    llm = setupChat();
  } catch (error) {
    console.error("AI chat setup failed", error);
    return jsonError("The AI service is not properly configured.", 500);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Request body must be valid JSON.", 400);
  }

  const messages = parseMessages(
    typeof body === "object" && body !== null
      ? (body as Record<string, unknown>).messages
      : undefined,
  );

  if (!messages) {
    return jsonError(
      `messages must contain 1-${MAX_MESSAGES} user/assistant messages, end with a user message, and keep each message under ${MAX_MESSAGE_LENGTH} characters.`,
      400,
    );
  }

  try {
    const instructions = await getPortfolioContext();
    const openRouterStream = await llm.stream(
      [
        new SystemMessage(instructions),
        ...messages.map((msg) =>
          msg.role === "user"
            ? new HumanMessage(msg.content)
            : new AIMessage(msg.content),
        ),
      ],
      { signal: AbortSignal.timeout(60_000) },
    );

    const encoder = new TextEncoder();
    const responseStream = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const chunk of openRouterStream) {
            if (typeof chunk.content === "string" && chunk.content) {
              controller.enqueue(encoder.encode(chunk.content));
            }
          }
          controller.close();
        } catch (error) {
          console.error("AI chat stream failed", error);
          controller.error(error);
        }
      },
    });

    return new Response(responseStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("AI chat request failed", error);
    return jsonError("The AI service is temporarily unavailable.", 502);
  }
}
