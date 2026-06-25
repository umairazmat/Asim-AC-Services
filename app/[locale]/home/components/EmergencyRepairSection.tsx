"use client";

import Image from "next/image";
import Link from "next/link";
import { EMERGENCY_REPAIR_BLOCK } from "@/lib/constants/emergency-repair-content";
import { useQuickQuote } from "@/components/providers/QuickQuoteProvider";
import styles from "@/app/[locale]/home/components/EmergencyRepairSection.module.css";
import { getPageHref } from "@/lib/i18n/pages";
import type { Locale } from "@/lib/i18n/config";

type EmergencyRepairSectionProps = {
  locale: Locale;
};

export function EmergencyRepairSection({ locale }: EmergencyRepairSectionProps) {
  const { scrollToQuote } = useQuickQuote();
  const copy = EMERGENCY_REPAIR_BLOCK;

  return (
    <section className={styles.section} aria-labelledby="home-emergency-heading" lang={locale}>
      <div className={styles.shell}>
        <div className={`${styles.card} fade-up`}>
          <div className={styles.mediaBackdrop} aria-hidden="true">
            <Image
              src={copy.image.src}
              alt=""
              fill
              sizes="(min-width: 48rem) 70vw, 100vw"
              className={styles.image}
              style={{ objectPosition: copy.image.position }}
            />
            <div className={styles.mediaOverlay} />
            <span className={styles.mediaBadge}>24/7</span>
          </div>

          <div className={styles.copyPanel}>
            <p className={styles.eyebrow}>
              <EmergencyIcon className={styles.eyebrowIcon} />
              <span>{copy.eyebrow[locale]}</span>
            </p>

            <h2 id="home-emergency-heading" className={styles.title}>
              {copy.heading[locale]}
            </h2>

            <p className={styles.description}>{copy.description[locale]}</p>

            <div className={styles.ctaRow}>
              <button
                type="button"
                className={styles.cta}
                onClick={() => scrollToQuote({ issueId: copy.bookFormIssueId })}
              >
                <WhatsAppGlyph className={styles.ctaIcon} />
                <span>{copy.cta[locale]}</span>
                <ArrowIcon className={styles.ctaArrow} />
              </button>

              <Link
                href={getPageHref(locale, "emergency-ac-repair-riyadh")}
                className={styles.pageLink}
              >
                <span>{copy.pageLink[locale]}</span>
                <ArrowIcon className={styles.ctaArrow} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmergencyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
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
