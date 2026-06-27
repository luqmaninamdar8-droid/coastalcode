"use client";

import GsapReveal from "@/components/animations/GsapReveal";

type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
};

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="relative border-b border-white/10 py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <GsapReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-tech-cyan">{label}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-sand md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-sand/70">{description}</p>
        </GsapReveal>
      </div>
    </section>
  );
}
