import { NextResponse } from "next/server";
import { isLocale } from "@/lib/i18n/config";
import { notifyLead } from "@/lib/leads/notify-lead";
import type { LeadLocation, LeadPayload } from "@/lib/leads/types";

type LeadRequestBody = {
  locale?: string;
  serviceId?: string;
  serviceLabel?: string;
  areaId?: string;
  areaLabel?: string;
  countryIso?: string;
  countryDial?: string;
  phone?: string;
  issue?: string;
  location?: LeadLocation;
  pageUrl?: string;
};

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

function isValidLocation(location: unknown): location is LeadLocation {
  if (!location || typeof location !== "object") return false;
  const { lat, lng } = location as LeadLocation;
  return (
    typeof lat === "number" &&
    typeof lng === "number" &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180
  );
}

export async function POST(request: Request) {
  let body: LeadRequestBody;

  try {
    body = (await request.json()) as LeadRequestBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const {
    locale,
    serviceId,
    serviceLabel,
    areaId,
    areaLabel,
    countryIso,
    countryDial,
    phone,
    issue,
    location,
    pageUrl,
  } = body;

  if (!locale || !isLocale(locale)) {
    return NextResponse.json({ ok: false, error: "Invalid locale" }, { status: 400 });
  }

  if (!serviceId?.trim() || !serviceLabel?.trim()) {
    return NextResponse.json({ ok: false, error: "Service required" }, { status: 400 });
  }

  if (!countryIso?.trim() || !countryDial?.trim() || !phone?.trim()) {
    return NextResponse.json({ ok: false, error: "Phone required" }, { status: 400 });
  }

  const normalizedPhone = phone.replace(/\D/g, "");

  if (!isValidPhone(normalizedPhone)) {
    return NextResponse.json({ ok: false, error: "Invalid phone" }, { status: 400 });
  }

  const lead: LeadPayload = {
    locale,
    serviceId: serviceId.trim(),
    serviceLabel: serviceLabel.trim(),
    areaId: areaId?.trim() || undefined,
    areaLabel: areaLabel?.trim() || undefined,
    countryIso: countryIso.trim(),
    countryDial: countryDial.replace(/\D/g, ""),
    phone: normalizedPhone,
    issue: issue?.trim() || undefined,
    location: isValidLocation(location) ? location : undefined,
    pageUrl: pageUrl?.trim() || undefined,
  };

  const result = await notifyLead(lead);

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error ?? "Failed to send" },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
