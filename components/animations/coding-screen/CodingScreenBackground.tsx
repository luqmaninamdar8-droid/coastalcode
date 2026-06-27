"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CodeEditorPanel from "./CodeEditorPanel";
import { CODE_FILES, prefersReducedMotion } from "@/lib/coding-screen";

function isDarkTheme() {
  if (typeof document === "undefined") return true;
  return document.documentElement.dataset.theme !== "light";
}

export default function CodingScreenBackground() {
  const [visible, setVisible] = useState(true);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    setAnimated(!prefersReducedMotion());
    setVisible(isDarkTheme());

    const observer = new MutationObserver(() => {
      setVisible(isDarkTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  const mode = animated ? "typing" : "static";
  const scrollMode = animated ? "scroll" : "static";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <CodeEditorPanel
        file={CODE_FILES[0]}
        animate={mode}
        typingSpeed={24}
        startDelay={500}
        className="absolute left-[2%] top-[6%] w-[min(92vw,380px)] opacity-75 sm:left-[3%] sm:w-[400px] sm:opacity-80 md:opacity-85"
      />

      <CodeEditorPanel
        file={CODE_FILES[1]}
        animate={scrollMode}
        className="absolute right-[2%] top-[14%] hidden w-[360px] opacity-70 sm:block sm:w-[380px] md:opacity-75"
      />

      <CodeEditorPanel
        file={CODE_FILES[2]}
        animate={mode}
        typingSpeed={32}
        startDelay={2000}
        className="absolute bottom-[4%] left-[6%] hidden w-[340px] opacity-65 md:block md:w-[360px] md:opacity-70"
      />

      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.15) 2px, rgba(0,212,255,0.15) 4px)",
        }}
        animate={animated ? { opacity: [0.02, 0.05, 0.02] } : undefined}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 90% at 50% 100%, rgba(10, 15, 26, 0.4) 0%, transparent 45%)",
        }}
      />
    </div>
  );
}
