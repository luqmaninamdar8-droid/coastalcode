import Image from "next/image";
import { techStack } from "@/lib/tech-stack";

export default function TechMarquee() {
  const items = [...techStack, ...techStack];

  return (
    <section className="tech-marquee" aria-label="Technologies I use">
      <div className="tech-marquee-track">
        {items.map((tech, index) => (
          <div
            key={`${tech.id}-${index}`}
            className="tech-marquee-item"
            style={{ ["--tech-color" as string]: tech.color }}
          >
            <Image
              src={tech.icon}
              alt=""
              width={36}
              height={36}
              className="tech-marquee-icon"
              aria-hidden
            />
            <span className="tech-marquee-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
