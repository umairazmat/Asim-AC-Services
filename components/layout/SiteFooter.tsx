import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
import { FooterBookButton } from "@/components/layout/FooterBookButton";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { BRAND } from "@/lib/constants/brand";
import { BRAND_ASSETS } from "@/lib/constants/brand-assets";
import { CONTACT, getWhatsAppUrl } from "@/lib/constants/contact";
import { FOOTER } from "@/lib/constants/footer";
import { getNavHref, NAV_ITEMS } from "@/lib/constants/navigation";
import { SERVICES, TRUST_BADGES } from "@/lib/constants/services";
import type { Locale } from "@/lib/i18n/config";
import type { PageId } from "@/lib/i18n/pages";

type SiteFooterProps = {
  locale: Locale;
};

const SOCIAL_ITEMS = [
  {
    id: "instagram",
    href: CONTACT.social.instagram.href,
    label: CONTACT.social.instagram.label,
    Icon: InstagramIcon,
    className: "site-footer__social-link--instagram",
  },
  {
    id: "facebook",
    href: CONTACT.social.facebook.href,
    label: CONTACT.social.facebook.label,
    Icon: FacebookIcon,
    className: "site-footer__social-link--facebook",
  },
  {
    id: "whatsapp",
    href: CONTACT.whatsapp.href,
    label: { ar: "واتساب", en: "WhatsApp" },
    Icon: WhatsAppIcon,
    className: "site-footer__social-link--whatsapp",
  },
] as const;

const TRUST_ICON_CLASS: Record<(typeof TRUST_BADGES)[number]["color"], string> = {
  mint: "site-footer__badge-icon--mint",
  emerald: "site-footer__badge-icon--emerald",
  violet: "site-footer__badge-icon--violet",
};

const SERVICE_PAGE_IDS: Record<(typeof SERVICES)[number]["id"], PageId> = {
  cleaning: "ac-cleaning-riyadh",
  gas: "ac-gas-refill-riyadh",
  cooling: "ac-services-riyadh",
  repair: "ac-repair-riyadh",
  installation: "ac-installation-riyadh",
  duct: "commercial-hvac-riyadh",
};

export function SiteFooter({ locale }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="header-shell site-footer__grid">
          <div className="site-footer__brand">
            <Link
              href={getNavHref(locale, "home")}
              className="site-footer__logo"
              aria-label={locale === "ar" ? "العودة للرئيسية" : "Back to home"}
            >
              <Image
                src={BRAND_ASSETS.logos.monochromeWhite}
                alt={locale === "ar" ? "خدمة المكيفات عاصم" : "Asim AC Services"}
                width={878}
                height={405}
                className="site-footer__logo-image"
                sizes="(max-width: 640px) 220px, 280px"
              />
            </Link>

            <p className="site-footer__description">{FOOTER.description[locale]}</p>

            <p className="site-footer__slogan">{BRAND.slogan[locale]}</p>
            <p className="site-footer__tagline">{BRAND.tagline[locale]}</p>

            <ul className="site-footer__contact-list">
              <li>
                <a
                  href={CONTACT.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__contact-item"
                >
                  <MapPinIcon />
                  <span>{CONTACT.location.label[locale]}</span>
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsapp.tel} className="site-footer__contact-item" dir="ltr">
                  <PhoneIcon />
                  <span>{CONTACT.whatsapp.display}</span>
                </a>
              </li>
              <li>
                <a href={CONTACT.email.href} className="site-footer__contact-item" dir="ltr">
                  <EmailIcon />
                  <span>{CONTACT.email.label[locale]}</span>
                </a>
              </li>
            </ul>

            <div className="site-footer__cta-row">
              <a href={CONTACT.whatsapp.tel} className="site-footer__cta site-footer__cta--call">
                {FOOTER.callNow[locale]}
              </a>
              <a
                href={getWhatsAppUrl(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__cta site-footer__cta--whatsapp"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {FOOTER.whatsapp[locale]}
              </a>
            </div>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">{FOOTER.sections.services[locale]}</h2>
            <ul className="site-footer__links">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={getNavHref(locale, SERVICE_PAGE_IDS[service.id])}
                    className="site-footer__link"
                  >
                    {service.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">{FOOTER.sections.company[locale]}</h2>
            <ul className="site-footer__links">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link href={getNavHref(locale, item.pageId)} className="site-footer__link">
                    {item.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">{FOOTER.sections.contact[locale]}</h2>
            <ul className="site-footer__links">
              <li>
                <a href={CONTACT.whatsapp.tel} className="site-footer__link" dir="ltr">
                  {CONTACT.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={CONTACT.email.href} className="site-footer__link" dir="ltr">
                  {CONTACT.email.label[locale]}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__link"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__link"
                >
                  {CONTACT.location.label[locale]}
                </a>
              </li>
            </ul>

            <FooterBookButton locale={locale} />
          </div>
        </div>

        <div className="header-shell site-footer__follow">
          <h2 className="site-footer__follow-title">{FOOTER.sections.follow[locale]}</h2>
          <div className="site-footer__social">
            {SOCIAL_ITEMS.map(({ id, href, label, Icon, className }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`site-footer__social-link ${className}`}
                aria-label={label[locale]}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="site-footer__bar">
        <div className="header-shell site-footer__bar-inner">
          <p className="site-footer__copyright">{FOOTER.copyright[locale]}</p>

          <div className="site-footer__badges" aria-label={locale === "ar" ? "شارات الثقة" : "Trust badges"}>
            {TRUST_BADGES.map((badge) => (
              <span key={badge.id} className="site-footer__badge">
                <span
                  className={`site-footer__badge-icon ${TRUST_ICON_CLASS[badge.color]}`}
                  aria-hidden="true"
                >
                  <ServiceIcon name={badge.icon} className="h-3.5 w-3.5" />
                </span>
                <span>{FOOTER.barBadges[badge.id][locale]}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 shrink-0">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 shrink-0">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 shrink-0">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
