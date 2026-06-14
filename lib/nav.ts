export type NavPage = "home" | "services" | "work" | "about" | "contact";

export const navItems = [
  { key: "services" as const, href: "/services", label: "Services" },
  { key: "work" as const, href: "/work", label: "Work" },
  { key: "about" as const, href: "/about", label: "About" },
  {
    key: "contact" as const,
    href: "/contact",
    label: "Get in Touch",
    cta: true,
  },
];
