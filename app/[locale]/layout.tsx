import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleHtmlSync } from "@/components/i18n/LocaleHtmlSync";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LeadCaptureProvider } from "@/components/providers/LeadCaptureProvider";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";

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
    title: {
      default: isArabic ? "خدمة المكيفات عاصم" : "Asim AC Services",
      template: isArabic ? "%s | خدمة المكيفات عاصم" : "%s | Asim AC Services",
    },
    description: isArabic
      ? "خدمة مكيفات احترافية في الرياض. تواصل معنا عبر واتساب للحجز والاستفسار."
      : "Professional AC cleaning, maintenance, and repair in Riyadh. Contact us on WhatsApp to book or inquire.",
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <LeadCaptureProvider locale={locale}>
      <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className="site-shell">
        <LocaleHtmlSync />
        <SiteHeader locale={locale} />
        <main className="site-main">{children}</main>
        <SiteFooter locale={locale} />
        <WhatsAppButton locale={locale} />
      </div>
    </LeadCaptureProvider>
  );
}
