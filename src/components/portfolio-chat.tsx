"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Bot, LoaderCircle, Send, User, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatResponse = {
  message?: string;
  error?: string;
};

const WELCOME_MESSAGE =
  "Hi! Ask me anything about Thant's experience, skills, education, or projects.";

type PortfolioChatProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function PortfolioChat({ isOpen, onClose }: PortfolioChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

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
    if (!messagesElement) return;

    messagesElement.scrollTo({
      top: messagesElement.scrollHeight,
      behavior: "smooth",
    });
  }, [isOpen, messages, isSending]);

  async function sendMessage(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const content = input.trim();
    if (!content || isSending) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user" as const, content },
    ].slice(-20);

    setMessages(nextMessages);
    setInput("");
    setError(null);
    setIsSending(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const responseBody = (await response.json()) as ChatResponse;

      if (!response.ok || !responseBody.message) {
        throw new Error(responseBody.error || "Unable to get a response.");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: responseBody.message as string },
      ]);
    } catch (requestError) {
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
            className="flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 py-4"
            aria-live="polite"
          >
            <Message role="assistant" content={WELCOME_MESSAGE} />
            {messages.map((message, index) => (
              <Message
                key={`${message.role}-${index}`}
                role={message.role}
                content={message.content}
              />
            ))}
            {isSending && (
              <div className="flex items-end gap-2">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-zinc-300">
                  <Bot className="size-4" />
                </span>
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white/10 px-4 py-3">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="size-1.5 animate-pulse rounded-full bg-zinc-400"
                      style={{ animationDelay: `${dot * 150}ms` }}
                    />
                  ))}
                  <span className="sr-only">Assistant is responding</span>
                </div>
              </div>
            )}
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
                disabled={isSending}
                maxLength={4000}
                rows={1}
                placeholder="Ask about experience or projects..."
                aria-label="Message"
                className="max-h-28 min-h-9 resize-none field-sizing-content border-0 bg-transparent px-2 py-2 text-sm shadow-none focus-visible:ring-0"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isSending}
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
              Enter to send · Shift + Enter for a new line
            </p>
          </form>
        </section>
  );
}

function Message({ role, content }: ChatMessage) {
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
      <p
        className={cn(
          "max-w-[82%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
          isUser
            ? "rounded-br-sm bg-violet-500 text-white"
            : "rounded-bl-sm bg-white/10 text-zinc-100",
        )}
      >
        {content}
      </p>
    </div>
  );
}
