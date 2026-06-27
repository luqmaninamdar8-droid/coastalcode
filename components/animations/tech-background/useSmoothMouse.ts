"use client";

import { useEffect, useRef } from "react";

export type SmoothMouse = {
  x: number;
  y: number;
  nx: number;
  ny: number;
  sx: number;
  sy: number;
};

export function useSmoothMouse(enabled: boolean, ease = 0.08) {
  const mouse = useRef<SmoothMouse>({
    x: 0,
    y: 0,
    nx: 0.5,
    ny: 0.5,
    sx: 0.5,
    sy: 0.5,
  });
  const raf = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.nx = e.clientX / window.innerWidth;
      mouse.current.ny = e.clientY / window.innerHeight;
    };

    const tick = () => {
      const m = mouse.current;
      m.sx += (m.nx - m.sx) * ease;
      m.sy += (m.ny - m.sy) * ease;
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [enabled, ease]);

  return mouse;
}
