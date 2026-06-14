import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ClientLogos from "@/components/ClientLogos";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import TechMarquee from "@/components/TechMarquee";
import TechShowcase from "@/components/TechShowcase";
import WorkCard from "@/components/WorkCard";
import { featuredProjects } from "@/lib/projects";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title:
    "Coastal Code | Web Design & Website Development in Goa, India",
  description:
    "Hire Luqman Inamdar for affordable web design and development in Goa. Coastal Code builds fast, mobile-friendly websites for restaurants, homestays, shops, and personal projects in Panaji.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "web design Goa",
    "website developer Panaji",
    "affordable website Goa",
    "Luqman Inamdar web developer",
    "Coastal Code Goa",
    "Next.js website India",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }])}
      />
      <section className="hero hero--home" id="hero">
        <div className="hero-bg">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80"
            alt="Developer workspace with code on screen"
            className="hero-bg-image"
            width={1600}
            height={900}
            priority
          />
          <div className="hero-overlay" />
          <div className="hero-pattern" />
          <div className="hero-orbs" aria-hidden="true">
            <span className="hero-orb hero-orb--1" />
            <span className="hero-orb hero-orb--2" />
            <span className="hero-orb hero-orb--3" />
            <span
              className="motion-particle"
              style={{
                width: 6,
                height: 6,
                top: "18%",
                left: "12%",
                background: "rgba(255,255,255,0.6)",
                ["--dur" as string]: "12s",
                ["--delay" as string]: "0s",
              }}
            />
            <span
              className="motion-particle"
              style={{
                width: 4,
                height: 4,
                top: "55%",
                left: "78%",
                background: "rgba(251,191,36,0.7)",
                ["--dur" as string]: "16s",
                ["--delay" as string]: "-4s",
              }}
            />
            <span
              className="motion-particle"
              style={{
                width: 8,
                height: 8,
                top: "72%",
                left: "25%",
                background: "rgba(14,165,233,0.5)",
                ["--dur" as string]: "20s",
                ["--delay" as string]: "-8s",
              }}
            />
          </div>
        </div>
        <div className="container hero-content">
          <p className="hero-tag hero-animate">Young Web Creator · Goa, India</p>
          <h1 className="hero-title hero-animate">
            Websites powered by <em>modern tech</em>
          </h1>
          <p className="hero-subtitle hero-animate">
            I&apos;m a 13-year-old web creator from Goa building fast, beautiful
            sites with HTML, CSS, JavaScript, and Next.js — for local businesses,
            friends, and anyone who needs a great page online.
          </p>
          <div className="hero-actions hero-animate">
            <Link href="/contact" className="btn btn-primary btn-glow">
              Start Your Project
            </Link>
            <Link href="/work" className="btn btn-secondary">
              View My Work
            </Link>
          </div>
          <div className="hero-stats hero-animate">
            <div className="stat">
              <span className="stat-number" data-count="10" data-suffix="+">
                0
              </span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat">
              <span className="stat-number" data-count="3">
                0
              </span>
              <span className="stat-label">Languages Learned</span>
            </div>
            <div className="stat">
              <span className="stat-number" data-count="13">
                0
              </span>
              <span className="stat-label">Years Old</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      <div className="section-wave" aria-hidden="true" />

      <TechMarquee />

      <section className="home-intro section">
        <div className="container home-intro-grid">
          <div className="home-intro-content reveal reveal-left">
            <span className="section-tag">Who I Am</span>
            <h2>Building websites from my room in Goa</h2>
            <p>
              I started coding at age 13 after watching my cousin fix a school
              website. Now I use HTML, CSS, JavaScript and Next.js to build real
              sites — from a mango fan page to full business portfolios.
            </p>
            <p>
              This entire website? I made it myself. Every page, every button,
              every animation. I&apos;m still learning, but I ship real work.
            </p>
            <Link href="/about" className="btn btn-secondary">
              Read My Story
            </Link>
          </div>
          <div className="home-intro-card reveal reveal-right">
            <figure className="home-intro-tech-image">
              <Image
                src="/assets/images/laptop-code.jpg"
                alt="Laptop showing web development code"
                width={900}
                height={600}
                className="home-intro-tech-img"
                priority
              />
              <span className="home-intro-tech-scanline" aria-hidden="true" />
              <figcaption className="home-intro-tech-caption">
                Laptop showing web development code
              </figcaption>
              <span className="home-intro-tech-badge">Next.js · React · TypeScript</span>
            </figure>
            <div className="highlight-list">
              <div className="highlight-item">
                <span className="highlight-icon">🌴</span>
                <div>
                  <strong>Based in Goa</strong>
                  <p>Panaji — inspired by beaches, markets, and local life.</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💻</span>
                <div>
                  <strong>Self-taught coder</strong>
                  <p>Learning through tutorials, practice, and lots of trial and error.</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <div>
                  <strong>Ready to help</strong>
                  <p>School projects, small businesses, personal sites — let&apos;s build.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />

      <section className="section services-preview">
        <div className="container">
          <div className="section-header reveal reveal-blur">
            <span className="section-tag">Services</span>
            <h2>What I can build for you</h2>
            <p>From simple landing pages to full websites — here&apos;s what I offer.</p>
          </div>
          <div className="services-preview-grid">
            {[
              ["✦", "Web Design", "Clean layouts, bold colors, and designs that look great on every screen."],
              ["⚡", "Development", "Fast, responsive sites built with modern web technologies from scratch."],
              ["📱", "Mobile-First", "Every site works perfectly on phones — because that's how most people browse."],
              ["🔧", "Site Fixes", "Broken layout? Slow page? I can debug and improve existing websites too."],
            ].map(([icon, title, text]) => (
              <article key={title} className="preview-card reveal">
                <span className="preview-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="section-cta reveal">
            <Link href="/services" className="btn btn-secondary">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section featured-work">
        <div className="container">
          <div className="section-header reveal reveal-blur">
            <span className="section-tag">Portfolio</span>
            <h2>Recent projects</h2>
            <p>A few sites I&apos;ve built — click through to see the full collection.</p>
          </div>
          <div className="work-grid work-grid-home">
            {featuredProjects.map((project) => (
              <WorkCard key={project.slug} project={project} asLink homeCard />
            ))}
          </div>
          <div className="section-cta reveal">
            <Link href="/work" className="btn btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <TechShowcase />

      <section className="section process-preview">
        <div className="container">
          <div className="section-header reveal reveal-blur">
            <span className="section-tag">Process</span>
            <h2>How we&apos;ll work together</h2>
            <p>Simple steps — no confusing jargon, just clear communication.</p>
          </div>
          <div className="process-steps process-steps-compact">
            {[
              ["01", "Chat", "Tell me about your idea over a call or message."],
              ["02", "Design", "I sketch layouts and you pick what you like."],
              ["03", "Build", "I code the site and share progress as I go."],
              ["04", "Launch", "Your site goes live — ready for the world."],
            ].map(([num, title, text]) => (
              <div key={title} className="process-step reveal">
                <span className="step-number">{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal reveal-blur">
            <span className="section-tag">Explore</span>
            <h2>More to discover</h2>
            <p>Dive deeper into my services, projects, and coding journey.</p>
          </div>
          <div className="teaser-grid">
            {[
              ["/services", "✦", "Services", "Web design, development, e-commerce, hospitality sites, SEO, and more.", "View services →"],
              ["/work", "◎", "Work", "Resorts, restaurants, personal projects, and sites I've helped go live.", "See my projects →"],
              ["/about", "📍", "About", "My story as a young web creator from Goa — how it all started.", "Read my story →"],
            ].map(([href, icon, title, text, link]) => (
              <Link key={title} href={href as string} className="teaser-card reveal">
                <span className="teaser-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="teaser-link">{link}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section section">
        <div className="container">
          <blockquote className="home-quote reveal">
            <p>
              &ldquo;I believe great websites should feel as welcoming as a Goan beach
              shack — simple, honest, and impossible to forget.&rdquo;
            </p>
            <footer>— Made in Goa, at age 13</footer>
          </blockquote>
        </div>
      </section>

      <section
        className="section seo-context"
        aria-label="Web design services in Goa"
      >
        <div className="container">
          <div className="section-header reveal reveal-blur">
            <span className="section-tag">Coastal Code</span>
            <h2>Web design &amp; website development in Goa</h2>
          </div>
          <div className="seo-context-grid reveal">
            <p>
              Coastal Code is a web creation studio based in Panaji, Goa. I design
              and build custom websites for local businesses, homestays, cafés,
              salons, school projects, and personal portfolios — with clean code,
              fast loading speeds, and layouts that work on every phone and laptop.
            </p>
            <p>
              Whether you need a restaurant menu site, a resort booking page, an
              online shop, or a simple landing page, I handle web design,
              front-end development, SEO-friendly structure, and launch support.
              Clients across Goa and India work with me for affordable, modern
              websites built with HTML, CSS, JavaScript, and Next.js.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to launch your website?"
        description="Tell me about your project — I typically reply within 24 hours."
        buttonLabel="Get in Touch"
        href="/contact"
      />
    </>
  );
}
