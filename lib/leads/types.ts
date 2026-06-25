import type { Locale } from "@/lib/i18n/config";
import type { ServiceId } from "@/lib/constants/services";

export type LeadModalOptions = {
  issue?: string;
  serviceId?: ServiceId;
};

export type LeadLocation = {
  lat: number;
  lng: number;
};

export type LeadPayload = {
  locale: Locale;
  serviceId: string;
  serviceLabel: string;
  areaId?: string;
  areaLabel?: string;
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
