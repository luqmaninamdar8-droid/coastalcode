"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  delay?: number;
}

export default function ScrambleText({
  text,
  className,
  as: Tag = "span",
  delay = 0,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      setDone(true);
      return;
    }

    let frame = 0;
    const maxFrames = 28;
    let timeout: ReturnType<typeof setTimeout>;

    const run = () => {
      frame += 1;
      const progress = frame / maxFrames;

      if (progress >= 1) {
        setDisplay(text);
        setDone(true);
        return;
      }

      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i / text.length < progress) return char;
            return CHARSET[Math.floor(Math.random() * CHARSET.length)];
          })
          .join(""),
      );

      timeout = setTimeout(run, 35);
    };

    timeout = setTimeout(run, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <Tag className={className}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: delay / 1000 }}
      >
        {display}
      </motion.span>
      {!done && (
        <motion.span
          className="ml-1 inline-block text-sunset"
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          |
        </motion.span>
      )}
    </Tag>
  );
}
