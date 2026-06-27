"use client";

import Image from "next/image";
import Link from "next/link";
import GsapReveal from "@/components/animations/GsapReveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { portfolioProjects } from "@/lib/portfolio-projects";

export default function FeaturedProjectsSection() {
  const featured = portfolioProjects.slice(0, 3);

  return (
    <section className="relative py-24 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <GsapReveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset">Featured work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-sand md:text-4xl">
              Recent client websites
            </h2>
            <p className="mt-4 text-sand/70">
              A sample of live sites I&apos;ve built — taxis, wellness, food, and enterprise.
            </p>
          </div>
          <Link href="/projects" className={cn(buttonVariants({ variant: "secondary" }))}>
            View all projects
          </Link>
        </GsapReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <GsapReveal key={project.id} delay={i * 0.08}>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all hover:border-sunset/30 hover:shadow-glow-sunset"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-sunset/20 px-3 py-1 text-xs font-semibold text-sunset-light">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sand">{project.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-sand/60">{project.description}</p>
                </div>
              </Link>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
