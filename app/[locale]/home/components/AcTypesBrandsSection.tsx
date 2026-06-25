import Image from "next/image";
import Link from "next/link";
import { HOME_CONTENT } from "@/app/[locale]/home/content";
import styles from "@/app/[locale]/home/components/AcTypesBrandsSection.module.css";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import { getWhatsAppUrl } from "@/lib/constants/contact";
import { getPageHref } from "@/lib/i18n/pages";
import type { Locale } from "@/lib/i18n/config";

type AcTypesBrandsSectionProps = {
  locale: Locale;
};

export function AcTypesBrandsSection({ locale }: AcTypesBrandsSectionProps) {
  const { acTypesBrands } = HOME_CONTENT;

  return (
    <section className={styles.section} aria-labelledby="home-ac-types-brands-heading">
      <div className={styles.shell}>
        <header className={`${styles.header} fade-up`}>
          <p className={styles.eyebrow}>
            <SnowflakeIcon className={styles.eyebrowIcon} />
            <span>{acTypesBrands.eyebrow[locale]}</span>
          </p>

          <h2 id="home-ac-types-brands-heading" className={styles.title}>
            {acTypesBrands.heading[locale]}
          </h2>

          <p className={styles.subline}>{acTypesBrands.subline[locale]}</p>
        </header>

        <div className={`${styles.panel} fade-up fade-up--delay-1`}>
          <div className={styles.block}>
            <p className={styles.blockLabel}>{acTypesBrands.typesLabel[locale]}</p>
            <ul className={styles.typeChips} aria-label={acTypesBrands.typesLabel[locale]}>
              {acTypesBrands.types.map((type) => (
                <li key={type.id} className={styles.typeChip}>
                  <span className={styles.typeIcon} aria-hidden="true">
                    <AcTypeIcon id={type.id} />
                  </span>
                  <span>{type.label[locale]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.block}>
            <p className={styles.blockLabel}>{acTypesBrands.brandsLabel[locale]}</p>
            <ul className={styles.brandGrid} aria-label={acTypesBrands.brandsLabel[locale]}>
              {acTypesBrands.brands.map((brand) => (
                <li key={brand.id} className={styles.brandCard}>
                  <div className={styles.brandLogoWrap}>
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={140}
                      height={48}
                      className={styles.brandLogo}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.ctaWrap}>
            <p className={styles.ctaHeadline}>{acTypesBrands.ctaHeadline[locale]}</p>
            <div className={styles.ctaRow}>
              <a
                href={getWhatsAppUrl(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta}
              >
                <WhatsAppIcon />
                <span>{acTypesBrands.cta[locale]}</span>
              </a>
              <Link href={getPageHref(locale, "ac-services-riyadh")} className={styles.servicesLink}>
                <span>{acTypesBrands.servicesLink[locale]}</span>
                <ArrowIcon className={styles.servicesLinkArrow} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type AcTypeIconProps = {
  id: (typeof HOME_CONTENT.acTypesBrands.types)[number]["id"];
};

function AcTypeIcon({ id }: AcTypeIconProps) {
  const className = styles.typeIconGlyph;

  switch (id) {
    case "central":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 8h16v8H4z" stroke="currentColor" strokeWidth="1.75" />
          <path d="M8 8V5h8v3M8 16v3h8v-3M12 11v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "split":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="5" width="10" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.75" />
          <rect x="15" y="13" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.75" />
          <path d="M13 8h2l4 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "window":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5" y="4" width="14" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
          <path d="M5 12h14M12 4v16" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case "concealed":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 10h18v4H3z" stroke="currentColor" strokeWidth="1.75" />
          <path d="M7 14v3M17 14v3M10 13h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "cassette":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
          <path d="M8 8h8M8 12h8M8 16h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "packaged":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="7" width="18" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
          <path d="M7 11h2M15 11h2M11 11h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M6 17v2M18 17v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
  }
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true" className={styles.ctaIcon}>
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
