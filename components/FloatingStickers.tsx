"use client";

import Image from "next/image";

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

const STICKERS: Sticker[] = [
  { id: "code", src: "/stickers/code.svg", top: "6%", left: "2%", size: 78, rotate: -12, delay: 0, duration: 18, variant: "glow", accent: "#6366f1" },
  { id: "laptop", src: "/stickers/laptop.svg", top: "12%", right: "3%", size: 82, rotate: 10, delay: -2, duration: 21, variant: "shine", accent: "#38bdf8" },
  { id: "rocket", src: "/stickers/rocket.svg", top: "26%", left: "1%", size: 68, rotate: 8, delay: -4, duration: 16, variant: "glow", accent: "#f97316" },
  { id: "react", src: "/tech/react.svg", top: "34%", right: "2%", size: 58, rotate: -8, delay: -1, duration: 19, variant: "badge", accent: "#61DAFB" },
  { id: "nextjs", src: "/tech/nextjs.svg", top: "46%", left: "4%", size: 56, rotate: -6, delay: -5, duration: 22, variant: "default", accent: "#ffffff" },
  { id: "typescript", src: "/tech/typescript.svg", top: "52%", right: "4%", size: 54, rotate: 12, delay: -3, duration: 20, variant: "glow", accent: "#3178C6" },
  { id: "sparkle", src: "/stickers/sparkle.svg", top: "18%", right: "7%", size: 58, rotate: -18, delay: -6, duration: 16, variant: "shine", accent: "#fde047" },
  { id: "terminal", src: "/tech/terminal.svg", top: "62%", left: "2%", size: 64, rotate: 14, delay: -7, duration: 23, variant: "badge", accent: "#38bdf8" },
  { id: "git", src: "/tech/git.svg", top: "70%", right: "5%", size: 60, rotate: -10, delay: -2, duration: 18, variant: "glow", accent: "#F05032" },
  { id: "html5", src: "/tech/html5.svg", top: "78%", left: "7%", size: 52, rotate: -6, delay: -8, duration: 24, variant: "default", accent: "#E44D26" },
  { id: "css3", src: "/tech/css3.svg", top: "38%", left: "6%", size: 54, rotate: 22, delay: -9, duration: 15, variant: "shine", accent: "#1572B6" },
  { id: "javascript", src: "/tech/javascript.svg", top: "86%", right: "8%", size: 52, rotate: 20, delay: -4, duration: 17, variant: "glow", accent: "#F7DF1E" },
  { id: "api", src: "/tech/api.svg", top: "58%", right: "2%", size: 58, rotate: 8, delay: -1, duration: 22, variant: "default", accent: "#818cf8" },
  { id: "figma", src: "/tech/figma.svg", top: "88%", left: "3%", size: 56, rotate: -12, delay: -6, duration: 19, variant: "badge", accent: "#A259FF" },
  { id: "wave", src: "/stickers/wave.svg", top: "92%", right: "3%", size: 58, rotate: 16, delay: -10, duration: 18, variant: "default", accent: "#0ea5e9" },
  { id: "star", src: "/stickers/star.svg", top: "28%", right: "6%", size: 48, rotate: -16, delay: -5, duration: 16, variant: "shine", accent: "#fbbf24" },
];

export default function FloatingStickers() {
  return (
    <div className="floating-stickers" aria-hidden="true">
      {STICKERS.map((sticker) => (
        <div
          key={sticker.id}
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
            ["--accent" as string]: sticker.accent ?? "#38bdf8",
          }}
        >
          <div
            className={`floating-sticker-inner floating-sticker-inner--${sticker.variant ?? "default"}`}
          >
            <Image
              src={sticker.src}
              alt=""
              width={sticker.size}
              height={sticker.size}
              className="floating-sticker-img"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
