"use client";

import { motion } from "framer-motion";

const rings = [
  { size: 108, duration: 28, tilt: 12, opacity: 0.55, border: "rgba(0, 212, 255, 0.45)" },
  { size: 118, duration: 36, tilt: -28, opacity: 0.35, border: "rgba(94, 231, 255, 0.3)" },
  { size: 128, duration: 44, tilt: 52, opacity: 0.25, border: "rgba(139, 92, 246, 0.28)" },
];

export default function GlobeOrbitalRings() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
      {rings.map((ring, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: `${ring.size}%`,
            height: `${ring.size}%`,
            borderColor: ring.border,
            opacity: ring.opacity,
            transform: `rotateX(${ring.tilt}deg)`,
          }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}
