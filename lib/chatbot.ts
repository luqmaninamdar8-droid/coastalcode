export const WHATSAPP_NUMBER = "919876543210";
export const WHATSAPP_MESSAGE =
  "Hi Luqman! I found your Coastal Code website and I'd like to discuss a project.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export interface ChatFaq {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
}

export const CHAT_GREETING =
  "Hey! I'm the Coastal Code assistant. Ask me about pricing, timelines, services, or how to start a project with Luqman.";

export const CHAT_FALLBACK =
  "I'm not sure about that one — but Luqman can help! Tap WhatsApp below or visit the contact page for a free quote.";

export const chatFaqs: ChatFaq[] = [
  {
    id: "quote",
    question: "Is it free to get a quote?",
    answer:
      "Yes! Send a message describing your project and Luqman will reply with a free estimate — no charge, no commitment.",
    keywords: ["quote", "free", "estimate", "cost", "price", "how much", "pricing", "budget", "charge"],
  },
  {
    id: "pricing",
    question: "What are your starting prices?",
    answer:
      "Rough starting prices: Landing page from ₹2,500, multi-page site from ₹5,000, e-commerce from ₹10,000. Final price depends on your project — message Luqman for an exact quote.",
    keywords: ["₹", "2500", "5000", "10000", "package", "rates", "affordable", "cheap"],
  },
  {
    id: "timeline",
    question: "How long does a website take?",
    answer:
      "A simple landing page takes about 1 week. A multi-page business site takes 2–3 weeks. Bigger projects like e-commerce can take longer — you'll get a clear timeline before starting.",
    keywords: ["long", "time", "timeline", "week", "days", "when", "deadline", "fast"],
  },
  {
    id: "trust",
    question: "Can I trust a 13-year-old with my website?",
    answer:
      "Luqman is 13 and has been building websites seriously for over a year. This portfolio is proof of his work — clients, teachers, and local businesses are happy with the results.",
    keywords: ["old", "age", "13", "trust", "young", "reliable", "experienced"],
  },
  {
    id: "services",
    question: "What services do you offer?",
    answer:
      "Web design, development, e-commerce stores, hospitality sites, SEO, site fixes, and school projects. Everything is hand-coded with HTML, CSS, JavaScript and Next.js.",
    keywords: ["service", "offer", "build", "make", "create", "website", "ecommerce", "shop", "restaurant", "hotel"],
  },
  {
    id: "domain",
    question: "Do I need a domain and hosting?",
    answer:
      "Yes, but Luqman will guide you through it. A domain costs around ₹500–800/year. Hosting can be free on Vercel or Netlify for simple sites.",
    keywords: ["domain", "hosting", "vercel", "netlify", "url", "name.com"],
  },
  {
    id: "payment",
    question: "How do I pay?",
    answer:
      "UPI, Google Pay, PhonePe, or bank transfer. Usually 50% upfront to start and 50% when the site is ready to launch.",
    keywords: ["pay", "payment", "upi", "phonepe", "gpay", "money", "upfront"],
  },
  {
    id: "location",
    question: "Do you work outside Goa?",
    answer:
      "Yes! Luqman works with clients across India. WhatsApp, email, and video calls work great wherever you are. In-person meetings are possible in Panaji too.",
    keywords: ["goa", "panaji", "outside", "remote", "india", "meet", "location", "where"],
  },
  {
    id: "revision",
    question: "What if I don't like the design?",
    answer:
      "Every project includes revision rounds. Luqman will adjust colours, layouts, and content until you're satisfied.",
    keywords: ["revision", "change", "like", "design", "unhappy", "fix design"],
  },
  {
    id: "update",
    question: "Can you fix my existing website?",
    answer:
      "Absolutely! Broken layouts, outdated content, or new pages — send a link and Luqman will tell you what he can do.",
    keywords: ["existing", "update", "fix", "broken", "repair", "old site", "improve"],
  },
  {
    id: "contact",
    question: "How can I contact Luqman?",
    answer:
      "Email hello@coastalcode.goa, WhatsApp +91 98765 43210, or fill the form on the Contact page. Replies usually within 24 hours on weekdays.",
    keywords: ["contact", "email", "phone", "whatsapp", "message", "reach", "call", "hello"],
  },
];

export const quickReplies = [
  "Starting prices?",
  "How long does it take?",
  "What services?",
  "Get a free quote",
  "Contact Luqman",
];

export function findChatAnswer(input: string): string {
  const text = input.toLowerCase().trim();
  if (!text) return CHAT_FALLBACK;

  let best: ChatFaq | null = null;
  let bestScore = 0;

  for (const faq of chatFaqs) {
    let score = 0;
    if (text.includes(faq.question.toLowerCase().slice(0, 12))) score += 3;
    for (const keyword of faq.keywords) {
      if (text.includes(keyword)) score += 2;
    }
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  }

  return bestScore >= 2 ? best!.answer : CHAT_FALLBACK;
}
