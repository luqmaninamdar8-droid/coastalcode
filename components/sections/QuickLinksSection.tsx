"use client";

import Link from "next/link";
import GsapReveal from "@/components/animations/GsapReveal";
import { Card } from "@/components/ui/card";
import { quickLinks } from "@/lib/page-content";

export default function QuickLinksSection() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <GsapReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset glow-label">Explore</p>
          <h2 className="text-gradient-glow mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Everything in one portfolio
          </h2>
          <p className="mt-4 text-sand/70">
            Jump to any section — about my story, skills, live projects, or how to hire me.
          </p>
        </GsapReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {quickLinks.map((link, i) => (
            <GsapReveal key={link.href} delay={i * 0.08}>
              <Link href={link.href} className="group block h-full">
                <Card className="flex h-full flex-col p-6 transition-all hover:border-tech-cyan/40 hover:shadow-glow-cyan">
                  <span className="text-2xl text-tech-purple">{link.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-sand group-hover:text-tech-cyan">
                    {link.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-sand/65">
                    {link.description}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-sunset group-hover:underline">
                    Open page →
                  </span>
                </Card>
              </Link>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
