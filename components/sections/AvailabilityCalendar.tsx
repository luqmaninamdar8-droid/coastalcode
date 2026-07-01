"use client";

import { useEffect, useState } from "react";
import GsapReveal from "@/components/animations/GsapReveal";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  availabilityDays,
  availabilityHours,
  availabilitySlots,
} from "@/lib/availability";

function isWithinHours(now: Date): boolean {
  const hour = now.getHours();
  return hour >= 15 && hour < 21;
}

export default function AvailabilityCalendar() {
  const [todayIndex, setTodayIndex] = useState<number | null>(null);
  const [openNow, setOpenNow] = useState(false);

  useEffect(() => {
    const now = new Date();
    setTodayIndex(now.getDay());
    setOpenNow(isWithinHours(now));
  }, []);

  return (
    <section className="relative border-t border-white/10 py-24 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <GsapReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-tech-cyan glow-label">
            Availability
          </p>
          <h2 className="text-gradient-glow mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            When you can reach me
          </h2>
          <p className="mt-4 text-sand/70">
            I&apos;m available all <span className="font-semibold text-sand">7 days</span> of the
            week, from{" "}
            <span className="font-semibold text-sunset-light">
              {availabilityHours.start} to {availabilityHours.end}
            </span>{" "}
            ({availabilityHours.timezoneLabel}).
          </p>
          {openNow && (
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available right now
            </p>
          )}
        </GsapReveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {availabilityDays.map((day, i) => {
            const isToday = todayIndex === day.dayIndex;
            return (
              <GsapReveal key={day.key} delay={i * 0.05}>
                <Card
                  className={cn(
                    "flex h-full flex-col p-4 transition-all md:p-5",
                    isToday
                      ? "border-emerald-400/40 bg-emerald-400/5 shadow-[0_0_24px_rgba(52,211,153,0.15)]"
                      : "hover:border-tech-cyan/30",
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-bold text-sand md:text-base">{day.short}</p>
                    {isToday && (
                      <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                        Today
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-sand/50 md:text-sm">{day.label}</p>

                  <div className="mt-4 flex flex-1 flex-col justify-end">
                    <p className="text-xs font-semibold text-tech-cyan md:text-sm">
                      {availabilityHours.start}
                    </p>
                    <div className="my-2 flex flex-col gap-1">
                      {availabilitySlots.slice(1, -1).map((slot) => (
                        <span
                          key={slot}
                          className="block h-1.5 rounded-full bg-gradient-to-r from-tech-cyan/70 to-tech-cyan/30"
                        />
                      ))}
                    </div>
                    <p className="text-xs font-semibold text-tech-cyan md:text-sm">
                      {availabilityHours.end}
                    </p>
                  </div>

                  <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-emerald-400/90 md:text-xs">
                    Available
                  </p>
                </Card>
              </GsapReveal>
            );
          })}
        </div>

        <GsapReveal delay={0.2} className="mt-10">
          <Card className="mx-auto max-w-3xl p-6 text-center md:p-8">
            <p className="text-sm text-sand/70">
              Outside these hours? Send a WhatsApp or email — I&apos;ll reply as soon as I&apos;m
              back online, usually within 24 hours.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {availabilitySlots.map((slot) => (
                <span
                  key={slot}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sand/70"
                >
                  {slot}
                </span>
              ))}
            </div>
          </Card>
        </GsapReveal>
      </div>
    </section>
  );
}
