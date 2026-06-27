export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "✦",
    skills: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 78 },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    icon: "⚡",
    skills: [
      { name: "React", level: 82 },
      { name: "Next.js", level: 80 },
      { name: "Responsive Design", level: 88 },
      { name: "SEO Basics", level: 75 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Design",
    icon: "◎",
    skills: [
      { name: "Git", level: 70 },
      { name: "Figma", level: 65 },
      { name: "Vercel Deploy", level: 85 },
      { name: "Performance", level: 78 },
    ],
  },
];
