export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const aboutTimeline: TimelineEvent[] = [
  {
    year: "2022",
    title: "First curiosity",
    description:
      "Saw my cousin edit a school website and knew I wanted to build something like that myself.",
  },
  {
    year: "2023",
    title: "Learning the basics",
    description:
      "Started freeCodeCamp and YouTube tutorials while studying at G.H.S. Kalay. Built my first messy Hello World page.",
  },
  {
    year: "2024",
    title: "First project live",
    description:
      "At age 13, published my first real project — a fun page about Goa's famous mangoes.",
  },
  {
    year: "2025",
    title: "Real client websites",
    description:
      "Shipped live sites for local businesses — taxi services, spas, bakeries, and more across Goa and India.",
  },
  {
    year: "2026",
    title: "Coastal Code portfolio",
    description:
      "Designed and coded this portfolio with Next.js, TypeScript, GSAP, and Framer Motion — made in Goa.",
  },
];
