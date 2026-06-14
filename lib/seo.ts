import type { Metadata } from "next";
import type { Project } from "@/lib/projects";

export const siteConfig = {
  name: "Coastal Code",
  tagline: "Web creation in Goa, since 2021.",
  author: "Luqman Inamdar",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://coastalcode.vercel.app",
  locale: "en_IN",
  email: "hello@coastalcode.goa",
  phone: "+919876543210",
  whatsapp: "https://wa.me/919876543210",
  github: "https://github.com/luqmaninamdar8-droid/coastalcode",
  ogImage: "/assets/images/header.jpg",
  address: {
    streetAddress: "Panaji",
    addressLocality: "Panaji",
    addressRegion: "Goa",
    postalCode: "403001",
    addressCountry: "IN",
  },
  keywords: [
    "web design Goa",
    "website developer Goa",
    "Coastal Code",
    "Luqman Inamdar",
    "web developer Panaji",
    "affordable website Goa",
    "restaurant website Goa",
    "hotel website Goa",
    "Next.js developer India",
    "young web developer Goa",
    "small business website Goa",
    "portfolio website Goa",
    "e-commerce website Goa",
  ],
};

export const defaultDescription =
  "Coastal Code builds fast, mobile-friendly websites for businesses, homestays, restaurants, and personal projects in Goa. Web design and development by Luqman Inamdar — based in Panaji.";

type PageMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  noIndex?: boolean;
  absoluteTitle?: boolean;
};

export function absoluteUrl(path = ""): string {
  return `${siteConfig.url}${path}`;
}

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = "",
  image = siteConfig.ogImage,
  imageAlt = `${siteConfig.name} — ${siteConfig.tagline}`,
  keywords,
  noIndex = false,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ?? siteConfig.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.name,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: image.startsWith("http") ? image : absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        image.startsWith("http") ? image : absoluteUrl(image),
      ],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/assets/images/logo.svg"),
    image: absoluteUrl(siteConfig.ogImage),
    description: defaultDescription,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    founder: { "@id": `${siteConfig.url}/#person` },
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    areaServed: [
      { "@type": "City", name: "Panaji" },
      { "@type": "State", name: "Goa" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: [siteConfig.github, siteConfig.whatsapp],
    knowsAbout: [
      "Web Design",
      "Web Development",
      "Next.js",
      "Responsive Design",
      "SEO",
      "E-commerce Websites",
    ],
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.author,
    jobTitle: "Web Designer & Developer",
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    homeLocation: {
      "@type": "Place",
      name: "Panaji, Goa, India",
    },
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    sameAs: [siteConfig.github],
    knowsAbout: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Web Accessibility",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: defaultDescription,
    inLanguage: "en-IN",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: project.image,
    creator: { "@id": `${siteConfig.url}/#person` },
    about: project.category,
    keywords: project.tags.join(", "),
  };
}

export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Coastal Code Web Services",
    itemListElement: [
      {
        "@type": "Service",
        name: "Web Design",
        description:
          "Custom website layouts, colour palettes, and mobile-friendly mockups for businesses in Goa.",
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: "Goa, India",
      },
      {
        "@type": "Service",
        name: "Web Development",
        description:
          "Fast, responsive websites built with HTML, CSS, JavaScript, and Next.js.",
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: "Goa, India",
      },
      {
        "@type": "Service",
        name: "E-commerce Websites",
        description:
          "Online stores and product catalogues for shops and vendors in Goa.",
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: "Goa, India",
      },
      {
        "@type": "Service",
        name: "SEO & Performance",
        description:
          "Search-friendly site structure, metadata, and speed optimization for Google visibility.",
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: "Goa, India",
      },
    ],
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Coastal Code",
    url: absoluteUrl("/contact"),
    description:
      "Contact Luqman Inamdar to start a website project in Goa via email, phone, or WhatsApp.",
    mainEntity: { "@id": `${siteConfig.url}/#organization` },
  };
}
