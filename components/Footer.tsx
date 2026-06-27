import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link href="/" className="logo">
          <Image
            src="/assets/images/logo.svg"
            alt="Coastal Code logo"
            className="logo-img"
            width={40}
            height={40}
          />
          Coastal Code
        </Link>
        <p className="footer-tagline">{siteConfig.tagline}</p>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="footer-seo">
          Web design and website development in Kalay, Goa — serving local
          businesses, homestays, restaurants, salons, and personal projects
          across India.{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {" · "}
          <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
        </p>
        <p className="footer-copy">
          &copy; 2026 {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
