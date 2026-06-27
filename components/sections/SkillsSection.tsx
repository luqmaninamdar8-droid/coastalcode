"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapReveal from "@/components/animations/GsapReveal";
import { Card } from "@/components/ui/card";
import { skillCategories } from "@/lib/skills";

gsap.registerPlugin(ScrollTrigger);

function SkillBar({ name, level }: { name: string; level: number }) {
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      bar.style.width = `${level}%`;
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${level}%`,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
          },
        },
      );
    });

    return () => ctx.revert();
  }, [level]);

  return (
    <li className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-sand/80">{name}</span>
        <span className="font-mono text-sunset">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <span
          ref={barRef}
          className="block h-full rounded-full bg-gradient-to-r from-sunset to-sky-400"
          style={{ width: 0 }}
        />
      </div>
    </li>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <GsapReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset">Skills</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-sand md:text-4xl">
            HTML, CSS, JavaScript &amp; more
          </h2>
          <p className="mt-4 text-sand/70">
            Tools I use every day to build fast, mobile-friendly websites for clients in Goa.
          </p>
        </GsapReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <GsapReveal key={cat.id} delay={i * 0.08}>
              <Card className="group h-full p-6 hover:border-sunset/30 hover:shadow-glow-sunset">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="mt-3 text-lg font-bold text-sand">{cat.title}</h3>
                <ul className="mt-5 space-y-4">
                  {cat.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </ul>
              </Card>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
