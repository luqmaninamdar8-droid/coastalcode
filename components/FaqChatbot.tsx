"use client";

import Link from "next/link";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import {
  CHAT_GREETING,
  WHATSAPP_URL,
  findChatResponse,
  getTypingDelay,
  quickReplies,
  type ChatLink,
  type ChatResponse,
} from "@/lib/chatbot";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
  suggestions?: string[];
  links?: ChatLink[];
}

const INITIAL_MESSAGE: Message = {
  id: 0,
  from: "bot",
  text: CHAT_GREETING,
  suggestions: quickReplies.slice(0, 4),
};

export default function FaqChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [hasChatted, setHasChatted] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(1);
  const timeoutRef = useRef<number | null>(null);

  const scrollToBottom = useCallback(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, open, typing, scrollToBottom]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function addMessage(from: "bot" | "user", payload: string | ChatResponse) {
    const id = idRef.current++;
    const message: Message =
      typeof payload === "string"
        ? { id, from, text: payload }
        : {
            id,
            from,
            text: payload.answer,
            suggestions: payload.suggestions,
            links: payload.links,
          };

    setMessages((prev) => [...prev, message]);
  }

  function reply(text: string) {
    setHasChatted(true);
    addMessage("user", text);
    setTyping(true);

    const response = findChatResponse(text);
    const delay = getTypingDelay(response.answer);

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      addMessage("bot", response);
      setTyping(false);
    }, delay);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || typing) return;
    setInput("");
    reply(text);
  }

  function resetChat() {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setTyping(false);
    setHasChatted(false);
    setInput("");
    setMessages([INITIAL_MESSAGE]);
  }

  function renderLinks(links?: ChatLink[]) {
    if (!links?.length) return null;

    return (
      <div className="faq-chatbot-msg-links">
        {links.map((link) =>
          link.href.startsWith("/") ? (
            <Link key={link.href + link.label} href={link.href}>
              {link.label}
            </Link>
          ) : (
            <a
              key={link.href + link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          )
        )}
      </div>
    );
  }

  return (
    <div className={`faq-chatbot${open ? " faq-chatbot--open" : ""}`}>
      {open && (
        <div className="faq-chatbot-panel" role="dialog" aria-label="FAQ chat assistant">
          <header className="faq-chatbot-header">
            <div className="faq-chatbot-avatar" aria-hidden="true">
              CC
            </div>
            <div className="faq-chatbot-header-text">
              <strong>Coastal Code Assistant</strong>
              <span className="faq-chatbot-status">
                <span className="faq-chatbot-status-dot" aria-hidden="true" />
                Online · replies instantly
              </span>
            </div>
            <div className="faq-chatbot-header-actions">
              <button
                type="button"
                className="faq-chatbot-reset"
                onClick={resetChat}
                aria-label="Start new chat"
                title="New chat"
              >
                ↺
              </button>
              <button
                type="button"
                className="faq-chatbot-close"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
          </header>

          <div className="faq-chatbot-body" ref={bodyRef}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`faq-chatbot-msg-wrap faq-chatbot-msg-wrap--${msg.from}`}
              >
                {msg.from === "bot" && (
                  <span className="faq-chatbot-msg-avatar" aria-hidden="true">
                    CC
                  </span>
                )}
                <div className="faq-chatbot-msg-group">
                  <div className={`faq-chatbot-msg faq-chatbot-msg--${msg.from}`}>
                    {msg.text}
                  </div>
                  {msg.from === "bot" && renderLinks(msg.links)}
                  {msg.from === "bot" && msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="faq-chatbot-msg-suggestions">
                      {msg.suggestions.map((suggestion) => (
                        <button
                          key={`${msg.id}-${suggestion}`}
                          type="button"
                          onClick={() => reply(suggestion)}
                          disabled={typing}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="faq-chatbot-msg-wrap faq-chatbot-msg-wrap--bot">
                <span className="faq-chatbot-msg-avatar" aria-hidden="true">
                  CC
                </span>
                <div className="faq-chatbot-msg faq-chatbot-msg--bot faq-chatbot-typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          </div>

          {!hasChatted && (
            <div className="faq-chatbot-quick">
              <span className="faq-chatbot-quick-label">Popular questions</span>
              <div className="faq-chatbot-quick-row">
                {quickReplies.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => reply(question)}
                    disabled={typing}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form className="faq-chatbot-form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about pricing, timeline, services..."
              aria-label="Type your question"
              disabled={typing}
            />
            <button type="submit" aria-label="Send message" disabled={typing || !input.trim()}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                />
              </svg>
            </button>
          </form>

          <footer className="faq-chatbot-footer">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
            <Link href="/contact">Contact page</Link>
          </footer>
        </div>
      )}

      <button
        type="button"
        className="faq-chatbot-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close FAQ chat" : "Open FAQ chat"}
      >
        {open ? (
          "×"
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true" className="faq-chatbot-toggle-icon">
            <path
              fill="currentColor"
              d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
