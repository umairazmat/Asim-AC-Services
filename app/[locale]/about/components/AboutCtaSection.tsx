"use client";

import Link from "next/link";
import { ABOUT_CONTENT } from "@/app/[locale]/about/content";
import ctaStyles from "@/app/[locale]/about/components/AboutCtaSection.module.css";
import { HeroCtas } from "@/app/[locale]/home/components/HeroCtas";
import { getPageHref } from "@/lib/i18n/pages";
import type { Locale } from "@/lib/i18n/config";

type AboutCtaSectionProps = {
  locale: Locale;
};

export function AboutCtaSection({ locale }: AboutCtaSectionProps) {
  const { cta } = ABOUT_CONTENT;

  return (
    <section className={ctaStyles.section} aria-labelledby="about-cta-heading">
      <div className={ctaStyles.shell}>
        <div className={`${ctaStyles.panel} fade-up`}>
          <p className={ctaStyles.eyebrow}>{cta.eyebrow[locale]}</p>
          <h2 id="about-cta-heading" className={ctaStyles.title}>
            {cta.heading[locale]}
          </h2>
          <p className={ctaStyles.subline}>{cta.subline[locale]}</p>

          <div className={ctaStyles.actions}>
            <HeroCtas locale={locale} />
            <Link
              href={getPageHref(locale, cta.contactPageId)}
              className={`home-hero__cta ${ctaStyles.contactCta}`}
            >
              <span>{cta.contact[locale]}</span>
              <ArrowIcon className={ctaStyles.contactArrow} />
            </Link>
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
