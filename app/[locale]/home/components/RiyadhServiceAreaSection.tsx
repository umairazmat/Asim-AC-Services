import Image from "next/image";
import Link from "next/link";
import { HOME_CONTENT } from "@/app/[locale]/home/content";
import styles from "@/app/[locale]/home/components/RiyadhServiceAreaSection.module.css";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import {
  HOME_DISTRICT_PAGE_LINKS,
  HOME_SERVICE_AREA_TEASER_DISTRICT_IDS,
} from "@/lib/constants/home-seo-links";
import { getWhatsAppUrl } from "@/lib/constants/contact";
import { RIYADH_AREAS } from "@/lib/constants/riyadh-areas";
import { getPageHref } from "@/lib/i18n/pages";
import type { PageId } from "@/lib/i18n/pages";
import type { Locale } from "@/lib/i18n/config";

type RiyadhServiceAreaSectionProps = {
  locale: Locale;
};

const TEASER_DISTRICTS = HOME_SERVICE_AREA_TEASER_DISTRICT_IDS.map((id) => {
  const area = RIYADH_AREAS.find((entry) => entry.id === id);
  if (!area) {
    throw new Error(`Missing Riyadh area config for teaser district id: ${id}`);
  }
  return area;
});

export function RiyadhServiceAreaSection({ locale }: RiyadhServiceAreaSectionProps) {
  const { serviceArea } = HOME_CONTENT;

  return (
    <section className={styles.section} aria-labelledby="home-service-area-heading" lang={locale}>
      <div className={styles.shell}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <header className={`${styles.header} fade-up`}>
              <p className={styles.eyebrow}>
                <SnowflakeIcon className={styles.eyebrowIcon} />
                <span>{serviceArea.eyebrow[locale]}</span>
              </p>

              <h2 id="home-service-area-heading" className={styles.title}>
                {serviceArea.heading[locale]}
              </h2>

              <p className={styles.subline}>{serviceArea.teaserSubline[locale]}</p>
            </header>

            <div className={`${styles.block} fade-up fade-up--delay-1`}>
              <p className={styles.blockLabel}>{serviceArea.highlightsLabel[locale]}</p>
              <ul className={styles.highlightChips} aria-label={serviceArea.highlightsLabel[locale]}>
                {serviceArea.highlights.map((chip) => (
                  <li key={chip.id} className={styles.highlightChip}>
                    <LocationIcon />
                    <span>{chip.label[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${styles.block} fade-up fade-up--delay-1`}>
              <p className={styles.blockLabel}>{serviceArea.districtsLabel[locale]}</p>
              <ul className={styles.districtGrid} aria-label={serviceArea.districtsLabel[locale]}>
                {TEASER_DISTRICTS.map((area) => {
                  const pageId = HOME_DISTRICT_PAGE_LINKS[area.id];

                  return (
                    <li key={area.id} className={styles.districtChip}>
                      {pageId ? (
                        <Link href={getPageHref(locale, pageId)} className={styles.districtLink}>
                          {area.label[locale]}
                        </Link>
                      ) : (
                        area.label[locale]
                      )}
                    </li>
                  );
                })}
              </ul>
              <p className={styles.availabilityNote}>{serviceArea.availabilityNote[locale]}</p>
            </div>

            <div className={`${styles.ctaRow} fade-up fade-up--delay-2`}>
              <Link
                href={getPageHref(locale, "service-areas-riyadh" satisfies PageId)}
                className={styles.ctaPrimary}
              >
                <span>{serviceArea.viewAllCta[locale]}</span>
                <ArrowIcon className={styles.ctaArrow} />
              </Link>

              <a
                href={getWhatsAppUrl(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
              >
                <WhatsAppIcon />
                <span>{serviceArea.ctaSecondary[locale]}</span>
              </a>
            </div>
          </div>

          <aside className={`${styles.visual} fade-up fade-up--delay-1`} aria-hidden={false}>
            <div className={styles.visualCard}>
              <Image
                src={serviceArea.visual.image}
                alt={serviceArea.visual.imageAlt[locale]}
                fill
                sizes="(min-width: 64rem) 40vw, 100vw"
                className={styles.visualImage}
              />
              <div className={styles.visualOverlay} />

              <ul className={styles.visualChips}>
                {serviceArea.visual.floatingChips.map((chip) => (
                  <li key={chip.id} className={styles.visualChip}>
                    {chip.label[locale]}
                  </li>
                ))}
              </ul>

              <div className={styles.coverageCard}>
                <p className={styles.coverageLine}>
                  <span className={styles.coverageKey}>{serviceArea.coverage.servingLabel[locale]}</span>
                  <span>{serviceArea.coverage.servingValue[locale]}</span>
                </p>
                <p className={styles.coverageLine}>
                  <span className={styles.coverageKey}>{serviceArea.coverage.focusLabel[locale]}</span>
                  <span>{serviceArea.coverage.focusValue[locale]}</span>
                </p>
                <p className={styles.coverageLine}>
                  <span className={styles.coverageKey}>{serviceArea.coverage.nearbyLabel[locale]}</span>
                  <span>{serviceArea.coverage.nearbyValue[locale]}</span>
                </p>
                <p className={styles.coverageLine}>
                  <span className={styles.coverageKey}>{serviceArea.coverage.bookingLabel[locale]}</span>
                  <span>{serviceArea.coverage.bookingValue[locale]}</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg className={styles.chipIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.75" />
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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true" className={styles.ctaWaIcon}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
