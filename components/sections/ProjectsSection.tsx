"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapReveal from "@/components/animations/GsapReveal";
import TiltCard from "@/components/animations/TiltCard";
import { cn } from "@/lib/utils";
import {
  portfolioProjects,
  projectFilters,
  type ProjectFilter,
} from "@/lib/portfolio-projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    filter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.filter === filter);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = grid.querySelectorAll("[data-project-card]");
    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        const image = card.querySelector("[data-parallax-image]");
        if (!image) return;

        gsap.to(image, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, grid);

    return () => ctx.revert();
  }, [filter]);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <GsapReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset glow-label">Projects</p>
          <h2 className="text-gradient-glow mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Live websites I&apos;ve built
          </h2>
          <p className="mt-4 text-sand/70">
            Real client projects — open a case study or visit the live site. Filter by category below.
          </p>
        </GsapReveal>

        <GsapReveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                filter === f.id
                  ? "border-sunset bg-sunset/15 text-sunset-light shadow-glow-sunset"
                  : "border-white/10 text-sand/60 hover:border-white/25 hover:text-sand",
              )}
            >
              {f.label}
            </button>
          ))}
        </GsapReveal>

        <div
          ref={gridRef}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, i) => (
            <GsapReveal key={project.id} delay={i * 0.06}>
              <TiltCard className="group h-full">
                <div
                  data-project-card
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-shadow hover:shadow-glow-sunset"
                >
                  <Link href={`/projects/${project.id}`} className="flex flex-1 flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <div data-parallax-image className="absolute inset-0 -top-4">
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          className={cn(
                            "object-cover transition-all duration-500",
                            project.imageSecondary
                              ? "group-hover:scale-105 group-hover:opacity-0"
                              : "group-hover:scale-105",
                          )}
                          sizes="(max-width:768px) 100vw, 33vw"
                        />
                        {project.imageSecondary && (
                          <Image
                            src={project.imageSecondary}
                            alt={project.imageSecondaryAlt ?? project.imageAlt}
                            fill
                            className="object-cover opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                            sizes="(max-width:768px) 100vw, 33vw"
                          />
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 to-transparent" />
                      <span className="absolute bottom-3 left-3 rounded-full bg-sunset/20 px-3 py-1 text-xs font-semibold text-sunset-light">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-bold text-sand">{project.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-sand/60">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-sand/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="mt-4 text-sm font-semibold text-sunset group-hover:underline">
                        View case study →
                      </span>
                    </div>
                  </Link>
                  <div className="border-t border-white/10 px-5 py-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-tech-cyan hover:underline"
                    >
                      Visit live site ↗
                    </a>
                  </div>
                </div>
              </TiltCard>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
