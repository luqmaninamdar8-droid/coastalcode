interface PageHeroProps {
  tag: string;
  title: string;
  subtitle: string;
  short?: boolean;
}

export default function PageHero({ tag, title, subtitle, short }: PageHeroProps) {
  return (
    <section className={`page-hero${short ? " page-hero-short" : ""}`}>
      <div className="page-hero-bg" />
      <div className="page-hero-tech" aria-hidden="true">
        <span className="page-hero-tech-ring page-hero-tech-ring--1" />
        <span className="page-hero-tech-ring page-hero-tech-ring--2" />
        <span className="page-hero-tech-dot page-hero-tech-dot--1" />
        <span className="page-hero-tech-dot page-hero-tech-dot--2" />
        <span className="page-hero-tech-dot page-hero-tech-dot--3" />
      </div>
      <div className="container page-hero-content">
        <span className="section-tag reveal reveal-pop">{tag}</span>
        <h1 className="page-hero-title reveal reveal-blur">{title}</h1>
        <p className="page-hero-subtitle reveal">{subtitle}</p>
      </div>
    </section>
  );
}
