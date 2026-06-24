import type { ServiceId } from "@/lib/constants/services";

/** Homepage quick-quote issue options — maps to backend service categories. */
export const QUOTE_ISSUES = [
  {
    id: "not-cooling",
    serviceId: "repair" satisfies ServiceId,
    label: { ar: "المكيف لا يبرد", en: "AC not cooling" },
  },
  {
    id: "weak-cooling",
    serviceId: "cooling" satisfies ServiceId,
    label: { ar: "ضعف التبريد", en: "Weak cooling" },
  },
  {
    id: "water-leak",
    serviceId: "repair" satisfies ServiceId,
    label: { ar: "تسريب ماء", en: "Water leakage" },
  },
  {
    id: "loud-noise",
    serviceId: "repair" satisfies ServiceId,
    label: { ar: "صوت مزعج", en: "Loud noise" },
  },
  {
    id: "gas-refill",
    serviceId: "gas" satisfies ServiceId,
    label: { ar: "فحص أو تعبئة فريون", en: "Gas check or refill" },
  },
  {
    id: "ac-cleaning",
    serviceId: "cleaning" satisfies ServiceId,
    label: { ar: "تنظيف مكيف", en: "AC cleaning" },
  },
  {
    id: "ac-installation",
    serviceId: "installation" satisfies ServiceId,
    label: { ar: "تركيب مكيف", en: "AC installation" },
  },
  {
    id: "emergency-repair",
    serviceId: "repair" satisfies ServiceId,
    label: { ar: "صيانة طارئة", en: "Emergency repair" },
  },
] as const;

export type QuoteIssueId = (typeof QUOTE_ISSUES)[number]["id"];

/** Section 2 pain card id → Section 3 quote issue id */
export const PAIN_CARD_TO_QUOTE_ISSUE: Record<string, QuoteIssueId> = {
  "not-cooling": "not-cooling",
  "weak-cooling": "weak-cooling",
  "water-leak": "water-leak",
  "loud-noise": "loud-noise",
  "low-gas": "gas-refill",
  "needs-service": "ac-cleaning",
};
