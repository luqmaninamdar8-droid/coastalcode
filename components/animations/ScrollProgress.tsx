"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed left-0 top-0 z-[200] h-1 origin-left bg-gradient-to-r from-sunset via-sunset-light to-sky-400"
      style={{ scaleX, width: "100%" }}
      aria-hidden="true"
    />
  );
}
