"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { tokenizeLine, type CodeFile } from "@/lib/coding-screen";

type CodeEditorPanelProps = {
  file: CodeFile;
  className?: string;
  animate?: "typing" | "scroll" | "static";
  typingSpeed?: number;
  startDelay?: number;
};

function HighlightedLine({ text }: { text: string }) {
  return (
    <>
      {tokenizeLine(text).map((part, i) => (
        <span key={i} style={{ color: part.color }}>
          {part.text}
        </span>
      ))}
    </>
  );
}

function WindowChrome({ filename }: { filename: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-white/15 bg-[#0d1117] px-3 py-2">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <span className="truncate font-mono text-[11px] text-sand/70">{filename}</span>
    </div>
  );
}

export default function CodeEditorPanel({
  file,
  className,
  animate = "typing",
  typingSpeed = 28,
  startDelay = 0,
}: CodeEditorPanelProps) {
  const fullText = file.lines.join("\n");
  const [typed, setTyped] = useState(animate === "static" ? fullText : "");
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (animate !== "typing") {
      setTyped(fullText);
      return;
    }

    let cancelled = false;
    let index = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (cancelled) return;
      index += 1;
      setTyped(fullText.slice(0, index));
      if (index < fullText.length) {
        timer = setTimeout(tick, typingSpeed);
      } else {
        timer = setTimeout(() => {
          if (cancelled) return;
          index = 0;
          setTyped("");
          timer = setTimeout(tick, typingSpeed);
        }, 4000);
      }
    };

    timer = setTimeout(tick, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [animate, fullText, typingSpeed, startDelay]);

  const displayLines = typed.split("\n");

  const codeBlock = (
    <div className="relative overflow-hidden font-mono text-[11px] leading-relaxed sm:text-xs">
      {animate === "scroll" ? (
        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="will-change-transform"
        >
          {[...file.lines, ...file.lines].map((line, i) => (
            <div key={i} className="flex">
              <span className="w-7 shrink-0 select-none text-right text-sand/45">
                {(i % file.lines.length) + 1}
              </span>
              <span className="pl-2">
                <HighlightedLine text={line} />
              </span>
            </div>
          ))}
        </motion.div>
      ) : (
        displayLines.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-7 shrink-0 select-none text-right text-sand/45">{i + 1}</span>
            <span className="pl-2">
              <HighlightedLine text={line} />
              {animate === "typing" && i === displayLines.length - 1 && (
                <span
                  className={cn(
                    "ml-0.5 inline-block h-3.5 w-2 bg-tech-cyan",
                    cursorOn ? "opacity-100" : "opacity-0",
                  )}
                />
              )}
            </span>
          </div>
        ))
      )}
    </div>
  );

  return (
    <motion.div
      className={cn(
        "overflow-hidden rounded-xl border border-tech-cyan/25 bg-[#0d1117]/95 shadow-[0_0_40px_rgba(0,212,255,0.12)] backdrop-blur-md",
        className,
      )}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <WindowChrome filename={file.filename} />
      <div className="relative max-h-56 overflow-hidden p-2 sm:max-h-64 sm:p-3">
        {codeBlock}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0d1117]/80 to-transparent" />
        {animate === "typing" && (
          <motion.div
            className="pointer-events-none absolute left-0 right-0 h-6 bg-tech-cyan/10"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>
    </motion.div>
  );
}
