import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import WorkCard from "@/components/WorkCard";
import { featuredProjects } from "@/lib/projects";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Responsive Design",
  "Flexbox & Grid",
  "Git & GitHub",
  "Figma",
  "SEO Basics",
  "Web Accessibility",
];

export default function HomePage() {
  return (
    <>
      <section className="hero hero--home" id="hero">
        <div className="hero-bg">
          <Image
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="hero-bg-image"
            aria-hidden
            width={1600}
            height={900}
            priority
          />
          <div className="hero-overlay" />
          <div className="hero-pattern" />
        </div>
        <div className="container hero-content">
          <p className="hero-tag hero-animate">Young Web Creator · Goa, India</p>
          <h1 className="hero-title hero-animate">
            Websites that feel as good as a <em>Goa sunset</em>
          </h1>
          <p className="hero-subtitle hero-animate">
            I&apos;m a 13-year-old web creator from Goa building fast, beautiful
            sites for local businesses, friends, and anyone who needs a great page
            online.
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

      <section className="section services-preview">
        <div className="container">
          <div className="section-header reveal">
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
          <div className="section-header reveal">
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

      <section className="section skills-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Skills</span>
            <h2>Tools I work with</h2>
            <p>My stack is growing every week — these are my go-to technologies right now.</p>
          </div>
          <div className="skills-grid reveal">
            {skills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-preview">
        <div className="container">
          <div className="section-header reveal">
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
          <div className="section-header reveal">
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

      <CtaBanner
        title="Ready to launch your website?"
        description="Tell me about your project — I typically reply within 24 hours."
        buttonLabel="Get in Touch"
        href="/contact"
      />
    </>
  );
}
