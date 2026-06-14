export interface TechItem {
  id: string;
  name: string;
  label: string;
  icon: string;
  color: string;
}

export const techStack: TechItem[] = [
  { id: "html5", name: "HTML5", label: "Structure", icon: "/tech/html5.svg", color: "#E44D26" },
  { id: "css3", name: "CSS3", label: "Styling", icon: "/tech/css3.svg", color: "#1572B6" },
  { id: "javascript", name: "JavaScript", label: "Interactivity", icon: "/tech/javascript.svg", color: "#F7DF1E" },
  { id: "typescript", name: "TypeScript", label: "Type Safety", icon: "/tech/typescript.svg", color: "#3178C6" },
  { id: "react", name: "React", label: "UI Library", icon: "/tech/react.svg", color: "#61DAFB" },
  { id: "nextjs", name: "Next.js", label: "Framework", icon: "/tech/nextjs.svg", color: "#ffffff" },
  { id: "git", name: "Git", label: "Version Control", icon: "/tech/git.svg", color: "#F05032" },
  { id: "figma", name: "Figma", label: "Design", icon: "/tech/figma.svg", color: "#A259FF" },
  { id: "terminal", name: "Terminal", label: "CLI Tools", icon: "/tech/terminal.svg", color: "#38bdf8" },
  { id: "api", name: "APIs", label: "Integrations", icon: "/tech/api.svg", color: "#818cf8" },
];

export const techShowcaseImages = [
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    alt: "Developer writing code on a laptop",
    caption: "Clean, hand-written code",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    alt: "Programming code on screen",
    caption: "Modern web development",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd95375aa0?auto=format&fit=crop&w=800&q=80",
    alt: "Laptop with code editor open",
    caption: "Built for performance",
  },
];
