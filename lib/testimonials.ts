export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  business: string;
  projectSlug: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "goataxi",
    quote:
      "Luqman built a clean, fast taxi website for us. Customers can see our services and contact us easily — it looks great on mobile.",
    author: "GoaTaxico Team",
    role: "Taxi Service",
    business: "GoaTaxico",
    projectSlug: "goataxi",
    rating: 5,
  },
  {
    id: "sweetbites",
    quote:
      "Our bakery site shows our cakes beautifully and helps customers reach us on WhatsApp. Professional work from a talented young developer.",
    author: "Sweet Bites by Muskan",
    role: "Custom Cakes & Bakery",
    business: "Sweet Bites",
    projectSlug: "sweetbites",
    rating: 5,
  },
  {
    id: "blissfulspa",
    quote:
      "The spa website explains our services clearly and loads fast. Luqman understood what we needed and delivered a polished result.",
    author: "Blissful Spa & Wellness",
    role: "Wellness & Spa",
    business: "Blissful Spa",
    projectSlug: "blissfulspa",
    rating: 5,
  },
  {
    id: "goencar",
    quote:
      "Goencar needed a modern booking presence — Coastal Code delivered a site we're proud to share with customers across Goa.",
    author: "Goencar Taxi",
    role: "Taxi App",
    business: "Goencar",
    projectSlug: "goencar",
    rating: 5,
  },
];
