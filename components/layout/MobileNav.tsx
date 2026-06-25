"use client";

import { useEffect, useState } from "react";
import { BookServiceButton } from "@/components/layout/BookServiceButton";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { BOOK_SERVICE_SECTION } from "@/lib/constants/book-service-content";
import { NAV_BOOK_ITEM } from "@/lib/constants/navigation";
import { scrollToBookService } from "@/lib/scroll-to-book-service";
import type { Locale } from "@/lib/i18n/config";

type MobileNavProps = {
  locale: Locale;
};

export function MobileNav({ locale }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const bookCopy = BOOK_SERVICE_SECTION.navCta;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  function handleBookNavClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    scrollToBookService();
    closeMenu();
  }

  return (
    <div className="header-mobile">
      <button
        type="button"
        className="header-mobile__toggle"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={locale === "ar" ? "فتح القائمة" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="header-mobile__bar" />
        <span className="header-mobile__bar" />
        <span className="header-mobile__bar" />
      </button>

      {open ? (
        <button
          type="button"
          className="header-mobile__backdrop"
          aria-label={locale === "ar" ? "إغلاق القائمة" : "Close menu"}
          onClick={closeMenu}
        />
      ) : null}

      <div
        id="mobile-nav-panel"
        className={`header-mobile__panel ${open ? "header-mobile__panel--open" : ""}`}
        hidden={!open}
      >
        <HeaderNav locale={locale} onNavigate={closeMenu} className="header-nav--mobile" />

        <a
          href={NAV_BOOK_ITEM.hash}
          className="header-mobile__book-card"
          onClick={handleBookNavClick}
        >
          <span className="header-mobile__book-eyebrow">
            {locale === "ar" ? "احجز الآن" : "Book now"}
          </span>
          <span className="header-mobile__book-title">{bookCopy.heading[locale]}</span>
          <span className="header-mobile__book-desc">{bookCopy.description[locale]}</span>
          <span className="header-mobile__book-action">
            <span>{bookCopy.button[locale]}</span>
            <ArrowIcon className="header-mobile__book-arrow" />
          </span>
        </a>

        <div className="header-mobile__actions">
          <BookServiceButton locale={locale} className="w-full justify-center" onNavigate={closeMenu} />
          <div className="header-mobile__utilities">
            <ThemeToggle locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
