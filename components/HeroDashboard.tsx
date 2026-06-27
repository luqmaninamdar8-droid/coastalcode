export default function HeroDashboard() {
  return (
    <aside className="hero-dashboard reveal reveal-right" aria-label="Project metrics">
      <div className="hero-dashboard-header">
        <span className="hero-dashboard-dot" />
        Live Project Pulse
      </div>

      <div className="hero-dashboard-grid">
        <div className="hero-dashboard-card hero-dashboard-card--highlight">
          <span className="hero-dashboard-label">Launch Status</span>
          <strong className="hero-dashboard-value">On Track</strong>
          <span className="hero-dashboard-meta status-good">Ready to deploy</span>
        </div>
        <div className="hero-dashboard-card">
          <span className="hero-dashboard-label">Page Speed</span>
          <strong className="hero-dashboard-value">98</strong>
          <span className="hero-dashboard-meta">Performance score</span>
        </div>
        <div className="hero-dashboard-card">
          <span className="hero-dashboard-label">Mobile Score</span>
          <strong className="hero-dashboard-value">100%</strong>
          <span className="hero-dashboard-meta">Responsive layouts</span>
        </div>
        <div className="hero-dashboard-card">
          <span className="hero-dashboard-label">Reply Time</span>
          <strong className="hero-dashboard-value">24h</strong>
          <span className="hero-dashboard-meta">Typical response</span>
        </div>
      </div>

      <div className="hero-dashboard-stack">
        <div className="hero-dashboard-row">
          <span>HTML · CSS · JavaScript</span>
          <span className="hero-dashboard-pill">Core</span>
        </div>
        <div className="hero-dashboard-row">
          <span>Next.js · TypeScript · SEO</span>
          <span className="hero-dashboard-pill hero-dashboard-pill--accent">Stack</span>
        </div>
      </div>
    </aside>
  );
}
