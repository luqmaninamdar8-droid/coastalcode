"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "@/components/animations/NavLink";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/seo";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0A0E1A]/75 backdrop-blur-xl shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-sand">
          {siteConfig.name}
          <span className="ml-1 text-sunset">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className={cn(buttonVariants({ size: "sm" }))}>
            Hire Me
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("h-0.5 w-6 bg-sand transition-all", open && "translate-y-2 rotate-45")} />
          <span className={cn("h-0.5 w-6 bg-sand transition-all", open && "opacity-0")} />
          <span className={cn("h-0.5 w-6 bg-sand transition-all", open && "-translate-y-2 -rotate-45")} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#0A0E1A]/85 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link
              href="/contact"
              className={cn(buttonVariants(), "text-center")}
              onClick={() => setOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
