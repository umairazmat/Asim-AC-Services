"use client";

import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { useLeadCapture } from "@/components/providers/LeadCaptureProvider";
import type { Locale } from "@/lib/i18n/config";

type FooterBookButtonProps = {
  locale: Locale;
};

export function FooterBookButton({ locale }: FooterBookButtonProps) {
  const { openModal } = useLeadCapture();

  return (
    <button type="button" onClick={openModal} className="site-footer__book-btn">
      {locale === "ar" ? "احجز الخدمة" : "Book Service"}
    </button>
  );
}
