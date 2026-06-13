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
  { id: "sun", src: "/stickers/sun.svg", top: "5%", left: "2%", size: 76, rotate: -14, delay: 0, duration: 17, variant: "shine", accent: "#fbbf24" },
  { id: "palm", src: "/stickers/palm.svg", top: "10%", right: "3%", size: 84, rotate: 10, delay: -2, duration: 21, variant: "glow", accent: "#22c55e" },
  { id: "sparkle", src: "/stickers/sparkle.svg", top: "24%", left: "1%", size: 62, rotate: 8, delay: -4, duration: 14, variant: "glow", accent: "#fde047" },
  { id: "wave", src: "/stickers/wave.svg", top: "34%", right: "1%", size: 72, rotate: -8, delay: -1, duration: 19, variant: "default", accent: "#0ea5e9" },
  { id: "fish", src: "/stickers/fish.svg", top: "46%", left: "4%", size: 68, rotate: -6, delay: -5, duration: 22, variant: "shine", accent: "#22d3ee" },
  { id: "code", src: "/stickers/code.svg", top: "52%", right: "4%", size: 78, rotate: 12, delay: -3, duration: 20, variant: "badge", accent: "#6366f1" },
  { id: "butterfly", src: "/stickers/butterfly.svg", top: "18%", right: "7%", size: 58, rotate: -18, delay: -6, duration: 16, variant: "glow", accent: "#c084fc" },
  { id: "anchor", src: "/stickers/anchor.svg", top: "62%", left: "2%", size: 70, rotate: 14, delay: -7, duration: 23, variant: "default", accent: "#0ea5e9" },
  { id: "shell", src: "/stickers/shell.svg", top: "70%", right: "5%", size: 64, rotate: -10, delay: -2, duration: 18, variant: "shine", accent: "#fb7185" },
  { id: "rocket", src: "/stickers/rocket.svg", top: "78%", left: "7%", size: 72, rotate: -6, delay: -8, duration: 24, variant: "glow", accent: "#f97316" },
  { id: "paintbrush", src: "/stickers/paintbrush.svg", top: "38%", left: "6%", size: 60, rotate: 22, delay: -9, duration: 15, variant: "badge", accent: "#f97316" },
  { id: "star", src: "/stickers/star.svg", top: "86%", right: "8%", size: 56, rotate: 20, delay: -4, duration: 17, variant: "glow", accent: "#fbbf24" },
  { id: "heart", src: "/stickers/heart.svg", top: "28%", right: "6%", size: 54, rotate: -16, delay: -5, duration: 16, variant: "shine", accent: "#f472b6" },
  { id: "laptop", src: "/stickers/laptop.svg", top: "58%", right: "2%", size: 68, rotate: 8, delay: -1, duration: 22, variant: "default", accent: "#38bdf8" },
  { id: "coconut", src: "/stickers/coconut.svg", top: "88%", left: "3%", size: 62, rotate: -12, delay: -6, duration: 19, variant: "default", accent: "#a3e635" },
  { id: "smile", src: "/stickers/smile.svg", top: "92%", right: "3%", size: 52, rotate: 16, delay: -10, duration: 18, variant: "badge", accent: "#facc15" },
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
