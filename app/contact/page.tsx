import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import ContactExtrasSection from "@/components/sections/ContactExtrasSection";
import PageCtaSection from "@/components/sections/PageCtaSection";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/layout/PageHeader";
import PageShell from "@/components/layout/PageShell";
import { contactFaq } from "@/lib/page-content";
import {
  breadcrumbJsonLd,
  contactPageJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  siteConfig,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact | Hire a Web Creator in Goa",
  description:
    "Get in touch with Coastal Code for a new website or redesign. WhatsApp, email, or the contact form — Luqman Inamdar, young web creator based in Kalay, Goa.",
  path: "/contact",
  keywords: [
    "hire web developer Goa",
    "contact Coastal Code",
    "website quote Goa",
    "web designer Kalay contact",
    "teen developer hire India",
  ],
});

export default function ContactPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          contactPageJsonLd(),
          faqPageJsonLd(
            contactFaq.map((item) => ({
              question: item.question,
              answer: item.answer,
            })),
          ),
        ]}
      />
      <PageHeader
        label="Contact"
        title="Let's talk about your project"
        description="Send a message, email, or WhatsApp — I typically reply within 24 hours. Based in Kalay, available for clients across Goa and India."
      />
      <ContactSection />
      <ContactExtrasSection />
      <PageCtaSection
        title="Prefer WhatsApp?"
        description="For the fastest reply, message me directly — great for quick questions or project ideas."
        primaryHref={siteConfig.whatsapp}
        primaryLabel="WhatsApp Me"
        secondaryHref="/projects"
        secondaryLabel="Browse Projects"
      />
    </PageShell>
  );
}
