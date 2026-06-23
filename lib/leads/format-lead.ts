import type { LeadPayload } from "@/lib/leads/types";

export function formatLeadPlainText(lead: LeadPayload): string {
  const lines = [
    "🆕 New lead — Asim AC Services",
    "",
    `Service: ${lead.serviceLabel}`,
    `Area: ${lead.areaLabel}`,
    `Phone: +${lead.countryDial} ${lead.phone}`,
    `Language: ${lead.locale === "ar" ? "Arabic" : "English"}`,
  ];

  if (lead.issue?.trim()) {
    lines.push(`Issue: ${lead.issue.trim()}`);
  }

  if (lead.location) {
    const mapsUrl = `https://www.google.com/maps?q=${lead.location.lat},${lead.location.lng}`;
    lines.push(`Location: ${mapsUrl}`);
  }

  if (lead.pageUrl) {
    lines.push(`Page: ${lead.pageUrl}`);
  }

  lines.push("", `Time: ${new Date().toISOString()}`);

  return lines.join("\n");
}

export function formatLeadHtml(lead: LeadPayload): string {
  const issueRow = lead.issue?.trim()
    ? `<tr><td style="padding:6px 12px;font-weight:600;">Issue</td><td style="padding:6px 12px;">${escapeHtml(lead.issue.trim())}</td></tr>`
    : "";

  const locationRow = lead.location
    ? `<tr><td style="padding:6px 12px;font-weight:600;">Location</td><td style="padding:6px 12px;"><a href="https://www.google.com/maps?q=${lead.location.lat},${lead.location.lng}">View on map</a></td></tr>`
    : "";

  return `
    <div style="font-family:system-ui,sans-serif;max-width:520px;">
      <h2 style="color:#1b3a6b;margin:0 0 12px;">New service request</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <tr><td style="padding:6px 12px;font-weight:600;">Service</td><td style="padding:6px 12px;">${escapeHtml(lead.serviceLabel)}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:600;">Area</td><td style="padding:6px 12px;">${escapeHtml(lead.areaLabel)}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:600;">Phone</td><td style="padding:6px 12px;" dir="ltr">+${escapeHtml(lead.countryDial)} ${escapeHtml(lead.phone)}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:600;">Language</td><td style="padding:6px 12px;">${lead.locale === "ar" ? "Arabic" : "English"}</td></tr>
        ${issueRow}
        ${locationRow}
      </table>
      <p style="font-size:12px;color:#64748b;margin-top:16px;">${new Date().toLocaleString("en-GB", { timeZone: "Asia/Riyadh" })} (Riyadh)</p>
    </div>
  `.trim();
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
