"use client";

import Image from "next/image";
import GsapReveal from "@/components/animations/GsapReveal";
import { aboutTimeline } from "@/lib/timeline";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <GsapReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset">
            About Me
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-sand md:text-4xl">
            A young developer with{" "}
            <span className="text-gradient-sunset">Goa in my heart</span>
          </h2>
          <p className="mt-4 text-sand/70 leading-relaxed">
            I&apos;m {`Luqman Inamdar`}, a 13-year-old web creator from Kalay, Goa.
            I teach myself through tutorials, practice, and real client projects —
            building this Goa portfolio with Next.js, TypeScript, and modern web tools.
          </p>
        </GsapReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          <GsapReveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/goa-street-culture.jpg"
                alt="Goa street culture — young web creator from Goa portfolio"
                width={700}
                height={500}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean/80 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-sm text-sand/80">
                Inspired by Goan beaches, markets, and the colours of home.
              </p>
            </div>
          </GsapReveal>

          <div className="space-y-0">
            {aboutTimeline.map((item, index) => (
              <GsapReveal key={item.year} delay={0.05 * index}>
                <div className="relative border-l-2 border-sunset/30 py-6 pl-8">
                  <span className="absolute -left-[9px] top-8 h-4 w-4 rounded-full border-2 border-sunset bg-ocean" />
                  <span className="font-mono text-sm font-bold text-sunset">{item.year}</span>
                  <h3 className="mt-1 text-lg font-bold text-sand">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-sand/65">{item.description}</p>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
