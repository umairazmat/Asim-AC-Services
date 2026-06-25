import { BRAND_ASSETS } from "@/lib/constants/brand-assets";

export const EMERGENCY_REPAIR_BLOCK = {
  eyebrow: {
    ar: "خدمة طوارئ",
    en: "URGENT SERVICE",
  },
  heading: {
    ar: "صيانة مكيفات طارئة في الرياض",
    en: "Emergency AC Repair in Riyadh",
  },
  description: {
    ar: "المكيف توقف أو لا يبرد؟ أرسل المشكلة عبر واتساب في الرياض، المملكة العربية السعودية وسنؤكد توفر الموعد.",
    en: "AC stopped working or not cooling? Send your issue on WhatsApp in Riyadh, Saudi Arabia and we'll confirm availability.",
  },
  cta: {
    ar: "طلب صيانة طارئة",
    en: "Request Emergency Service",
  },
  pageLink: {
    ar: "تفاصيل صيانة مكيفات طارئة في الرياض",
    en: "Emergency AC Repair in Riyadh: Details",
  },
  image: {
    src: BRAND_ASSETS.photos.emergencyServiceRiyadh,
    alt: {
      ar: "فني عاصم لخدمات المكيفات يصل لطلب صيانة مكيفات طارئة في الرياض",
      en: "Asim AC Services technician arriving for emergency AC repair in Riyadh",
    },
    position: "center 40%",
  },
  /** Prefill book form with urgent cooling issue */
  bookFormIssueId: "not-cooling" as const,
} as const;
