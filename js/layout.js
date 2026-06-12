const pages = {
  home: { href: "/", label: "Home" },
  services: { href: "/services.html", label: "Services" },
  work: { href: "/work.html", label: "Work" },
  about: { href: "/about.html", label: "About" },
  contact: { href: "/contact.html", label: "Get in Touch", cta: true },
};

function navLink(key, activePage) {
  const page = pages[key];
  const isActive = key === activePage;
  const classes = [isActive ? "active" : "", page.cta ? "nav-cta" : ""]
    .filter(Boolean)
    .join(" ");
  return `<li><a href="${page.href}" class="${classes}"${isActive ? ' aria-current="page"' : ""}>${page.label}</a></li>`;
}

export function renderLayout(activePage) {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  if (header) {
    header.innerHTML = `
      <header class="header scrolled" id="header">
        <nav class="nav container">
          <a href="/" class="logo">
            <img src="/assets/images/logo.svg" alt="" class="logo-img" width="40" height="40" />
            Coastal Code
          </a>
          <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul class="nav-links">
            ${navLink("services", activePage)}
            ${navLink("work", activePage)}
            ${navLink("about", activePage)}
            ${navLink("contact", activePage)}
          </ul>
        </nav>
      </header>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="footer">
        <div class="container footer-inner">
          <a href="/" class="logo">
            <img src="/assets/images/logo.svg" alt="" class="logo-img" width="40" height="40" />
            Coastal Code
          </a>
          <p class="footer-tagline">Web creation in Goa, since 2021.</p>
          <div class="footer-links">
            <a href="/services.html">Services</a>
            <a href="/work.html">Work</a>
            <a href="/about.html">About</a>
            <a href="/contact.html">Contact</a>
          </div>
          <p class="footer-copy">&copy; 2026 Coastal Code. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
