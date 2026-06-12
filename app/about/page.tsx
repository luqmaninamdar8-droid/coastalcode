import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About — Luqman Inamdar",
  description:
    "I'm Luqman Inamdar — a 13-year-old web creator from Goa. Read my coding journey and how I learned to build websites.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="My Story"
        title="Hi, I'm Luqman Inamdar"
        subtitle="A 13-year-old web creator from Goa — my coding journey from first webpage to this portfolio."
      />

      <section className="about-facts section">
        <div className="container">
          <div className="about-facts-grid reveal">
            {[
              ["🎂", "Age 13", "Started coding seriously at 12, building real sites at 13."],
              ["📍", "Panaji, Goa", "Born and raised here — inspired by beaches, markets, and Carnival."],
              ["💻", "Self-Taught", "YouTube, freeCodeCamp, and lots of trial-and-error practice."],
              ["🎯", "10+ Projects", "From mango pages to full business websites for local clients."],
            ].map(([icon, title, text]) => (
              <div key={title} className="fact-card">
                <span className="fact-icon">{icon}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-profile section">
        <div className="container about-profile-grid">
          <div className="about-profile-image reveal">
            <Image
              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
              alt="Golden sunset over a beach in Goa"
              width={800}
              height={600}
            />
            <span className="about-profile-caption">Goa — where I code and create</span>
          </div>
          <div className="about-profile-content reveal">
            <span className="section-tag">About Me</span>
            <h2>A teenager who loves building things online</h2>
            <p>
              Hey! I&apos;m Luqman Inamdar — a student, coder, and young web creator from Goa.
              When I&apos;m not in school, you&apos;ll find me at my desk writing code, or exploring new beaches with my family.
            </p>
            <p>
              I don&apos;t come from a tech family. Nobody taught me to code. I just got curious,
              watched tutorials, and kept going even when things broke. Now I build websites for real people.
            </p>
            <ul className="about-features">
              <li>Fluent in English, Hindi, and Konkani</li>
              <li>Love mangoes, football, and bebinca</li>
              <li>Dream of studying computer science abroad</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="story section">
        <div className="container story-content reveal">
          <p className="story-lead">
            I&apos;m Luqman Inamdar. I was 13 when I built my first real webpage from my home in Goa.
            At age 13, I never thought I could ship something people could visit online. Now this portfolio proves I can.
          </p>
          <h2>Why I Started Building Websites at 13 in Goa</h2>
          <p>
            I got curious after watching my cousin fix a school website. Goa has amazing beaches, and one evening
            near the beach I pictured a site that felt bright, calm, and alive. That moment pushed me to start building for real.
          </p>
          <h2>My First Web Projects</h2>
          <p>
            My first project was a simple page about my favorite mangoes from Goa. Next I made a small games list site for friends.
            Every bug taught me something new. My friends even started asking me for help with their pages.
          </p>
          <h2>What I&apos;m Learning as a Young Coder</h2>
          <p>
            I study HTML, CSS, JavaScript and Next.js every week. At age 13, I&apos;m still learning, but I don&apos;t wait for perfect.
            I practice by building websites for hobbies, family, and school projects.
          </p>
          <p className="story-closing">
            <strong>Dream big, start small — Made in Goa.</strong>
            <br />
            <span className="story-signature">— Luqman Inamdar</span>
          </p>
        </div>
      </section>

      <section className="timeline section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">My Journey</span>
            <h2>How I became a web creator</h2>
            <p>Key moments from my first line of code to running Coastal Code.</p>
          </div>
          <div className="timeline-list">
            {[
              ["2022", "First curiosity", "Saw my cousin edit a school website. I knew I wanted to make something like that myself."],
              ["2023", "Learning the basics", "Started freeCodeCamp and YouTube tutorials. Built my first HTML page — a messy Hello World."],
              ["2024", "Mango Season goes live", "At age 13, I published my first real project — a page about Goa's mangoes."],
              ["2025", "First client projects", "Built websites for a local homestay and café. Won first place at the school science fair."],
              ["2026", "This portfolio", "Designed and coded every page of Coastal Code myself — now rebuilt with Next.js. Made in Goa, by me."],
            ].map(([year, title, text]) => (
              <article key={year} className="timeline-item reveal">
                <span className="timeline-year">{year}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">What I Believe</span>
            <h2>Values that guide my work</h2>
            <p>These aren&apos;t just words — they&apos;re how I approach every project I take on.</p>
          </div>
          <div className="values-grid">
            {[
              ["🌱", "Keep Learning", "I'm 13 and I don't know everything — but I show up every day and get a little better."],
              ["🤝", "Stay Honest", "I tell clients what I can and can't do. No fake promises, no copied templates."],
              ["⚡", "Ship Real Work", "A finished website beats a perfect plan. I build, launch, and improve along the way."],
              ["🏠", "Root for Goa", "Local businesses deserve great websites. I want to help my community get online."],
            ].map(([icon, title, text]) => (
              <article key={title} className="value-card reveal">
                <span className="value-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-skills section">
        <div className="container about-skills-grid">
          <div className="about-skills-content reveal">
            <span className="section-tag">Skills</span>
            <h2>What I know — and what I&apos;m learning next</h2>
            <p>My main tools are HTML, CSS, JavaScript and Next.js. I write code by hand because it helps me understand how websites work.</p>
            <div className="skill-levels">
              {[
                ["HTML & CSS", "Confident", 85],
                ["JavaScript", "Learning", 65],
                ["Next.js", "Learning", 60],
                ["Responsive Design", "Confident", 80],
              ].map(([name, level, width]) => (
                <div key={name} className="skill-level">
                  <div className="skill-level-header">
                    <span>{name}</span>
                    <span>{level}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: `${width}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-skills-next reveal">
            <h3>On my learning list</h3>
            <ul className="learning-list">
              <li>TypeScript — for safer, bigger projects</li>
              <li>Node.js — to add backend features</li>
              <li>UI/UX design — to make sites even prettier</li>
              <li>Python — for automation and school projects</li>
              <li>Web accessibility — so everyone can use my sites</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-goals section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Looking Ahead</span>
            <h2>Where I&apos;m headed</h2>
            <p>Big dreams for a 13-year-old — but every expert was once a beginner.</p>
          </div>
          <div className="goals-grid">
            {[
              ["01", "Help 50 Goa businesses go online", "Shops, cafés, and homestays near me still don't have websites. I want to change that."],
              ["02", "Master full-stack development", "Frontend is just the start. I want to build apps with databases and user accounts too."],
              ["03", "Study computer science", "My dream is to study at a top university and keep building products that help people."],
            ].map(([num, title, text]) => (
              <article key={num} className="goal-card reveal">
                <span className="goal-number">{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-fun section">
        <div className="container">
          <div className="fun-card reveal">
            <div className="fun-content">
              <span className="section-tag">Beyond Coding</span>
              <h2>When I&apos;m not at the keyboard</h2>
              <p>Life in Goa isn&apos;t just about screens. Here&apos;s what keeps me balanced and inspired.</p>
              <div className="fun-tags">
                {["⚽ Football with friends", "🏖 Beach evenings", "🥭 Mango season", "🎭 Goa Carnival", "📚 Science & maths", "🎮 Minecraft builds"].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to say hi?"
        description="I'd love to hear about your project or just connect with other young coders."
        buttonLabel="Get in Touch"
        href="/contact"
      />
    </>
  );
}
