"use client";

import GsapReveal from "@/components/animations/GsapReveal";
import { homeStats } from "@/lib/page-content";

export default function StatsStrip() {
  return (
    <section className="relative border-y border-white/10 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {homeStats.map((stat, i) => (
            <GsapReveal key={stat.label} delay={i * 0.06} className="text-center">
              <p className="text-3xl font-bold text-tech-cyan md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-sand/60">{stat.label}</p>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
