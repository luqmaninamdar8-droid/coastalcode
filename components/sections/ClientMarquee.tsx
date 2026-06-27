import Image from "next/image";
import Link from "next/link";
import { clients } from "@/lib/clients";

export default function ClientMarquee() {
  const track = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden border-b border-white/10 py-14 md:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-tech-cyan glow-label">
          Trusted by
        </p>
        <p className="mt-2 text-center text-sand/60">Real clients with live websites</p>
      </div>

      <div
        className="relative mt-8 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
        aria-label="Client logos"
      >
        <div className="flex w-max animate-marquee gap-4 px-4 hover:[animation-play-state:paused]">
          {track.map((client, i) => (
            <Link
              key={`${client.slug}-${i}`}
              href={`/projects/${client.slug}`}
              className="flex h-[88px] min-w-[220px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-tech-cyan/30 hover:shadow-glow-cyan"
              title={`${client.name} — ${client.category}`}
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={200}
                height={48}
                className="h-10 w-auto max-w-[180px] object-contain opacity-90"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
