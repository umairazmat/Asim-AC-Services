import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleHtmlSync } from "@/components/i18n/LocaleHtmlSync";
import { isLocale, locales } from "@/lib/i18n/config";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const isArabic = rawLocale === "ar";

  return {
    title: isArabic
      ? "خدمة المكيفات عاصم — قريباً"
      : "Asim AC Services — Coming Soon",
    description: isArabic
      ? "خدمة مكيفات احترافية في الرياض. تواصل معنا عبر واتساب للحجز والاستفسار."
      : "Professional AC cleaning, maintenance, and repair in Riyadh. Contact us on WhatsApp to book or inquire.",
    alternates: {
      canonical: `/${rawLocale}`,
      languages: {
        ar: "/ar",
        en: "/en",
        "x-default": "/ar",
      },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_SA" : "en_US",
      alternateLocale: isArabic ? ["en_US"] : ["ar_SA"],
      title: isArabic
        ? "خدمة المكيفات عاصم — قريباً"
        : "Asim AC Services — Coming Soon",
      description: isArabic
        ? "جودة عالية • خدمة سريعة • أسعار مناسبة"
        : "HIGH QUALITY • FAST SERVICE • AFFORDABLE PRICES",
      url: `/${rawLocale}`,
      images: ["/brand/poster.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <LocaleHtmlSync />
      {children}
    </div>
  );
}
