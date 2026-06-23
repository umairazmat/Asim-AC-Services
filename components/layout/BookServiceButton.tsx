"use client";

import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { useLeadCapture } from "@/components/providers/LeadCaptureProvider";
import type { Locale } from "@/lib/i18n/config";

type BookServiceButtonProps = {
  locale: Locale;
  compact?: boolean;
  className?: string;
};

export function BookServiceButton({
  locale,
  compact = false,
  className = "",
}: BookServiceButtonProps) {
  const { openModal } = useLeadCapture();

  return (
    <button
      type="button"
      onClick={openModal}
      className={`book-service-btn ${compact ? "book-service-btn--compact" : ""} ${className}`.trim()}
    >
      <span className="book-service-btn__icon">
        <WhatsAppIcon className="h-4 w-4" />
      </span>
      <span className="book-service-btn__label">
        {locale === "ar" ? "احجز الخدمة" : "Book Service"}
      </span>
    </button>
  );
}
