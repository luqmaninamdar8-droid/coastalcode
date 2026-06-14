import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Services — Luqman Inamdar",
  description:
    "Luqman Inamdar offers web design, development, e-commerce, and more in Goa. Affordable websites built with modern web technologies.",
};

const services = [
  {
    icon: "✦",
    title: "Web Design",
    text: "Custom layouts tailored to your brand — clean, bold, and inspired by Goa's vibrant colours and coastal vibe.",
    features: ["Homepage & inner page layouts", "Colour palette & typography", "Mobile-friendly mockups", "Up to 2 revision rounds"],
  },
  {
    icon: "⚡",
    title: "Development",
    text: "Fast, responsive sites built with HTML, CSS, JavaScript and Next.js. Mobile-first and optimized for every screen size.",
    features: ["Hand-coded, no bloated templates", "Works on all browsers & devices", "Fast loading speeds", "Clean, readable code"],
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    text: "Online stores for beachwear brands, cafés, and local artisans. Simple setup with secure payment options.",
    features: ["Product pages & categories", "Shopping cart & checkout", "Payment gateway integration", "Order contact forms"],
  },
  {
    icon: "🏨",
    title: "Hospitality Sites",
    text: "Booking-ready websites for resorts, homestays, and guesthouses across North & South Goa.",
    features: ["Room galleries & photo tours", "Booking & WhatsApp links", "Location maps & directions", "Guest reviews section"],
  },
  {
    icon: "🔍",
    title: "SEO & Performance",
    text: "Get found on Google. I optimize speed, metadata, and structure so your site ranks and loads fast.",
    features: ["Page titles & meta descriptions", "Image compression & lazy loading", "Google-friendly structure", "Mobile speed optimization"],
  },
  {
    icon: "🛠",
    title: "Maintenance & Fixes",
    text: "Already have a site? I can update content, fix broken layouts, and keep things running smoothly.",
    features: ["Content & text updates", "Bug fixes & layout repairs", "New page additions", "Monthly check-in option"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="What I Offer"
        title="Everything you need to go live"
        subtitle="I'm Luqman Inamdar — a young web creator from Goa. From landing pages to full websites, I design, build, and launch sites that actually work."
      />

      <section className="services section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Core Services</span>
            <h2>What I can build for you</h2>
            <p>Every project is custom — here&apos;s a breakdown of what I offer and what&apos;s included.</p>
          </div>
          <div className="services-grid services-grid-detailed">
            {services.map((service) => (
              <article key={service.title} className="service-card service-card-detailed reveal">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul className="service-features">
                  {service.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="who-help section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Who I Help</span>
            <h2>Perfect for businesses & projects in Goa</h2>
            <p>I work with anyone who needs a clean, professional website — local or online.</p>
          </div>
          <div className="who-help-grid">
            {[
              ["🏪", "Local Shops & Cafés", "Menu pages, opening hours, location maps, and contact forms for Goan businesses."],
              ["🏨", "Hotels & Homestays", "Showcase rooms, share photos, and let guests book via WhatsApp or email."],
              ["🎓", "School & College Projects", "Need a project website? I can help students build something that stands out."],
              ["👤", "Personal Portfolios", "Artists, photographers, freelancers — show your work to the world online."],
              ["🛍", "Small Online Stores", "Sell products from home — clothes, crafts, food, or anything you make."],
              ["🚀", "Startups & Side Hustles", "Landing pages with pricing, features, and a contact form to capture leads."],
            ].map(([icon, title, text]) => (
              <article key={title} className="who-card reveal">
                <span className="who-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="included section">
        <div className="container">
          <div className="included-grid">
            <div className="included-content reveal">
              <span className="section-tag">Every Project Includes</span>
              <h2>What you always get from me</h2>
              <p>I may be 13, but I take every project seriously. Here&apos;s what&apos;s included no matter which package you pick.</p>
              <ul className="included-list">
                <li>Responsive design — looks great on phone, tablet, and desktop</li>
                <li>Fast loading — optimized images and clean code</li>
                <li>Basic SEO — titles, descriptions, and Google-friendly structure</li>
                <li>Contact form or WhatsApp link — so customers can reach you</li>
                <li>Free revisions — I fix things until you&apos;re happy</li>
                <li>Handover guide — simple instructions to manage your site</li>
              </ul>
            </div>
            <div className="included-visual reveal">
              <div className="included-card">
                <h3>Tools I use</h3>
                <div className="tools-list">
                  {["HTML5", "CSS3", "JavaScript", "Next.js", "GitHub", "Figma", "VS Code", "Vercel"].map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
                <p className="included-card-note">
                  I write real code — not just drag-and-drop templates. That means your site is faster, cleaner, and fully yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">FAQ</span>
            <h2>Common questions</h2>
            <p>Things people usually ask before starting a project with me.</p>
          </div>
          <div className="faq-list">
            {[
              ["How old are you? Can I trust a 13-year-old with my website?", "I'm Luqman Inamdar, 13 years old, and I've been building websites seriously for over a year. This portfolio is proof of my work. I communicate clearly, meet deadlines, and my clients are happy with the results."],
              ["How long does a website take?", "A simple landing page takes about 1 week. A multi-page business site takes 2–3 weeks. Bigger projects like e-commerce stores can take longer — I'll give you a clear timeline before we start."],
              ["Do I need to buy a domain and hosting?", "Yes, but don't worry — I'll guide you through it. A domain costs around ₹500–800/year. Hosting can be free on Vercel or Netlify for simple sites."],
              ["Can you update my existing website?", "Absolutely. If your site has broken layouts, outdated content, or needs new pages, I can fix and improve it. Send me a link and I'll tell you what I can do."],
              ["How do we communicate during the project?", "WhatsApp, email, or Google Meet — whatever works for you. I share progress screenshots regularly so you always know where things stand."],
              ["What if I don't like the design?", "Every package includes revision rounds. I'll adjust colours, layouts, and content until you're satisfied."],
            ].map(([q, a]) => (
              <details key={q} className="faq-item reveal">
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">How It Works</span>
            <h2>From idea to launch in four steps</h2>
          </div>
          <div className="process-steps">
            {[
              ["01", "Discover", "Tell me about your business, goals, and audience over a quick chat."],
              ["02", "Design", "I sketch layouts and share mockups — you approve before I code."],
              ["03", "Build", "I develop the site and share progress screenshots along the way."],
              ["04", "Launch", "We go live, test everything, and I hand over with 30 days of support."],
            ].map(([num, title, text]) => (
              <div key={title} className="process-step reveal">
                <span className="step-number">{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure which service you need?"
        description="Message me — I'll help you pick the right package for your project."
        buttonLabel="Get in Touch"
        href="/contact"
      />
    </>
  );
}
