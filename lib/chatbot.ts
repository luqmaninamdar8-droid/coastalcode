import { siteConfig } from "@/lib/seo";

export const WHATSAPP_NUMBER = siteConfig.whatsappNumber;
export const WHATSAPP_MESSAGE =
  "Hi Luqman! I found your Coastal Code website and I'd like to discuss a project.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export interface ChatFaq {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
}

export interface ChatLink {
  label: string;
  href: string;
}

export interface ChatResponse {
  answer: string;
  suggestions?: string[];
  links?: ChatLink[];
}

const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "was", "do", "does", "did", "can", "could",
  "would", "should", "i", "me", "my", "you", "your", "we", "it", "to", "for",
  "of", "in", "on", "at", "and", "or", "with", "about", "what", "how", "when",
  "where", "who", "why", "please", "tell", "know", "want", "need", "get",
]);

export function getChatGreeting(): string {
  const hour = new Date().getHours();
  const timeGreeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return `${timeGreeting}! I'm the Coastal Code assistant — Luqman's virtual helper. Ask me about pricing, timelines, services, or how to start your project.`;
}

export const CHAT_GREETING = getChatGreeting();

export const CHAT_FALLBACK =
  "I'm not sure about that one — but Luqman can help personally! Try a quick topic below, or message him on WhatsApp for a free quote.";

export const chatFaqs: ChatFaq[] = [
  {
    id: "quote",
    question: "Is it free to get a quote?",
    answer:
      "Yes — totally free! Describe your project and Luqman will reply with an estimate. No charge and no commitment to start.",
    keywords: ["quote", "free", "estimate", "cost", "price", "how much", "pricing", "budget", "charge", "quotation"],
  },
  {
    id: "pricing",
    question: "What are your starting prices?",
    answer:
      "Starting prices: Landing page from ₹2,500 · Multi-page site from ₹5,000 · E-commerce from ₹10,000. Final cost depends on features — Luqman will give you an exact quote.",
    keywords: ["₹", "2500", "5000", "10000", "package", "rates", "affordable", "cheap", "starting", "packages"],
  },
  {
    id: "timeline",
    question: "How long does a website take?",
    answer:
      "Simple landing page: about 1 week. Business site: 2–3 weeks. E-commerce or bigger builds take longer. You'll get a clear timeline before work starts.",
    keywords: ["long", "time", "timeline", "week", "weeks", "days", "when", "deadline", "fast", "delivery", "ready"],
  },
  {
    id: "trust",
    question: "Can I trust a 13-year-old with my website?",
    answer:
      "Luqman is 13 and has been building websites seriously for over a year. The Work page lists real live client sites — taxi services, cloud platforms, bakeries, and more.",
    keywords: ["old", "age", "13", "trust", "young", "reliable", "experienced", "kid", "teen"],
  },
  {
    id: "services",
    question: "What services do you offer?",
    answer:
      "Web design, development, e-commerce, hospitality sites, restaurant menus, beauty salon sites, SEO basics, site fixes, and school projects — all hand-coded with HTML, CSS, JavaScript, and Next.js.",
    keywords: ["service", "offer", "build", "make", "create", "website", "ecommerce", "shop", "restaurant", "hotel", "salon", "beauty"],
  },
  {
    id: "portfolio",
    question: "Can I see examples of your work?",
    answer:
      "Yes! Check the Work page — live sites like GoaTaxico, Aarav Cabs, Blissful Spa, Phoenix Cloud, Goencar, and Sweet Bites. Tap any logo to visit the real website.",
    keywords: ["work", "portfolio", "example", "sample", "project", "show", "see", "previous", "clients", "demo"],
  },
  {
    id: "tech",
    question: "What technologies do you use?",
    answer:
      "Luqman builds with HTML, CSS, JavaScript, and Next.js (React). Sites are fast, mobile-friendly, and easy to host on Vercel or Netlify.",
    keywords: ["tech", "technology", "stack", "next", "nextjs", "react", "html", "css", "javascript", "code", "framework"],
  },
  {
    id: "domain",
    question: "Do I need a domain and hosting?",
    answer:
      "Yes, but Luqman walks you through it step by step. Domains cost around ₹500–800/year. Simple sites can host free on Vercel or Netlify.",
    keywords: ["domain", "hosting", "vercel", "netlify", "url", "name.com", "host", "server", "deploy"],
  },
  {
    id: "payment",
    question: "How do I pay?",
    answer:
      "UPI, Google Pay, PhonePe, or bank transfer. Usually 50% upfront to start and 50% when the site is ready to launch.",
    keywords: ["pay", "payment", "upi", "phonepe", "gpay", "money", "upfront", "installment", "advance"],
  },
  {
    id: "location",
    question: "Do you work outside Goa?",
    answer:
      "Yes — clients across India are welcome. WhatsApp, email, and video calls work great remotely. In-person meetings are possible in Kalay too.",
    keywords: ["goa", "kalay", "outside", "remote", "india", "meet", "location", "where", "local", "online"],
  },
  {
    id: "revision",
    question: "What if I don't like the design?",
    answer:
      "Every project includes revision rounds. Luqman adjusts colours, layouts, and content until you're happy with the result.",
    keywords: ["revision", "change", "like", "design", "unhappy", "fix design", "redo", "tweak", "adjust"],
  },
  {
    id: "update",
    question: "Can you fix my existing website?",
    answer:
      "Absolutely! Broken layouts, slow pages, outdated content, or new sections — send your link and Luqman will tell you what he can fix.",
    keywords: ["existing", "update", "fix", "broken", "repair", "old site", "improve", "maintain", "maintenance"],
  },
  {
    id: "seo",
    question: "Do you help with SEO?",
    answer:
      "Yes — basic SEO is included: proper page titles, meta descriptions, fast loading, and mobile-friendly layout so Google can find your site.",
    keywords: ["seo", "google", "search", "rank", "find", "visibility", "traffic"],
  },
  {
    id: "school",
    question: "Can you help with a school project?",
    answer:
      "Yes! Luqman has built school science fair sites and personal portfolio pages. Share your topic and deadline — he'll work within your budget.",
    keywords: ["school", "science", "fair", "project", "homework", "assignment", "student", "class"],
  },
  {
    id: "about",
    question: "Who is Luqman?",
    answer:
      "Luqman Inamdar is a 13-year-old student from Kalay, Goa — studying at G.H.S. Kalay and building websites under Coastal Code with HTML, CSS, JavaScript, and Next.js.",
    keywords: ["luqman", "inamdar", "coastal code", "about", "creator", "developer", "founder", "owner", "boy", "student"],
  },
  {
    id: "contact",
    question: "How can I contact Luqman?",
    answer:
      `Email ${siteConfig.email} · WhatsApp ${siteConfig.phoneDisplay} · or use the Contact page form. Replies usually within 24 hours on weekdays.`,
    keywords: ["contact", "email", "phone", "whatsapp", "message", "reach", "call", "hello", "talk", "speak"],
  },
];

export const quickReplies = [
  "Starting prices?",
  "How long does it take?",
  "See your work",
  "Get a free quote",
  "Contact Luqman",
];

const followUpMap: Record<string, string[]> = {
  quote: ["Starting prices?", "How do I pay?", "Contact Luqman"],
  pricing: ["Get a free quote", "How long does it take?", "What services?"],
  timeline: ["Starting prices?", "See your work", "Contact Luqman"],
  trust: ["See your work", "What services?", "Get a free quote"],
  services: ["Starting prices?", "See your work", "Get a free quote"],
  portfolio: ["What services?", "Starting prices?", "Contact Luqman"],
  tech: ["What services?", "See your work", "How long does it take?"],
  domain: ["Starting prices?", "How do I pay?", "Contact Luqman"],
  payment: ["Get a free quote", "How long does it take?", "Contact Luqman"],
  location: ["Contact Luqman", "Get a free quote", "What services?"],
  revision: ["What services?", "Get a free quote", "Contact Luqman"],
  update: ["Starting prices?", "Contact Luqman", "What services?"],
  seo: ["What services?", "See your work", "Starting prices?"],
  school: ["Starting prices?", "How long does it take?", "Contact Luqman"],
  about: ["See your work", "What services?", "Contact Luqman"],
  contact: ["Get a free quote", "Starting prices?", "See your work"],
};

const intentReplies: Record<string, ChatResponse> = {
  greeting: {
    answer:
      "Hey there! Great to meet you. I can help with pricing, timelines, services, or getting started with Luqman. What would you like to know?",
    suggestions: quickReplies.slice(0, 4),
  },
  thanks: {
    answer:
      "You're welcome! If you have more questions, just ask — or message Luqman on WhatsApp when you're ready to start.",
    suggestions: ["Get a free quote", "Contact Luqman"],
    links: [{ label: "WhatsApp Luqman", href: WHATSAPP_URL }],
  },
  bye: {
    answer:
      "Bye for now! Good luck with your project — Luqman would love to hear from you whenever you're ready.",
    suggestions: ["Get a free quote", "Contact Luqman"],
  },
  help: {
    answer:
      "I can answer questions about Coastal Code — pricing, how long sites take, services, portfolio, payments, and how to contact Luqman. Pick a topic or type your question!",
    suggestions: quickReplies,
  },
  identity: {
    answer:
      "I'm the Coastal Code assistant — a friendly FAQ bot on Luqman's website. Luqman Inamdar is a 13-year-old web creator from Goa who builds websites under Coastal Code. I answer common questions instantly; Luqman replies personally on WhatsApp for project details.",
    suggestions: ["What services?", "See your work", "Contact Luqman"],
    links: [{ label: "About Luqman", href: "/about" }],
  },
};

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s₹]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 1 && !STOP_WORDS.has(word));
}

function detectIntent(text: string): keyof typeof intentReplies | null {
  const normalized = text.toLowerCase().trim();

  if (
    /\b(who are you|what are you|who is this|what is this|your name|what's your name|what is your name|who am i talking to)\b/.test(normalized) ||
    /^(who are you|what are you|who is this|what is this)\??$/.test(normalized) ||
    /\b(are you (a )?(bot|ai|robot|human|real|person))\b/.test(normalized)
  ) {
    return "identity";
  }
  if (
    /\b(who is luqman|about luqman|tell me about luqman|what is coastal code|who runs coastal|who made this website)\b/.test(normalized)
  ) {
    return "identity";
  }
  if (/^(hi|hello|hey|hola|yo|sup|good morning|good afternoon|good evening)\b/.test(normalized)) {
    return "greeting";
  }
  if (/^(thanks|thank you|thx|ty|appreciate|cheers)\b/.test(normalized)) {
    return "thanks";
  }
  if (/^(bye|goodbye|see you|later|good night)\b/.test(normalized)) {
    return "bye";
  }
  if (/^(help|menu|options|what can you do|how can you help)\b/.test(normalized)) {
    return "help";
  }

  return null;
}

function scoreFaq(text: string, faq: ChatFaq): number {
  const normalized = text.toLowerCase().trim();
  const tokens = tokenize(text);
  let score = 0;

  const questionStart = faq.question.toLowerCase().slice(0, 18);
  if (normalized.includes(questionStart)) score += 5;

  for (const keyword of faq.keywords) {
    if (normalized.includes(keyword)) score += 3;
    if (tokens.some((token) => token === keyword || token.includes(keyword) || keyword.includes(token))) {
      score += 1;
    }
  }

  return score;
}

export function getTypingDelay(answer: string): number {
  return Math.min(1600, Math.max(450, 350 + answer.length * 10));
}

export function findChatResponse(input: string): ChatResponse {
  const text = input.toLowerCase().trim();
  if (!text) {
    return { answer: CHAT_FALLBACK, suggestions: quickReplies.slice(0, 3) };
  }

  const intent = detectIntent(text);
  if (intent) return intentReplies[intent];

  let best: ChatFaq | null = null;
  let bestScore = 0;

  for (const faq of chatFaqs) {
    const score = scoreFaq(text, faq);
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  }

  if (best && bestScore >= 2) {
    return {
      answer: best.answer,
      suggestions: followUpMap[best.id]?.slice(0, 3),
      links: best.id === "portfolio"
        ? [{ label: "View Projects", href: "/projects" }]
        : best.id === "about"
          ? [{ label: "About Luqman", href: "/about" }]
          : best.id === "contact"
          ? [
              { label: "Contact page", href: "/contact" },
              { label: "WhatsApp Luqman", href: WHATSAPP_URL },
            ]
          : undefined,
    };
  }

  const related = chatFaqs
    .map((faq) => ({ faq, score: scoreFaq(text, faq) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ faq }) => faq.question.replace(/\?$/, "?"));

  return {
    answer: CHAT_FALLBACK,
    suggestions: related.length
      ? related
      : ["Starting prices?", "See your work", "Contact Luqman"],
    links: [
      { label: "Contact page", href: "/contact" },
      { label: "WhatsApp Luqman", href: WHATSAPP_URL },
    ],
  };
}

/** @deprecated Use findChatResponse instead */
export function findChatAnswer(input: string): string {
  return findChatResponse(input).answer;
}
