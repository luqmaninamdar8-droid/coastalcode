"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { CtaKey } from "@/lib/i18n";

interface CtaBannerProps {
  ctaKey: CtaKey;
  href: string;
}

export default function CtaBanner({ ctaKey, href }: CtaBannerProps) {
  const { t } = useLanguage();
  const cta = t.cta[ctaKey];

  return (
    <section className="cta-banner section">
      <div className="container cta-banner-inner reveal">
        <h2>{cta.title}</h2>
        <p>{cta.description}</p>
        <Link href={href} className="btn btn-primary">
          {cta.button}
        </Link>
      </div>
    </section>
  );
}
