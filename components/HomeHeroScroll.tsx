"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function HomeHeroScroll() {
  const { t } = useLanguage();

  return (
    <div className="hero-scroll">
      <span>{t.home.scroll}</span>
      <div className="scroll-line" />
    </div>
  );
}
