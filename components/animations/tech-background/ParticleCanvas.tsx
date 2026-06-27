"use client";

import { useEffect, useRef, type RefObject } from "react";
import { TECH_COLORS, getParticleCount } from "@/lib/tech-background";
import type { SmoothMouse } from "./useSmoothMouse";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
};

const PALETTE = [TECH_COLORS.cyan, TECH_COLORS.purple, TECH_COLORS.white, TECH_COLORS.green];

function createParticles(width: number, height: number, count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    size: 2 + Math.random() * 6,
    opacity: 0.4 + Math.random() * 0.5,
    color: PALETTE[Math.floor(Math.random() * PALETTE.length)] ?? TECH_COLORS.cyan,
  }));
}

type ParticleCanvasProps = {
  mouse: RefObject<SmoothMouse>;
  active: boolean;
};

export default function ParticleCanvas({ mouse, active }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = createParticles(width, height, getParticleCount(width));
    };

    const draw = () => {
      if (document.hidden) {
        raf = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      const mx = mouse.current?.x ?? width / 2;
      const my = mouse.current?.y ?? height / 2;

      for (const p of particles) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < 140 && dist > 0) {
          const force = (140 - dist) / 140;
          p.vx += (dx / dist) * force * 0.08;
          p.vy += (dy / dist) * force * 0.08;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = p.size * 4;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [active, mouse]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

export function StaticParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 24 }, (_, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            width: 2 + (i % 4) * 2,
            height: 2 + (i % 4) * 2,
            left: `${(i * 13) % 100}%`,
            top: `${(i * 19) % 100}%`,
            background: i % 3 === 0 ? TECH_COLORS.cyan : i % 3 === 1 ? TECH_COLORS.purple : TECH_COLORS.green,
            opacity: 0.25 + (i % 5) * 0.1,
            boxShadow: `0 0 ${6 + (i % 3) * 4}px ${i % 2 === 0 ? TECH_COLORS.cyan : TECH_COLORS.purple}`,
          }}
        />
      ))}
    </div>
  );
}
