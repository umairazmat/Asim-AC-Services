"use client";

import { scrollToBookService } from "@/lib/scroll-to-book-service";
import { BOOK_SERVICE_SECTION } from "@/lib/constants/book-service-content";
import type { Locale } from "@/lib/i18n/config";

type FooterBookButtonProps = {
  locale: Locale;
};

export function FooterBookButton({ locale }: FooterBookButtonProps) {
  return (
    <button
      type="button"
      onClick={() => scrollToBookService()}
      className="site-footer__book-btn"
    >
      {BOOK_SERVICE_SECTION.navCta.navLabel[locale]}
    </button>
  );
}
