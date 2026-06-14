"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { PageKey } from "@/lib/i18n";

interface PageHeroProps {
  pageKey: PageKey;
  short?: boolean;
}

export default function PageHero({ pageKey, short }: PageHeroProps) {
  const { t } = useLanguage();
  const hero = t.pages[pageKey];

  return (
    <section className={`page-hero${short ? " page-hero-short" : ""}`}>
      <div className="page-hero-bg" />
      <div className="container page-hero-content">
        <span className="section-tag reveal reveal-pop">{hero.tag}</span>
        <h1 className="page-hero-title reveal reveal-blur">{hero.title}</h1>
        <p className="page-hero-subtitle reveal">{hero.subtitle}</p>
      </div>
    </section>
  );
}
