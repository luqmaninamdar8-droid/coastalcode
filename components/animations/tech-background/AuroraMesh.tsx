"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TECH_COLORS } from "@/lib/tech-background";

export default function AuroraMesh({ animated }: { animated: boolean }) {
  const layerA = useRef<HTMLDivElement>(null);
  const layerB = useRef<HTMLDivElement>(null);
  const wave = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated) return;

    const ctx = gsap.context(() => {
      gsap.to(layerA.current, {
        x: "8%",
        y: "-6%",
        scale: 1.15,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(layerB.current, {
        x: "-10%",
        y: "8%",
        scale: 1.1,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(wave.current, {
        x: "-50%",
        duration: 12,
        repeat: -1,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, [animated]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        ref={layerA}
        className="absolute -left-1/4 -top-1/4 h-[70%] w-[70%] rounded-full blur-[100px]"
        style={{
          background: `radial-gradient(circle, ${TECH_COLORS.cyan}66 0%, transparent 70%)`,
        }}
      />
      <div
        ref={layerB}
        className="absolute -bottom-1/4 -right-1/4 h-[65%] w-[65%] rounded-full blur-[120px]"
        style={{
          background: `radial-gradient(circle, ${TECH_COLORS.purple}55 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute -right-1/4 top-1/3 h-[50%] w-[50%] rounded-full blur-[100px]"
        style={{
          background: `radial-gradient(circle, ${TECH_COLORS.green}33 0%, transparent 70%)`,
        }}
      />

      {animated ? (
        <div
          ref={wave}
          className="absolute bottom-0 left-0 h-56 w-[200%] opacity-40"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              ${TECH_COLORS.cyan}00 0px,
              ${TECH_COLORS.cyan}44 120px,
              ${TECH_COLORS.purple}44 240px,
              ${TECH_COLORS.green}33 360px,
              ${TECH_COLORS.cyan}00 480px
            )`,
            filter: "blur(40px)",
          }}
        />
      ) : null}
    </div>
  );
}
