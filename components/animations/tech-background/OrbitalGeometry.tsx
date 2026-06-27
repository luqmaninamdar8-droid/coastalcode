"use client";

import { useEffect, useRef, type RefObject } from "react";
import { motion } from "framer-motion";
import { TECH_COLORS } from "@/lib/tech-background";
import type { SmoothMouse } from "./useSmoothMouse";

type OrbitalGeometryProps = {
  animated: boolean;
  mouse: RefObject<SmoothMouse>;
};

export default function OrbitalGeometry({ animated, mouse }: OrbitalGeometryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  useEffect(() => {
    if (!animated) return;

    const tick = () => {
      const el = containerRef.current;
      const m = mouse.current;
      if (el && m) {
        const px = (m.sx - 0.5) * 48;
        const py = (m.sy - 0.5) * 48;
        el.style.transform = `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [animated, mouse]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      aria-hidden="true"
    >
      <motion.div
        className="relative h-[min(70vw,520px)] w-[min(70vw,520px)]"
        animate={animated ? { rotate: 360 } : undefined}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <Ring radius="100%" dots={24} color={TECH_COLORS.cyan} opacity={0.65} />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={animated ? { rotate: -360 } : undefined}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <Ring radius="72%" dots={16} color={TECH_COLORS.purple} opacity={0.7} />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={animated ? { rotate: 360 } : undefined}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <WireframeCube />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={animated ? { rotate: -360 } : undefined}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="h-[45%] w-[45%] opacity-50">
          <circle cx="100" cy="100" r="80" fill="none" stroke={TECH_COLORS.green} strokeWidth="0.5" strokeDasharray="4 8" />
          <ellipse cx="100" cy="100" rx="80" ry="28" fill="none" stroke={TECH_COLORS.cyan} strokeWidth="0.75" />
          <ellipse cx="100" cy="100" rx="28" ry="80" fill="none" stroke={TECH_COLORS.purple} strokeWidth="0.75" />
        </svg>
      </motion.div>
    </div>
  );
}

function Ring({
  radius,
  dots,
  color,
  opacity,
}: {
  radius: string;
  dots: number;
  color: string;
  opacity: number;
}) {
  return (
    <div className="relative mx-auto aspect-square" style={{ width: radius, height: radius }}>
      {Array.from({ length: dots }, (_, i) => {
        const angle = (i / dots) * Math.PI * 2;
        const x = 50 + Math.cos(angle) * 50;
        const y = 50 + Math.sin(angle) * 50;
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: 5,
              height: 5,
              transform: "translate(-50%, -50%)",
              background: color,
              opacity,
              boxShadow: `0 0 14px ${color}, 0 0 24px ${color}88`,
            }}
          />
        );
      })}
    </div>
  );
}

function WireframeCube() {
  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24 opacity-55 sm:h-32 sm:w-32">
      <g fill="none" stroke={TECH_COLORS.cyan} strokeWidth="1">
        <path d="M30 45 L60 25 L90 45 L60 65 Z" />
        <path d="M30 45 L30 85 L60 105 L60 65" stroke={TECH_COLORS.purple} />
        <path d="M90 45 L90 85 L60 105" stroke={TECH_COLORS.green} />
        <path d="M60 65 L90 45" stroke={TECH_COLORS.cyan} opacity={0.5} />
        <path d="M30 85 L90 85" stroke={TECH_COLORS.purple} opacity={0.5} />
        <path d="M60 25 L60 65" stroke={TECH_COLORS.green} opacity={0.5} />
      </g>
    </svg>
  );
}
