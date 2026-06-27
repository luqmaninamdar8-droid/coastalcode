import Link from "next/link";
import { siteConfig } from "@/lib/seo";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0E1A]/40 py-12 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-lg font-bold text-sand">
              {siteConfig.name}
              <span className="text-sunset">.</span>
            </p>
            <p className="mt-1 text-sm text-sand/50">
              13-year-old web creator from Goa · HTML, CSS, JavaScript, Next.js
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-sand/60">
            <Link href="/about" className="hover:text-sunset">
              About
            </Link>
            <Link href="/skills" className="hover:text-sunset">
              Skills
            </Link>
            <Link href="/projects" className="hover:text-sunset">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-sunset">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-sunset">
              Contact
            </Link>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-sunset">
              GitHub
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-sand/40">
          © {new Date().getFullYear()} {siteConfig.author}. Made in {siteConfig.address.addressLocality}, Goa, India.
        </p>
      </div>
    </footer>
  );
}
