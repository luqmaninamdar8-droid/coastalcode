export default function PageSkeleton({ compact = false }: { compact?: boolean }) {
  return (
    <div className="page-skeleton" aria-hidden="true">
      <div className={`page-skeleton-hero${compact ? " page-skeleton-hero--short" : ""}`}>
        <div className="skeleton skeleton-tag" />
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-subtitle" />
        {!compact && <div className="skeleton skeleton-subtitle skeleton-subtitle--short" />}
      </div>
      <div className="container">
        <div className="page-skeleton-grid">
          <div className="skeleton skeleton-card" />
          <div className="skeleton skeleton-card" />
          <div className="skeleton skeleton-card" />
        </div>
      </div>
    </div>
  );
}
