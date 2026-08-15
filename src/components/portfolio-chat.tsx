"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Bot, LoaderCircle, Send, Sparkles, User, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ErrorResponse = {
  error?: string;
  retryAfter?: number;
};

const WELCOME_MESSAGE =
  "Hi! Ask me anything about Thant's experience, skills, education, or projects.";

const THINKING_MESSAGES = [
  "Reviewing Thant's portfolio…",
  "Finding the most relevant details…",
  "Preparing a concise answer…",
];

type PortfolioChatProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function PortfolioChat({ isOpen, onClose }: PortfolioChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const shouldAutoScrollRef = useRef(true);

  useEffect(() => {
    if (!isOpen) return;

    textareaRef.current?.focus();
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const messagesElement = messagesRef.current;
    if (!messagesElement || !shouldAutoScrollRef.current) return;

    messagesElement.scrollTop = messagesElement.scrollHeight;
  }, [isOpen, messages, isSending]);

  useEffect(() => {
    if (cooldownSeconds <= 0) return;

    const timeout = window.setTimeout(
      () => setCooldownSeconds((current) => Math.max(0, current - 1)),
      1_000,
    );

    return () => window.clearTimeout(timeout);
  }, [cooldownSeconds]);

  async function sendMessage(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const content = input.trim();
    if (!content || isSending || cooldownSeconds > 0) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user" as const, content },
    ].slice(-20);

    setMessages(nextMessages);
    setInput("");
    setError(null);
    setIsSending(true);
    shouldAutoScrollRef.current = true;

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok) {
        const responseBody = (await response.json()) as ErrorResponse;

        if (response.status === 429) {
          const retryAfter =
            Number(responseBody.retryAfter) ||
            Number(response.headers.get("Retry-After")) ||
            60;

          // Hand the question back so the visitor can resend it after the wait.
          setMessages(messages);
          setInput(content);
          setCooldownSeconds(Math.ceil(retryAfter));
        }

        throw new Error(responseBody.error || "Unable to get a response.");
      }

      if (!response.body) {
        throw new Error("The response stream is unavailable.");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: "" },
      ]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let receivedContent = false;

      while (true) {
        const { done, value } = await reader.read();
        const chunk = decoder.decode(value, { stream: !done });

        if (chunk) {
          receivedContent = true;
          setMessages((current) => {
            const updated = [...current];
            const assistantMessage = updated.at(-1);

            if (assistantMessage?.role === "assistant") {
              updated[updated.length - 1] = {
                ...assistantMessage,
                content: assistantMessage.content + chunk,
              };
            }

            return updated;
          });
        }

        if (done) break;
      }

      if (!receivedContent) {
        throw new Error("The AI service returned an empty response.");
      }
    } catch (requestError) {
      setMessages((current) => {
        const lastMessage = current.at(-1);
        return lastMessage?.role === "assistant" && !lastMessage.content
          ? current.slice(0, -1)
          : current;
      });
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to get a response.",
      );
    } finally {
      setIsSending(false);
      requestAnimationFrame(() => textareaRef.current?.focus());
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  }

  if (!isOpen) return null;

  return (
        <section
          id="portfolio-chat-panel"
          role="dialog"
          aria-modal="false"
          aria-label="Chat with Tha's portfolio assistant"
          className="fixed bottom-28 left-1/2 z-50 flex h-[min(36rem,calc(100vh-9rem))] w-[calc(100vw-2rem)] max-w-sm -translate-x-1/2 flex-col overflow-hidden rounded-2xl border border-white/15 bg-zinc-950/95 text-white shadow-2xl shadow-black/50 backdrop-blur-xl"
        >
          <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/20">
                <Bot className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold">Ask about Thant</h2>
                <p className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Portfolio assistant
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close chat"
              className="text-zinc-400 hover:bg-white/10 hover:text-white"
            >
              <X className="size-5" />
            </Button>
          </header>

          <div
            ref={messagesRef}
            onScroll={(event) => {
              const element = event.currentTarget;
              const distanceFromBottom =
                element.scrollHeight - element.scrollTop - element.clientHeight;
              shouldAutoScrollRef.current = distanceFromBottom < 24;
            }}
            className="flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 py-4"
            aria-live="polite"
          >
            <Message role="assistant" content={WELCOME_MESSAGE} />
            {messages.map((message, index) => (
              <Message
                key={`${message.role}-${index}`}
                role={message.role}
                content={message.content}
                isStreaming={
                  isSending &&
                  index === messages.length - 1 &&
                  message.role === "assistant"
                }
              />
            ))}
          </div>

          <form
            onSubmit={sendMessage}
            className="border-t border-white/10 bg-black/20 p-3"
          >
            {error && (
              <p role="alert" className="mb-2 text-xs text-red-300">
                {error}
              </p>
            )}
            <div className="flex items-end gap-2 rounded-xl border border-white/15 bg-white/5 p-2 focus-within:border-violet-400/60 focus-within:ring-2 focus-within:ring-violet-500/20">
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isSending || cooldownSeconds > 0}
                maxLength={4000}
                rows={1}
                placeholder={
                  cooldownSeconds > 0
                    ? `Available again in ${cooldownSeconds}s...`
                    : "Ask about experience or projects..."
                }
                aria-label="Message"
                className="max-h-28 min-h-9 resize-none field-sizing-content border-0 bg-transparent px-2 py-2 text-sm shadow-none focus-visible:ring-0"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isSending || cooldownSeconds > 0}
                aria-label="Send message"
                className="size-9 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200"
              >
                {isSending ? (
                  <LoaderCircle className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
              </Button>
            </div>
            <p className="mt-2 text-center text-[11px] text-zinc-500">
              {cooldownSeconds > 0
                ? `Rate limited · try again in ${cooldownSeconds}s`
                : "Enter to send · Shift + Enter for a new line"}
            </p>
          </form>
        </section>
  );
}

function Message({
  role,
  content,
  isStreaming = false,
}: ChatMessage & { isStreaming?: boolean }) {
  const isUser = role === "user";

  return (
    <div className={cn("flex items-end gap-2", isUser && "flex-row-reverse")}>
      <span
        className={cn(
          "flex size-7 shrink-0 items-center justify-center rounded-full",
          isUser ? "bg-violet-500 text-white" : "bg-white/10 text-zinc-300",
        )}
      >
        {isUser ? <User className="size-4" /> : <Bot className="size-4" />}
      </span>
      <div
        className={cn(
          "max-w-[82%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
          isUser
            ? "rounded-br-sm bg-violet-500 text-white"
            : "rounded-bl-sm bg-white/10 text-zinc-100",
        )}
      >
        {isStreaming && !content ? (
          <ThinkingStatus />
        ) : (
          content
        )}
        {isStreaming && content && (
          <span
            aria-hidden="true"
            className="ml-0.5 inline-block h-4 w-0.5 animate-pulse translate-y-0.5 bg-zinc-300"
          />
        )}
        {isStreaming && <span className="sr-only">Assistant is responding</span>}
      </div>
    </div>
  );
}

function ThinkingStatus() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessageIndex((current) =>
        Math.min(current + 1, THINKING_MESSAGES.length - 1),
      );
    }, 1_800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="flex items-center gap-2 text-zinc-400">
      <Sparkles className="size-3.5 animate-pulse text-violet-300" aria-hidden="true" />
      <span key={messageIndex} className="animate-pulse">
        {THINKING_MESSAGES[messageIndex]}
      </span>
    </span>
  );
}
