import { BRAND } from "@/lib/constants/brand";
import type { Locale } from "@/lib/i18n/config";

type PagePlaceholderProps = {
  locale: Locale;
  title: { ar: string; en: string };
};

export function PagePlaceholder({ locale, title }: PagePlaceholderProps) {
  return (
    <section className="page-placeholder">
      <div className="page-placeholder__inner">
        <p className="page-placeholder__eyebrow">{BRAND.comingSoon[locale]}</p>
        <h1 className="page-placeholder__title">{title[locale]}</h1>
        <p className="page-placeholder__message">{BRAND.comingSoonMessage[locale]}</p>
      </div>
    </section>
  );
}
