"use client";

import GsapReveal from "@/components/animations/GsapReveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { Card } from "@/components/ui/card";
import { projectProcess, projectStats } from "@/lib/page-content";

export default function ProjectsExtrasSection() {
  return (
    <>
      <section className="relative border-b border-white/10 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {projectStats.map((stat, i) => (
              <GsapReveal key={stat.label} delay={i * 0.06} className="text-center">
                <p className="text-2xl font-bold text-tech-purple glow-stat-purple md:text-3xl">
                  {"numeric" in stat && stat.numeric !== undefined ? (
                    <AnimatedCounter
                      value={stat.numeric}
                      suffix={"suffix" in stat ? stat.suffix : ""}
                    />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="mt-1 text-sm text-sand/60">{stat.label}</p>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <GsapReveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset glow-label">Process</p>
            <h2 className="text-gradient-glow mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              How we work together
            </h2>
            <p className="mt-4 text-sand/70">
              From first message to live site — a simple, clear workflow for every project.
            </p>
          </GsapReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projectProcess.map((step, i) => (
              <GsapReveal key={step.step} delay={i * 0.08}>
                <Card className="h-full p-6 hover:border-sunset/30">
                  <span className="font-mono text-sm font-bold text-tech-cyan">{step.step}</span>
                  <h3 className="mt-3 text-lg font-bold text-sand">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand/65">{step.description}</p>
                </Card>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ProjectsExtrasFooter() {
  return (
    <section className="relative border-t border-white/10 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <GsapReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sand/70">
            Every project listed above is a real, live website — tap any card to visit the client site
            in a new tab.
          </p>
        </GsapReveal>
      </div>
    </section>
  );
}
