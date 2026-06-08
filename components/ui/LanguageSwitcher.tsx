"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  defaultLocale,
  getLocalePath,
  localeLabels,
  locales,
  LOCALE_COOKIE,
  type Locale,
} from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/use-locale";
import { FlagIcon } from "@/components/ui/FlagIcon";

type LanguageSwitcherProps = {
  locale?: Locale;
  variant?: "default" | "header";
  compact?: "default" | "flags";
  className?: string;
};

function persistLocale(nextLocale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${nextLocale};path=/;max-age=31536000;SameSite=Lax`;
  document.documentElement.lang = nextLocale;
  document.documentElement.dir = nextLocale === "ar" ? "rtl" : "ltr";
  document.documentElement.classList.add("locale-switching");
}

export function LanguageSwitcher({
  locale: localeProp = defaultLocale,
  variant = "default",
  compact = "default",
  className = "",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale(localeProp);

  function switchTo(nextLocale: Locale) {
    if (nextLocale === locale || isPending) return;

    persistLocale(nextLocale);

    startTransition(() => {
      router.push(getLocalePath(pathname, nextLocale));
      router.refresh();
    });
  }

  return (
    <div
      className={`lang-switch ${variant === "header" ? "lang-switch--header" : ""} ${compact === "flags" ? "lang-switch--flags" : ""} ${isPending ? "lang-switch--pending" : ""} ${className}`.trim()}
      dir="ltr"
      role="group"
      aria-label={locale === "ar" ? "تبديل اللغة" : "Language switcher"}
    >
      <span
        className="lang-switch-glider"
        data-locale={locale}
        aria-hidden="true"
      />

      {locales.map((item) => {
        const labels = localeLabels[item];
        const isActive = item === locale;

        if (isActive) {
          return (
            <span
              key={item}
              className="lang-switch-option lang-switch-option--active"
              aria-current="true"
            >
              <FlagIcon code={labels.flag} title={labels.ariaLabel} />
              <span className="lang-switch-option__label">{labels.native}</span>
            </span>
          );
        }

        return (
          <Link
            key={item}
            href={getLocalePath(pathname, item)}
            hrefLang={item}
            className="lang-switch-option"
            aria-label={
              item === "ar" ? "التبديل إلى العربية" : "Switch to English"
            }
            onClick={(event) => {
              event.preventDefault();
              switchTo(item);
            }}
          >
            <FlagIcon code={labels.flag} title={labels.ariaLabel} />
            <span className="lang-switch-option__label">{labels.native}</span>
          </Link>
        );
      })}
    </div>
  );
}
