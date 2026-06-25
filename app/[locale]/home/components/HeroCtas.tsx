"use client";

import { HOME_CONTENT } from "@/app/[locale]/home/content";
import { CONTACT } from "@/lib/constants/contact";
import { useLeadCapture } from "@/components/providers/LeadCaptureProvider";
import type { ServiceId } from "@/lib/constants/services";
import type { Locale } from "@/lib/i18n/config";

type HeroCtasProps = {
  locale: Locale;
  serviceId?: ServiceId;
};

export function HeroCtas({ locale, serviceId }: HeroCtasProps) {
  const { openModal } = useLeadCapture();
  const { bookCta, callCta } = HOME_CONTENT.hero;

  return (
    <div className="home-hero__ctas">
      <button
        type="button"
        onClick={() => openModal(serviceId ? { serviceId } : undefined)}
        className="home-hero__cta home-hero__cta--primary"
      >
        <span>{bookCta[locale]}</span>
        <ArrowIcon className="home-hero__cta-arrow" />
      </button>

      <a href={CONTACT.whatsapp.tel} className="home-hero__cta home-hero__cta--secondary">
        <PhoneIcon className="home-hero__cta-phone" />
        <span>{callCta[locale]}</span>
      </a>
    </div>
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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
