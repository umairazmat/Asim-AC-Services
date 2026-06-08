"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";
import { BRAND_ASSETS } from "@/lib/constants/brand-assets";
import { getNavHref } from "@/lib/constants/navigation";
import type { Locale } from "@/lib/i18n/config";

type HeaderLogoProps = {
  locale: Locale;
};

export function HeaderLogo({ locale }: HeaderLogoProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const logoSrc = isDark
    ? BRAND_ASSETS.logos.monochromeWhite
    : BRAND_ASSETS.logos.horizontalLight;

  return (
    <Link
      href={getNavHref(locale, "")}
      className={`header-logo ${isDark ? "header-logo--dark" : "header-logo--light"}`}
      aria-label={locale === "ar" ? "العودة للرئيسية" : "Back to home"}
    >
      <Image
        src={logoSrc}
        alt={locale === "ar" ? "خدمة المكيفات عاصم" : "Asim AC Services"}
        width={isDark ? 878 : 1302}
        height={isDark ? 405 : 537}
        className="header-logo__image"
        sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 300px"
        priority
      />
    </Link>
  );
}
