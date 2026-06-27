import type { Metadata } from "next";

export const siteConfig = {
  name: "Coastal Code",
  tagline: "Web creation in Goa, since 2021.",
  author: "Luqman Inamdar",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://coastalcode.vercel.app",
  locale: "en_IN",
  email: "luqmaninamdar8@gmail.com",
  phone: "+918459581540",
  phoneDisplay: "+91 84595 81540",
  whatsappNumber: "918459581540",
  whatsapp: "https://wa.me/918459581540",
  github: "https://github.com/luqmaninamdar8-droid/coastalcode",
  ogImage: "/assets/images/header.jpg",
  address: {
    streetAddress: "Kalay",
    addressLocality: "Kalay",
    addressRegion: "Goa",
    postalCode: "403704",
    addressCountry: "IN",
  },
  keywords: [
    "web design Goa",
    "website developer Goa",
    "Coastal Code",
    "Luqman Inamdar",
    "web developer Kalay",
    "web developer Goa",
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
  "Coastal Code builds fast, mobile-friendly websites for businesses, homestays, restaurants, and personal projects in Goa. Web design and development by Luqman Inamdar — based in Kalay.";

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
      { "@type": "City", name: "Kalay" },
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
      name: "Kalay, Sanguem, Goa, India",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "G.H.S. Kalay",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kalay",
        addressRegion: "Goa",
        addressCountry: "IN",
      },
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

export function faqPageJsonLd(
  items: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function creativeWorkJsonLd(project: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: absoluteUrl(project.url),
    image: absoluteUrl(project.image),
    author: { "@id": `${siteConfig.url}/#person` },
    creator: { "@id": `${siteConfig.url}/#person` },
    datePublished: project.datePublished ?? "2024-01-01",
  };
}

export function blogPostJsonLd(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.date,
    author: { "@id": `${siteConfig.url}/#person` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-IN",
  };
}

export function reviewJsonLd(
  items: Array<{
    author: string;
    reviewBody: string;
    rating: number;
    itemReviewed: string;
  }>,
) {
  return items.map((item) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Organization", name: item.author },
    reviewBody: item.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: item.rating,
      bestRating: 5,
    },
    itemReviewed: {
      "@type": "ProfessionalService",
      name: item.itemReviewed,
    },
  }));
}
