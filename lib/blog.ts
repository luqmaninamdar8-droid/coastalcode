export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  keywords: string[];
  sections: Array<{ heading?: string; paragraphs: string[] }>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-i-built-taxi-website-goa-business",
    title: "How I Built a Taxi Website for a Goa Business",
    excerpt:
      "From first WhatsApp message to live site — how I planned, designed, and shipped a taxi booking website for a real client in Goa.",
    date: "2025-11-12",
    readTime: "5 min",
    keywords: [
      "taxi website Goa developer",
      "cab website tutorial",
      "build taxi site India",
      "Coastal Code project",
    ],
    sections: [
      {
        paragraphs: [
          "When GoaTaxico reached out, they needed more than a social media page — they needed a website that worked on every phone and showed up when tourists searched for taxis in Goa.",
          "I started with a simple discovery chat on WhatsApp: what services they offer, which areas they cover, and what customers usually ask before booking.",
        ],
      },
      {
        heading: "Planning the layout",
        paragraphs: [
          "Taxi sites need speed and clarity. I sketched a mobile-first layout with a hero section, service cards, and a sticky contact button. No clutter — just routes, fleet info, and trust signals.",
          "I used Next.js for fast loading and clean URLs, which helps Google understand the site structure.",
        ],
      },
      {
        heading: "Design & launch",
        paragraphs: [
          "I matched colours to their brand, added real cab photos, and wrote SEO titles targeting searches like \"taxi website Goa\" and \"airport transfer Goa\".",
          "After a review round and mobile testing on slower networks, we launched on their domain. The site went live in under three weeks.",
        ],
      },
      {
        heading: "What I learned",
        paragraphs: [
          "Real client projects teach you things tutorials cannot — like how important WhatsApp buttons are for local businesses in India.",
          "If you run a taxi service in Goa and need a similar site, visit my projects page or message me on WhatsApp.",
        ],
      },
    ],
  },
  {
    slug: "why-small-businesses-sanguem-need-website",
    title: "Why Small Businesses in Sanguem Need a Website",
    excerpt:
      "Kalay, Sanguem, and South Goa are growing — here's why a simple, fast website helps local shops, taxis, and services get found online.",
    date: "2025-12-03",
    readTime: "4 min",
    keywords: [
      "website Sanguem Goa",
      "small business website South Goa",
      "web design Kalay",
      "local business online Goa",
    ],
    sections: [
      {
        paragraphs: [
          "I live in Kalay, Sanguem — a beautiful part of South Goa where many businesses still rely on word of mouth and phone calls. That works, but customers also search on Google first.",
          "A website does not replace personal relationships. It extends them — so someone in Margao or a tourist planning a trip can find you before they arrive.",
        ],
      },
      {
        heading: "Google is the new main road",
        paragraphs: [
          "When people search \"bakery near Sanguem\" or \"taxi Kalay Goa\", businesses with websites show up. Those without one often miss those customers entirely.",
          "Even a single-page site with your services, photos, location, and WhatsApp number makes a huge difference.",
        ],
      },
      {
        heading: "Mobile-first matters here",
        paragraphs: [
          "Most searches in Goa happen on phones. A slow or broken mobile site loses trust instantly. I build every client site mobile-first so it loads fast on 4G.",
        ],
      },
      {
        heading: "Affordable and achievable",
        paragraphs: [
          "You do not need a massive e-commerce platform on day one. Start with a clear, professional presence — then grow as your business grows.",
          "Coastal Code is built for local businesses in Sanguem, South Goa, and across India. Say hello if you want help going online.",
        ],
      },
    ],
  },
  {
    slug: "what-i-learned-building-sites-at-13",
    title: "What I Learned Building Sites at 13",
    excerpt:
      "Lessons from balancing Class 8, self-teaching code, and shipping real websites for clients — from a young developer in Goa.",
    date: "2026-01-08",
    readTime: "6 min",
    keywords: [
      "young web developer Goa",
      "teen coder India",
      "learn web development 13",
      "Luqman Inamdar blog",
    ],
    sections: [
      {
        paragraphs: [
          "I'm Luqman Inamdar — 13 years old, Class 8 at G.H.S. Kalay, and the person behind Coastal Code. I learned from my father, and with my hard work I keep pushing myself to grow.",
          "Building websites while in school is not easy, but real client projects make every hour of practice worth it.",
        ],
      },
      {
        heading: "Start small, ship often",
        paragraphs: [
          "My first sites were simple HTML pages. I did not wait until I knew everything — I learned Git, CSS animations, and JavaScript by fixing real problems on real projects.",
          "Shipping six live client sites taught me more than months of tutorial watching.",
        ],
      },
      {
        heading: "Communication beats code sometimes",
        paragraphs: [
          "Clients care about results: does the site look good, load fast, and bring enquiries? Explaining progress clearly on WhatsApp is as important as writing clean code.",
        ],
      },
      {
        heading: "Tools I rely on",
        paragraphs: [
          "HTML, CSS, JavaScript, TypeScript, React, and Next.js are my daily stack. Vercel for deployment, Figma for layout ideas, and freeCodeCamp plus YouTube for learning new tricks.",
          "If you're young and want to build websites — start today. Pick one small project and finish it.",
        ],
      },
    ],
  },
  {
    slug: "html-vs-nextjs-client-sites",
    title: "HTML vs Next.js — What I Use for Client Sites",
    excerpt:
      "When a simple HTML site is enough and when I reach for Next.js, React, and TypeScript for client projects in Goa.",
    date: "2026-02-15",
    readTime: "5 min",
    keywords: [
      "HTML vs Next.js",
      "client website technology",
      "web developer Goa stack",
      "Next.js small business",
    ],
    sections: [
      {
        paragraphs: [
          "Clients often ask what their site is built with. The honest answer: it depends on what the business needs — not what's trendy.",
        ],
      },
      {
        heading: "When HTML & CSS are perfect",
        paragraphs: [
          "For a single landing page, a coming-soon page, or a very simple brochure site, plain HTML, CSS, and a bit of JavaScript can be the fastest and lightest solution.",
          "Less tooling means lower hosting complexity and blazing load times on basic hosting.",
        ],
      },
      {
        heading: "When I choose Next.js",
        paragraphs: [
          "For taxi sites, bakeries, spas, and businesses that need multiple pages, blog sections, or strong SEO, I use Next.js. It gives me reusable components, image optimization, and great performance out of the box.",
          "Most of my Coastal Code client sites — GoaTaxico, Sweet Bites, Blissful Spa — are Next.js projects deployed on Vercel.",
        ],
      },
      {
        heading: "The right tool for the job",
        paragraphs: [
          "I pick the stack based on budget, timeline, and how the client might update content later. The goal is always the same: a fast, mobile-friendly site that helps the business grow.",
          "Want help choosing? Contact me and we'll figure out the best approach for your project.",
        ],
      },
    ],
  },
  {
    slug: "spa-website-goa-what-to-include",
    title: "What to Include on a Spa Website in Goa",
    excerpt:
      "Essential sections for massage, wellness, and spa websites — based on my Blissful Spa project and local SEO tips.",
    date: "2026-03-01",
    readTime: "4 min",
    keywords: [
      "spa website Goa",
      "wellness website design",
      "massage spa web developer",
      "spa SEO India",
    ],
    sections: [
      {
        paragraphs: [
          "Spa websites need to feel calm and trustworthy. When I built Blissful Spa & Wellness, we focused on treatments, atmosphere, and easy booking paths.",
        ],
      },
      {
        heading: "Must-have sections",
        paragraphs: [
          "Service menu with durations and descriptions, therapist or facility photos, location map, hours, hygiene and safety notes, and prominent booking or WhatsApp buttons.",
        ],
      },
      {
        heading: "SEO for spas",
        paragraphs: [
          "Target searches like \"spa website Goa\", \"massage near me\", and your city name in page titles and descriptions. Google Business Profile helps too.",
        ],
      },
    ],
  },
  {
    slug: "bakery-website-south-goa-tips",
    title: "Bakery Website Tips for South Goa Businesses",
    excerpt:
      "How Sweet Bites by Muskan showcases custom cakes online — and what other bakeries in Goa can learn from the approach.",
    date: "2026-03-18",
    readTime: "4 min",
    keywords: [
      "bakery website South Goa",
      "cake shop website India",
      "food website developer",
      "bakery SEO Goa",
    ],
    sections: [
      {
        paragraphs: [
          "Food businesses sell with visuals. A bakery website should make visitors hungry and make ordering feel effortless.",
        ],
      },
      {
        heading: "Show, don't just tell",
        paragraphs: [
          "High-quality cake photos, flavour lists, and occasion categories (birthdays, weddings, festivals) help customers imagine their order before they message you.",
        ],
      },
      {
        heading: "Make ordering easy",
        paragraphs: [
          "WhatsApp order buttons, clear pricing guidance, and delivery area info reduce back-and-forth. Mobile layout is critical — most bakery searches happen on phones.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
