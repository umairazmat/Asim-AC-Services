"use client";

import Link from "next/link";
import ctaStyles from "@/app/[locale]/about/components/AboutCtaSection.module.css";
import { HeroCtas } from "@/app/[locale]/home/components/HeroCtas";
import type { ServiceId } from "@/lib/constants/services";
import type { Locale } from "@/lib/i18n/config";

type Bilingual = { ar: string; en: string };

type AreaPageCtaSectionProps = {
  locale: Locale;
  headingId: string;
  eyebrow: Bilingual;
  heading: Bilingual;
  subline: Bilingual;
  contactHref?: string;
  contactLabel?: Bilingual;
  bookServiceId?: ServiceId;
};

export function AreaPageCtaSection({
  locale,
  headingId,
  eyebrow,
  heading,
  subline,
  contactHref,
  contactLabel,
  bookServiceId,
}: AreaPageCtaSectionProps) {
  return (
    <section className={ctaStyles.section} aria-labelledby={headingId}>
      <div className={ctaStyles.shell}>
        <div className={`${ctaStyles.panel} fade-up`}>
          <p className={ctaStyles.eyebrow}>{eyebrow[locale]}</p>
          <h2 id={headingId} className={ctaStyles.title}>
            {heading[locale]}
          </h2>
          <p className={ctaStyles.subline}>{subline[locale]}</p>

          <div className={ctaStyles.actions}>
            <HeroCtas locale={locale} serviceId={bookServiceId} />
            {contactHref && contactLabel ? (
              <Link href={contactHref} className={`home-hero__cta ${ctaStyles.contactCta}`}>
                <span>{contactLabel[locale]}</span>
                <ArrowIcon className={ctaStyles.contactArrow} />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
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
