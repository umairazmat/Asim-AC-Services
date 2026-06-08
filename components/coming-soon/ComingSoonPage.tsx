"use client";

import Image from "next/image";
import { BRAND } from "@/lib/constants/brand";
import type { Locale } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/use-locale";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ServiceGrid } from "@/components/coming-soon/ServiceGrid";
import { TrustBadges } from "@/components/coming-soon/TrustBadges";
import { BookNowCta } from "@/components/coming-soon/BookNowCta";
import { LaunchCountdown } from "@/components/coming-soon/LaunchCountdown";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SocialLinks } from "@/components/ui/SocialLinks";

type ComingSoonPageProps = {
  locale: Locale;
};

export function ComingSoonPage({ locale: localeProp }: ComingSoonPageProps) {
  const locale = useLocale(localeProp);

  return (
    <>
      <div className="coming-soon-bg relative min-h-dvh overflow-x-clip bg-[var(--color-primary)] text-white">
      <div className="cool-orb cool-orb--one" aria-hidden="true" />
      <div className="cool-orb cool-orb--two" aria-hidden="true" />
      <div className="cool-orb cool-orb--three hidden lg:block" aria-hidden="true" />

      <div className="page-shell relative z-10 mx-auto flex min-h-dvh w-full max-w-full flex-col px-4 py-4 pb-20 sm:max-w-xl sm:px-6 sm:py-5 sm:pb-20 lg:max-w-6xl lg:justify-center lg:px-10 lg:py-6 lg:pb-6 xl:max-w-7xl xl:py-8">
        <header className="fade-up mb-4 grid min-w-0 shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 sm:gap-3 lg:mb-5">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="logo-ring relative h-11 w-11 overflow-hidden rounded-full sm:h-12 sm:w-12">
              <Image
                src="/brand/poster.png"
                alt=""
                fill
                className="object-cover object-top"
                priority
                sizes="48px"
              />
            </div>
            <div className="min-w-0 text-start">
              <p className="text-[0.7rem] font-bold tracking-wider text-[var(--color-secondary-light)] uppercase sm:text-xs">
                {locale === "ar" ? "خدمة المكيفات" : "AC Service"}
              </p>
              <p className="text-sm font-extrabold leading-tight sm:text-base">
                {locale === "ar" ? "عاصم" : "Asim AC"}
              </p>
            </div>
          </div>

          <LanguageSwitcher locale={locale} />
        </header>
        <main className="page-main flex min-h-0 min-w-0 flex-1 flex-col gap-4 lg:flex-none lg:grid lg:grid-cols-2 lg:gap-5 xl:gap-6">
          {/* Hero panel */}
          <section className="page-main__col fade-up fade-up--delay-1 flex min-h-0 w-full min-w-0 max-w-full">
            <div className="premium-panel panel-layout text-center lg:text-start">
              <div className="panel-body hero-panel-body">
                <div className="hero-stack">
                  <div className="hero-subline flex items-center justify-center gap-2 lg:justify-start">
                    <SnowflakeIcon className="snowflake-spin h-4 w-4 shrink-0" />
                    <p className="text-xs font-bold sm:text-sm">
                      {BRAND.headerLine[locale]}
                    </p>
                    <SnowflakeIcon className="snowflake-spin snowflake-spin--reverse hidden h-4 w-4 shrink-0 sm:block" />
                  </div>

                  <h1 className="hero-title text-2xl leading-tight font-extrabold tracking-tight sm:text-3xl lg:text-[1.85rem] xl:text-[2.15rem]">
                    {BRAND.name[locale]}
                  </h1>

                  <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                    <span className="coming-soon-pill rounded-full px-4 py-1.5 text-[0.7rem] font-bold tracking-wide uppercase sm:text-xs">
                      {BRAND.comingSoon[locale]}
                    </span>
                    <span className="location-chip rounded-full px-3 py-1.5 text-[0.65rem] font-semibold text-white/90 sm:text-xs">
                      {locale === "ar" ? "الرياض · العليا" : "Riyadh · Al Olaya"}
                    </span>
                  </div>

                  <p className="mx-auto max-w-sm text-[0.8rem] leading-relaxed text-white/90 sm:text-sm lg:mx-0">
                    {BRAND.comingSoonMessage[locale]}
                  </p>
                </div>

                <LaunchCountdown locale={locale} className="countdown-wrap--panel" />

                <div className="hero-brand-lines hidden lg:block">
                  <p className="text-sm font-bold text-white">
                    {BRAND.slogan[locale]}
                  </p>
                  <p className="mt-1 text-xs font-semibold tracking-wide text-[var(--color-gold-light)]">
                    {BRAND.tagline[locale]}
                  </p>
                </div>
              </div>

              <div className="panel-footer">
                <TrustBadges locale={locale} compact />
              </div>
            </div>
          </section>

          {/* Services panel */}
          <div className="page-main__col fade-up fade-up--delay-2 flex min-h-0 w-full min-w-0 max-w-full">
            <div className="premium-panel panel-layout">
              <div className="panel-body">
                <ServiceGrid locale={locale} embedded />
              </div>

              <div className="panel-footer">
                <BookNowCta locale={locale} />
              </div>

              <footer className="mt-3 text-center lg:hidden">
                <p className="text-xs font-bold text-white">
                  {BRAND.slogan[locale]}
                </p>
                <p className="mt-1 text-[0.65rem] font-semibold tracking-wide text-[var(--color-gold-light)]">
                  {BRAND.tagline[locale]}
                </p>
              </footer>
            </div>
          </div>
        </main>

        <footer className="fade-up fade-up--delay-3 mt-3 shrink-0 sm:mt-4">
          <SocialLinks locale={locale} />
        </footer>
      </div>
      </div>

      <WhatsAppButton locale={locale} />
    </>
  );
}
