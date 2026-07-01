"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import GsapReveal from "@/components/animations/GsapReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/seo";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData) {
    const next: Record<string, string> = {};
    if (!String(form.get("name")).trim()) next.name = "Name is required";
    if (!String(form.get("email")).trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(form.get("email"))))
      next.email = "Enter a valid email";
    if (!String(form.get("message")).trim()) next.message = "Message is required";
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length) return;

    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <GsapReveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset glow-label">Contact</p>
            <h2 className="text-gradient-glow mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s build your website
            </h2>
            <p className="mt-4 text-sand/70 leading-relaxed">
              Ready to hire a young developer in Goa? Send a message — I typically reply
              within 24 hours. Available every day, 3:00 PM – 9:00 PM IST.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-sand/70">
              <li>
                <span className="font-semibold text-sand">Email:</span>{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-sunset hover:underline">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="font-semibold text-sand">Phone:</span>{" "}
                <a href={`tel:${siteConfig.phone}`} className="text-sunset hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="font-semibold text-sand">WhatsApp:</span>{" "}
                <a href={siteConfig.whatsapp} className="text-sunset hover:underline">
                  Message me
                </a>
              </li>
            </ul>
          </GsapReveal>

          <GsapReveal delay={0.15}>
            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-sand/80">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-sand/80">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-sand/80">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>

                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-green-400"
                  >
                    Thanks! I&apos;ll be in touch within 24 hours.
                  </motion.p>
                )}
              </form>
            </Card>
          </GsapReveal>
        </div>
      </div>
    </section>
  );
}
