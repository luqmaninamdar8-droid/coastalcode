"use client";

import Image from "next/image";

/**
 * Floating sticker decorations (colorful sticker-pack style).
 * Drop your own Freepik PNG/SVG files into /public/stickers/ and update src paths.
 */
const STICKERS = [
  { src: "/stickers/sun.svg", top: "6%", left: "3%", size: 72, rotate: -12, delay: 0, duration: 16 },
  { src: "/stickers/palm.svg", top: "12%", right: "4%", size: 80, rotate: 8, delay: -2, duration: 20 },
  { src: "/stickers/wave.svg", top: "28%", left: "2%", size: 68, rotate: 6, delay: -4, duration: 18 },
  { src: "/stickers/code.svg", top: "42%", right: "2%", size: 76, rotate: -6, delay: -1, duration: 22 },
  { src: "/stickers/coconut.svg", top: "58%", left: "5%", size: 64, rotate: 14, delay: -6, duration: 19 },
  { src: "/stickers/star.svg", top: "72%", right: "6%", size: 58, rotate: 20, delay: -3, duration: 17 },
  { src: "/stickers/rocket.svg", top: "85%", left: "8%", size: 70, rotate: -8, delay: -5, duration: 21 },
  { src: "/stickers/heart.svg", top: "22%", right: "5%", size: 52, rotate: -15, delay: -7, duration: 15 },
  { src: "/stickers/laptop.svg", top: "48%", right: "3%", size: 66, rotate: 10, delay: -2, duration: 23 },
  { src: "/stickers/smile.svg", top: "65%", left: "1%", size: 56, rotate: -18, delay: -8, duration: 16 },
];

export default function FloatingStickers() {
  return (
    <div className="floating-stickers" aria-hidden="true">
      {STICKERS.map((sticker) => (
        <div
          key={sticker.src}
          className="floating-sticker"
          style={{
            top: sticker.top,
            left: sticker.left,
            right: sticker.right,
            ["--rotate" as string]: `${sticker.rotate}deg`,
            ["--delay" as string]: `${sticker.delay}s`,
            ["--duration" as string]: `${sticker.duration}s`,
          }}
        >
          <div className="floating-sticker-inner">
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
