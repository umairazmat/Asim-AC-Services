export const CONTACT = {
  whatsapp: {
    display: "+966 5475 24002",
    href: "https://wa.me/966547524002",
    message: {
      ar: "مرحباً، أود الاستفسار عن خدمات المكيفات.",
      en: "Hello, I would like to inquire about AC services.",
    },
  },
} as const;

export function getWhatsAppUrl(locale: "ar" | "en" = "ar"): string {
  const text = encodeURIComponent(CONTACT.whatsapp.message[locale]);
  return `${CONTACT.whatsapp.href}?text=${text}`;
}
