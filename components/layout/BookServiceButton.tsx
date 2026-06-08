import { getWhatsAppUrl } from "@/lib/constants/contact";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
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
  return (
    <a
      href={getWhatsAppUrl(locale)}
      target="_blank"
      rel="noopener noreferrer"
      className={`book-service-btn ${compact ? "book-service-btn--compact" : ""} ${className}`.trim()}
    >
      <span className="book-service-btn__icon">
        <WhatsAppIcon className="h-4 w-4" />
      </span>
      <span className="book-service-btn__label">
        {locale === "ar" ? "احجز الخدمة" : "Book Service"}
      </span>
    </a>
  );
}
