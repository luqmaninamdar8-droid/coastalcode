import type { Metadata } from "next";
import SkillsSection from "@/components/sections/SkillsSection";
import SkillsExtrasSection from "@/components/sections/SkillsExtrasSection";
import PageCtaSection from "@/components/sections/PageCtaSection";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/layout/PageHeader";
import PageShell from "@/components/layout/PageShell";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Skills | HTML, CSS, JavaScript & Next.js",
  description:
    "Explore the web development skills of Luqman Inamdar — HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and more. A young developer from Goa building modern websites.",
  path: "/skills",
  keywords: [
    "web development skills",
    "HTML CSS JavaScript",
    "Next.js developer Goa",
    "React teen developer",
    "Tailwind CSS portfolio",
  ],
});

export default function SkillsPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Skills", path: "/skills" },
        ])}
      />
      <PageHeader
        label="Skills"
        title="Technologies I build with"
        description="From HTML and CSS fundamentals to React and Next.js — here's what I use to ship fast, mobile-friendly websites for clients."
      />
      <SkillsSection />
      <SkillsExtrasSection />
      <PageCtaSection
        title="Need a developer with these skills?"
        description="I can put this stack to work on your business website, landing page, or portfolio."
        primaryLabel="Start a Project"
        secondaryHref="/about"
        secondaryLabel="About Me"
      />
    </PageShell>
  );
}
