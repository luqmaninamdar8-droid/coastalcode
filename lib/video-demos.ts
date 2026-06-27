export interface VideoDemo {
  id: string;
  title: string;
  category: string;
  video: string;
  poster: string;
  projectSlug: string;
  href: string;
}

export const videoDemos: VideoDemo[] = [
  {
    id: "taxi-demo",
    title: "Taxi & travel websites",
    category: "Taxi & Travel",
    video: "/videos/hospitality.mp4",
    poster: "/images/goataxi-cab.jpg",
    projectSlug: "goataxi",
    href: "/projects/goataxi",
  },
  {
    id: "bakery-demo",
    title: "Bakery & food sites",
    category: "Food & Bakery",
    video: "/videos/food-restaurants.mp4",
    poster: "/images/sweetbites-bakery.jpg",
    projectSlug: "sweetbites",
    href: "/projects/sweetbites",
  },
  {
    id: "spa-demo",
    title: "Spa & wellness sites",
    category: "Wellness",
    video: "/videos/beauty-salons.mp4",
    poster: "/images/blissfulspa-spa.jpg",
    projectSlug: "blissfulspa",
    href: "/projects/blissfulspa",
  },
  {
    id: "enterprise-demo",
    title: "Enterprise & tech",
    category: "Enterprise",
    video: "/videos/e-commerce.mp4",
    poster: "/images/goa-tech-workspace.jpg",
    projectSlug: "phoenix-cloud",
    href: "/projects/phoenix-cloud",
  },
];
