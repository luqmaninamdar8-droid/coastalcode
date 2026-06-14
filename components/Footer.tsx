"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link href="/" className="logo">
          <Image
            src="/assets/images/logo.svg"
            alt=""
            className="logo-img"
            width={40}
            height={40}
          />
          Coastal Code
        </Link>
        <p className="footer-tagline">{t.footer.tagline}</p>
        <div className="footer-links">
          <Link href="/services">{t.nav.services}</Link>
          <Link href="/work">{t.nav.work}</Link>
          <Link href="/about">{t.nav.about}</Link>
          <Link href="/contact">{t.nav.contact}</Link>
        </div>
        <p className="footer-copy">{t.footer.copy}</p>
      </div>
    </footer>
  );
}
