"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { NETWORK_COLORS, NETWORK_DEFAULTS, prefersReducedMotion } from "@/lib/network-background";

interface Node {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  opacity: number;
  pulsePhase: number;
  pulseSpeed: number;
  color: string;
}

export interface NetworkBackgroundProps {
  className?: string;
  nodeCount?: number;
  connectionDistance?: number;
  mouseRadius?: number;
  lineOpacity?: number;
}

function StaticNetworkFallback() {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-60" aria-hidden="true">
      <line x1="15%" y1="20%" x2="35%" y2="45%" stroke={NETWORK_COLORS.cyan} strokeOpacity={0.25} />
      <line x1="55%" y1="25%" x2="75%" y2="50%" stroke={NETWORK_COLORS.cyan} strokeOpacity={0.25} />
      <line x1="25%" y1="70%" x2="60%" y2="75%" stroke={NETWORK_COLORS.purple} strokeOpacity={0.25} />
      {[
        ["15%", "20%"],
        ["55%", "25%"],
        ["75%", "50%"],
        ["25%", "70%"],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="4"
          fill={i % 2 === 0 ? NETWORK_COLORS.cyan : NETWORK_COLORS.purple}
          opacity={0.7}
        />
      ))}
    </svg>
  );
}

export default function NetworkBackground({
  className = "",
  nodeCount = NETWORK_DEFAULTS.nodeCount,
  connectionDistance = NETWORK_DEFAULTS.connectionDistance,
  mouseRadius = NETWORK_DEFAULTS.mouseRadius,
  lineOpacity = NETWORK_DEFAULTS.lineOpacity,
}: NetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(!prefersReducedMotion());
  }, []);

  const initNodes = useCallback(
    (width: number, height: number) => {
      const nodes: Node[] = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 2.5 + Math.random() * 5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          opacity: 0.5 + Math.random() * 0.5,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.005 + Math.random() * 0.015,
          color: Math.random() > 0.5 ? NETWORK_COLORS.cyan : NETWORK_COLORS.purple,
        });
      }
      return nodes;
    },
    [nodeCount],
  );

  useEffect(() => {
    if (!animated) return;

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      setDimensions({ width, height });
      nodesRef.current = initNodes(width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [animated, initNodes]);

  useEffect(() => {
    if (!animated) return;

    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [animated]);

  useEffect(() => {
    if (!animated || dimensions.width === 0 || dimensions.height === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = dimensions;

    const animate = () => {
      if (document.hidden) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.pulsePhase += node.pulseSpeed;
        const pulseFactor = 0.6 + 0.4 * Math.sin(node.pulsePhase);

        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouseRadius && dist > 0) {
          const force = ((mouseRadius - dist) / mouseRadius) * 0.02;
          node.x += (dx / dist) * force;
          node.y += (dy / dist) * force;
        }

        const [r, g, b] =
          node.color === NETWORK_COLORS.purple ? [139, 92, 246] : [0, 212, 255];

        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 4,
        );
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.85 * node.opacity * pulseFactor})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.95 * node.opacity * pulseFactor})`;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 22;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * lineOpacity;
            ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
            ctx.lineWidth = 1;

            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mdDist = Math.hypot(mouse.x - midX, mouse.y - midY);

            if (mdDist < mouseRadius) {
              const glowFactor = 1 + ((mouseRadius - mdDist) / mouseRadius) * 0.5;
              ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * glowFactor})`;
              ctx.lineWidth = 0.8 + (1 - mdDist / mouseRadius) * 1.5;
            }

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouseRadius,
        );
        gradient.addColorStop(0, "rgba(139, 92, 246, 0.14)");
        gradient.addColorStop(1, "rgba(139, 92, 246, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouseRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [animated, dimensions, connectionDistance, mouseRadius, lineOpacity]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      style={{
        background: `linear-gradient(145deg, ${NETWORK_COLORS.bgStart} 0%, ${NETWORK_COLORS.bgEnd} 100%)`,
      }}
    >
      {animated ? (
        <canvas
          ref={canvasRef}
          className={cn("absolute inset-0 h-full w-full", className)}
        />
      ) : (
        <StaticNetworkFallback />
      )}

      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 100% 85% at 50% 100%, ${NETWORK_COLORS.bgStart}55 0%, transparent 50%)`,
        }}
      />
    </div>
  );
}
