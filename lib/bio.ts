import { siteConfig } from "@/lib/seo";

export const personalBio = {
  name: siteConfig.author,
  age: 13,
  location: "Kalay, Sanguem, South Goa",
  school: "G.H.S. Kalay",
  schoolFullName: "Government High School, Kalay",
  schoolArea: "Sanguem, South Goa",
  grade: "Class 8",
  languages: ["English", "Hindi", "Konkani"],
  codingSince: 2022,
  brand: siteConfig.name,
  interests: [
    "Building websites",
    "Learning new web technologies",
    "Helping local businesses go online",
    "Design & animations",
  ],
  intro:
    "I'm Luqman Inamdar — a 13-year-old student from Kalay, Goa, who loves turning ideas into real websites. I balance school with teaching myself to code through tutorials, practice, and client projects.",
  story:
    "I study at G.H.S. Kalay in Sanguem. I learned from my father, and with my hard work I keep pushing myself to grow. I've learned HTML, CSS, JavaScript, and Next.js — and started Coastal Code to build sites for taxis, spas, bakeries, and businesses across Goa and India.",
  beyondCode:
    "When I'm not coding, I enjoy exploring Goa, learning from YouTube and freeCodeCamp, and experimenting with new design ideas for my next project.",
} as const;

export type BioDetail = {
  label: string;
  value: string;
  icon: string;
};

export const bioDetails: BioDetail[] = [
  { icon: "🎓", label: "School", value: personalBio.school },
  { icon: "📍", label: "Location", value: personalBio.location },
  { icon: "🎂", label: "Age", value: `${personalBio.age} years old` },
  { icon: "📚", label: "Grade", value: personalBio.grade },
  { icon: "💻", label: "Coding since", value: String(personalBio.codingSince) },
  { icon: "🌐", label: "Languages", value: personalBio.languages.join(", ") },
  { icon: "⚡", label: "Brand", value: personalBio.brand },
  { icon: "✉️", label: "Email", value: siteConfig.email },
];
