import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Get in Touch — Luqman Inamdar",
  description:
    "Contact Luqman Inamdar — 13-year-old web creator in Panaji, Goa. Start your website project via email, phone, or WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Get in Touch"
        title="Let's build something together"
        subtitle="I'm Luqman Inamdar — message me about your project. I typically reply within 24 hours on weekdays."
        short
      />

      <section className="contact-quick section">
        <div className="container">
          <div className="contact-quick-grid reveal">
            <a href="mailto:hello@coastalcode.goa" className="contact-quick-card">
              <span className="contact-quick-icon">✉️</span>
              <strong>Email</strong>
              <span>hello@coastalcode.goa</span>
            </a>
            <a href="https://wa.me/919876543210" className="contact-quick-card" target="_blank" rel="noopener noreferrer">
              <span className="contact-quick-icon">💬</span>
              <strong>WhatsApp</strong>
              <span>+91 98765 43210</span>
            </a>
            <a href="tel:+919876543210" className="contact-quick-card">
              <span className="contact-quick-icon">📞</span>
              <strong>Phone</strong>
              <span>Call or text me</span>
            </a>
            <a href="https://github.com/luqmaninamdar8-droid/luQman" className="contact-quick-card" target="_blank" rel="noopener noreferrer">
              <span className="contact-quick-icon">💻</span>
              <strong>GitHub</strong>
              <span>See my code</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <h2>Send me a message</h2>
              <p>Fill out the form and I&apos;ll get back to you with a free quote. No pressure — even if you&apos;re just exploring ideas.</p>
              <div className="contact-details">
                <a href="mailto:hello@coastalcode.goa" className="contact-item">
                  <span className="contact-label">Email</span>
                  <span>hello@coastalcode.goa</span>
                </a>
                <a href="tel:+919876543210" className="contact-item">
                  <span className="contact-label">Phone</span>
                  <span>+91 98765 43210</span>
                </a>
                <div className="contact-item">
                  <span className="contact-label">Location</span>
                  <span>Panaji, Goa 403001</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Hours</span>
                  <span>Mon – Fri, 4pm – 8pm IST (after school)</span>
                </div>
              </div>
              <div className="contact-tips">
                <h3>What to include in your message</h3>
                <ul>
                  <li>What kind of website you need</li>
                  <li>Your business or project name</li>
                  <li>Any example sites you like</li>
                  <li>Your rough budget (optional)</li>
                  <li>When you&apos;d like to launch</li>
                </ul>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="contact-who section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Who Should Reach Out</span>
            <h2>I&apos;d love to hear from you if...</h2>
          </div>
          <div className="who-help-grid">
            {[
              ["🏪", "You run a local business", "Shops, cafés, salons, or vendors in Goa who need a simple, professional website."],
              ["🏨", "You have a homestay or hotel", "Show your rooms, share photos, and let guests book via WhatsApp or email."],
              ["🎓", "You need a school project site", "Students or teams who want a clean website for a science fair or assignment."],
              ["👤", "You want a personal portfolio", "Artists, photographers, or freelancers who want to showcase their work online."],
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

      <section className="contact-process section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">What Happens Next</span>
            <h2>After you message me</h2>
          </div>
          <div className="contact-steps">
            {[
              ["1", "I read your message", "Usually within 24 hours. I'll reply by email or WhatsApp."],
              ["2", "We chat about your idea", "A quick call or message thread to understand what you need."],
              ["3", "I send a free quote", "Clear pricing, timeline, and what's included. No obligation."],
              ["4", "We start building", "Once you're happy, I design, code, and share progress until we launch."],
            ].map(([num, title, text]) => (
              <div key={num} className="contact-step reveal">
                <span className="contact-step-num">{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-location section">
        <div className="container contact-location-grid">
          <div className="contact-location-image reveal">
            <Image
              src="https://images.unsplash.com/photo-1580508174046-170ecc2d2cbd?auto=format&fit=crop&w=900&q=80"
              alt="Colourful streets and architecture in Goa"
              width={900}
              height={600}
            />
          </div>
          <div className="contact-location-content reveal">
            <span className="section-tag">Based in Goa</span>
            <h2>Made in Panaji, Goa</h2>
            <p>I&apos;m based in Panaji — available for in-person meetings if you&apos;re nearby. For clients outside Goa, everything works over WhatsApp, email, and video call.</p>
            <div className="location-details">
              <div className="location-item">
                <strong>City</strong>
                <span>Panaji, North Goa</span>
              </div>
              <div className="location-item">
                <strong>Meetings</strong>
                <span>In-person or online</span>
              </div>
              <div className="location-item">
                <strong>Languages</strong>
                <span>English, Hindi, Konkani</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">FAQ</span>
            <h2>Before you message me</h2>
          </div>
          <div className="faq-list">
            {[
              ["Is it free to get a quote?", "Yes! Send me a message describing your project and I'll reply with a free estimate — no charge, no commitment."],
              ["How do I pay you?", "I accept UPI, Google Pay, PhonePe, or bank transfer. Usually 50% upfront to start, and 50% when the site is ready to launch."],
              ["Can we meet in person in Goa?", "Absolutely! If you're in Panaji or nearby, we can meet at a café to discuss your project."],
              ["What if my budget is small?", "No problem — tell me your budget honestly. I'll suggest the best option for your price range."],
              ["Do you work with clients outside Goa?", "Yes! I've built sites for people across India. WhatsApp and email work great wherever you are."],
            ].map(([q, a]) => (
              <details key={q} className="faq-item reveal">
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Still thinking about it?"
        description="Send a quick hi — even a one-line message is a great start."
        buttonLabel="Send a Message"
        href="/contact#contact-form"
      />
    </>
  );
}
