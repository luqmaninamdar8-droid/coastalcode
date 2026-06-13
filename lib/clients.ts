export interface Client {
  name: string;
  slug: string;
  category: string;
  logo: string;
}

export const clients: Client[] = [
  {
    name: "Azure Bay Resort",
    slug: "azure-bay-resort",
    category: "Hospitality",
    logo: "/clients/azure-bay.svg",
  },
  {
    name: "Susegado Kitchen",
    slug: "susegado-kitchen",
    category: "Restaurant",
    logo: "/clients/susegado.svg",
  },
  {
    name: "Tide & Thread",
    slug: "tide-and-thread",
    category: "E-Commerce",
    logo: "/clients/tide-and-thread.svg",
  },
  {
    name: "Casa Branca Homestay",
    slug: "casa-branca-homestay",
    category: "Hospitality",
    logo: "/clients/casa-branca.svg",
  },
  {
    name: "Mapusa Market Co-op",
    slug: "mapusa-market",
    category: "Local Business",
    logo: "/clients/mapusa-market.svg",
  },
  {
    name: "Palolem Surf School",
    slug: "palolem-surf-school",
    category: "Sports",
    logo: "/clients/palolem-surf.svg",
  },
  {
    name: "Monsoon Labs",
    slug: "monsoon-labs",
    category: "Startup",
    logo: "/clients/monsoon-labs.svg",
  },
];
