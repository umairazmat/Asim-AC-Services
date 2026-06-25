import type { LeadPayload } from "@/lib/leads/types";
import { openLeadWhatsApp } from "@/lib/leads/whatsapp-lead-url";

type SubmitLeadOptions = {
  openWhatsApp?: boolean;
};

export async function submitLead(
  lead: LeadPayload,
  options: SubmitLeadOptions = {},
): Promise<{ ok: boolean }> {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });

  let data: { ok?: boolean } = {};
  try {
    data = (await response.json()) as { ok?: boolean };
  } catch {
    data = {};
  }

  if (!response.ok || !data.ok) {
    return { ok: false };
  }

  if (options.openWhatsApp !== false) {
    openLeadWhatsApp(lead);
  }

  return { ok: true };
}
