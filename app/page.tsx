import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsStrip from "@/components/sections/StatsStrip";
import QuickLinksSection from "@/components/sections/QuickLinksSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import PageCtaSection from "@/components/sections/PageCtaSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "13-Year-Old Web Creator from Goa | Coastal Code Portfolio",
  description:
    "Meet Luqman Inamdar — a 13-year-old young developer from Goa, India. Explore my HTML, CSS, JavaScript, and Next.js projects. Hire a web creator in Kalay for your business website.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "13-year-old web creator from Goa",
    "young developer",
    "HTML, CSS, JavaScript",
    "Goa portfolio",
    "web designer Kalay",
    "teen developer India",
    "Coastal Code",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <HeroSection />
      <StatsStrip />
      <QuickLinksSection />
      <FeaturedProjectsSection />
      <PageCtaSection />
    </>
  );
}
