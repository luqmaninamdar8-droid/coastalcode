"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  CHAT_GREETING,
  WHATSAPP_URL,
  findChatAnswer,
  quickReplies,
} from "@/lib/chatbot";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
}

export default function FaqChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: "bot", text: CHAT_GREETING },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(1);

  useEffect(() => {
    if (open && bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open, typing]);

  function addMessage(from: "bot" | "user", text: string) {
    const id = idRef.current++;
    setMessages((prev) => [...prev, { id, from, text }]);
  }

  function reply(text: string) {
    addMessage("user", text);
    setTyping(true);
    window.setTimeout(() => {
      addMessage("bot", findChatAnswer(text));
      setTyping(false);
    }, 500);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    reply(text);
  }

  return (
    <div className={`faq-chatbot${open ? " faq-chatbot--open" : ""}`}>
      {open && (
        <div className="faq-chatbot-panel" role="dialog" aria-label="FAQ chat assistant">
          <header className="faq-chatbot-header">
            <div className="faq-chatbot-avatar" aria-hidden="true">
              CC
            </div>
            <div>
              <strong>Coastal Code Assistant</strong>
              <span>Usually replies instantly</span>
            </div>
            <button
              type="button"
              className="faq-chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </header>

          <div className="faq-chatbot-body" ref={bodyRef}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`faq-chatbot-msg faq-chatbot-msg--${msg.from}`}
              >
                {msg.text}
              </div>
            ))}
            {typing && (
              <div className="faq-chatbot-msg faq-chatbot-msg--bot faq-chatbot-typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <div className="faq-chatbot-quick">
            {quickReplies.map((q) => (
              <button key={q} type="button" onClick={() => reply(q)}>
                {q}
              </button>
            ))}
          </div>

          <form className="faq-chatbot-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about pricing, timeline..."
              aria-label="Type your question"
            />
            <button type="submit" aria-label="Send message">
              →
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
        onClick={() => setOpen((v) => !v)}
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
