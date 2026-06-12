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
      <div className="container page-hero-content">
        <span className="section-tag reveal">{tag}</span>
        <h1 className="page-hero-title reveal">{title}</h1>
        <p className="page-hero-subtitle reveal">{subtitle}</p>
      </div>
    </section>
  );
}
