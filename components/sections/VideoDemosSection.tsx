"use client";

import Link from "next/link";
import GsapReveal from "@/components/animations/GsapReveal";
import { videoDemos } from "@/lib/video-demos";

export default function VideoDemosSection() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <GsapReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset glow-label">
            In action
          </p>
          <h2 className="text-gradient-glow mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Website demos
          </h2>
          <p className="mt-4 text-sand/70">
            Short previews of the kinds of sites I build — taxis, bakeries, spas, and more.
          </p>
        </GsapReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {videoDemos.map((demo, i) => (
            <GsapReveal key={demo.id} delay={i * 0.08}>
              <Link
                href={demo.href}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all hover:border-sunset/30 hover:shadow-glow-sunset"
              >
                <div className="relative aspect-video overflow-hidden bg-ocean">
                  <video
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={demo.poster}
                  >
                    <source src={demo.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-sunset/20 px-3 py-1 text-xs font-semibold text-sunset-light">
                    {demo.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sand">{demo.title}</h3>
                  <p className="mt-1 text-sm text-tech-cyan group-hover:underline">
                    View case study →
                  </p>
                </div>
              </Link>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
