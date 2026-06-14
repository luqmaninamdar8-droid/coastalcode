export type NavPage = "home" | "services" | "work" | "about" | "contact";

export const navItems = [
  { key: "services" as const, href: "/services" },
  { key: "work" as const, href: "/work" },
  { key: "about" as const, href: "/about" },
  { key: "contact" as const, href: "/contact", cta: true },
];
