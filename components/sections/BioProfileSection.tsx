"use client";

import GsapReveal from "@/components/animations/GsapReveal";
import { Card } from "@/components/ui/card";
import { bioDetails, personalBio } from "@/lib/bio";

export default function BioProfileSection() {
  return (
    <section className="relative border-t border-white/10 py-24 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <GsapReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset glow-label">My story</p>
          <h2 className="text-gradient-glow mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Student, coder &amp; web creator
          </h2>
          <p className="mt-4 text-sand/70 leading-relaxed">{personalBio.intro}</p>
        </GsapReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <GsapReveal delay={0.08}>
            <Card className="h-full p-6 md:p-8">
              <h3 className="text-lg font-bold text-sand">A bit more about me</h3>
              <p className="mt-4 text-sm leading-relaxed text-sand/70">{personalBio.story}</p>
              <p className="mt-4 text-sm leading-relaxed text-sand/70">{personalBio.beyondCode}</p>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-sunset">Interests</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {personalBio.interests.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sand/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </GsapReveal>

          <GsapReveal delay={0.12}>
            <div className="grid gap-3 sm:grid-cols-2">
              {bioDetails.map((detail) => (
                <Card
                  key={detail.label}
                  className="p-4 transition-colors hover:border-tech-cyan/30"
                >
                  <span className="text-lg" aria-hidden="true">
                    {detail.icon}
                  </span>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-sand/50">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-sand">{detail.value}</p>
                </Card>
              ))}
            </div>
          </GsapReveal>
        </div>
      </div>
    </section>
  );
}
