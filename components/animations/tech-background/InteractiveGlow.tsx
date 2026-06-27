"use client";

import { useEffect, useRef, type RefObject } from "react";
import { TECH_COLORS } from "@/lib/tech-background";
import type { SmoothMouse } from "./useSmoothMouse";

type InteractiveGlowProps = {
  mouse: RefObject<SmoothMouse>;
  animated: boolean;
};

export default function InteractiveGlow({ mouse, animated }: InteractiveGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const warpRef = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  useEffect(() => {
    if (!animated) return;

    const tick = () => {
      const glow = glowRef.current;
      const warp = warpRef.current;
      const m = mouse.current;

      if (glow && m) {
        glow.style.transform = `translate(${m.sx * window.innerWidth - 200}px, ${m.sy * window.innerHeight - 200}px)`;
      }

      if (warp && m) {
        const px = (m.sx - 0.5) * 40;
        const py = (m.sy - 0.5) * 40;
        warp.style.transform = `translate(${px}px, ${py}px) scale(1.05)`;
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [animated, mouse]);

  if (!animated) return null;

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-0 h-[480px] w-[480px] rounded-full opacity-50 mix-blend-screen blur-[70px]"
        style={{
          background: `radial-gradient(circle, ${TECH_COLORS.cyan}88 0%, ${TECH_COLORS.purple}55 40%, transparent 70%)`,
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      <div
        ref={warpRef}
        className="pointer-events-none absolute inset-0 origin-center opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${TECH_COLORS.cyan}55 0%, transparent 55%)`,
          filter: "blur(40px)",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
    </>
  );
}
