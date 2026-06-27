import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsStrip from "@/components/sections/StatsStrip";
import ClientMarquee from "@/components/sections/ClientMarquee";
import VideoDemosSection from "@/components/sections/VideoDemosSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import QuickLinksSection from "@/components/sections/QuickLinksSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import PageCtaSection from "@/components/sections/PageCtaSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata, reviewJsonLd, siteConfig } from "@/lib/seo";
import { testimonials } from "@/lib/testimonials";

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
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }]),
          ...reviewJsonLd(
            testimonials.map((t) => ({
              author: t.author,
              reviewBody: t.quote,
              rating: t.rating,
              itemReviewed: siteConfig.name,
            })),
          ),
        ]}
      />
      <HeroSection />
      <StatsStrip />
      <ClientMarquee />
      <VideoDemosSection />
      <TestimonialsSection />
      <QuickLinksSection />
      <FeaturedProjectsSection />
      <PageCtaSection />
    </>
  );
}
