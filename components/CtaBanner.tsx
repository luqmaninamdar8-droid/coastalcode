import Link from "next/link";

interface CtaBannerProps {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
}

export default function CtaBanner({
  title,
  description,
  buttonLabel,
  href,
}: CtaBannerProps) {
  return (
    <section className="cta-banner section">
      <div className="container cta-banner-inner reveal">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={href} className="btn btn-primary">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
