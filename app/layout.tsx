import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import ClientEffects from "@/components/ClientEffects";
import ColorfulBackground from "@/components/ColorfulBackground";
import FaqChatbot from "@/components/FaqChatbot";
import FloatingStickers from "@/components/FloatingStickers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  defaultDescription,
  organizationJsonLd,
  personJsonLd,
  siteConfig,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Coastal Code | Web Design & Website Development in Goa, India",
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultDescription,
  keywords: siteConfig.keywords,
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
    title: "Coastal Code | Web Design & Website Development in Goa, India",
    description: defaultDescription,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Coastal Code — web design and development in Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coastal Code | Web Design in Goa",
    description: defaultDescription,
    images: [siteConfig.ogImage],
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
    <html lang="en-IN" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body>
        <JsonLd
          data={[organizationJsonLd(), personJsonLd(), websiteJsonLd()]}
        />
        <ColorfulBackground />
        <FloatingStickers />
        <Header />
        <main>{children}</main>
        <Footer />
        <FaqChatbot />
        <ScrollToTopButton />
        <WhatsAppButton />
        <ClientEffects />
      </body>
    </html>
  );
}
