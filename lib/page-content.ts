import { personalBio } from "@/lib/bio";

export const homeStats = [
  { value: "6+", label: "Live client sites", numeric: 6, suffix: "+" },
  { value: "13", label: "Years old", numeric: 13 },
  { value: "2022", label: "Started coding", numeric: 2022 },
  { value: "G.H.S. Kalay", label: "My school" },
] as const;

export const quickLinks = [
  {
    href: "/about",
    title: "About Me",
    description: "My story, timeline, and why I love building for local businesses.",
    icon: "◎",
  },
  {
    href: "/skills",
    title: "Skills",
    description: "HTML, CSS, JavaScript, React, Next.js, and the tools I use daily.",
    icon: "⚡",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Real websites for taxis, spas, bakeries, and enterprise clients.",
    icon: "✦",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Ready to start? Send a message or WhatsApp me for a quick reply.",
    icon: "→",
  },
] as const;

export const aboutValues = [
  {
    title: "Self-taught & curious",
    description:
      "I learn from tutorials, docs, and real projects. Every site teaches me something new about design, speed, and user experience.",
  },
  {
    title: "Built for real businesses",
    description:
      "My work goes live for actual clients — taxi companies, spas, bakeries, and tech teams who need a professional web presence.",
  },
  {
    title: "Mobile-first & fast",
    description:
      "Most visitors browse on phones. I focus on responsive layouts, quick load times, and clear calls to action.",
  },
  {
    title: "Goa roots, global standards",
    description:
      "Based in Kalay, inspired by Goan colour and culture — but built with modern stacks like Next.js and TypeScript.",
  },
] as const;

export const aboutFacts = [
  `Age ${personalBio.age} · student at ${personalBio.school}, ${personalBio.schoolArea}`,
  `Based in ${personalBio.location}`,
  "Stack: HTML, CSS, JavaScript, TypeScript, React, Next.js",
  `Speaks ${personalBio.languages.join(", ")}`,
  "Available for new websites, redesigns, and landing pages",
  "Typical reply time: within 24 hours",
] as const;

export const learningNow = [
  { name: "Advanced TypeScript", note: "Stronger types for bigger projects" },
  { name: "Animation (GSAP & Motion)", note: "Smooth scroll and UI polish" },
  { name: "Core Web Vitals", note: "Faster pages and better SEO scores" },
  { name: "UI/UX patterns", note: "Clearer layouts and better conversions" },
] as const;

export const dailyTools = [
  "VS Code",
  "Next.js App Router",
  "Tailwind CSS",
  "Git & GitHub",
  "Figma",
  "Vercel",
  "Chrome DevTools",
  "Framer Motion",
] as const;

export const projectStats = [
  { value: "6", label: "Live websites shipped", numeric: 6 },
  { value: "4", label: "Industry categories", numeric: 4 },
  { value: "100%", label: "Real client work", numeric: 100, suffix: "%" },
  { value: "Next.js", label: "Primary framework" },
] as const;

export const projectProcess = [
  {
    step: "01",
    title: "Discovery",
    description: "We talk about your business, goals, and what the site needs to do.",
  },
  {
    step: "02",
    title: "Design & build",
    description: "I create a mobile-friendly layout with your brand colours and content.",
  },
  {
    step: "03",
    title: "Review & launch",
    description: "You check the site, we refine details, then go live on your domain.",
  },
  {
    step: "04",
    title: "Support",
    description: "Small updates and fixes after launch — I stay reachable on WhatsApp.",
  },
] as const;

export const contactFaq = [
  {
    question: "What kind of projects do you take?",
    answer:
      "Business websites, landing pages, taxi booking sites, restaurant and bakery pages, spa and salon sites, and portfolio sites for individuals.",
  },
  {
    question: "How long does a website take?",
    answer:
      "A simple landing page can take about a week. Larger sites with multiple sections usually take 2–4 weeks depending on content and revisions.",
  },
  {
    question: "Do you work with clients outside Goa?",
    answer:
      "Yes. I'm based in Kalay but have shipped sites for clients across India. We can meet over WhatsApp or video call.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Your business name, what you offer, any logo or photos you have, and links to sites you like. I can help with the rest.",
  },
] as const;

export const serviceAreas = [
  "Kalay & North Goa",
  "Margao & South Goa",
  "Rest of India (remote)",
] as const;
