export interface WorkCategory {
  count: string;
  title: string;
  text: string;
  video: string;
}

export const workCategories: WorkCategory[] = [
  {
    count: "Resorts · Homestays",
    title: "Hospitality",
    text: "Resorts, homestays, and guesthouses with galleries, booking links, and maps.",
    video: "/videos/hospitality.mp4",
  },
  {
    count: "Menus · Bookings",
    title: "Food & Restaurants",
    text: "Menus, opening hours, reservation forms, and event listings.",
    video: "/videos/food-restaurants.mp4",
  },
  {
    count: "Shops · Catalogs",
    title: "E-Commerce",
    text: "Product catalogs, shopping carts, and checkout flows for local brands.",
    video: "/videos/e-commerce.mp4",
  },
  {
    count: "Services · Booking",
    title: "Beauty & Salons",
    text: "Service menus, stylist profiles, galleries, and WhatsApp booking for salons and spas.",
    video: "/videos/beauty-salons.mp4",
  },
  {
    count: "Portfolios · School",
    title: "Personal & School",
    text: "Portfolio sites, hobby pages, and school project websites.",
    video: "/videos/personal-school.mp4",
  },
];
