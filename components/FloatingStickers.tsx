"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type StickerVariant = "default" | "glow" | "badge" | "shine";

type Sticker = {
  id: string;
  src: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  rotate: number;
  delay: number;
  duration: number;
  variant?: StickerVariant;
  accent?: string;
};

const POP_RADIUS = 110;

const STICKERS: Sticker[] = [
  { id: "palm", src: "/stickers/palm.svg", top: "5%", left: "2%", size: 72, rotate: -14, delay: 0, duration: 19, variant: "glow", accent: "#22c55e" },
  { id: "code", src: "/stickers/code.svg", top: "14%", right: "2%", size: 76, rotate: 12, delay: -2, duration: 18, variant: "glow", accent: "#6366f1" },
  { id: "sun", src: "/stickers/sun.svg", top: "22%", left: "1%", size: 64, rotate: 8, delay: -4, duration: 16, variant: "shine", accent: "#fbbf24" },
  { id: "laptop", src: "/stickers/laptop.svg", top: "10%", right: "6%", size: 80, rotate: -10, delay: -1, duration: 21, variant: "shine", accent: "#38bdf8" },
  { id: "rocket", src: "/stickers/rocket.svg", top: "32%", left: "3%", size: 68, rotate: 6, delay: -5, duration: 17, variant: "glow", accent: "#f97316" },
  { id: "coconut", src: "/stickers/coconut.svg", top: "28%", right: "3%", size: 62, rotate: -8, delay: -3, duration: 20, variant: "default", accent: "#84cc16" },
  { id: "react", src: "/tech/react.svg", top: "42%", right: "2%", size: 56, rotate: -6, delay: -6, duration: 19, variant: "badge", accent: "#61DAFB" },
  { id: "fish", src: "/stickers/fish.svg", top: "48%", left: "2%", size: 60, rotate: 14, delay: -7, duration: 22, variant: "default", accent: "#0ea5e9" },
  { id: "sparkle", src: "/stickers/sparkle.svg", top: "18%", right: "9%", size: 54, rotate: -18, delay: -8, duration: 15, variant: "shine", accent: "#fde047" },
  { id: "anchor", src: "/stickers/anchor.svg", top: "58%", left: "4%", size: 58, rotate: -12, delay: -2, duration: 23, variant: "glow", accent: "#00d4ff" },
  { id: "typescript", src: "/tech/typescript.svg", top: "62%", right: "4%", size: 52, rotate: 10, delay: -4, duration: 20, variant: "glow", accent: "#3178C6" },
  { id: "heart", src: "/stickers/heart.svg", top: "72%", left: "2%", size: 56, rotate: -8, delay: -9, duration: 18, variant: "shine", accent: "#ec4899" },
  { id: "wave", src: "/stickers/wave.svg", top: "78%", right: "3%", size: 58, rotate: 16, delay: -10, duration: 18, variant: "default", accent: "#0ea5e9" },
  { id: "star", src: "/stickers/star.svg", top: "36%", right: "7%", size: 48, rotate: -16, delay: -5, duration: 16, variant: "shine", accent: "#fbbf24" },
  { id: "butterfly", src: "/stickers/butterfly.svg", top: "88%", left: "5%", size: 54, rotate: 12, delay: -6, duration: 19, variant: "glow", accent: "#a855f7" },
  { id: "shell", src: "/stickers/shell.svg", top: "92%", right: "6%", size: 52, rotate: -10, delay: -3, duration: 17, variant: "default", accent: "#f59e0b" },
];

function StickerItem({
  sticker,
  isPopped,
  setRef,
}: {
  sticker: Sticker;
  isPopped: boolean;
  setRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={setRef}
      className="floating-sticker"
      data-sticker={sticker.id}
      style={{
        top: sticker.top,
        left: sticker.left,
        right: sticker.right,
        bottom: sticker.bottom,
        ["--rotate" as string]: `${sticker.rotate}deg`,
        ["--delay" as string]: `${sticker.delay}s`,
        ["--duration" as string]: `${sticker.duration}s`,
        ["--accent" as string]: sticker.accent ?? "#00d4ff",
      }}
    >
      <div
        className={cn("floating-sticker-float", isPopped && "is-paused")}
        style={{
          ["--rotate" as string]: `${sticker.rotate}deg`,
          ["--delay" as string]: `${sticker.delay}s`,
          ["--duration" as string]: `${sticker.duration}s`,
        }}
      >
        <motion.div
          className={cn(
            "floating-sticker-inner",
            `floating-sticker-inner--${sticker.variant ?? "default"}`,
            isPopped && "is-popped",
          )}
          animate={
            isPopped
              ? {
                  scale: 1.38,
                  rotate: 14,
                  y: -10,
                }
              : {
                  scale: 1,
                  rotate: 0,
                  y: 0,
                }
          }
          transition={{
            type: "spring",
            stiffness: 520,
            damping: 16,
            mass: 0.55,
          }}
        >
          <span className="floating-sticker-pop-ring" aria-hidden="true" />
          <Image
            src={sticker.src}
            alt=""
            width={sticker.size}
            height={sticker.size}
            className="floating-sticker-img"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function FloatingStickers() {
  const refs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [popped, setPopped] = useState<Set<string>>(new Set());
  const reducedMotion = useRef(false);

  const updateProximity = useCallback((x: number, y: number) => {
    if (reducedMotion.current) return;

    const next = new Set<string>();
    refs.current.forEach((el, id) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      if (Math.hypot(x - cx, y - cy) < POP_RADIUS) {
        next.add(id);
      }
    });
    setPopped((prev) => {
      if (prev.size === next.size && [...prev].every((id) => next.has(id))) {
        return prev;
      }
      return next;
    });
  }, []);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMove = (event: MouseEvent) => {
      updateProximity(event.clientX, event.clientY);
    };

    const onTouch = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) updateProximity(touch.clientX, touch.clientY);
    };

    const onLeave = () => setPopped(new Set());

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [updateProximity]);

  return (
    <div className="floating-stickers" aria-hidden="true">
      {STICKERS.map((sticker) => (
        <StickerItem
          key={sticker.id}
          sticker={sticker}
          isPopped={popped.has(sticker.id)}
          setRef={(el) => {
            if (el) refs.current.set(sticker.id, el);
            else refs.current.delete(sticker.id);
          }}
        />
      ))}
    </div>
  );
}
