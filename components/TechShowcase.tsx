import Image from "next/image";
import TechTerminal from "@/components/TechTerminal";
import { techStack } from "@/lib/tech-stack";

export default function TechShowcase() {
  return (
    <section className="section tech-showcase tech-showcase--refined">
      <div className="tech-showcase-ambient" aria-hidden="true">
        <span className="tech-showcase-orb tech-showcase-orb--1" />
        <span className="tech-showcase-orb tech-showcase-orb--2" />
      </div>

      <div className="container">
        <div className="section-header section-header--premium reveal reveal-blur">
          <span className="section-tag">Tech Stack</span>
          <h2>Built with modern web technology</h2>
          <p>
            From semantic HTML to Next.js — I use the same tools professional
            developers rely on to ship fast, accessible websites.
          </p>
        </div>

        <div className="tech-showcase-layout tech-showcase-layout--refined">
          <div className="tech-stack-grid">
            {techStack.map((tech, index) => (
              <article
                key={tech.id}
                className="tech-card tech-card--refined reveal reveal-pop"
                style={{
                  ["--tech-color" as string]: tech.color,
                  ["--tech-delay" as string]: `${index * 0.08}s`,
                }}
              >
                <div className="tech-card-glow" aria-hidden="true" />
                <div className="tech-card-icon-wrap">
                  <Image
                    src={tech.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="tech-card-icon"
                    aria-hidden
                  />
                </div>
                <h3>{tech.name}</h3>
                <p>{tech.label}</p>
                <span className="tech-card-pulse" aria-hidden="true" />
              </article>
            ))}
          </div>

          <div className="tech-showcase-aside tech-showcase-aside--refined">
            <TechTerminal />

            <figure className="tech-feature-panel reveal reveal-right">
              <Image
                src="/assets/images/laptop-code.jpg"
                alt="Laptop showing web development code"
                width={900}
                height={600}
                className="tech-feature-image"
              />
              <figcaption className="tech-feature-caption">
                <span className="tech-feature-label">Live builds</span>
                <strong>Hand-coded &amp; deployed</strong>
                <span>Next.js · TypeScript · Vercel</span>
              </figcaption>
              <span className="tech-feature-scanline" aria-hidden="true" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
