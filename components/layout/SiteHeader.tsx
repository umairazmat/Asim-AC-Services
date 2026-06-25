"use client";

import { useEffect, useState } from "react";
import { BookServiceButton } from "@/components/layout/BookServiceButton";
import { HeaderLogo } from "@/components/layout/HeaderLogo";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { HeaderTopBar } from "@/components/layout/HeaderTopBar";
import { MobileNav } from "@/components/layout/MobileNav";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import type { Locale } from "@/lib/i18n/config";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <HeaderTopBar locale={locale} />

      <div className="header-main">
        <div className="header-shell header-main__inner">
          <div className="header-main__brand">
            <HeaderLogo locale={locale} />
          </div>

          <HeaderNav locale={locale} className="header-nav--desktop" />

          <div className="header-main__actions">
            <LanguageSwitcher
              locale={locale}
              variant="header"
              compact="flags"
              className="header-main__lang-mobile"
            />

            <div className="header-main__utilities">
              <LanguageSwitcher locale={locale} variant="header" />
              <ThemeToggle locale={locale} />
            </div>

            <BookServiceButton locale={locale} className="header-main__cta" />

            <MobileNav locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
}
