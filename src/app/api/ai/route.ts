import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const OPENROUTER_CHAT_URL = "https://openrouter.ai/api/v1/chat/completions";
const DEFAULT_MODEL = "google/gemma-4-26b-a4b-it";
const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 4_000;

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

type OpenRouterResponse = {
  error?: { message?: string };
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
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

function jsonError(message: string, status: number): Response {
  return Response.json({ error: message }, { status });
}

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error("OPENROUTER_API_KEY is not configured");
    return jsonError("AI chat is not configured.", 503);
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
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const openRouterResponse = await fetch(OPENROUTER_CHAT_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        ...(siteUrl ? { "HTTP-Referer": siteUrl } : {}),
        "X-OpenRouter-Title": "Tha Portfolio",
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || DEFAULT_MODEL,
        messages: [{ role: "system", content: instructions }, ...messages],
        stream: false,
        max_tokens: 600,
        temperature: 0.2,
      }),
      signal: AbortSignal.timeout(60_000),
    });

    const responseBody = (await openRouterResponse.json()) as OpenRouterResponse;
    if (!openRouterResponse.ok) {
      console.error(
        "OpenRouter API error",
        openRouterResponse.status,
        responseBody.error?.message,
      );
      return jsonError("The AI service could not complete the request.", 502);
    }

    const answer = responseBody.choices?.[0]?.message?.content?.trim();
    if (!answer) {
      console.error("OpenRouter response did not contain message content");
      return jsonError("The AI service returned an empty response.", 502);
    }

    return Response.json({ message: answer });
  } catch (error) {
    console.error("AI chat request failed", error);
    return jsonError("The AI service is temporarily unavailable.", 502);
  }
}
