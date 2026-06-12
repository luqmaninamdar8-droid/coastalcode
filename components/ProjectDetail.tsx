import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { getAdjacentProjects } from "@/lib/projects";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <nav className="project-breadcrumb">
        <div className="container">
          <Link href="/work">Work</Link>
          <span>/</span>
          {project.title}
        </div>
      </nav>

      <section className="project-hero">
        <div className="container">
          <div className="project-hero-image reveal">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1200}
              height={514}
              priority
            />
          </div>
          <div className="project-hero-header reveal">
            <span className="section-tag">{project.tag}</span>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <dl className="project-meta-bar">
              {project.meta.map((item) => (
                <div key={item.label} className="project-meta-item">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="project-body">
        <div className="container project-body-grid">
          <div className="project-main reveal">
            {project.sections.map((section) => (
              <div key={section.title} className="project-section">
                <h2>{section.title}</h2>
                {section.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
                {section.features && (
                  <ul className="project-features">
                    {section.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                )}
                {section.result && (
                  <p className="project-result">{section.result}</p>
                )}
              </div>
            ))}
          </div>
          <aside className="project-sidebar reveal">
            <div className="project-sidebar-card">
              <h3>Technologies</h3>
              <div className="project-tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
            {project.pagesBuilt && (
              <div className="project-sidebar-card">
                <h3>Pages built</h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-ink-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {project.pagesBuilt}
                </p>
              </div>
            )}
            {project.sidebarNote && (
              <div className="project-sidebar-card">
                <h3>{project.sidebarNote.title}</h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-ink-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {project.sidebarNote.text}
                </p>
              </div>
            )}
            <Link href="/contact" className="btn btn-primary btn-full">
              {project.ctaLabel}
            </Link>
          </aside>
        </div>
      </section>

      <nav className="project-nav">
        <div className="container">
          <div className="project-nav-grid">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="project-nav-link"
              >
                <span className="project-nav-label">Previous Project</span>
                <span className="project-nav-title">← {prev.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="project-nav-link next"
              >
                <span className="project-nav-label">Next Project</span>
                <span className="project-nav-title">{next.title} →</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
          <p className="project-nav-back">
            <Link href="/work">← Back to all projects</Link>
          </p>
        </div>
      </nav>
    </>
  );
}
