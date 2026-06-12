"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [noteVisible, setNoteVisible] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNoteVisible(true);
    e.currentTarget.reset();
    setTimeout(() => setNoteVisible(false), 5000);
  }

  return (
    <form
      className="contact-form reveal"
      id="contact-form"
      name="contact"
      onSubmit={handleSubmit}
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">
            Phone <span className="optional">(optional)</span>
          </label>
          <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="you@example.com" />
      </div>
      <div className="form-group">
        <label htmlFor="service">Service</label>
        <select id="service" name="service" defaultValue="">
          <option value="">Select a service</option>
          <option value="landing-page">Landing Page (₹2,500+)</option>
          <option value="multi-page">Multi-Page Site (₹5,000+)</option>
          <option value="ecommerce">E-Commerce (₹10,000+)</option>
          <option value="hospitality">Hospitality Site</option>
          <option value="site-fix">Site Fix / Update</option>
          <option value="school-project">School Project</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="budget">
          Budget <span className="optional">(optional)</span>
        </label>
        <select id="budget" name="budget" defaultValue="">
          <option value="">Select a range</option>
          <option value="under-3k">Under ₹3,000</option>
          <option value="3k-7k">₹3,000 – ₹7,000</option>
          <option value="7k-15k">₹7,000 – ₹15,000</option>
          <option value="15k-plus">₹15,000+</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about your project — what you need, who it's for, and any ideas you have..."
        />
      </div>
      <button type="submit" className="btn btn-primary btn-full">
        Send Message
      </button>
      <p
        className={`form-note${noteVisible ? " visible" : ""}`}
        id="form-note"
        hidden={!noteVisible}
      >
        Thanks! I&apos;ll be in touch within 24 hours.
      </p>
    </form>
  );
}
