export const techCodeSnippets = [
  "const app = create();",
  "npm run build",
  "export default Page",
  "<section className='hero' />",
  "use client",
  "git push origin main",
  "next/image",
  "interface Props {",
  "return <main>{children}</main>",
  "async function fetchData()",
  "tailwindcss @apply",
  "responsive design",
  "SEO metadata",
  "JSON-LD schema",
  "TypeScript strict",
  "display: grid",
  "transform: translateY()",
  "prefers-reduced-motion",
  "generateStaticParams()",
  "aria-label='nav'",
  "useEffect(() => {}, [])",
  "const { slug } = await params",
  "backdrop-filter: blur()",
  "linear-gradient(135deg",
  "export const metadata",
  "Suspense fallback",
  "dynamic import()",
  "Web Vitals 100",
  "mobile-first CSS",
  "semantic HTML5",
];

export const techBinaryColumns = [
  "10110101 01101001 11010010",
  "01001110 01000101 01011000",
  "01010100 00101100 01101010",
  "11001010 10110010 01100101",
  "00110101 10010110 01000001",
  "01110011 00101100 01110011",
  "01100101 01110010 00100000",
  "01101100 01101111 01110110",
];

export const techFloatingIcons: Array<{
  src: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  left?: string;
  right?: string;
}> = [
  { src: "/tech/react.svg", top: "12%", left: "8%", size: 44, delay: 0, duration: 22 },
  { src: "/tech/nextjs.svg", top: "22%", right: "6%", size: 40, delay: -4, duration: 26 },
  { src: "/tech/typescript.svg", top: "58%", left: "4%", size: 38, delay: -8, duration: 20 },
  { src: "/tech/html5.svg", top: "72%", right: "10%", size: 36, delay: -2, duration: 24 },
  { src: "/tech/css3.svg", top: "38%", right: "3%", size: 34, delay: -6, duration: 28 },
  { src: "/tech/javascript.svg", top: "85%", left: "12%", size: 32, delay: -10, duration: 23 },
  { src: "/tech/git.svg", top: "48%", left: "2%", size: 30, delay: -3, duration: 25 },
  { src: "/tech/terminal.svg", top: "8%", right: "14%", size: 36, delay: -7, duration: 21 },
];

export const techParticles = Array.from({ length: 48 }, (_, index) => ({
  id: index,
  top: `${(index * 17 + 7) % 100}%`,
  left: `${(index * 23 + 11) % 100}%`,
  size: 2 + (index % 4),
  delay: -(index * 0.7),
  duration: 4 + (index % 6),
  opacity: 0.25 + (index % 5) * 0.12,
}));
