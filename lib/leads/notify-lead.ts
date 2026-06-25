import { Resend } from "resend";
import { CONTACT } from "@/lib/constants/contact";
import { formatLeadHtml, formatLeadPlainText } from "@/lib/leads/format-lead";
import type { LeadPayload, LeadSubmitResult } from "@/lib/leads/types";

async function sendLeadEmail(lead: LeadPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL ?? CONTACT.email.address;
  const fromEmail = process.env.LEAD_FROM_EMAIL ?? "Asim AC Services <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn("[leads] RESEND_API_KEY not configured — skipping email");
    return false;
  }

  const resend = new Resend(apiKey);
  const subject = `New AC service request: ${lead.areaLabel ?? lead.serviceLabel}`;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: CONTACT.email.address,
    subject,
    text: formatLeadPlainText(lead),
    html: formatLeadHtml(lead),
  });

  if (error) {
    console.error("[leads] Resend error:", error);
    return false;
  }

  return true;
}

/** Notify business WhatsApp via CallMeBot (optional — owner must register at callmebot.com). */
async function sendLeadWhatsApp(lead: LeadPayload): Promise<boolean> {
  const apiKey = process.env.CALLMEBOT_API_KEY;
  const phone = process.env.CALLMEBOT_PHONE ?? "966547524002";

  if (!apiKey) {
    return false;
  }

  const text = encodeURIComponent(formatLeadPlainText(lead));
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${text}&apikey=${apiKey}`;

  try {
    const response = await fetch(url, { method: "GET" });
    return response.ok;
  } catch (error) {
    console.error("[leads] WhatsApp notify error:", error);
    return false;
  }
}

export async function notifyLead(lead: LeadPayload): Promise<LeadSubmitResult> {
  const [emailSent, whatsappSent] = await Promise.all([
    sendLeadEmail(lead),
    sendLeadWhatsApp(lead),
  ]);

  if (!emailSent && !whatsappSent) {
    return {
      ok: false,
      emailSent: false,
      whatsappSent: false,
      error: "Delivery failed",
    };
  }

  return { ok: true, emailSent, whatsappSent };
}
