"use client";

import { useEffect, useRef } from "react";
import GlobeOrbitalRings from "@/components/animations/GlobeOrbitalRings";

type Point3D = { x: number; y: number; z: number };

type TechRay = {
  anchor: Point3D;
  length: number;
  phase: number;
  speed: number;
  width: number;
};

type SweepRay = {
  angle: number;
  speed: number;
  tilt: number;
};

function fibonacciOnSphere(count: number): Point3D[] {
  const pts: Point3D[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = phi * i;
    pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
  }
  return pts;
}

function buildRays(): TechRay[] {
  return fibonacciOnSphere(32).map((anchor) => ({
    anchor,
    length: 0.35 + Math.random() * 0.45,
    phase: Math.random() * Math.PI * 2,
    speed: 1.2 + Math.random() * 1.8,
    width: 0.8 + Math.random() * 1.2,
  }));
}

const SWEEP_RAYS: SweepRay[] = [
  { angle: 0, speed: 0.35, tilt: 0.15 },
  { angle: Math.PI * 0.66, speed: 0.28, tilt: -0.22 },
  { angle: Math.PI * 1.33, speed: 0.32, tilt: 0.08 },
];

function rotateY(p: Point3D, a: number): Point3D {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
}

function rotateX(p: Point3D, a: number): Point3D {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
}

type TechGlobeProps = {
  className?: string;
  size?: number;
};

export default function TechGlobe({ className = "", size = 440 }: TechGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rotRef = useRef({ y: 0.8, x: 0.22 });
  const raysRef = useRef<TechRay[]>(buildRays());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rays = raysRef.current;
    const latSegs = 18;
    const lonSegs = 36;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - r.left) / r.width - 0.5) * 2,
        y: ((e.clientY - r.top) / r.height - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    let t = 0;

    const draw = () => {
      const w = size;
      const h = size;
      const cx = w / 2;
      const cy = h / 2;
      const R = w * 0.36;

      if (!reduced) {
        rotRef.current.y += 0.003;
        rotRef.current.x = 0.22 + mouseRef.current.y * 0.08;
        t += 0.016;
      }

      const rotY = rotRef.current.y;
      const rotX = rotRef.current.x;
      const xf = (p: Point3D) => rotateX(rotateY(p, rotY), rotX);

      const proj = (p: Point3D) => {
        const pt = xf(p);
        const f = R / (2.1 - pt.z * 0.35);
        return { x: cx + pt.x * f, y: cy + pt.y * f, z: pt.z };
      };

      ctx.clearRect(0, 0, w, h);

      const drawRayLine = (
        start: Point3D,
        end: Point3D,
        alpha: number,
        lineW: number,
        color: string = "0, 212, 255",
      ) => {
        const s = proj(start);
        const e = proj(end);
        if (s.z < -0.3 && e.z < -0.3) return;

        const grad = ctx.createLinearGradient(s.x, s.y, e.x, e.y);
        grad.addColorStop(0, `rgba(${color}, ${alpha * 0.9})`);
        grad.addColorStop(0.45, `rgba(94, 231, 255, ${alpha * 0.45})`);
        grad.addColorStop(1, `rgba(${color}, 0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = lineW;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(e.x, e.y);
        ctx.stroke();
      };

      // Outer glow
      const outer = ctx.createRadialGradient(cx, cy, R * 0.5, cx, cy, R * 1.6);
      outer.addColorStop(0, "rgba(0, 212, 255, 0.16)");
      outer.addColorStop(0.55, "rgba(0, 150, 255, 0.08)");
      outer.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = outer;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.6, 0, Math.PI * 2);
      ctx.fill();

      // Sweeping meridian rays (rotate around globe)
      for (const sweep of SWEEP_RAYS) {
        const sweepAngle = sweep.angle + t * sweep.speed;
        const steps = 64;
        ctx.beginPath();
        let open = false;
        for (let i = 0; i <= steps; i++) {
          const lat = (i / steps) * Math.PI - Math.PI / 2;
          const p = xf({
            x: Math.cos(lat) * Math.cos(sweepAngle),
            y: Math.sin(lat),
            z: Math.cos(lat) * Math.sin(sweepAngle),
          });
          if (p.z < -0.05) {
            open = false;
            continue;
          }
          const f = R / (2.1 - p.z * 0.35);
          const x = cx + p.x * f * 1.55;
          const y = cy + p.y * f * 1.55;
          const alpha = 0.04 + p.z * 0.14;
          ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
          ctx.lineWidth = 1.2;
          if (!open) {
            ctx.moveTo(x, y);
            open = true;
          } else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Outward tech rays (behind globe first)
      const sortedRays = [...rays].sort((a, b) => {
        const za = xf(a.anchor).z;
        const zb = xf(b.anchor).z;
        return za - zb;
      });

      for (const ray of sortedRays) {
        const pt = xf(ray.anchor);
        if (pt.z < -0.05) continue;

        const depth = (pt.z + 1) / 2;
        const pulse = 0.5 + 0.5 * Math.sin(t * ray.speed + ray.phase);
        const ext = 1 + ray.length * (0.7 + pulse * 0.3);
        const end = {
          x: ray.anchor.x * ext,
          y: ray.anchor.y * ext,
          z: ray.anchor.z * ext,
        };

        drawRayLine(ray.anchor, end, (0.15 + depth * 0.55) * (0.6 + pulse * 0.4), ray.width);

        // Pulse head traveling along ray
        const headT = (t * ray.speed * 0.4 + ray.phase) % 1;
        const head = {
          x: ray.anchor.x * (1 + ray.length * headT * 0.9),
          y: ray.anchor.y * (1 + ray.length * headT * 0.9),
          z: ray.anchor.z * (1 + ray.length * headT * 0.9),
        };
        const hp = proj(head);
        if (hp.z > -0.1) {
          const headGrad = ctx.createRadialGradient(hp.x, hp.y, 0, hp.x, hp.y, 8);
          headGrad.addColorStop(0, `rgba(180, 250, 255, ${0.5 + depth * 0.4})`);
          headGrad.addColorStop(1, "rgba(0, 212, 255, 0)");
          ctx.fillStyle = headGrad;
          ctx.beginPath();
          ctx.arc(hp.x, hp.y, 6 + depth * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Sphere body
      const core = ctx.createRadialGradient(cx - R * 0.25, cy - R * 0.3, R * 0.05, cx, cy, R);
      core.addColorStop(0, "rgba(20, 60, 100, 0.95)");
      core.addColorStop(0.6, "rgba(8, 28, 55, 0.92)");
      core.addColorStop(1, "rgba(4, 14, 30, 0.88)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // Grid
      ctx.lineWidth = 0.8;
      const drawGridLine = (pts: Point3D[]) => {
        ctx.beginPath();
        let open = false;
        for (const pt of pts) {
          if (pt.z < 0) {
            open = false;
            continue;
          }
          const f = R / (2.1 - pt.z * 0.35);
          const x = cx + pt.x * f;
          const y = cy + pt.y * f;
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.12 + pt.z * 0.35})`;
          if (!open) {
            ctx.moveTo(x, y);
            open = true;
          } else ctx.lineTo(x, y);
        }
        ctx.stroke();
      };

      for (let lat = 1; lat < latSegs; lat++) {
        const phi = (lat / latSegs) * Math.PI - Math.PI / 2;
        const pts: Point3D[] = [];
        for (let lon = 0; lon <= lonSegs; lon++) {
          const theta = (lon / lonSegs) * Math.PI * 2;
          pts.push(
            xf({
              x: Math.cos(phi) * Math.cos(theta),
              y: Math.sin(phi),
              z: Math.cos(phi) * Math.sin(theta),
            }),
          );
        }
        drawGridLine(pts);
      }

      for (let lon = 0; lon < lonSegs; lon++) {
        const theta = (lon / lonSegs) * Math.PI * 2;
        const pts: Point3D[] = [];
        for (let lat = 0; lat <= latSegs; lat++) {
          const phi = (lat / latSegs) * Math.PI - Math.PI / 2;
          pts.push(
            xf({
              x: Math.cos(phi) * Math.cos(theta),
              y: Math.sin(phi),
              z: Math.cos(phi) * Math.sin(theta),
            }),
          );
        }
        drawGridLine(pts);
      }

      // Front-facing rays on top of sphere
      for (const ray of sortedRays) {
        const pt = xf(ray.anchor);
        if (pt.z < 0.15) continue;

        const depth = (pt.z + 1) / 2;
        const pulse = 0.5 + 0.5 * Math.sin(t * ray.speed + ray.phase);
        const ext = 1 + ray.length * (0.8 + pulse * 0.2);
        const end = {
          x: ray.anchor.x * ext,
          y: ray.anchor.y * ext,
          z: ray.anchor.z * ext,
        };

        drawRayLine(ray.anchor, end, 0.25 + depth * 0.65, ray.width * 1.2, "120, 240, 255");
      }

      // Rim
      ctx.strokeStyle = "rgba(94, 231, 255, 0.75)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();

      // Specular
      const spec = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, 0, cx - R * 0.35, cy - R * 0.4, R * 0.55);
      spec.addColorStop(0, "rgba(255, 255, 255, 0.2)");
      spec.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = spec;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // Ground glow
      const ground = ctx.createRadialGradient(cx, cy + R * 0.95, 0, cx, cy + R * 0.95, R);
      ground.addColorStop(0, "rgba(0, 212, 255, 0.35)");
      ground.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = ground;
      ctx.fillRect(cx - R * 1.1, cy + R * 0.55, R * 2.2, R * 0.55);

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [size]);

  return (
    <div
      className={`globe-scene relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size, minWidth: size, minHeight: size, perspective: "900px" }}
      aria-hidden="true"
    >
      <GlobeOrbitalRings />
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(0,212,255,0.28) 0%, rgba(14,165,233,0.1) 45%, transparent 72%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[4%] left-1/2 h-20 w-[70%] -translate-x-1/2 rounded-full blur-2xl"
        style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.4) 0%, transparent 70%)" }}
      />
      <canvas ref={canvasRef} className="relative z-10 block" />
    </div>
  );
}
