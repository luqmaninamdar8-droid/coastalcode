import { techBinaryColumns, techCodeSnippets } from "@/lib/tech-background";

export default function ColorfulBackground() {
  return (
    <div className="colorful-bg" aria-hidden="true">
      <div className="colorful-bg__mesh" />
      <div className="colorful-bg__aurora" />
      <div
        className="colorful-bg__circuit"
        style={{ backgroundImage: "url(/tech/circuit-bg.svg)" }}
      />
      <div className="colorful-bg__dots" />
      <div className="colorful-bg__grid" />
      <div className="colorful-bg__blob colorful-bg__blob--1" />
      <div className="colorful-bg__blob colorful-bg__blob--2" />
      <div className="colorful-bg__blob colorful-bg__blob--3" />
      <div className="colorful-bg__blob colorful-bg__blob--4" />
      <div className="colorful-bg__blob colorful-bg__blob--5" />
      <div className="colorful-bg__network">
        <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <g className="tech-network-lines">
            <line x1="80" y1="120" x2="320" y2="280" />
            <line x1="320" y1="280" x2="540" y2="160" />
            <line x1="540" y1="160" x2="780" y2="320" />
            <line x1="780" y1="320" x2="980" y2="140" />
            <line x1="980" y1="140" x2="1120" y2="360" />
            <line x1="120" y1="520" x2="360" y2="620" />
            <line x1="360" y1="620" x2="620" y2="480" />
            <line x1="620" y1="480" x2="860" y2="640" />
            <line x1="320" y1="280" x2="360" y2="620" />
            <line x1="540" y1="160" x2="620" y2="480" />
          </g>
          <g className="tech-network-nodes">
            <circle cx="80" cy="120" r="4" />
            <circle cx="320" cy="280" r="5" />
            <circle cx="540" cy="160" r="4" />
            <circle cx="780" cy="320" r="5" />
            <circle cx="980" cy="140" r="4" />
            <circle cx="1120" cy="360" r="4" />
            <circle cx="120" cy="520" r="4" />
            <circle cx="360" cy="620" r="5" />
            <circle cx="620" cy="480" r="4" />
            <circle cx="860" cy="640" r="4" />
          </g>
        </svg>
      </div>
      <div className="colorful-bg__code-columns">
        {techCodeSnippets.map((snippet, index) => (
          <span
            key={snippet}
            className="tech-code-line"
            style={{ ["--code-index" as string]: String(index) }}
          >
            {snippet}
          </span>
        ))}
      </div>
      <div className="colorful-bg__binary-columns">
        {techBinaryColumns.map((column, index) => (
          <span
            key={column}
            className="tech-binary-column"
            style={{ ["--binary-index" as string]: String(index) }}
          >
            {column.split(" ").map((chunk) => (
              <span key={chunk}>{chunk}</span>
            ))}
          </span>
        ))}
      </div>
      <div className="colorful-bg__rainbow" />
      <div className="colorful-bg__scanline" />
      <div className="colorful-bg__vignette" />
    </div>
  );
}
