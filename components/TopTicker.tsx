const tickerItems = [
  "Web Design · Goa",
  "Next.js Development",
  "Mobile-First Builds",
  "SEO-Ready Sites",
  "Coastal Code · Kalay",
  "Fast · Clean · Modern",
];

export default function TopTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="top-ticker" aria-hidden="true">
      <div className="top-ticker-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="top-ticker-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
