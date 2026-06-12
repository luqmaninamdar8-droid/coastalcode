import { renderLayout } from "./layout.js";

const activePage = document.body.dataset.page || "home";
renderLayout(activePage);

// Header entrance + scroll effect
const header = document.getElementById("header");

if (header) {
  header.classList.add("header-enter");

  if (activePage === "home") {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    });
  }
}

// Hero load animation
const hero = document.getElementById("hero");

if (hero) {
  requestAnimationFrame(() => {
    hero.classList.add("is-loaded");
  });
}

// Mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Scroll reveal
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

// Stagger reveal children in grids
document
  .querySelectorAll(
    ".services-grid, .work-grid, .process-steps, .teaser-grid, .values-grid, .services-preview-grid, .highlight-list, .who-help-grid, .faq-list, .types-grid, .testimonials-grid, .stats-row, .work-stats-grid, .categories-grid, .approach-steps, .about-facts-grid, .timeline-list, .goals-grid, .contact-quick-grid, .contact-steps, .skills-grid"
  )
  .forEach((grid) => {
    const children = grid.querySelectorAll(".reveal, .skill-badge");
    children.forEach((child, i) => {
      if (child.classList.contains("reveal")) {
        child.style.transitionDelay = `${i * 0.07}s`;
      } else {
        child.style.animationDelay = `${i * 0.15}s`;
      }
    });
  });

// Animated counters
function animateCounter(el) {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    el.textContent = Math.round(target * eased) + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const counters = document.querySelectorAll("[data-count]");

if (counters.length) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

// Contact form
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formNote.hidden = false;
    formNote.classList.add("visible");
    contactForm.reset();
    setTimeout(() => {
      formNote.hidden = true;
      formNote.classList.remove("visible");
    }, 5000);
  });
}
