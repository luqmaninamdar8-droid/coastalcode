export type Locale = "en" | "hi" | "kok";

export type PageKey = "work" | "services" | "about" | "contact";
export type CtaKey = "home" | "work" | "services" | "about" | "contact";

export const locales: Locale[] = ["en", "hi", "kok"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  hi: "हि",
  kok: "Kon",
};

export type TranslationTree = {
  nav: {
    services: string;
    work: string;
    about: string;
    contact: string;
  };
  footer: {
    tagline: string;
    copy: string;
  };
  home: {
    tag: string;
    title: string;
    titleEm: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statProjects: string;
    statLanguages: string;
    statAge: string;
    scroll: string;
  };
  pages: Record<
    PageKey,
    { tag: string; title: string; subtitle: string }
  >;
  cta: Record<
    CtaKey,
    { title: string; description: string; button: string }
  >;
};

export const translations: Record<Locale, TranslationTree> = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      about: "About",
      contact: "Get in Touch",
    },
    footer: {
      tagline: "Web creation in Goa, since 2021.",
      copy: "© 2026 Coastal Code. All rights reserved.",
    },
    home: {
      tag: "Young Web Creator · Goa, India",
      title: "Websites that feel as good as a",
      titleEm: "Goa sunset",
      subtitle:
        "I'm a 13-year-old web creator from Goa building fast, beautiful sites for local businesses, friends, and anyone who needs a great page online.",
      ctaPrimary: "Start Your Project",
      ctaSecondary: "View My Work",
      statProjects: "Projects Built",
      statLanguages: "Languages Learned",
      statAge: "Years Old",
      scroll: "Scroll",
    },
    pages: {
      work: {
        tag: "My Portfolio",
        title: "Projects I'm proud of",
        subtitle:
          "I'm Luqman Inamdar — here's a collection of websites I've designed and built from Goa, using HTML, CSS, JavaScript and Next.js.",
      },
      services: {
        tag: "What I Offer",
        title: "Everything you need to go live",
        subtitle:
          "I'm Luqman Inamdar — a young web creator from Goa. From landing pages to full websites, I design, build, and launch sites that actually work.",
      },
      about: {
        tag: "My Story",
        title: "Hi, I'm Luqman Inamdar",
        subtitle:
          "A 13-year-old web creator from Goa — my coding journey from first webpage to this portfolio.",
      },
      contact: {
        tag: "Get in Touch",
        title: "Let's build something together",
        subtitle:
          "I'm Luqman Inamdar — message me about your project. I typically reply within 24 hours on weekdays.",
      },
    },
    cta: {
      home: {
        title: "Ready to launch your website?",
        description: "Tell me about your project — I typically reply within 24 hours.",
        button: "Get in Touch",
      },
      work: {
        title: "Want a website like these?",
        description:
          "Tell me about your idea — I'd love to add your project to this portfolio.",
        button: "Start Your Project",
      },
      services: {
        title: "Not sure which service you need?",
        description: "Message me — I'll help you pick the right package for your project.",
        button: "Get in Touch",
      },
      about: {
        title: "Want to say hi?",
        description:
          "I'd love to hear about your project or just connect with other young coders.",
        button: "Get in Touch",
      },
      contact: {
        title: "Still thinking about it?",
        description: "Send a quick hi — even a one-line message is a great start.",
        button: "Send a Message",
      },
    },
  },
  hi: {
    nav: {
      services: "सेवाएँ",
      work: "काम",
      about: "परिचय",
      contact: "संपर्क करें",
    },
    footer: {
      tagline: "गोवा में वेब निर्माण, 2021 से।",
      copy: "© 2026 Coastal Code. सर्वाधिकार सुरक्षित।",
    },
    home: {
      tag: "युवा वेब क्रिएटर · गोवा, भारत",
      title: "ऐसी वेबसाइटें जो एक",
      titleEm: "गोवा के सूर्यास्त",
      subtitle:
        "मैं गोवा का 13 साल का वेब क्रिएटर हूँ — स्थानीय व्यवसायों, दोस्तों और हर किसी के लिए तेज़, सुंदर साइटें बनाता हूँ।",
      ctaPrimary: "प्रोजेक्ट शुरू करें",
      ctaSecondary: "मेरा काम देखें",
      statProjects: "प्रोजेक्ट बनाए",
      statLanguages: "भाषाएँ सीखीं",
      statAge: "साल की उम्र",
      scroll: "नीचे स्क्रॉल करें",
    },
    pages: {
      work: {
        tag: "मेरा पोर्टफोलियो",
        title: "प्रोजेक्ट जिन पर गर्व है",
        subtitle:
          "मैं लुकमान इनामदार हूँ — गोवा में बनाई गई HTML, CSS, JavaScript और Next.js वेबसाइटों का संग्रह।",
      },
      services: {
        tag: "मैं क्या देता हूँ",
        title: "लाइव होने के लिए सब कुछ",
        subtitle:
          "मैं लुकमान इनामदार — गोवा का युवा वेब क्रिएटर। लैंडिंग पेज से पूरी वेबसाइट तक, मैं डिज़ाइन, बनाता और लॉन्च करता हूँ।",
      },
      about: {
        tag: "मेरी कहानी",
        title: "नमस्ते, मैं लुकमान इनामदार हूँ",
        subtitle:
          "गोवा का 13 साल का वेब क्रिएटर — पहले वेबपेज से इस पोर्टफोलियो तक की कोडिंग यात्रा।",
      },
      contact: {
        tag: "संपर्क करें",
        title: "चलो कुछ साथ में बनाते हैं",
        subtitle:
          "मैं लुकमान इनामदार — अपने प्रोजेक्ट के बारे में संदेश भेजें। सप्ताह के दिनों में 24 घंटे में जवाब।",
      },
    },
    cta: {
      home: {
        title: "अपनी वेबसाइट लॉन्च करने के लिए तैयार?",
        description: "अपने प्रोजेक्ट के बारे में बताएं — मैं आमतौर पर 24 घंटे में जवाब देता हूँ।",
        button: "संपर्क करें",
      },
      work: {
        title: "ऐसी वेबसाइट चाहिए?",
        description: "अपना विचार बताएं — मैं आपका प्रोजेक्ट इस पोर्टफोलियो में जोड़ना चाहूँगा।",
        button: "प्रोजेक्ट शुरू करें",
      },
      services: {
        title: "कौन सी सेवा चाहिए, पता नहीं?",
        description: "मुझे संदेश करें — मैं सही पैकेज चुनने में मदद करूँगा।",
        button: "संपर्क करें",
      },
      about: {
        title: "हाय कहना चाहते हैं?",
        description: "आपके प्रोजेक्ट के बारे में सुनना या अन्य युवा कोडर्स से जुड़ना अच्छा लगेगा।",
        button: "संपर्क करें",
      },
      contact: {
        title: "अभी भी सोच रहे हैं?",
        description: "एक छोटा सा हाय भेजें — एक पंक्ति भी शुरुआत के लिए काफी है।",
        button: "संदेश भेजें",
      },
    },
  },
  kok: {
    nav: {
      services: "Seva",
      work: "Kam",
      about: "Mhojem",
      contact: "Sompad",
    },
    footer: {
      tagline: "Goaant web nirman, 2021 pasun.",
      copy: "© 2026 Coastal Code. Saglle adhikar rakhivle.",
    },
    home: {
      tag: "Nouso Web Creator · Goa, India",
      title: "Websites je ek",
      titleEm: "Goa sunset",
      subtitle:
        "Hanv Goantlo 13 vorsacho web creator — local businesses, mitram ani gorak zai titlo-i sarko site bandtolo.",
      ctaPrimary: "Project Suru Kor",
      ctaSecondary: "Mhojem Kam Pah",
      statProjects: "Projects Bandle",
      statLanguages: "Bhasa Shikle",
      statAge: "Vorsam",
      scroll: "Scroll",
    },
    pages: {
      work: {
        tag: "Mhojem Portfolio",
        title: "Projects jincher gorv asa",
        subtitle:
          "Hanv Luqman Inamdar — Goaant HTML, CSS, JavaScript ani Next.js vapun bandlole websites.",
      },
      services: {
        tag: "Hanv Kitem Dita",
        title: "Live zata title sogllem",
        subtitle:
          "Hanv Luqman Inamdar — Goantlo nouso web creator. Landing page thaun poile website porian design, build ani launch kortolo.",
      },
      about: {
        tag: "Mhoji Khann",
        title: "Namaskar, hanv Luqman Inamdar",
        subtitle:
          "Goantlo 13 vorsacho web creator — poilo webpage thaun hea portfolio porian.",
      },
      contact: {
        tag: "Sompad Kor",
        title: "Ekuch banduyat",
        subtitle:
          "Hanv Luqman Inamdar — tumchea project vixim sang. Somvar thaun Shukrar 24 voram bhitôr zobab ditolo.",
      },
    },
    cta: {
      home: {
        title: "Tumchi website launch korunk taiyar?",
        description: "Tumchea project vixim sang — hanv sodanch 24 voram bhitôr zobab ditolo.",
        button: "Sompad Kor",
      },
      work: {
        title: "Oxem website zai?",
        description: "Tumcho idea sang — tumcho project hea portfolioant ghalunk zai.",
        button: "Project Suru Kor",
      },
      services: {
        title: "Khoinch seva zai tem kollona?",
        description: "Mhaka sang — tumkam sarkem package nivddunk madat kortolo.",
        button: "Sompad Kor",
      },
      about: {
        title: "Hi mhonpachem asa?",
        description: "Tumchea project vixim aikunk vo novea coders lagim zodunk zai.",
        button: "Sompad Kor",
      },
      contact: {
        title: "Ajun chinttat?",
        description: "Ek chotem hi patthoy — ek line-ui survat khatir puro.",
        button: "Sandesh Patthoy",
      },
    },
  },
};

export function getTranslation(locale: Locale) {
  return translations[locale] ?? translations.en;
}
