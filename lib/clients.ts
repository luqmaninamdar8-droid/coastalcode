export interface Client {
  name: string;
  slug: string;
  category: string;
  logo: string;
  url: string;
}

export const clients: Client[] = [
  {
    name: "GoaTaxico",
    slug: "goataxi",
    category: "Taxi Service",
    logo: "/clients/goataxi.svg",
    url: "https://goataxi.co/",
  },
  {
    name: "Phoenix Cloud Technologies",
    slug: "phoenix-cloud",
    category: "Enterprise Cloud",
    logo: "/clients/phoenix-cloud.svg",
    url: "https://swami-theta.vercel.app/",
  },
  {
    name: "Goencar Taxi",
    slug: "goencar",
    category: "Taxi App",
    logo: "/clients/goencar.svg",
    url: "https://goencar.in/",
  },
  {
    name: "Sweet Bites by Muskan",
    slug: "sweetbites",
    category: "Custom Cakes",
    logo: "/clients/sweetbites.svg",
    url: "https://sweetbites.me/",
  },
  {
    name: "Blissful Spa & Wellness",
    slug: "blissfulspa",
    category: "Wellness & Spa",
    logo: "/clients/blissfulspa.svg",
    url: "https://blissfulspa.co.in/",
  },
  {
    name: "Aarav Cabs",
    slug: "aaravcabs",
    category: "Taxi Service",
    logo: "/clients/aaravcabs.svg",
    url: "https://aaravcabs.in/",
  },
];
