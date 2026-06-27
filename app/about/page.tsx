import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import AboutExtrasSection from "@/components/sections/AboutExtrasSection";
import BioProfileSection from "@/components/sections/BioProfileSection";
import PageCtaSection from "@/components/sections/PageCtaSection";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/layout/PageHeader";
import PageShell from "@/components/layout/PageShell";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Luqman Inamdar | Young Web Creator from Goa",
  description:
    "Learn about Luqman Inamdar — a 13-year-old self-taught web creator from Kalay, Goa. My story, timeline, and passion for building websites for local businesses.",
  path: "/about",
  keywords: [
    "about Luqman Inamdar",
    "young developer Goa",
    "teen web creator India",
    "Kalay web designer",
    "Coastal Code story",
  ],
});

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHeader
        label="About"
        title="Luqman Inamdar — web creator from Goa"
        description="I'm 13, a student at G.H.S. Kalay in Kalay, and passionate about helping businesses go online with fast, beautiful websites."
      />
      <AboutSection />
      <BioProfileSection />
      <AboutExtrasSection />
      <PageCtaSection
        title="Want to work together?"
        description="I'm open to new websites, landing pages, and redesigns for businesses in Goa and across India."
        primaryLabel="Contact Me"
        secondaryHref="/projects"
        secondaryLabel="See My Work"
      />
    </PageShell>
  );
}
