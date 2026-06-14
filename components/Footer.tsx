import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link href="/" className="logo">
          <Image
            src="/assets/images/logo.svg"
            alt=""
            className="logo-img"
            width={40}
            height={40}
          />
          Coastal Code
        </Link>
        <p className="footer-tagline">Web creation in Goa, since 2021.</p>
        <div className="footer-links">
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="footer-copy">
          &copy; 2026 Coastal Code. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
