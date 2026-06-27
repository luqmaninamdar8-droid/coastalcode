export type NavPage = "home" | "skills" | "projects" | "about" | "contact";

export const navItems = [
  { key: "home" as const, href: "/", label: "Home" },
  { key: "about" as const, href: "/about", label: "About" },
  { key: "skills" as const, href: "/skills", label: "Skills" },
  { key: "projects" as const, href: "/projects", label: "Projects" },
  {
    key: "contact" as const,
    href: "/contact",
    label: "Contact",
    cta: true,
  },
];
