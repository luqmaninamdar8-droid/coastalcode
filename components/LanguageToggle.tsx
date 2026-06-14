"use client";

import { localeLabels, locales, type Locale } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label="Choose language">
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-toggle-btn${locale === code ? " is-active" : ""}`}
          onClick={() => setLocale(code as Locale)}
          aria-pressed={locale === code}
          aria-label={`Switch to ${code}`}
        >
          {localeLabels[code as Locale]}
        </button>
      ))}
    </div>
  );
}
