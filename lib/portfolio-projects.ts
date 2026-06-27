import { clients } from "@/lib/clients";

export type ProjectFilter = "all" | "taxi" | "wellness" | "food" | "enterprise";

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  filter: ProjectFilter;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
  imageSecondary?: string;
  imageSecondaryAlt?: string;
  tags: string[];
}

export const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "taxi", label: "Taxi & Travel" },
  { id: "wellness", label: "Wellness" },
  { id: "food", label: "Food & Bakery" },
  { id: "enterprise", label: "Enterprise" },
];

const filterMap: Record<string, ProjectFilter> = {
  goataxi: "taxi",
  goencar: "taxi",
  aaravcabs: "taxi",
  blissfulspa: "wellness",
  sweetbites: "food",
  "phoenix-cloud": "enterprise",
};

const imageMap: Record<string, string> = {
  goataxi: "/images/goataxi-cab.jpg",
  goencar: "/images/goencar-cab.jpg",
  aaravcabs: "/images/aaravcabs-cab.jpg",
  blissfulspa: "/images/blissfulspa-spa.jpg",
  sweetbites: "/images/sweetbites-bakery.jpg",
  "phoenix-cloud": "/images/goa-tech-workspace.jpg",
};

const taxiSlugs = new Set(["goataxi", "goencar", "aaravcabs"]);

function projectDescription(slug: string, name: string): string {
  if (slug === "sweetbites") {
    return "Custom cakes and bakery website for Sweet Bites by Muskan — online orders, gallery, and sweet treats.";
  }
  if (slug === "blissfulspa") {
    return "Massage and wellness spa website for Blissful Spa — services, booking, and steam therapy in GTB Nagar, Delhi.";
  }
  if (taxiSlugs.has(slug)) {
    return `Taxi booking website for ${name} — cab service, airport transfers, and local rides in Goa.`;
  }
  return `Live website for ${name} — built with modern HTML, CSS, JavaScript, and Next.js.`;
}

function projectAlt(slug: string, name: string): string {
  if (slug === "sweetbites") {
    return "Custom celebration cake — Sweet Bites by Muskan bakery website project";
  }
  if (slug === "blissfulspa") {
    return "Spa hair wash and wellness treatment — Blissful Spa & Wellness website project";
  }
  if (taxiSlugs.has(slug)) {
    return `Taxi cab service — ${name} website project by Luqman Inamdar, web creator from Goa`;
  }
  return `${name} website project by Luqman Inamdar, web creator from Goa`;
}

function projectTags(slug: string): string[] {
  if (slug === "sweetbites") return ["Next.js", "Bakery", "Custom Cakes"];
  if (slug === "blissfulspa") return ["Next.js", "Spa", "Wellness"];
  if (taxiSlugs.has(slug)) return ["Next.js", "Taxi", "Booking"];
  return ["Next.js", "Responsive", "SEO"];
}

export const portfolioProjects: PortfolioProject[] = clients.map((client) => ({
  id: client.slug,
  title: client.name,
  category: client.category,
  filter: filterMap[client.slug] ?? "all",
  description: projectDescription(client.slug, client.name),
  url: client.url,
  image: imageMap[client.slug] ?? "/images/goa-beach-sunset.jpg",
  imageAlt: projectAlt(client.slug, client.name),
  tags: projectTags(client.slug),
}));

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.id === slug);
}

export function getProjectSlugs(): string[] {
  return portfolioProjects.map((project) => project.id);
}
