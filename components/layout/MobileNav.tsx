"use client";

import { useEffect, useState } from "react";
import { BookServiceButton } from "@/components/layout/BookServiceButton";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import type { Locale } from "@/lib/i18n/config";

type MobileNavProps = {
  locale: Locale;
};

export function MobileNav({ locale }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          onClick={() => setOpen(false)}
        />
      ) : null}

      <div
        id="mobile-nav-panel"
        className={`header-mobile__panel ${open ? "header-mobile__panel--open" : ""}`}
        hidden={!open}
      >
        <HeaderNav locale={locale} onNavigate={() => setOpen(false)} className="header-nav--mobile" />

        <div className="header-mobile__actions">
          <BookServiceButton locale={locale} className="w-full justify-center" />
          <div className="header-mobile__utilities">
            <ThemeToggle locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
