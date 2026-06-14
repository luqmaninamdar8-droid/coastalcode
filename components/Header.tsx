"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { navItems, type NavPage } from "@/lib/nav";

function getActivePage(pathname: string): NavPage {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/projects")) return "work";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/work")) return "work";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contact")) return "contact";
  return "home";
}

export default function Header() {
  const pathname = usePathname();
  const activePage = getActivePage(pathname);
  const isHome = activePage === "home";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!isHome);
  const { t } = useLanguage();

  const navLabels = {
    services: t.nav.services,
    work: t.nav.work,
    about: t.nav.about,
    contact: t.nav.contact,
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={`header header-enter${isHome ? " header--home" : ""} ${scrolled ? "scrolled" : ""}`}
      id="header"
    >
      <nav className="nav container">
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
        <div className="nav-actions">
          <LanguageToggle />
          <button
            type="button"
            className={`nav-toggle${menuOpen ? " active" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {navItems.map((item) => {
            const isActive = item.key === activePage;
            const classes = [
              isActive ? "active" : "",
              item.cta ? "nav-cta" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={classes || undefined}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {navLabels[item.key]}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
