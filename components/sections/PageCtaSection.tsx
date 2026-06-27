"use client";

import Link from "next/link";
import GsapReveal from "@/components/animations/GsapReveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageCtaSectionProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function PageCtaSection({
  title = "Ready to build something?",
  description = "Whether you need a new business site or a refresh of an old one, I'd love to hear about your project.",
  primaryHref = "/contact",
  primaryLabel = "Get in Touch",
  secondaryHref = "/projects",
  secondaryLabel = "View Projects",
}: PageCtaSectionProps) {
  return (
    <section className="relative py-20 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <GsapReveal>
          <div className="glass-panel mx-auto max-w-3xl rounded-3xl border border-tech-cyan/20 p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-sand md:text-3xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-sand/70">{description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={primaryHref} className={cn(buttonVariants({ size: "lg" }))}>
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </GsapReveal>
      </div>
    </section>
  );
}
