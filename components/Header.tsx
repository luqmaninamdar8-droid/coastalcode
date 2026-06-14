"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`header header-enter${isHome ? " header--home" : ""} ${scrolled ? "scrolled" : ""}`}
      id="header"
    >
      <nav className="nav container" aria-label="Main navigation">
        <Link href="/" className="logo" onClick={closeMenu}>
          <Image
            src="/assets/images/logo.svg"
            alt="Coastal Code — home"
            className="logo-img"
            width={40}
            height={40}
          />
          <span className="logo-text">Coastal Code</span>
        </Link>

        <div className="nav-desktop">
          <ul className="nav-links">
            {navItems.map((item) => {
              const isActive = item.key === activePage;
              const classes = [
                "nav-link",
                isActive ? "active" : "",
                item.cta ? "nav-cta" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={classes}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? " active" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <button
        type="button"
        className={`nav-backdrop${menuOpen ? " open" : ""}`}
        aria-label="Close menu"
        onClick={closeMenu}
        tabIndex={menuOpen ? 0 : -1}
      />

      <div
        id="mobile-nav"
        className={`nav-mobile${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="nav-mobile-inner">
          <p className="nav-mobile-label">Navigate</p>
          <ul className="nav-mobile-links">
            {navItems.map((item) => {
              const isActive = item.key === activePage;
              const classes = [
                "nav-mobile-link",
                isActive ? "active" : "",
                item.cta ? "nav-mobile-cta" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={classes}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    <span className="nav-mobile-link-text">{item.label}</span>
                    {isActive ? (
                      <span className="nav-mobile-link-badge">Current</span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
