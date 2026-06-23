import type { Locale } from "@/lib/i18n/config";

export type LeadLocation = {
  lat: number;
  lng: number;
};

export type LeadPayload = {
  locale: Locale;
  serviceId: string;
  serviceLabel: string;
  areaId: string;
  areaLabel: string;
  countryIso: string;
  countryDial: string;
  phone: string;
  issue?: string;
  location?: LeadLocation;
  pageUrl?: string;
};

export type LeadSubmitResult = {
  ok: boolean;
  emailSent: boolean;
  whatsappSent: boolean;
  error?: string;
};
