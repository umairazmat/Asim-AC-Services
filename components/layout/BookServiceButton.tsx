"use client";

import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { BOOK_SERVICE_SECTION } from "@/lib/constants/book-service-content";
import { scrollToBookService } from "@/lib/scroll-to-book-service";
import type { Locale } from "@/lib/i18n/config";

type BookServiceButtonProps = {
  locale: Locale;
  compact?: boolean;
  className?: string;
  onNavigate?: () => void;
};

export function BookServiceButton({
  locale,
  compact = false,
  className = "",
  onNavigate,
}: BookServiceButtonProps) {
  const label = BOOK_SERVICE_SECTION.navCta.navLabel[locale];

  return (
    <button
      type="button"
      onClick={() => {
        scrollToBookService();
        onNavigate?.();
      }}
      className={`book-service-btn ${compact ? "book-service-btn--compact" : ""} ${className}`.trim()}
    >
      <span className="book-service-btn__icon">
        <WhatsAppIcon className="h-4 w-4" />
      </span>
      <span className="book-service-btn__label">{label}</span>
    </button>
  );
}
