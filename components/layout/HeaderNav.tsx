"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavHref, isNavActive, NAV_ITEMS } from "@/lib/constants/navigation";
import type { Locale } from "@/lib/i18n/config";

type HeaderNavProps = {
  locale: Locale;
  onNavigate?: () => void;
  className?: string;
};

export function HeaderNav({ locale, onNavigate, className = "" }: HeaderNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={`header-nav ${className}`.trim()}
      aria-label={locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}
    >
      <ul className="header-nav__list">
        {NAV_ITEMS.map((item) => {
          const href = getNavHref(locale, item.pageId);
          const active = isNavActive(pathname, locale, item.pageId);

          return (
            <li key={item.id}>
              <Link
                href={href}
                className={`header-nav__link ${active ? "header-nav__link--active" : ""}`}
                aria-current={active ? "page" : undefined}
                onClick={onNavigate}
              >
                {item.label[locale]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
