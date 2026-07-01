"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import ScrambleText from "@/components/animations/ScrambleText";
import TechGlobe from "@/components/animations/TechGlobe";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/seo";

const stagger = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  const [globeSize, setGlobeSize] = useState(300);

  useEffect(() => {
    const update = () => {
      setGlobeSize(window.innerWidth >= 1024 ? 440 : window.innerWidth >= 640 ? 380 : 300);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="container relative z-10 mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="mb-4 flex flex-wrap gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects · South Goa
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-sunset/30 bg-sunset/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sunset-light">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sunset" />
              13-year-old web creator · Goa, India
            </span>
          </motion.div>

          <ScrambleText
            as="h1"
            text="I'm a 13-year-old web creator from Goa"
            delay={200}
            className="text-gradient-glow-hero glow-title-animate text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          />

          <motion.p
            custom={1}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="mt-6 max-w-xl text-lg leading-relaxed text-sand/75"
          >
            I build fast, beautiful websites with{" "}
            <span className="font-semibold text-sunset-light">HTML, CSS, JavaScript</span>{" "}
            and Next.js — helping local businesses in Goa go live online.
          </motion.p>

          <motion.div
            custom={2}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
              Start a Project
            </Link>
            <Link
              href="/projects"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              View My Work
            </Link>
          </motion.div>

          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="mt-6 text-sm text-sand/50"
          >
            {siteConfig.name} · {siteConfig.address.addressLocality}, Goa · Young developer portfolio
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex min-h-[280px] items-center justify-center sm:min-h-[360px] lg:min-h-[440px]"
        >
          <TechGlobe size={globeSize} className="mx-auto" />
          <div className="absolute bottom-0 left-0 glass-panel rounded-2xl px-5 py-4 shadow-xl sm:-bottom-2 sm:-left-2">
            <p className="text-xs font-bold uppercase tracking-wider text-sunset">Live sites</p>
            <p className="text-2xl font-bold text-sand">
              <AnimatedCounter value={6} suffix="+" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
