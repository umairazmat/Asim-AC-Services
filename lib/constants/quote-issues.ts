import type { ServiceId } from "@/lib/constants/services";

type BookFormOption = {
  readonly id: string;
  readonly serviceId: ServiceId;
  readonly label: { readonly ar: string; readonly en: string };
  readonly description?: { readonly ar: string; readonly en: string };
};

/** Primary AC services — first optgroup in the book form. */
export const BOOK_FORM_SERVICES = [
  {
    id: "ac-repair",
    serviceId: "repair",
    label: { en: "AC Repair", ar: "إصلاح المكيف" },
    description: {
      en: "Fix cooling issues, leaks, noise, and AC faults.",
      ar: "إصلاح مشاكل التبريد والتسريبات والأصوات وأعطال المكيف.",
    },
  },
  {
    id: "ac-cleaning",
    serviceId: "cleaning",
    label: { en: "AC Cleaning", ar: "تنظيف المكيف" },
    description: {
      en: "Complete AC cleaning to improve airflow and cooling.",
      ar: "تنظيف شامل للمكيف لتحسين تدفق الهواء والتبريد.",
    },
  },
  {
    id: "gas-check-refill",
    serviceId: "gas",
    label: { en: "Gas Check & Refill", ar: "فحص الغاز وإعادة التعبئة" },
    description: {
      en: "Check gas level and refill when needed after inspection.",
      ar: "فحص مستوى الغاز وإعادة التعبئة عند الحاجة بعد الفحص.",
    },
  },
  {
    id: "ac-installation",
    serviceId: "installation",
    label: { en: "AC Installation", ar: "تركيب المكيف" },
    description: {
      en: "Professional AC installation for homes and shops.",
      ar: "تركيب احترافي للمكيفات للمنازل والمحلات.",
    },
  },
  {
    id: "leak-detection",
    serviceId: "repair",
    label: { en: "Leak Detection & Cooling Issues", ar: "كشف التسريبات ومشاكل التبريد" },
    description: {
      en: "Find leaks and solve weak cooling or repeated AC problems.",
      ar: "كشف التسريبات وحل ضعف التبريد أو تكرار مشاكل المكيف.",
    },
  },
  {
    id: "duct-hvac",
    serviceId: "duct",
    label: { en: "Duct Work & Commercial HVAC", ar: "مجاري الهواء ومكيفات تجارية" },
    description: {
      en: "HVAC service for shops, offices, packaged units, and duct systems.",
      ar: "خدمة HVAC للمحلات والمكاتب ووحدات الباكج ومجاري الهواء.",
    },
  },
] as const satisfies readonly BookFormOption[];

/** Common AC problems — second optgroup (matches pain strip cards). */
export const BOOK_FORM_ISSUES = [
  {
    id: "not-cooling",
    serviceId: "repair",
    label: { en: "AC Not Cooling", ar: "المكيف لا يبرد" },
    description: {
      en: "Warm air or weak airflow from your AC.",
      ar: "هواء دافئ أو ضعف واضح في التبريد.",
    },
  },
  {
    id: "weak-cooling",
    serviceId: "cooling",
    label: { en: "Weak Cooling", ar: "ضعف التبريد" },
    description: {
      en: "Cooling is slow or not reaching the room.",
      ar: "التبريد بطيء أو لا يصل للغرفة.",
    },
  },
  {
    id: "water-leak",
    serviceId: "repair",
    label: { en: "Water Leakage", ar: "تسريب ماء" },
    description: {
      en: "Water dripping from indoor or outdoor unit.",
      ar: "نزول ماء من الوحدة الداخلية أو الخارجية.",
    },
  },
  {
    id: "loud-noise",
    serviceId: "repair",
    label: { en: "Loud Noise", ar: "صوت مزعج" },
    description: {
      en: "Unusual sound, vibration, or motor noise.",
      ar: "صوت غير طبيعي أو اهتزاز أثناء التشغيل.",
    },
  },
  {
    id: "low-gas",
    serviceId: "gas",
    label: { en: "Low Gas / Freon", ar: "نقص فريون" },
    description: {
      en: "Cooling drops because gas may be low.",
      ar: "ضعف التبريد بسبب احتمال نقص الغاز.",
    },
  },
  {
    id: "needs-service",
    serviceId: "cleaning",
    label: { en: "Needs Cleaning", ar: "يحتاج تنظيف" },
    description: {
      en: "Dust, smell, or weak airflow from filters.",
      ar: "غبار، رائحة، أو ضعف تدفق الهواء.",
    },
  },
] as const satisfies readonly BookFormOption[];

export const BOOK_FORM_OPTIONS = [...BOOK_FORM_SERVICES, ...BOOK_FORM_ISSUES] as const;

export type BookFormOptionId = (typeof BOOK_FORM_OPTIONS)[number]["id"];

/** @deprecated Use BookFormOptionId */
export type QuoteIssueId = BookFormOptionId;

/** @deprecated Use BOOK_FORM_OPTIONS */
export const QUOTE_ISSUES = BOOK_FORM_OPTIONS;

export function findBookFormOption(id: string) {
  return BOOK_FORM_OPTIONS.find((item) => item.id === id);
}

/** Section 2 pain card id → book form issue option id */
export const PAIN_CARD_TO_QUOTE_ISSUE: Record<string, BookFormOptionId> = {
  "not-cooling": "not-cooling",
  "weak-cooling": "weak-cooling",
  "water-leak": "water-leak",
  "loud-noise": "loud-noise",
  "low-gas": "low-gas",
  "needs-service": "needs-service",
};

/** Main services section card id → book form primary service option id */
export const MAIN_SERVICE_CARD_TO_BOOK_FORM: Record<string, BookFormOptionId> = {
  repair: "ac-repair",
  cleaning: "ac-cleaning",
  gas: "gas-check-refill",
  installation: "ac-installation",
  "leak-cooling": "leak-detection",
  commercial: "duct-hvac",
};
