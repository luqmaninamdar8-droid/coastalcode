import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import ClientEffects from "@/components/ClientEffects";
import ColorfulBackground from "@/components/ColorfulBackground";
import FloatingStickers from "@/components/FloatingStickers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
  title: {
    default: "Coastal Code — Web Creation in Goa",
    template: "%s — Coastal Code",
  },
  description:
    "Coastal Code — web creation in Goa by Luqman Inamdar. Websites, design, and development built with modern tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body>
        <ColorfulBackground />
        <FloatingStickers />
        <Header />
        <main>{children}</main>
        <Footer />
        <ClientEffects />
      </body>
    </html>
  );
}
