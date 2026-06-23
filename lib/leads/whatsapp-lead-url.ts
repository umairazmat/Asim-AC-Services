import { CONTACT } from "@/lib/constants/contact";
import type { LeadPayload } from "@/lib/leads/types";

/** Customer-facing WhatsApp message — opens wa.me to business after form submit. */
export function formatLeadWhatsAppMessage(lead: LeadPayload): string {
  const isAr = lead.locale === "ar";
  const lines = isAr
    ? [
        "مرحباً، أود حجز خدمة المكيفات:",
        "",
        `الخدمة: ${lead.serviceLabel}`,
        `الحي: ${lead.areaLabel}`,
        `الجوال: +${lead.countryDial} ${lead.phone}`,
      ]
    : [
        "Hello, I would like to book an AC service:",
        "",
        `Service: ${lead.serviceLabel}`,
        `Area: ${lead.areaLabel}`,
        `Phone: +${lead.countryDial} ${lead.phone}`,
      ];

  if (lead.issue?.trim()) {
    lines.push(isAr ? `المشكلة: ${lead.issue.trim()}` : `Issue: ${lead.issue.trim()}`);
  }

  if (lead.location) {
    const mapsUrl = `https://www.google.com/maps?q=${lead.location.lat},${lead.location.lng}`;
    lines.push(isAr ? `الموقع: ${mapsUrl}` : `Location: ${mapsUrl}`);
  }

  return lines.join("\n");
}

export function getLeadWhatsAppUrl(lead: LeadPayload): string {
  const text = encodeURIComponent(formatLeadWhatsAppMessage(lead));
  return `${CONTACT.whatsapp.href}?text=${text}`;
}

export function openLeadWhatsApp(lead: LeadPayload): boolean {
  if (typeof window === "undefined") return false;
  const url = getLeadWhatsAppUrl(lead);
  const popup = window.open(url, "_blank", "noopener,noreferrer");
  return popup !== null;
}
