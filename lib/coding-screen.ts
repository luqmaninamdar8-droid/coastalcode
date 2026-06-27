import { SYNTAX_COLORS } from "@/lib/tech-background";

export type CodeToken = { text: string; color: string };

export type CodeFile = {
  filename: string;
  lines: string[];
};

export const CODE_FILES: CodeFile[] = [
  {
    filename: "app/page.tsx",
    lines: [
      'import HeroSection from "@/components/sections/HeroSection";',
      'import ProjectsSection from "@/components/sections/ProjectsSection";',
      "",
      "export default function HomePage() {",
      "  return (",
      "    <>",
      "      <HeroSection />",
      "      <ProjectsSection />",
      "    </>",
      "  );",
      "}",
    ],
  },
  {
    filename: "components/Hero.tsx",
    lines: [
      '"use client";',
      "",
      "import { motion } from 'framer-motion';",
      "",
      "export default function HeroSection() {",
      "  return (",
      '    <section className="min-h-screen">',
      "      <motion.h1",
      '        initial={{ opacity: 0, y: 24 }}',
      '        animate={{ opacity: 1, y: 0 }}',
      "      >",
      "        Web creator from Goa",
      "      </motion.h1>",
      "    </section>",
      "  );",
      "}",
    ],
  },
  {
    filename: "lib/portfolio.ts",
    lines: [
      "export interface Project {",
      "  title: string;",
      "  url: string;",
      "  tags: string[];",
      "  live: boolean;",
      "}",
      "",
      "export async function getProjects(): Promise<Project[]> {",
      '  const res = await fetch("/api/projects");',
      "  return res.json();",
      "}",
    ],
  },
];

export function tokenizeLine(line: string): CodeToken[] {
  if (!line.trim()) return [{ text: " ", color: SYNTAX_COLORS.plain }];

  const parts: CodeToken[] = [];
  const tokens = line.split(/(\s+|[:=<>{}()[\];,.'"`]|"[^"]*"|'[^']*')/g).filter(Boolean);

  for (const token of tokens) {
    if (/^(import|export|default|from|return|async|await|function|const|let|type|interface|new)$/.test(token)) {
      parts.push({ text: token, color: SYNTAX_COLORS.keyword });
    } else if (/^["'`].*["'`]$/.test(token)) {
      parts.push({ text: token, color: SYNTAX_COLORS.string });
    } else if (/^[A-Z][a-zA-Z]*$/.test(token)) {
      parts.push({ text: token, color: SYNTAX_COLORS.type });
    } else if (/^[a-z][a-zA-Z0-9]*$/.test(token) || /^[a-z][a-zA-Z0-9]*<$/.test(token)) {
      parts.push({ text: token, color: SYNTAX_COLORS.function });
    } else {
      parts.push({ text: token, color: SYNTAX_COLORS.plain });
    }
  }

  return parts;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
