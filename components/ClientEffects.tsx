"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const staggerSelectors =
  ".services-grid, .work-grid, .process-steps, .teaser-grid, .values-grid, .services-preview-grid, .highlight-list, .who-help-grid, .faq-list, .types-grid, .testimonials-grid, .stats-row, .work-stats-grid, .categories-grid, .approach-steps, .about-facts-grid, .timeline-list, .goals-grid, .contact-quick-grid, .contact-steps, .skills-grid, .project-body-grid, .categories-grid";

const motionCardSelector =
  ".work-card, .preview-card, .teaser-card, .service-card, .who-card, .testimonial-card, .fact-card, .value-card, .goal-card, .category-card, .contact-quick-card, .client-logo-card";

export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    /* ── Scroll progress bar ── */
    let progressBar = document.getElementById("scroll-progress");
    if (!progressBar) {
      progressBar = document.createElement("div");
      progressBar.id = "scroll-progress";
      document.body.prepend(progressBar);
    }

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar!.style.width = `${pct}%`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    cleanups.push(() =>
      window.removeEventListener("scroll", updateProgress)
    );

    /* ── Page enter animation ── */
    const main = document.querySelector("main");
    main?.classList.remove("page-enter");
    requestAnimationFrame(() => {
      main?.classList.add("page-enter");
    });

    /* ── Hero load + parallax ── */
    const hero = document.getElementById("hero");
    if (hero) {
      requestAnimationFrame(() => hero.classList.add("is-loaded"));
    }

    const heroBg = document.querySelector<HTMLElement>(".hero-bg");

    const onHeroParallax = () => {
      if (!hero || !heroBg) return;
      const rect = hero.getBoundingClientRect();
      if (rect.bottom < 0) return;

      heroBg.style.transform = `translateY(${window.scrollY * 0.22}px)`;
    };

    if (heroBg) {
      window.addEventListener("scroll", onHeroParallax, { passive: true });
      onHeroParallax();
      cleanups.push(() =>
        window.removeEventListener("scroll", onHeroParallax)
      );
    }

    /* ── Scroll reveal ── */
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealElements.forEach((el) => revealObserver.observe(el));
    cleanups.push(() => revealObserver.disconnect());

    /* ── Stagger grid children ── */
    document.querySelectorAll(staggerSelectors).forEach((grid) => {
      const children = grid.querySelectorAll(".reveal, .skill-badge");
      children.forEach((child, i) => {
        if (child.classList.contains("reveal")) {
          (child as HTMLElement).style.transitionDelay = `${i * 0.08}s`;
        } else {
          (child as HTMLElement).style.animationDelay = `${i * 0.12}s`;
        }
      });
    });

    /* ── Skill bar fill on scroll ── */
    const skillBars = document.querySelectorAll<HTMLElement>(".skill-bar-fill");
    skillBars.forEach((bar) => {
      const target = bar.style.width || bar.dataset.width || "0%";
      bar.style.setProperty("--bar-target", target);
      bar.dataset.width = target;
      bar.style.width = "0";
    });

    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("bar-animate");
            barObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    skillBars.forEach((bar) => barObserver.observe(bar));
    cleanups.push(() => barObserver.disconnect());

    /* ── Animated counters ── */
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
    cleanups.push(() => counterObserver.disconnect());

    /* ── 3D card tilt ── */
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReduced) {
      const tiltCards = document.querySelectorAll<HTMLElement>(motionCardSelector);

      tiltCards.forEach((card) => {
        card.classList.add("motion-card");

        const onMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) translateY(-6px)`;
        };

        const onLeave = () => {
          card.style.transform = "";
        };

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
