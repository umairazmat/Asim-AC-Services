import { CONTACT_CONTENT } from "@/app/[locale]/contact/content";
import styles from "@/app/[locale]/contact/components/ContactHeroSection.module.css";
import { HeroCtas } from "@/app/[locale]/home/components/HeroCtas";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import { CONTACT, getWhatsAppUrl } from "@/lib/constants/contact";
import type { Locale } from "@/lib/i18n/config";

type ContactHeroSectionProps = {
  locale: Locale;
};

export function ContactHeroSection({ locale }: ContactHeroSectionProps) {
  const { hero } = CONTACT_CONTENT;
  const { methods } = hero;

  return (
    <section className={styles.section} aria-labelledby="contact-hero-heading">
      <div className={styles.ambient} aria-hidden="true">
        <span className={`${styles.orb} ${styles.orbOne}`} />
        <span className={`${styles.orb} ${styles.orbTwo}`} />
      </div>

      <div className={styles.shell}>
        <div className={styles.layout}>
          <div className={`${styles.copy} fade-up`}>
            <p className={styles.eyebrow}>
              <SnowflakeIcon className={styles.eyebrowIcon} />
              <span>{hero.eyebrow[locale]}</span>
            </p>

            <h1 id="contact-hero-heading" className={styles.title}>
              {hero.h1[locale]}
            </h1>

            <p className={styles.subheadline}>{hero.subheadline[locale]}</p>

            <p className={styles.entitySummary}>{hero.entitySummary[locale]}</p>

            <HeroCtas locale={locale} />

            <p className={styles.formHint}>{hero.formHint[locale]}</p>
          </div>

          <div className={`${styles.methodsBlock} fade-up fade-up--delay-1`}>
            <p className={styles.methodsLabel}>{hero.contactMethodsLabel[locale]}</p>
            <ul className={styles.methodsGrid} aria-label={hero.contactMethodsLabel[locale]}>
              <li>
                <a
                  href={getWhatsAppUrl(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.methodCard} ${styles.methodCardWhatsapp}`}
                >
                  <span className={styles.methodTop}>
                    <span className={styles.methodIcon} aria-hidden="true">
                      <WhatsAppIcon />
                    </span>
                    <span className={styles.methodLabel}>{methods.whatsapp.label[locale]}</span>
                  </span>
                  <p className={styles.methodValue} dir="ltr">
                    {CONTACT.whatsapp.display}
                  </p>
                  <p className={styles.methodHint}>{methods.whatsapp.hint[locale]}</p>
                </a>
              </li>

              <li>
                <a href={CONTACT.whatsapp.tel} className={styles.methodCard}>
                  <span className={styles.methodTop}>
                    <span className={styles.methodIcon} aria-hidden="true">
                      <PhoneIcon />
                    </span>
                    <span className={styles.methodLabel}>{methods.phone.label[locale]}</span>
                  </span>
                  <p className={styles.methodValue} dir="ltr">
                    {CONTACT.whatsapp.display}
                  </p>
                  <p className={styles.methodHint}>{methods.phone.hint[locale]}</p>
                </a>
              </li>

              <li>
                <a href={CONTACT.email.href} className={styles.methodCard}>
                  <span className={styles.methodTop}>
                    <span className={styles.methodIcon} aria-hidden="true">
                      <EmailIcon />
                    </span>
                    <span className={styles.methodLabel}>{methods.email.label[locale]}</span>
                  </span>
                  <p className={styles.methodValue} dir="ltr">
                    {CONTACT.email.label[locale]}
                  </p>
                  <p className={styles.methodHint}>{methods.email.hint[locale]}</p>
                </a>
              </li>

              <li>
                <a
                  href={CONTACT.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.methodCard}
                >
                  <span className={styles.methodTop}>
                    <span className={styles.methodIcon} aria-hidden="true">
                      <LocationIcon />
                    </span>
                    <span className={styles.methodLabel}>{methods.location.label[locale]}</span>
                  </span>
                  <p className={styles.methodValue}>{CONTACT.location.label[locale]}</p>
                  <p className={styles.methodHint}>{methods.location.hint[locale]}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
    </svg>
  );
}
