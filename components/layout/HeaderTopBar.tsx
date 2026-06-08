import { CONTACT } from "@/lib/constants/contact";
import { HeaderHighlights } from "@/components/layout/HeaderHighlights";
import { HeaderSocialIcons } from "@/components/layout/HeaderSocialIcons";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import type { Locale } from "@/lib/i18n/config";

type HeaderTopBarProps = {
  locale: Locale;
};

export function HeaderTopBar({ locale }: HeaderTopBarProps) {
  return (
    <div className="header-top">
      <div
        className="header-shell header-top__inner"
        aria-label={locale === "ar" ? "معلومات التواصل ومميزات الخدمة" : "Contact info and service highlights"}
      >
        <div className="header-top__row header-top__row--primary">
          <div className="header-top__group header-top__group--start">
            <HeaderSocialIcons locale={locale} />

            <span className="header-top__divider" aria-hidden="true" />

            <a
              href={CONTACT.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="header-top__item header-top__item--location"
            >
              <MapPinIcon />
              <span className="header-top__item-text">{CONTACT.location.label[locale]}</span>
            </a>
          </div>

          <div className="header-top__group header-top__group--middle">
            <a
              href={CONTACT.whatsapp.tel}
              className="header-top__item header-top__item--phone"
              dir="ltr"
            >
              <PhoneIcon />
              <span className="header-top__item-text">{CONTACT.whatsapp.display}</span>
            </a>

            <span className="header-top__divider header-top__divider--whatsapp" aria-hidden="true" />

            <a
              href={CONTACT.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="header-top__item header-top__item--whatsapp"
              dir="ltr"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="header-top__row header-top__row--highlights">
          <div className="header-top__group header-top__group--end">
            <HeaderHighlights locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5 shrink-0">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5 shrink-0">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
