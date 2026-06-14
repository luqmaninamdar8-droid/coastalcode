import Image from "next/image";
import {
  techBinaryColumns,
  techCodeSnippets,
  techFloatingIcons,
  techParticles,
} from "@/lib/tech-background";

export default function ColorfulBackground() {
  return (
    <div className="colorful-bg" aria-hidden="true">
      <div className="colorful-bg__mesh" />
      <div className="colorful-bg__aurora" />
      <div className="colorful-bg__aurora colorful-bg__aurora--2" />

      <div className="colorful-bg__perspective">
        <div className="colorful-bg__floor-grid" />
      </div>

      <div
        className="colorful-bg__circuit"
        style={{ backgroundImage: "url(/tech/circuit-bg.svg)" }}
      />
      <div className="colorful-bg__hex-grid" />
      <div className="colorful-bg__dots" />
      <div className="colorful-bg__grid" />

      <div className="colorful-bg__particles">
        {techParticles.map((particle) => (
          <span
            key={particle.id}
            className="tech-particle"
            style={{
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              ["--particle-delay" as string]: `${particle.delay}s`,
              ["--particle-duration" as string]: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="colorful-bg__blob colorful-bg__blob--1" />
      <div className="colorful-bg__blob colorful-bg__blob--2" />
      <div className="colorful-bg__blob colorful-bg__blob--3" />
      <div className="colorful-bg__blob colorful-bg__blob--4" />
      <div className="colorful-bg__blob colorful-bg__blob--5" />

      <div className="colorful-bg__icons">
        {techFloatingIcons.map((icon) => (
          <div
            key={icon.src}
            className="tech-bg-icon"
            style={{
              top: icon.top,
              left: icon.left,
              right: icon.right,
              ["--icon-delay" as string]: `${icon.delay}s`,
              ["--icon-duration" as string]: `${icon.duration}s`,
            }}
          >
            <Image
              src={icon.src}
              alt=""
              width={icon.size}
              height={icon.size}
              aria-hidden
            />
          </div>
        ))}
      </div>

      <div className="colorful-bg__network">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g className="tech-network-lines">
            <line x1="60" y1="100" x2="280" y2="220" />
            <line x1="280" y1="220" x2="480" y2="120" />
            <line x1="480" y1="120" x2="720" y2="280" />
            <line x1="720" y1="280" x2="920" y2="100" />
            <line x1="920" y1="100" x2="1100" y2="240" />
            <line x1="1100" y1="240" x2="1320" y2="140" />
            <line x1="100" y1="480" x2="340" y2="580" />
            <line x1="340" y1="580" x2="580" y2="420" />
            <line x1="580" y1="420" x2="820" y2="620" />
            <line x1="820" y1="620" x2="1060" y2="500" />
            <line x1="1060" y1="500" x2="1280" y2="680" />
            <line x1="280" y1="220" x2="340" y2="580" />
            <line x1="480" y1="120" x2="580" y2="420" />
            <line x1="720" y1="280" x2="820" y2="620" />
            <line x1="920" y1="100" x2="1060" y2="500" />
          </g>
          <g className="tech-network-nodes">
            {[ 
              [60, 100], [280, 220], [480, 120], [720, 280], [920, 100],
              [1100, 240], [1320, 140], [100, 480], [340, 580], [580, 420],
              [820, 620], [1060, 500], [1280, 680],
            ].map(([cx, cy], index) => (
              <g key={`${cx}-${cy}`}>
                <circle cx={cx} cy={cy} r="8" className="tech-node-ring" style={{ ["--node-i" as string]: String(index) }} />
                <circle cx={cx} cy={cy} r="3.5" className="tech-node-core" style={{ ["--node-i" as string]: String(index) }} />
              </g>
            ))}
          </g>
          <g className="tech-data-pulses">
            <circle r="3" className="tech-data-pulse tech-data-pulse--1" />
            <circle r="3" className="tech-data-pulse tech-data-pulse--2" />
            <circle r="3" className="tech-data-pulse tech-data-pulse--3" />
          </g>
        </svg>
      </div>

      <div className="colorful-bg__code-columns">
        {techCodeSnippets.map((snippet, index) => (
          <span
            key={`${snippet}-${index}`}
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

      <div className="colorful-bg__beam" />
      <div className="colorful-bg__rainbow" />
      <div className="colorful-bg__scanline" />
      <div className="colorful-bg__noise" />
      <div className="colorful-bg__vignette" />
    </div>
  );
}
