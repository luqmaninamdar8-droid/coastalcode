"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }

    let frame = 0;
    const interval = setInterval(() => {
      frame += 8;
      setProgress(Math.min(frame, 100));
      if (frame >= 100) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 300);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ocean"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-sunset">
        Coastal Code
      </p>
      <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-sunset to-sky-400"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-3 font-mono text-xs text-sand/50">{progress}%</p>
    </motion.div>
  );
}
