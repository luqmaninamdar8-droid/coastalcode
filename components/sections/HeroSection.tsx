"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrambleText from "@/components/animations/ScrambleText";
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
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 opacity-[0.06]">
        <Image
          src="/images/goa-beach-sunset.jpg"
          alt="Goa beach sunset — inspiration for Coastal Code web design"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0F1A]/30" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-sunset/30 bg-sunset/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sunset-light"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-sunset" />
            13-year-old web creator · Goa, India
          </motion.p>

          <ScrambleText
            as="h1"
            text="I'm a 13-year-old web creator from Goa"
            delay={200}
            className="text-4xl font-bold leading-[1.08] tracking-tight text-sand sm:text-5xl lg:text-6xl"
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
          className="relative hidden lg:block"
        >
          <div className="glass-panel overflow-hidden rounded-3xl p-2 shadow-2xl">
            <Image
              src="/images/goa-street-culture.jpg"
              alt="Colourful streets in Goa — Coastal Code portfolio inspiration"
              width={600}
              height={450}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -left-4 glass-panel rounded-2xl px-5 py-4 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-wider text-sunset">Live sites</p>
            <p className="text-2xl font-bold text-sand">6+</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
