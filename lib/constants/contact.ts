export const CONTACT = {
  whatsapp: {
    display: "+966 5475 24002",
    href: "https://wa.me/966547524002",
    message: {
      ar: "مرحباً، أود الاستفسار عن خدمات المكيفات.",
      en: "Hello, I would like to inquire about AC services.",
    },
  },
  social: {
    instagram: {
      href: "https://www.instagram.com/hawk.9289660",
      label: { ar: "إنستغرام", en: "Instagram" },
    },
    facebook: {
      href: "https://www.facebook.com/people/AC-services-%D8%AE%D8%AF%D9%85%D8%A9-%D8%A7%D9%84%D9%85%D9%83%D9%8A%D9%81%D8%A7%D8%AA/61569615418346/",
      label: { ar: "فيسبوك", en: "Facebook" },
    },
  },
} as const;

export function getWhatsAppUrl(locale: "ar" | "en" = "ar"): string {
  const text = encodeURIComponent(CONTACT.whatsapp.message[locale]);
  return `${CONTACT.whatsapp.href}?text=${text}`;
}
