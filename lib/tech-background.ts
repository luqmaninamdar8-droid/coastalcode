export const TECH_COLORS = {
  base: "#0A0E1A",
  baseMid: "#121826",
  baseLight: "#1A1F2E",
  cyan: "#00D4FF",
  purple: "#8B5CF6",
  green: "#10B981",
  white: "#E2E8F0",
} as const;

export const CODE_SNIPPETS = [
  `const portfolio = await createNextApp({ theme: "cyber" });`,
  `export type Skill = "React" | "Next.js" | "TypeScript";`,
  `gsap.to(particles, { x: "random(-100, 100)", repeat: -1 });`,
  `interface Project { title: string; live: boolean; stack: string[] }`,
  `async function deploy() { return vercel.push("./dist"); }`,
  `const glow = useMotionValue(0); animate(glow, 1, { duration: 2 });`,
  `function buildSite(client: Client) { return new CoastalCode(client); }`,
  `export default function Page() { return <Hero />; }`,
] as const;

export const SYNTAX_COLORS = {
  keyword: "#8B5CF6",
  string: "#10B981",
  function: "#00D4FF",
  type: "#F472B6",
  plain: "#94A3B8",
} as const;

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function getParticleCount(width: number) {
  if (width < 640) return 70;
  if (width < 1024) return 100;
  return 140;
}

/** @deprecated Used by legacy ColorfulBackground — prefer TechBackground component */
export const techParticles = Array.from({ length: 40 }, (_, id) => ({
  id,
  top: `${(id * 19) % 100}%`,
  left: `${(id * 13) % 100}%`,
  size: 2 + (id % 5) * 2,
  opacity: 0.2 + (id % 6) * 0.1,
  delay: (id % 8) * 0.4,
  duration: 6 + (id % 7),
}));

/** @deprecated Used by legacy ColorfulBackground */
export const techFloatingIcons: Array<{
  src: string;
  top: string;
  left?: string;
  right?: string;
  size: number;
  delay: number;
  duration: number;
}> = [
  { src: "/tech/react.svg", top: "12%", left: "8%", size: 32, delay: 0, duration: 8 },
  { src: "/tech/next.svg", top: "22%", right: "10%", size: 28, delay: 1.2, duration: 9 },
  { src: "/tech/node.svg", top: "68%", left: "6%", size: 30, delay: 0.6, duration: 10 },
  { src: "/tech/ts.svg", top: "58%", right: "8%", size: 26, delay: 1.8, duration: 7 },
];

/** @deprecated Used by legacy ColorfulBackground */
export const techCodeSnippets = [...CODE_SNIPPETS];

/** @deprecated Used by legacy ColorfulBackground */
export const techBinaryColumns = [
  "1010 0110 1101 0011 1001 0101",
  "0110 1001 0010 1110 0100 1011",
  "1100 0011 1010 0111 1000 0101",
  "0011 1100 0101 1011 0110 1000",
  "1001 0110 1100 0010 1010 0111",
  "0101 1000 0111 1101 0010 1010",
] as const;
