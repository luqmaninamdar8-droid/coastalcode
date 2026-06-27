import type { PortfolioProject } from "@/lib/portfolio-projects";

export interface ProjectCaseStudy {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  challenge: string;
  solution: string;
  features: string[];
  demoVideo?: string;
  demoVideoLabel?: string;
}

const caseStudies: Record<string, ProjectCaseStudy> = {
  goataxi: {
    metaTitle: "GoaTaxico Taxi Website | Taxi Website Goa Developer",
    metaDescription:
      "Case study: taxi booking website for GoaTaxico built by Luqman Inamdar — cab service, airport transfers, and mobile-friendly design for Goa businesses.",
    metaKeywords: [
      "taxi website Goa developer",
      "taxi booking website Goa",
      "cab service website India",
      "GoaTaxico website",
      "Coastal Code taxi project",
    ],
    challenge:
      "GoaTaxico needed a professional online presence so travellers could discover cab services, airport transfers, and local rides without relying only on phone calls.",
    solution:
      "I designed and built a fast, mobile-first taxi website with clear service sections, strong calls-to-action, and SEO-friendly structure so customers in Goa can find the business on Google.",
    features: [
      "Mobile-first taxi booking layout",
      "Service & route highlights",
      "Fast loading on 4G networks",
      "SEO metadata for Goa taxi searches",
      "WhatsApp & contact integration",
    ],
    demoVideo: "/videos/hospitality.mp4",
    demoVideoLabel: "Taxi & travel website demo",
  },
  goencar: {
    metaTitle: "Goencar Taxi Website | Goa Cab Service Web Design",
    metaDescription:
      "Goencar taxi app website — built by Coastal Code for a Goa cab service with modern design, booking CTAs, and responsive layout.",
    metaKeywords: [
      "taxi website Goa developer",
      "Goencar website",
      "cab app website Goa",
      "taxi web design India",
    ],
    challenge:
      "Goencar wanted a polished website that matched their taxi brand and made it easy for customers to understand services and get in touch.",
    solution:
      "A responsive Next.js site with bold visuals, category-based service blocks, and clear contact paths — optimized for mobile users searching for cabs in Goa.",
    features: [
      "Brand-aligned taxi UI",
      "Responsive across devices",
      "Service category sections",
      "Performance-focused build",
      "Live deployment on custom domain",
    ],
    demoVideo: "/videos/hospitality.mp4",
    demoVideoLabel: "Taxi service website preview",
  },
  aaravcabs: {
    metaTitle: "Aarav Cabs Website | Taxi Website Developer Goa",
    metaDescription:
      "Aarav Cabs live website case study — taxi service site for Goa with booking focus, built by 13-year-old developer Luqman Inamdar at Coastal Code.",
    metaKeywords: [
      "taxi website Goa developer",
      "Aarav Cabs website",
      "South Goa taxi website",
      "cab booking site India",
    ],
    challenge:
      "Aarav Cabs needed a trustworthy web presence to compete with larger taxi operators and capture local ride bookings.",
    solution:
      "Built a streamlined taxi website highlighting routes, fleet, and instant contact options — designed to convert mobile visitors into customers.",
    features: [
      "Trust-focused taxi landing pages",
      "Mobile-optimized navigation",
      "Clear pricing & service info",
      "Search-friendly page structure",
      "Quick-load image gallery",
    ],
    demoVideo: "/videos/hospitality.mp4",
    demoVideoLabel: "Cab service website demo",
  },
  sweetbites: {
    metaTitle: "Sweet Bites Bakery Website | Bakery Website South Goa",
    metaDescription:
      "Sweet Bites by Muskan bakery website — custom cakes, online orders, and gallery. Built by Coastal Code, web developer from Goa.",
    metaKeywords: [
      "bakery website South Goa",
      "custom cake website Goa",
      "Sweet Bites website",
      "bakery web design India",
      "food website developer Goa",
    ],
    challenge:
      "Sweet Bites needed a beautiful site to showcase custom cakes, attract orders, and present the bakery brand online beyond Instagram alone.",
    solution:
      "A warm, visual bakery website with product galleries, flavour highlights, and easy contact — built to make sweet treats look as good online as they taste.",
    features: [
      "Cake & bakery photo gallery",
      "Custom order call-to-actions",
      "Mobile-friendly menu layout",
      "Brand colours & typography",
      "SEO for local bakery searches",
    ],
    demoVideo: "/videos/food-restaurants.mp4",
    demoVideoLabel: "Bakery & food website demo",
  },
  blissfulspa: {
    metaTitle: "Blissful Spa Website | Spa Website Goa Developer",
    metaDescription:
      "Blissful Spa & Wellness website case study — massage, steam therapy, and booking-focused spa site built by Luqman Inamdar, Coastal Code.",
    metaKeywords: [
      "spa website Goa",
      "wellness website developer India",
      "Blissful Spa website",
      "massage spa web design",
      "spa website developer",
    ],
    challenge:
      "Blissful Spa needed a calming, professional website that explains treatments, builds trust, and encourages bookings for wellness services.",
    solution:
      "Designed a serene spa website with service breakdowns, treatment imagery, and clear booking paths — fast, accessible, and easy to update.",
    features: [
      "Service & treatment pages",
      "Calming wellness aesthetic",
      "Booking & contact CTAs",
      "Mobile spa browsing experience",
      "SEO for spa & wellness keywords",
    ],
    demoVideo: "/videos/beauty-salons.mp4",
    demoVideoLabel: "Spa & wellness website demo",
  },
  "phoenix-cloud": {
    metaTitle: "Phoenix Cloud Technologies Website | Enterprise Web Design",
    metaDescription:
      "Phoenix Cloud Technologies enterprise website — cloud services, modern B2B layout, built by Coastal Code for a tech client in India.",
    metaKeywords: [
      "enterprise website India",
      "cloud company website",
      "Phoenix Cloud website",
      "B2B web design Goa",
      "tech startup website developer",
    ],
    challenge:
      "Phoenix Cloud needed a credible enterprise web presence that communicates cloud services and technology expertise to business clients.",
    solution:
      "A professional enterprise site with structured service sections, modern tech aesthetic, and performance tuned for business decision-makers.",
    features: [
      "Enterprise service showcase",
      "Modern cloud-tech branding",
      "Responsive B2B layout",
      "Fast Next.js architecture",
      "Scalable content structure",
    ],
    demoVideo: "/videos/e-commerce.mp4",
    demoVideoLabel: "Enterprise website demo",
  },
};

export function getCaseStudy(slug: string): ProjectCaseStudy | undefined {
  return caseStudies[slug];
}

export function getProjectMeta(project: PortfolioProject) {
  const study = getCaseStudy(project.id);
  return {
    title: study?.metaTitle ?? `${project.title} | Coastal Code Project`,
    description: study?.metaDescription ?? project.description,
    keywords: study?.metaKeywords ?? project.tags,
  };
}
