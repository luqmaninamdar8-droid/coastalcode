export interface ProjectMeta {
  label: string;
  value: string;
}

export interface ProjectSection {
  title: string;
  paragraphs?: string[];
  features?: string[];
  result?: string;
}

export interface Project {
  slug: string;
  title: string;
  tag: string;
  category: string;
  description: string;
  cardDescription: string;
  image: string;
  imageAlt: string;
  tags: string[];
  meta: ProjectMeta[];
  technologies: string[];
  pagesBuilt?: string;
  sidebarNote?: { title: string; text: string };
  sections: ProjectSection[];
  ctaLabel: string;
}

export const projects: Project[] = [
  {
    slug: "azure-bay-resort",
    title: "Azure Bay Resort",
    tag: "Hospitality · Client Project",
    category: "Hospitality",
    description:
      "A luxury beachfront resort website with room galleries, booking links, and a mobile-first design built for guests in Goa.",
    cardDescription:
      "Luxury beachfront resort site with booking integration and gallery.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Azure Bay Resort beachfront pool",
    tags: ["HTML", "CSS", "JavaScript"],
    meta: [
      { label: "Role", value: "Designer & Developer" },
      { label: "Timeline", value: "2 weeks" },
      { label: "Pages", value: "5 pages" },
      { label: "Year", value: "2025" },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox", "Netlify"],
    pagesBuilt: "Home, Rooms, Gallery, About, Contact",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Azure Bay Resort needed a professional online presence to showcase their beachfront property and drive direct bookings. I designed and built a 5-page website from scratch using HTML, CSS and JavaScript.",
          "The goal was to help guests explore rooms, view photos, and contact the resort easily — especially on mobile devices.",
        ],
      },
      {
        title: "The challenge",
        paragraphs: [
          "The resort had no website and relied only on travel booking platforms. They wanted a beautiful site that felt as premium as the property itself, without a complicated CMS.",
        ],
      },
      {
        title: "Key features",
        features: [
          "Full-width photo gallery with lightbox effect",
          "Room cards with pricing and amenity icons",
          "Embedded Google Map with directions from Panaji",
          "Sticky WhatsApp booking button on mobile",
          "Fast loading with optimised images",
        ],
      },
      {
        title: "Result",
        result:
          "Within a month of launch, the resort reported more direct WhatsApp enquiries and fewer dependency on third-party booking fees.",
      },
    ],
    ctaLabel: "Start a Similar Project",
  },
  {
    slug: "susegado-kitchen",
    title: "Susegado Kitchen",
    tag: "Restaurant · Client Project",
    category: "Restaurant",
    description:
      "A Goan-Portuguese fusion restaurant website with menu, reservations, and events for tourists in North Goa.",
    cardDescription:
      "Goan-Portuguese fusion restaurant with menu, reservations, and events.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Susegado Kitchen restaurant interior",
    tags: ["HTML", "CSS", "Forms"],
    meta: [
      { label: "Role", value: "Designer & Developer" },
      { label: "Timeline", value: "2 weeks" },
      { label: "Pages", value: "4 pages" },
      { label: "Year", value: "2025" },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Forms", "Grid"],
    pagesBuilt: "Home, Menu, Events, Contact",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Susegado Kitchen is a popular fusion restaurant in North Goa. The owner wanted a website where customers could browse the menu, see opening hours, and book a table online.",
        ],
      },
      {
        title: "The challenge",
        paragraphs: [
          "They only had an Instagram page. Tourists couldn't easily find the menu or reserve tables. The site needed to work perfectly on phones since most visitors browse on mobile.",
        ],
      },
      {
        title: "Key features",
        features: [
          "Filterable digital menu by category",
          "Online reservation form with date picker",
          "Events and live music schedule section",
          "Google Maps with parking directions",
          "Warm colour palette matching the restaurant vibe",
        ],
      },
      {
        title: "Result",
        result:
          "The café owner said online reservations increased and customers stopped calling just to ask for the menu.",
      },
    ],
    ctaLabel: "Start a Similar Project",
  },
  {
    slug: "tide-and-thread",
    title: "Tide & Thread",
    tag: "E-Commerce · Client Project",
    category: "E-Commerce",
    description:
      "A full e-commerce site for a Goan beachwear brand with product pages, shopping cart, and checkout.",
    cardDescription:
      "Coastal fashion brand store with 200+ products and custom checkout.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tide and Thread e-commerce store",
    tags: ["HTML", "CSS", "JS", "Cart"],
    meta: [
      { label: "Role", value: "Designer & Developer" },
      { label: "Timeline", value: "3 weeks" },
      { label: "Products", value: "200+ items" },
      { label: "Year", value: "2025" },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Cart Logic"],
    pagesBuilt: "Home, Shop, Product, Cart, Checkout",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Tide & Thread is a Goan beachwear brand selling t-shirts, shorts, and accessories. I built a full e-commerce site with product pages, a shopping cart, and a smooth checkout experience.",
        ],
      },
      {
        title: "The challenge",
        paragraphs: [
          "They were selling only through Instagram DMs. Managing 200+ products manually was chaotic. They needed a proper store with filters, cart, and UPI payments.",
        ],
      },
      {
        title: "Key features",
        features: [
          "Product grid with filters by size, colour, and category",
          "Shopping cart with add, remove, and quantity controls",
          "Checkout page with UPI and card payment options",
          "Mobile-first design for phone shoppers",
          "Product detail pages with image zoom",
        ],
      },
      {
        title: "Result",
        result:
          "Online sales grew steadily and the brand could finally showcase their full catalogue in one place.",
      },
    ],
    ctaLabel: "Start a Similar Project",
  },
  {
    slug: "monsoon-labs",
    title: "Monsoon Labs",
    tag: "Startup · Client Project",
    category: "Startup",
    description:
      "A polished SaaS landing page with animations, pricing tiers, and lead capture for a weather analytics startup.",
    cardDescription: "SaaS landing page with animations, pricing, and lead capture.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Monsoon Labs SaaS dashboard",
    tags: ["HTML", "CSS", "Animations"],
    meta: [
      { label: "Role", value: "Designer & Developer" },
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "Landing page" },
      { label: "Year", value: "2025" },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Animations", "Forms"],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Monsoon Labs is a Bangalore-based startup building weather analytics tools. They needed a polished landing page to explain their product and collect early sign-ups.",
        ],
      },
      {
        title: "The challenge",
        paragraphs: [
          "The page had to feel modern and trustworthy — like a real tech product — while being built entirely with HTML, CSS and JavaScript without frameworks.",
        ],
      },
      {
        title: "Key features",
        features: [
          "Hero section with animated statistics counters",
          "Three-tier pricing table with toggle",
          "Feature comparison grid with icons",
          "Email sign-up form with validation",
          "Smooth scroll animations on reveal",
        ],
      },
      {
        title: "Result",
        result:
          "The startup used the page for their launch and collected over 100 sign-ups in the first week.",
      },
    ],
    ctaLabel: "Start a Similar Project",
  },
  {
    slug: "casa-branca-homestay",
    title: "Casa Branca Homestay",
    tag: "Hospitality · Client Project",
    category: "Hospitality",
    description:
      "A warm guesthouse website with room gallery, reviews, and WhatsApp booking for a family-run homestay in South Goa.",
    cardDescription:
      "Charming guesthouse site with room gallery, reviews, and WhatsApp booking.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Casa Branca Homestay cozy room",
    tags: ["HTML", "CSS", "WhatsApp"],
    meta: [
      { label: "Role", value: "Designer & Developer" },
      { label: "Timeline", value: "2 weeks" },
      { label: "Pages", value: "4 pages" },
      { label: "Year", value: "2025" },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "WhatsApp API"],
    pagesBuilt: "Home, Rooms, Reviews, Contact",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Casa Branca is a family-run homestay in South Goa. Maria D'Souza wanted a warm, welcoming website that felt personal — like staying at a friend's home.",
        ],
      },
      {
        title: "The challenge",
        paragraphs: [
          "Competing with big hotels on booking sites was expensive. They needed a direct channel where guests could see photos, read reviews, and book via WhatsApp.",
        ],
      },
      {
        title: "Key features",
        features: [
          "Room gallery with photo slideshow",
          "Guest review cards with star ratings",
          "One-click WhatsApp booking button",
          "Local attractions and beach guide section",
          "Multilingual welcome message",
        ],
      },
      {
        title: "Result",
        result:
          '"Guests now find us on Google and book through WhatsApp. Very impressive for his age!" — Maria D\'Souza, owner.',
      },
    ],
    ctaLabel: "Start a Similar Project",
  },
  {
    slug: "mapusa-market",
    title: "Mapusa Market Co-op",
    tag: "Local Business · Client Project",
    category: "Local Business",
    description:
      "A vendor directory website for the famous Friday market in Goa with stall pages and online ordering.",
    cardDescription:
      "Community marketplace connecting local vendors with customers online.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mapusa Market fresh produce stall",
    tags: ["HTML", "CSS", "Grid"],
    meta: [
      { label: "Role", value: "Designer & Developer" },
      { label: "Timeline", value: "2 weeks" },
      { label: "Vendors", value: "25+ stalls" },
      { label: "Year", value: "2025" },
    ],
    technologies: ["HTML5", "CSS3", "CSS Grid", "JavaScript"],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Mapusa Market Co-op is a group of local vendors at the famous Friday market in Goa. They wanted a simple directory website where customers could browse stalls and order fresh produce online.",
        ],
      },
      {
        title: "The challenge",
        paragraphs: [
          "Each vendor had different products and contact methods. The site needed a clean grid layout that was easy for elderly vendors to understand and update.",
        ],
      },
      {
        title: "Key features",
        features: [
          "Vendor directory with search and category filters",
          "Individual stall pages with product photos",
          "Click-to-call and WhatsApp order buttons",
          "CSS Grid layout for responsive card display",
          "Market hours and location map",
        ],
      },
      {
        title: "Result",
        result: "Vendors reported more phone orders during the week, not just on market day.",
      },
    ],
    ctaLabel: "Start a Similar Project",
  },
  {
    slug: "mango-season",
    title: "Mango Season",
    tag: "Personal · First Project",
    category: "Personal",
    description:
      "My first real project — a fun single-page site about Goa's famous mangoes that started my coding journey.",
    cardDescription: "My first real project — a fun page about Goa's best mangoes.",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fresh ripe mangoes from Goa",
    tags: ["HTML", "CSS", "First Project"],
    meta: [
      { label: "Role", value: "Designer & Developer" },
      { label: "Timeline", value: "1 week" },
      { label: "Type", value: "Single page" },
      { label: "Year", value: "2024" },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    sidebarNote: {
      title: "Special note",
      text: "My first project — where my coding journey began. Made in Goa.",
    },
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This was the site that started everything. I was 13 and wanted to practice HTML, CSS and JavaScript on something fun — so I built a page about Goa's famous mangoes.",
          "It wasn't for a client. It was just me, my laptop, and a love for Alphonso mangoes after mango season in Goa.",
        ],
      },
      {
        title: "The challenge",
        paragraphs: [
          "I had never deployed a website before. I didn't know flexbox well. But I had an idea and free time after school.",
        ],
      },
      {
        title: "What I built",
        features: [
          "Mango variety guide with photos and descriptions",
          "CSS flexbox layout for responsive image grid",
          "JavaScript toggle for a simple photo gallery",
          "Warm yellow and orange colour theme",
          "Deployed live on Netlify for the first time",
        ],
      },
      {
        title: "What I learned",
        features: [
          "How to structure a page with semantic HTML",
          "CSS flexbox for layouts and responsive images",
          "Adding simple JavaScript for interactivity",
          "Deploying a site live — and sharing the link with friends",
        ],
      },
      {
        title: "Result",
        result:
          "Friends shared it, teachers noticed it, and I knew I wanted to keep building websites. This project changed everything for me.",
      },
    ],
    ctaLabel: "Start Your First Project",
  },
  {
    slug: "science-fair-2025",
    title: "Science Fair 2025",
    tag: "School · Team Project",
    category: "School",
    description:
      "A school project site showcasing our team's renewable energy experiment — winner of first place.",
    cardDescription:
      "School project site showcasing our team's renewable energy experiment.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students at science fair project",
    tags: ["HTML", "CSS", "School"],
    meta: [
      { label: "Role", value: "Lead Developer" },
      { label: "Timeline", value: "1 week" },
      { label: "Team", value: "4 students" },
      { label: "Year", value: "2025" },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Print CSS"],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Our school science team built a solar-powered water purifier and needed a website to present our research, methodology, and results at the Panaji Science Fair 2025.",
        ],
      },
      {
        title: "The challenge",
        paragraphs: [
          "We had one week before the fair. The site had to explain complex science simply, include data charts, and work on the judge's tablets during presentation.",
        ],
      },
      {
        title: "Key features",
        features: [
          "Project overview with hypothesis and method",
          "Results section with data tables and charts",
          "Team member profiles with photos",
          "Clean, readable layout for judges on tablets",
          "Print-friendly stylesheet for handouts",
        ],
      },
      {
        title: "Result",
        result:
          "We won first place at the science fair. Mr. Patil, our science teacher, said the website made our project stand out from the rest.",
      },
    ],
    ctaLabel: "Need a School Project Site?",
  },
  {
    slug: "palolem-surf-school",
    title: "Palolem Surf School",
    tag: "Sports · Client Project",
    category: "Sports",
    description:
      "A vibrant surf school website with lesson packages, instructor profiles, and easy WhatsApp booking for tourists visiting South Goa.",
    cardDescription:
      "Surf lesson site with packages, instructor profiles, and WhatsApp booking.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Surfer riding a wave at Palolem Beach",
    tags: ["HTML", "CSS", "WhatsApp"],
    meta: [
      { label: "Role", value: "Designer & Developer" },
      { label: "Timeline", value: "10 days" },
      { label: "Pages", value: "4 pages" },
      { label: "Year", value: "2025" },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Grid", "WhatsApp"],
    pagesBuilt: "Home, Lessons, Instructors, Contact",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Palolem Surf School wanted a website that matched the energy of their beach lessons — bright, fast, and easy to book from a phone after arriving in Goa.",
          "I built a 4-page site with lesson tiers, safety info, and a gallery of instructors and students catching their first waves.",
        ],
      },
      {
        title: "The challenge",
        paragraphs: [
          "Most enquiries came from tourists on mobile with patchy data. The site had to load quickly, show prices clearly, and make booking a lesson feel as simple as sending a WhatsApp message.",
        ],
      },
      {
        title: "Key features",
        features: [
          "Lesson packages with beginner, intermediate, and group options",
          "Instructor cards with certifications and languages spoken",
          "Photo gallery from Palolem Beach sessions",
          "Sticky WhatsApp booking button on every page",
          "Seasonal schedule section for monsoon closures",
        ],
      },
      {
        title: "Result",
        result:
          "Lesson bookings through WhatsApp doubled in the first month. The owner said tourists often mentioned finding them through the new site before even reaching the beach.",
      },
    ],
    ctaLabel: "Start a Similar Project",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export const featuredProjects = projects.slice(0, 3);
