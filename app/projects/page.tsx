import type { Metadata } from "next";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProjectsExtrasSection, {
  ProjectsExtrasFooter,
} from "@/components/sections/ProjectsExtrasSection";
import PageCtaSection from "@/components/sections/PageCtaSection";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/layout/PageHeader";
import PageShell from "@/components/layout/PageShell";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects | Live Client Websites in Goa",
  description:
    "Browse live websites built by Coastal Code — taxi services, bakeries, spas, and enterprise projects across Goa. Real client work by 13-year-old developer Luqman Inamdar.",
  path: "/projects",
  keywords: [
    "web design portfolio Goa",
    "taxi website Goa",
    "restaurant website Goa",
    "spa website Goa",
    "client projects India",
    "Coastal Code work",
  ],
});

export default function ProjectsPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <PageHeader
        label="Projects"
        title="Live client websites"
        description="Every project here is real and live — taxi services, spas, bakeries, and enterprise sites built with Next.js and modern web tools."
      />
      <ProjectsExtrasSection />
      <ProjectsSection />
      <ProjectsExtrasFooter />
      <PageCtaSection
        title="Like what you see?"
        description="I can build a similar site for your business — mobile-friendly, fast, and tailored to your brand."
        primaryLabel="Request a Quote"
        secondaryHref="/skills"
        secondaryLabel="View Skills"
      />
    </PageShell>
  );
}
