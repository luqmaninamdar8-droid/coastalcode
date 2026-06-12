import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import WorkCard from "@/components/WorkCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Luqman Inamdar",
  description:
    "Portfolio of Luqman Inamdar — web projects built in Goa including resorts, restaurants, e-commerce, school projects, and personal sites.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        tag="My Portfolio"
        title="Projects I'm proud of"
        subtitle="I'm Luqman Inamdar — here's a collection of websites I've designed and built from Goa, using HTML, CSS, JavaScript and Next.js."
      />

      <section className="work-stats section">
        <div className="container">
          <div className="work-stats-grid reveal">
            <div className="work-stat">
              <span className="work-stat-number">10+</span>
              <span className="work-stat-label">Projects Completed</span>
            </div>
            <div className="work-stat">
              <span className="work-stat-number">6</span>
              <span className="work-stat-label">Categories Covered</span>
            </div>
            <div className="work-stat">
              <span className="work-stat-number">100%</span>
              <span className="work-stat-label">Hand-Coded</span>
            </div>
            <div className="work-stat">
              <span className="work-stat-number">Goa</span>
              <span className="work-stat-label">Made With Love</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">All Projects</span>
            <h2>Websites I&apos;ve built</h2>
            <p>From my first mango page to full business sites — every project taught me something new.</p>
          </div>
          <div className="work-grid">
            {projects.map((project) => (
              <WorkCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="work-categories section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Categories</span>
            <h2>Types of projects I take on</h2>
            <p>I&apos;ve worked across different industries — here&apos;s what I have experience with.</p>
          </div>
          <div className="categories-grid">
            {[
              ["3 projects", "Hospitality", "Resorts, homestays, and guesthouses with galleries, booking links, and maps."],
              ["2 projects", "Food & Restaurants", "Menus, opening hours, reservation forms, and event listings."],
              ["2 projects", "E-Commerce", "Product catalogs, shopping carts, and checkout flows for local brands."],
              ["3 projects", "Personal & School", "Portfolio sites, hobby pages, and school project websites."],
            ].map(([count, title, text]) => (
              <article key={title} className="category-card reveal">
                <span className="category-count">{count}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-process section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">My Approach</span>
            <h2>How I build every project</h2>
            <p>The same steps I follow whether it&apos;s a school page or a full business site.</p>
          </div>
          <div className="approach-steps">
            {[
              ["1", "Research", "I look at similar sites, note what works, and sketch ideas on paper first."],
              ["2", "Design", "I pick colours, fonts, and layout — then share a mockup for feedback."],
              ["3", "Code", "I write clean code by hand — testing on my phone as I go."],
              ["4", "Test & Launch", "I check every link, fix bugs, and deploy the site so it's live for the world."],
            ].map(([num, title, text]) => (
              <div key={title} className="approach-step reveal">
                <span className="approach-number">{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Feedback</span>
            <h2>What people say</h2>
            <p>Kind words from clients, teachers, and friends who&apos;ve seen my work.</p>
          </div>
          <div className="testimonials-grid">
            {[
              ['"Luqman built our homestay website in two weeks. Guests now find us on Google and book through WhatsApp. Very impressive for his age!"', "Maria D'Souza", "Casa Branca Homestay, Goa"],
              ['"He helped our school team create a project website that won first place at the science fair. Clean design and easy to navigate."', "Mr. Patil", "Science Teacher, Panaji"],
              ['"I asked Luqman to fix my café\'s broken menu page. He not only fixed it but made it look way better on mobile. Will hire again."', "Rohan Naik", "Susegado Kitchen, Goa"],
            ].map(([quote, name, role]) => (
              <blockquote key={name} className="testimonial-card reveal">
                <p>{quote}</p>
                <footer>
                  <strong>{name}</strong>
                  <span>{role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want a website like these?"
        description="Tell me about your idea — I'd love to add your project to this portfolio."
        buttonLabel="Start Your Project"
        href="/contact"
      />
    </>
  );
}
