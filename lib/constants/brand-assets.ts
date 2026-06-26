/**
 * Brand image paths — SEO-friendly filenames under /public/brand/assets/photos.
 */
export const BRAND_ASSETS = {
  logos: {
    horizontalLight: "/brand/assets/logos/logo-horizontal-light-cropped.png",
    horizontalDark: "/brand/assets/logos/logo-horizontal-dark.png",
    horizontalTransparent: "/brand/assets/logos/logo-horizontal-transparent-cropped.png",
    monochromeWhite: "/brand/assets/logos/logo-monochrome-white-cropped.png",
  },
  photos: {
    ctaCustomerSatisfaction: "/brand/assets/photos/cta-customer-satisfaction.png",
    aboutTeamVan: "/brand/assets/photos/about-team-van.png",
    servicesCommercialRooftop: "/brand/assets/photos/services-commercial-rooftop.png",
    heroTechnicianRiyadh: "/brand/assets/photos/asim-ac-service-technician-hero-riyadh.png",
    emergencyServiceRiyadh: "/brand/assets/photos/asim-ac-service-technician-hero-riyadh.png",
    cleaningSplitIndoor: "/brand/assets/photos/asim-ac-cleaning-riyadh-split-indoor.png",
    commercialHvacRooftop: "/brand/assets/photos/asim-ac-commercial-hvac-riyadh-rooftop.png",
    heroIndoorService: "/brand/assets/photos/hero-indoor-service.png",
    stockRepairOutdoor: "/brand/assets/photos/stock-ac-repair-outdoor-unit.jpg",
    stockGasCondensers: "/brand/assets/photos/stock-ac-gas-outdoor-condensers.jpg",
    stockInstallationWall: "/brand/assets/photos/stock-ac-installation-wall-unit.jpg",
    stockLeakRooftop: "/brand/assets/photos/stock-ac-leak-rooftop-service.jpg",
    stockCoolingUnits: "/brand/assets/photos/stock-ac-cooling-units-row.jpg",
    galleryGreeCleaningRooftopRiyadh:
      "/brand/assets/photos/asim-ac-cleaning-gree-units-rooftop-riyadh.jpg",
    galleryGreeGasRefillKingdomRiyadh:
      "/brand/assets/photos/asim-ac-gas-refill-gree-unit-kingdom-tower-riyadh.jpg",
    galleryGreeCleaningTechnicianRiyadh:
      "/brand/assets/photos/asim-ac-cleaning-gree-units-technician-riyadh.jpg",
    galleryGreeRepairInverterKingdomRiyadh:
      "/brand/assets/photos/asim-ac-repair-gree-inverter-rooftop-kingdom-riyadh.jpg",
  },
  videos: {
    rooftopServiceCleaningRiyadh01:
      "/brand/assets/videos/asim-ac-service-rooftop-cleaning-riyadh-01.mp4",
    rooftopServiceCleaningRiyadh02:
      "/brand/assets/videos/asim-ac-service-rooftop-cleaning-riyadh-02.mp4",
  },
  acBrandLogos: {
    gree: "/brand/assets/logos/ac-brands/gree.svg",
    midea: "/brand/assets/logos/ac-brands/midea.svg",
    lg: "/brand/assets/logos/ac-brands/lg.svg",
    samsung: "/brand/assets/logos/ac-brands/samsung.svg",
    haier: "/brand/assets/logos/ac-brands/haier.svg",
    zamil: "/brand/assets/logos/ac-brands/zamil.svg",
    carrier: "/brand/assets/logos/ac-brands/carrier.svg",
    panasonic: "/brand/assets/logos/ac-brands/panasonic.svg",
  },
  poster: "/brand/poster.png",
} as const;

/** Homepage main-services section — AC/HVAC photos only (brand + verified stock). */
export const HOME_SERVICE_PHOTOS = {
  intro: BRAND_ASSETS.photos.aboutTeamVan,
  repair: BRAND_ASSETS.photos.galleryGreeRepairInverterKingdomRiyadh,
  cleaning: BRAND_ASSETS.photos.cleaningSplitIndoor,
  gas: BRAND_ASSETS.photos.galleryGreeGasRefillKingdomRiyadh,
  installation: BRAND_ASSETS.photos.heroIndoorService,
  leakCooling: BRAND_ASSETS.photos.stockLeakRooftop,
  commercial: BRAND_ASSETS.photos.commercialHvacRooftop,
} as const;

/** Client gallery media — ready for homepage gallery / service pages. */
export const GALLERY_MEDIA = {
  photos: [
    {
      id: "gree-cleaning-rooftop",
      src: BRAND_ASSETS.photos.galleryGreeCleaningRooftopRiyadh,
      alt: {
        ar: "تنظيف وحدات مكيفات GREE على سطح مبنى في الرياض",
        en: "Cleaning GREE AC outdoor units on a rooftop in Riyadh",
      },
    },
    {
      id: "gree-gas-refill-kingdom",
      src: BRAND_ASSETS.photos.galleryGreeGasRefillKingdomRiyadh,
      alt: {
        ar: "فني عاصم يفحص غاز مكيف GREE بجوار برج المملكة في الرياض",
        en: "Asim AC technician checking GREE unit gas near Kingdom Tower in Riyadh",
      },
    },
    {
      id: "gree-cleaning-technician",
      src: BRAND_ASSETS.photos.galleryGreeCleaningTechnicianRiyadh,
      alt: {
        ar: "فني خدمة مكيفات ينظف وحدات GREE الخارجية في الرياض",
        en: "AC service technician cleaning GREE outdoor units in Riyadh",
      },
    },
    {
      id: "gree-repair-inverter-kingdom",
      src: BRAND_ASSETS.photos.galleryGreeRepairInverterKingdomRiyadh,
      alt: {
        ar: "صيانة مكيف GREE انفرتر على سطح مبنى بإطلالة على الرياض",
        en: "GREE inverter AC repair on a rooftop with Riyadh skyline view",
      },
    },
  ],
  videos: [
    {
      id: "rooftop-gas-refill-01",
      src: BRAND_ASSETS.videos.rooftopServiceCleaningRiyadh01,
      alt: {
        ar: "فيديو لفحص غاز وتعبئة فريون مكيف في الرياض",
        en: "AC gas check and refill service video in Riyadh",
      },
    },
    {
      id: "rooftop-cleaning-02",
      src: BRAND_ASSETS.videos.rooftopServiceCleaningRiyadh02,
      alt: {
        ar: "فيديو لخدمة تنظيف مكيفات على سطح مبنى في الرياض",
        en: "Rooftop AC cleaning service video in Riyadh",
      },
    },
  ],
} as const;
