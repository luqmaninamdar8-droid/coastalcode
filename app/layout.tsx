import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import CustomCursor from "@/components/animations/CustomCursor";
import PageTransition from "@/components/animations/PageTransition";
import ScrollProgress from "@/components/animations/ScrollProgress";
import TechBackground from "@/components/animations/tech-background/TechBackground";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import JsonLd from "@/components/JsonLd";
import ThemeScript from "@/components/ThemeScript";
import FaqChatbot from "@/components/FaqChatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  defaultDescription,
  organizationJsonLd,
  personJsonLd,
  siteConfig,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Luqman Inamdar | 13-Year-Old Web Creator from Goa | Coastal Code",
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultDescription,
  keywords: [
    ...siteConfig.keywords,
    "13-year-old web creator from Goa",
    "young developer",
    "HTML, CSS, JavaScript",
    "Goa portfolio",
    "teen web designer India",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  category: "Web Design",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "13-Year-Old Web Creator from Goa | Coastal Code",
    description: defaultDescription,
    images: [
      {
        url: "/images/goa-beach-sunset.jpg",
        width: 1200,
        height: 630,
        alt: "Coastal Code — young web creator portfolio from Goa, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Young Web Creator from Goa | Coastal Code",
    description: defaultDescription,
    images: ["/images/goa-beach-sunset.jpg"],
  },
  robots: {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      data-theme="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="relative min-h-screen font-sans">
        <ThemeScript />
        <TechBackground />
        <div className="relative z-10">
        <JsonLd data={[organizationJsonLd(), personJsonLd(), websiteJsonLd()]} />
        <ScrollProgress />
        <CustomCursor />
        <SiteHeader />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
        <WhatsAppButton />
        <FaqChatbot />
        </div>
      </body>
    </html>
  );
}
