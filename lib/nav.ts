export type NavPage = "home" | "services" | "work" | "about" | "contact";

export const navItems = [
  { key: "home" as const, href: "/", label: "Home" },
  { key: "work" as const, href: "/work", label: "Work" },
  { key: "services" as const, href: "/services", label: "Services" },
  { key: "about" as const, href: "/about", label: "About" },
  {
    key: "contact" as const,
    href: "/contact",
    label: "Contact",
    cta: true,
  },
];
