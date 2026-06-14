"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function HomeHeroContent() {
  const { t } = useLanguage();
  const home = t.home;

  return (
    <>
      <p className="hero-tag hero-animate">{home.tag}</p>
      <h1 className="hero-title hero-animate">
        {home.title} <em>{home.titleEm}</em>
      </h1>
      <p className="hero-subtitle hero-animate">{home.subtitle}</p>
      <div className="hero-actions hero-animate">
        <Link href="/contact" className="btn btn-primary btn-glow">
          {home.ctaPrimary}
        </Link>
        <Link href="/work" className="btn btn-secondary">
          {home.ctaSecondary}
        </Link>
      </div>
      <div className="hero-stats hero-animate">
        <div className="stat">
          <span className="stat-number" data-count="10" data-suffix="+">
            0
          </span>
          <span className="stat-label">{home.statProjects}</span>
        </div>
        <div className="stat">
          <span className="stat-number" data-count="3">
            0
          </span>
          <span className="stat-label">{home.statLanguages}</span>
        </div>
        <div className="stat">
          <span className="stat-number" data-count="13">
            0
          </span>
          <span className="stat-label">{home.statAge}</span>
        </div>
      </div>
    </>
  );
}
