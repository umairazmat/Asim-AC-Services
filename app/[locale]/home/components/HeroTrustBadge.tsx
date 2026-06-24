"use client";

import { HOME_CONTENT } from "@/app/[locale]/home/content";
import type { Locale } from "@/lib/i18n/config";

type HeroTrustBadgeProps = {
  locale: Locale;
};

const AVATAR_TONES = [
  "home-hero__avatar--one",
  "home-hero__avatar--two",
  "home-hero__avatar--three",
  "home-hero__avatar--four",
] as const;

export function HeroTrustBadge({ locale }: HeroTrustBadgeProps) {
  const { trustBadge } = HOME_CONTENT.hero;

  return (
    <div className="home-hero__trust">
      <p className="home-hero__trust-title">{trustBadge.title[locale]}</p>
      <div className="home-hero__trust-row">
        <div className="home-hero__avatars" aria-hidden="true">
          {AVATAR_TONES.map((tone) => (
            <span key={tone} className={`home-hero__avatar ${tone}`}>
              <PersonIcon />
            </span>
          ))}
          <span className="home-hero__avatar home-hero__avatar--count">
            {trustBadge.count[locale]}
          </span>
        </div>
      </div>
    </div>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}
