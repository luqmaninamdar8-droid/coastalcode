"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const staggerSelectors =
  ".services-grid, .work-grid, .process-steps, .teaser-grid, .values-grid, .services-preview-grid, .highlight-list, .who-help-grid, .faq-list, .types-grid, .testimonials-grid, .stats-row, .work-stats-grid, .categories-grid, .approach-steps, .about-facts-grid, .timeline-list, .goals-grid, .contact-quick-grid, .contact-steps, .skills-grid";

export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (hero) {
      requestAnimationFrame(() => hero.classList.add("is-loaded"));
    }

    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    document.querySelectorAll(staggerSelectors).forEach((grid) => {
      const children = grid.querySelectorAll(".reveal, .skill-badge");
      children.forEach((child, i) => {
        if (child.classList.contains("reveal")) {
          (child as HTMLElement).style.transitionDelay = `${i * 0.07}s`;
        } else {
          (child as HTMLElement).style.animationDelay = `${i * 0.15}s`;
        }
      });
    });

    const counters = document.querySelectorAll("[data-count]");
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.count);
          const suffix = el.dataset.suffix || "";
          const duration = 1400;
          const start = performance.now();

          const update = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            el.textContent = Math.round(target * eased) + suffix;
            if (progress < 1) requestAnimationFrame(update);
          };

          requestAnimationFrame(update);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((counter) => counterObserver.observe(counter));

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
