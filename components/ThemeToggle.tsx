"use client";

import { useEffect, useState } from "react";
import {
  applyTheme,
  getStoredTheme,
  resolveTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";

function readTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(readTheme());
    setMounted(true);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (getStoredTheme()) return;
      const next = resolveTheme(null);
      applyTheme(next);
      setTheme(next);
    };

    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      className={`theme-toggle${mounted && theme === "dark" ? " is-dark" : ""} ${className}`.trim()}
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={mounted ? theme === "dark" : undefined}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      <svg
        className="theme-toggle-icon theme-toggle-icon--sun"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
          <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
          <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
          <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
          <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
        </g>
      </svg>
      <svg
        className="theme-toggle-icon theme-toggle-icon--moon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z"
        />
      </svg>
    </button>
  );
}
