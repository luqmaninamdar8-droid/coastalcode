"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TECH_COLORS } from "@/lib/tech-background";

export default function CircuitGrid({ animated }: { animated: boolean }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!animated || !gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(gridRef.current, {
        backgroundPosition: "40px 40px",
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      if (linesRef.current) {
        const paths = linesRef.current.querySelectorAll("path");
        paths.forEach((path, i) => {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 4 + i * 0.8,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: i * 0.5,
          });
        });
      }
    });

    return () => ctx.revert();
  }, [animated]);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `radial-gradient(circle at center, ${TECH_COLORS.cyan}55 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0",
        }}
      />

      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(${TECH_COLORS.cyan}66 1px, transparent 1px),
            linear-gradient(90deg, ${TECH_COLORS.purple}55 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <svg
        ref={linesRef}
        className="absolute inset-0 h-full w-full opacity-45"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          d="M0 120 H200 V280 H420 V160 H640 V360 H900 V200 H1200"
          stroke={TECH_COLORS.cyan}
          strokeWidth="1"
        />
        <path
          d="M0 520 H160 V380 H380 V580 H560 V420 H780 V640 H1200"
          stroke={TECH_COLORS.purple}
          strokeWidth="1"
        />
        <path
          d="M120 0 V200 H320 V80 H520 V300 H720 V100 H920 V400 H1200"
          stroke={TECH_COLORS.green}
          strokeWidth="0.75"
        />
        <circle cx="200" cy="280" r="3" fill={TECH_COLORS.cyan} />
        <circle cx="420" cy="160" r="3" fill={TECH_COLORS.purple} />
        <circle cx="640" cy="360" r="3" fill={TECH_COLORS.green} />
        <circle cx="380" cy="580" r="3" fill={TECH_COLORS.cyan} />
      </svg>
    </div>
  );
}
