"use client";

import GsapReveal from "@/components/animations/GsapReveal";
import { Card } from "@/components/ui/card";
import { contactFaq, serviceAreas } from "@/lib/page-content";
import { siteConfig } from "@/lib/seo";

export default function ContactExtrasSection() {
  return (
    <>
      <section className="relative border-t border-white/10 py-24 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <GsapReveal>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset">FAQ</p>
              <h2 className="mt-3 text-2xl font-bold text-sand md:text-3xl">
                Common questions
              </h2>
              <p className="mt-4 text-sand/70">
                Still unsure? Here are answers to things clients often ask before starting.
              </p>

              <div className="mt-8 space-y-4">
                {contactFaq.map((item, i) => (
                  <Card key={item.question} className="p-5">
                    <h3 className="font-bold text-sand">{item.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-sand/65">{item.answer}</p>
                  </Card>
                ))}
              </div>
            </GsapReveal>

            <GsapReveal delay={0.1}>
              <Card className="h-fit p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sunset">
                  Availability
                </p>
                <h2 className="mt-3 text-2xl font-bold text-sand">Where I work</h2>
                <ul className="mt-6 space-y-3">
                  {serviceAreas.map((area) => (
                    <li key={area} className="flex items-center gap-3 text-sm text-sand/75">
                      <span className="text-tech-green">✓</span>
                      {area}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl border border-tech-cyan/20 bg-tech-cyan/5 p-5">
                  <p className="text-sm font-semibold text-sand">Fastest way to reach me</p>
                  <p className="mt-2 text-sm text-sand/70">
                    WhatsApp usually gets the quickest reply — especially for new project enquiries.
                  </p>
                  <a
                    href={siteConfig.whatsapp}
                    className="mt-4 inline-block text-sm font-semibold text-tech-cyan hover:underline"
                  >
                    Message on WhatsApp →
                  </a>
                </div>

                <p className="mt-6 text-xs text-sand/50">
                  Typical response time: within 24 hours · {siteConfig.email}
                </p>
              </Card>
            </GsapReveal>
          </div>
        </div>
      </section>
    </>
  );
}
