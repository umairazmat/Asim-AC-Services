import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import type { Value } from "react-phone-number-input";
import { findBookFormOption } from "@/lib/constants/quote-issues";
import { RIYADH_AREAS } from "@/lib/constants/riyadh-areas";
import type { LeadPayload } from "@/lib/leads/types";
import type { Locale } from "@/lib/i18n/config";

type BuildLeadInput = {
  locale: Locale;
  issueId: string;
  phoneE164: Value;
  areaId?: string;
  note?: string;
};

export function buildLeadPayload(input: BuildLeadInput): LeadPayload | null {
  const { locale, issueId, phoneE164, areaId, note } = input;

  if (!phoneE164 || !isValidPhoneNumber(phoneE164)) return null;

  const parsed = parsePhoneNumber(phoneE164);
  if (!parsed) return null;

  const issue = findBookFormOption(issueId);
  if (!issue) return null;

  const area = areaId ? RIYADH_AREAS.find((item) => item.id === areaId) : undefined;

  return {
    locale,
    serviceId: issue.serviceId,
    serviceLabel: issue.label[locale],
    areaId: area?.id,
    areaLabel: area?.label[locale],
    countryIso: parsed.country ?? "SA",
    countryDial: parsed.countryCallingCode,
    phone: parsed.nationalNumber,
    issue: note?.trim() || undefined,
    pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
  };
}
