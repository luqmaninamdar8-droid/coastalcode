"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CODE_SNIPPETS, SYNTAX_COLORS } from "@/lib/tech-background";

function highlightLine(line: string) {
  const parts: Array<{ text: string; color: string }> = [];
  const tokens = line.split(/(\s+|[:=<>{}()[\];,.'"`]|"[^"]*"|'[^']*')/g).filter(Boolean);

  for (const token of tokens) {
    if (/^(const|let|var|function|async|await|export|default|return|type|interface|new)$/.test(token)) {
      parts.push({ text: token, color: SYNTAX_COLORS.keyword });
    } else if (/^["'`].*["'`]$/.test(token)) {
      parts.push({ text: token, color: SYNTAX_COLORS.string });
    } else if (/^[A-Z][a-zA-Z]*$/.test(token)) {
      parts.push({ text: token, color: SYNTAX_COLORS.type });
    } else if (/^[a-z][a-zA-Z0-9]*\($/.test(token) || /^[a-z][a-zA-Z0-9]*$/.test(token)) {
      parts.push({ text: token, color: SYNTAX_COLORS.function });
    } else {
      parts.push({ text: token, color: SYNTAX_COLORS.plain });
    }
  }

  return parts;
}

function CodeLine({ line, top }: { line: string; top: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { x: "110vw", opacity: 0 },
        {
          x: "-120%",
          opacity: 0.55,
          duration: 18 + Math.random() * 10,
          repeat: -1,
          ease: "none",
          delay: Math.random() * 12,
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-0 whitespace-nowrap font-mono text-xs sm:text-sm"
      style={{ top, opacity: 0 }}
    >
      {highlightLine(line).map((part, i) => (
        <span key={i} style={{ color: part.color }}>
          {part.text}
        </span>
      ))}
    </div>
  );
}

export default function CodeStream({ animated }: { animated: boolean }) {
  if (!animated) return null;

  const lines = CODE_SNIPPETS.map((snippet, i) => ({
    snippet,
    top: `${8 + i * 11}%`,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-90" aria-hidden="true">
      {lines.map(({ snippet, top }, i) => (
        <CodeLine key={i} line={snippet} top={top} />
      ))}
    </div>
  );
}
