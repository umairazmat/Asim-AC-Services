import type { Locale } from "@/lib/i18n/config";

export const NAV_ITEMS = [
  {
    id: "home",
    href: "",
    label: { ar: "الرئيسية", en: "Home" },
  },
  {
    id: "about",
    href: "/about",
    label: { ar: "من نحن", en: "About Us" },
  },
  {
    id: "services",
    href: "/services",
    label: { ar: "خدماتنا", en: "Services" },
  },
  {
    id: "contact",
    href: "/contact",
    label: { ar: "اتصل بنا", en: "Contact" },
  },
] as const;

export type NavItemId = (typeof NAV_ITEMS)[number]["id"];

export function getNavHref(locale: Locale, href: string): string {
  return href ? `/${locale}${href}` : `/${locale}`;
}

export function isNavActive(pathname: string, locale: Locale, href: string): boolean {
  const target = getNavHref(locale, href);

  if (href === "") {
    return pathname === target;
  }

  return pathname === target || pathname.startsWith(`${target}/`);
}
