"use client";

import GsapReveal from "@/components/animations/GsapReveal";
import { Card } from "@/components/ui/card";
import { aboutFacts, aboutValues } from "@/lib/page-content";

export default function AboutExtrasSection() {
  return (
    <>
      <section className="relative border-t border-white/10 py-24 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <GsapReveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset">What drives me</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sand md:text-4xl">
              How I approach web creation
            </h2>
          </GsapReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {aboutValues.map((item, i) => (
              <GsapReveal key={item.title} delay={i * 0.08}>
                <Card className="h-full p-6 hover:border-tech-purple/30">
                  <h3 className="text-lg font-bold text-sand">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand/65">{item.description}</p>
                </Card>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <GsapReveal>
            <Card className="mx-auto max-w-3xl p-8 md:p-10">
              <h2 className="text-xl font-bold text-sand md:text-2xl">Quick facts</h2>
              <ul className="mt-6 space-y-3">
                {aboutFacts.map((fact) => (
                  <li key={fact} className="flex items-start gap-3 text-sm text-sand/75">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tech-cyan" />
                    {fact}
                  </li>
                ))}
              </ul>
            </Card>
          </GsapReveal>
        </div>
      </section>
    </>
  );
}
