"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }

  return (
    <button
      type="button"
      className={`scroll-top-btn${visible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="scroll-top-btn-icon">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19V5M5 12l7-7 7 7"
        />
      </svg>
    </button>
  );
}
