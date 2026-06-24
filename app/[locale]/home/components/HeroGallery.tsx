import Image from "next/image";
import { HOME_CONTENT } from "@/app/[locale]/home/content";
import { BRAND_ASSETS } from "@/lib/constants/brand-assets";
import type { Locale } from "@/lib/i18n/config";

type HeroGalleryProps = {
  locale: Locale;
};

const MOBILE_IMAGES = [
  {
    key: "main",
    src: BRAND_ASSETS.photos.ctaCustomerSatisfaction,
    altKey: "main" as const,
    className: "home-hero__gallery-img--main",
    priority: true,
  },
  {
    key: "team",
    src: BRAND_ASSETS.photos.aboutTeamVan,
    altKey: "team" as const,
    className: "",
    priority: false,
  },
  {
    key: "commercial",
    src: BRAND_ASSETS.photos.servicesCommercialRooftop,
    altKey: "commercial" as const,
    className: "",
    priority: false,
  },
] as const;

export function HeroGalleryMobile({ locale }: HeroGalleryProps) {
  const { gallery } = HOME_CONTENT.hero;

  return (
    <div className="home-hero__gallery-mobile" aria-hidden={false}>
      {MOBILE_IMAGES.map((image) => (
        <div key={image.key} className="home-hero__gallery-mobile-cell">
          <Image
            src={image.src}
            alt={gallery[image.altKey][locale]}
            fill
            priority={image.priority}
            className={`home-hero__gallery-img ${image.className}`.trim()}
            sizes="33vw"
          />
        </div>
      ))}
    </div>
  );
}

export function HeroGalleryDesktop({ locale }: HeroGalleryProps) {
  const { gallery } = HOME_CONTENT.hero;

  return (
    <div className="home-hero__gallery home-hero__gallery--desktop">
      <div className="home-hero__gallery-main">
        <Image
          src={BRAND_ASSETS.photos.ctaCustomerSatisfaction}
          alt={gallery.main[locale]}
          fill
          priority
          className="home-hero__gallery-img home-hero__gallery-img--main"
          sizes="(min-width: 48rem) 42vw, 0px"
        />
        <span className="home-hero__gallery-badge">
          {locale === "ar" ? "خدمة موثوقة في الرياض" : "Trusted in Riyadh"}
        </span>
      </div>

      <div className="home-hero__gallery-row">
        <div className="home-hero__gallery-cell">
          <Image
            src={BRAND_ASSETS.photos.aboutTeamVan}
            alt={gallery.team[locale]}
            fill
            className="home-hero__gallery-img"
            sizes="(min-width: 48rem) 20vw, 0px"
          />
        </div>
        <div className="home-hero__gallery-cell">
          <Image
            src={BRAND_ASSETS.photos.servicesCommercialRooftop}
            alt={gallery.commercial[locale]}
            fill
            className="home-hero__gallery-img"
            sizes="(min-width: 48rem) 20vw, 0px"
          />
        </div>
      </div>
    </div>
  );
}
