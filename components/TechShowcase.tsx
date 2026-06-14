import Image from "next/image";
import { techShowcaseImages, techStack } from "@/lib/tech-stack";

export default function TechShowcase() {
  return (
    <section className="section tech-showcase">
      <div className="container">
        <div className="section-header reveal reveal-blur">
          <span className="section-tag">Tech Stack</span>
          <h2>Built with modern web technology</h2>
          <p>
            From semantic HTML to Next.js — I use the same tools professional
            developers rely on to ship fast, accessible websites.
          </p>
        </div>

        <div className="tech-showcase-layout">
          <div className="tech-stack-grid">
            {techStack.map((tech, index) => (
              <article
                key={tech.id}
                className="tech-card reveal reveal-pop"
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

          <div className="tech-visual-stack reveal reveal-right">
            {techShowcaseImages.map((image, index) => (
              <figure
                key={image.src}
                className="tech-visual-card"
                style={{ ["--visual-index" as string]: String(index) }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={520}
                  className="tech-visual-image"
                />
                <figcaption>{image.caption}</figcaption>
                <span className="tech-visual-scanline" aria-hidden="true" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
