"use client";

import Link from "next/link";
import GsapReveal from "@/components/animations/GsapReveal";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/testimonials";

function Stars({ count }: { count: number }) {
  return (
    <span className="text-sunset-light" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}
    </span>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative border-y border-white/10 py-24 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <GsapReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset glow-label">
            Testimonials
          </p>
          <h2 className="text-gradient-glow mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            What clients say
          </h2>
          <p className="mt-4 text-sand/70">
            Real feedback from businesses I&apos;ve built websites for across Goa and India.
          </p>
        </GsapReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <GsapReveal key={item.id} delay={i * 0.08}>
              <Card className="flex h-full flex-col p-6 transition-all hover:border-sunset/30 hover:shadow-glow-sunset md:p-8">
                <Stars count={item.rating} />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-sand/85">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-bold text-sand">{item.author}</p>
                  <p className="text-sm text-sand/55">{item.role}</p>
                  <Link
                    href={`/projects/${item.projectSlug}`}
                    className="mt-2 inline-block text-sm font-semibold text-tech-cyan hover:underline"
                  >
                    View {item.business} project →
                  </Link>
                </footer>
              </Card>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
