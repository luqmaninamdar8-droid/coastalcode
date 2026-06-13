import Image from "next/image";
import Link from "next/link";
import { clients } from "@/lib/clients";

interface ClientLogosProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function ClientLogos({
  title = "Businesses I've worked with",
  subtitle = "Local resorts, cafés, shops, and startups across Goa — real projects, real results.",
  compact = false,
}: ClientLogosProps) {
  const track = [...clients, ...clients];

  return (
    <section className={`client-logos section${compact ? " client-logos--compact" : ""}`}>
      <div className="container">
        <div className="section-header reveal reveal-blur">
          <span className="section-tag">Trusted By</span>
          <h2>{title}</h2>
          {!compact && <p>{subtitle}</p>}
        </div>
      </div>

      <div className="client-logos-marquee reveal" aria-label="Client logos">
        <div className="client-logos-fade client-logos-fade--left" />
        <div className="client-logos-fade client-logos-fade--right" />
        <div className="client-logos-track">
          {track.map((client, i) => (
            <Link
              key={`${client.slug}-${i}`}
              href={`/projects/${client.slug}`}
              className="client-logo-card motion-card"
              title={`${client.name} — ${client.category}`}
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={200}
                height={56}
                className="client-logo-img"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
