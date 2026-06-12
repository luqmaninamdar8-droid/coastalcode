import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface WorkCardProps {
  project: Project;
  asLink?: boolean;
  homeCard?: boolean;
}

export default function WorkCard({
  project,
  asLink = false,
  homeCard = false,
}: WorkCardProps) {
  const content = (
    <>
      <div className="work-image">
        <Image
          src={project.image.replace("w=1200", "w=800")}
          alt={project.imageAlt}
          width={800}
          height={600}
          loading="lazy"
        />
        <span className="work-category">{project.category}</span>
      </div>
      <div className="work-info">
        <h3>{project.title}</h3>
        <p>{project.cardDescription}</p>
        {!asLink && (
          <div className="work-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
        {asLink ? (
          <span className="work-link">View project →</span>
        ) : (
          <Link href={`/projects/${project.slug}`} className="work-link">
            View project →
          </Link>
        )}
      </div>
    </>
  );

  if (asLink) {
    return (
      <Link href={`/projects/${project.slug}`} className="work-card reveal">
        {content}
      </Link>
    );
  }

  return <article className="work-card reveal">{content}</article>;
}
