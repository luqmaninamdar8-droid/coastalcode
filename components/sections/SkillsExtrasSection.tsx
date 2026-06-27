"use client";

import GsapReveal from "@/components/animations/GsapReveal";
import { Card } from "@/components/ui/card";
import { dailyTools, learningNow } from "@/lib/page-content";

export default function SkillsExtrasSection() {
  return (
    <>
      <section className="relative border-t border-white/10 py-24 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <GsapReveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset glow-label">Always learning</p>
            <h2 className="text-gradient-glow mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What I&apos;m improving right now
            </h2>
            <p className="mt-4 text-sand/70">
              Coding is a journey — these are the skills I&apos;m actively practising in 2026.
            </p>
          </GsapReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {learningNow.map((item, i) => (
              <GsapReveal key={item.name} delay={i * 0.06}>
                <Card className="p-5 hover:border-tech-cyan/30">
                  <h3 className="font-bold text-sand">{item.name}</h3>
                  <p className="mt-1 text-sm text-sand/60">{item.note}</p>
                </Card>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <GsapReveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset glow-label">Toolbox</p>
            <h2 className="text-gradient-glow mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Tools I use every day
            </h2>
          </GsapReveal>

          <GsapReveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
            {dailyTools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-sand/80 transition-colors hover:border-tech-purple/40 hover:text-tech-cyan"
              >
                {tool}
              </span>
            ))}
          </GsapReveal>
        </div>
      </section>
    </>
  );
}
