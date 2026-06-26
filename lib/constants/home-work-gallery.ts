import { BRAND_ASSETS } from "@/lib/constants/brand-assets";

export const GALLERY_CATEGORIES = [
  "all",
  "cleaning",
  "repair",
  "gas",
  "installation",
  "commercial",
  "team",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export type WorkGalleryItem = {
  id: string;
  type: "image" | "video";
  category: Exclude<GalleryCategory, "all">;
  featured?: boolean;
  src: string;
  poster?: string;
  /** CSS object-position for photos and video poster frames in the grid. */
  objectPosition?: string;
  title: { ar: string; en: string };
  caption: { ar: string; en: string };
  alt: { ar: string; en: string };
};

export const HOME_WORK_GALLERY: WorkGalleryItem[] = [
  {
    id: "cleaning-split-indoor",
    type: "image",
    category: "cleaning",
    featured: true,
    src: BRAND_ASSETS.photos.cleaningSplitIndoor,
    title: { ar: "تنظيف مكيف في الرياض", en: "AC Cleaning in Riyadh" },
    caption: {
      ar: "تنظيف الوحدة الداخلية لمكيف سبليت",
      en: "Split AC indoor unit cleaning",
    },
    alt: {
      ar: "فني من عاصم لخدمات المكيفات ينظف مكيف سبليت في الرياض",
      en: "Asim AC Services technician cleaning a split AC unit in Riyadh",
    },
  },
  {
    id: "cleaning-gree-technician",
    type: "image",
    category: "cleaning",
    src: BRAND_ASSETS.photos.galleryGreeCleaningTechnicianRiyadh,
    title: { ar: "تنظيف مكيفات في الرياض", en: "AC Cleaning in Riyadh" },
    caption: {
      ar: "تنظيف وحدات مكيفات خارجية",
      en: "Outdoor AC unit cleaning service",
    },
    alt: {
      ar: "فني عاصم لخدمات المكيفات ينظف وحدات مكيفات خارجية في الرياض",
      en: "Asim AC Services technician cleaning outdoor AC units in Riyadh",
    },
  },
  {
    id: "cleaning-gree-rooftop",
    type: "image",
    category: "cleaning",
    src: BRAND_ASSETS.photos.galleryGreeCleaningRooftopRiyadh,
    title: { ar: "تنظيف مكيفات على السطح", en: "Rooftop AC Cleaning" },
    caption: {
      ar: "تنظيف وحدات مكيفات على سطح مبنى في الرياض",
      en: "Rooftop AC unit cleaning in Riyadh",
    },
    alt: {
      ar: "تنظيف وحدات مكيفات GREE على سطح مبنى في الرياض",
      en: "Cleaning GREE AC outdoor units on a rooftop in Riyadh",
    },
  },
  {
    id: "repair-inverter-kingdom",
    type: "image",
    category: "repair",
    src: BRAND_ASSETS.photos.galleryGreeRepairInverterKingdomRiyadh,
    title: { ar: "تصليح مكيف في الرياض", en: "AC Repair in Riyadh" },
    caption: {
      ar: "صيانة مكيف انفرتر على سطح مبنى",
      en: "Inverter AC repair on a rooftop unit",
    },
    alt: {
      ar: "فني من عاصم لخدمات المكيفات يصلح مكيف في الرياض",
      en: "Asim AC Services technician repairing an AC unit in Riyadh",
    },
  },
  {
    id: "repair-outdoor-unit",
    type: "image",
    category: "repair",
    src: BRAND_ASSETS.photos.stockLeakRooftop,
    title: { ar: "صيانة مكيف خارجي", en: "Outdoor AC Repair" },
    caption: {
      ar: "فحص وصيانة وحدات التكييف الخارجية على سطح مبنى في الرياض",
      en: "Outdoor condenser inspection and repair on a Riyadh rooftop",
    },
    alt: {
      ar: "فنيون يفحصون ويصلحون وحدات مكيف خارجية على سطح مبنى في الرياض",
      en: "Technicians inspecting and repairing outdoor AC units on a rooftop in Riyadh",
    },
  },
  {
    id: "gas-refill-kingdom",
    type: "image",
    category: "gas",
    src: BRAND_ASSETS.photos.galleryGreeGasRefillKingdomRiyadh,
    objectPosition: "center bottom",
    title: { ar: "فحص وتعبئة فريون", en: "Gas Check & Refill" },
    caption: {
      ar: "فحص غاز المكيف بجوار برج المملكة في الرياض",
      en: "AC gas check near Kingdom Tower in Riyadh",
    },
    alt: {
      ar: "معدات فحص وتعبئة فريون المكيفات في الرياض",
      en: "AC gas refill tools used by Asim AC Services in Riyadh",
    },
  },
  {
    id: "gas-tools-condensers",
    type: "image",
    category: "gas",
    src: BRAND_ASSETS.photos.servicesCommercialRooftop,
    title: { ar: "فحص غاز المكيف", en: "AC Gas Inspection" },
    caption: {
      ar: "فحص غاز ووحدات التكييف الخارجية على سطح مبنى في الرياض",
      en: "Outdoor unit and gas system inspection on a Riyadh rooftop",
    },
    alt: {
      ar: "فني عاصم يفحص غاز مكيف خارجي باستخدام manifold gauge في الرياض",
      en: "Asim AC technician checking outdoor unit gas with manifold gauges in Riyadh",
    },
  },
  {
    id: "installation-wall-unit",
    type: "image",
    category: "installation",
    src: BRAND_ASSETS.photos.heroIndoorService,
    title: { ar: "تركيب مكيف في الرياض", en: "AC Installation in Riyadh" },
    caption: {
      ar: "تركيب وصيانة وحدة مكيف سبليت على الحائط في منزل بالرياض",
      en: "Wall-mounted split AC unit installation in a Riyadh home",
    },
    alt: {
      ar: "فني عاصم لخدمات المكيفات يركب مكيف سبليت على الحائط داخل منزل في الرياض",
      en: "Asim AC Services technician installing a wall-mounted split AC unit in a Riyadh home",
    },
  },
  {
    id: "commercial-hvac-rooftop",
    type: "image",
    category: "commercial",
    src: BRAND_ASSETS.photos.commercialHvacRooftop,
    title: { ar: "صيانة HVAC تجارية", en: "Commercial HVAC Service" },
    caption: {
      ar: "صيانة مكيفات تجارية على سطح مبنى",
      en: "Commercial rooftop HVAC maintenance",
    },
    alt: {
      ar: "صيانة HVAC تجارية من عاصم لخدمات المكيفات في الرياض",
      en: "Commercial HVAC maintenance by Asim AC Services in Riyadh",
    },
  },
  {
    id: "team-van",
    type: "image",
    category: "team",
    src: BRAND_ASSETS.photos.aboutTeamVan,
    title: { ar: "فريق عاصم لخدمات المكيفات", en: "Asim AC Services Team" },
    caption: {
      ar: "فريق الخدمة مع سيارة عاصم في الرياض",
      en: "Service team with Asim AC van in Riyadh",
    },
    alt: {
      ar: "فريق عاصم لخدمات المكيفات مع سيارة الخدمة في الرياض",
      en: "Asim AC Services team with service van in Riyadh",
    },
  },
  {
    id: "home-indoor-service",
    type: "image",
    category: "repair",
    src: BRAND_ASSETS.photos.ctaCustomerSatisfaction,
    title: { ar: "صيانة مكيف منزلي", en: "Home AC Maintenance" },
    caption: {
      ar: "وصول فني عاصم لخدمة مكيفات منزلية في الرياض",
      en: "Asim AC technician arriving for a home service visit in Riyadh",
    },
    alt: {
      ar: "فني عاصم لخدمات المكيفات يصل لزيارة صيانة مكيف منزلي أمام منزل في الرياض",
      en: "Asim AC Services technician arriving for a home AC service visit at a Riyadh residence",
    },
  },
  {
    id: "video-gas-refill-rooftop-01",
    type: "video",
    category: "gas",
    src: BRAND_ASSETS.videos.rooftopServiceCleaningRiyadh01,
    poster: BRAND_ASSETS.photos.galleryGreeGasRefillKingdomRiyadh,
    objectPosition: "center bottom",
    title: { ar: "فيديو فحص وتعبئة فريون", en: "AC Gas Check & Refill Video" },
    caption: {
      ar: "مقطع قصير من فحص غاز وتعبئة فريون مكيف GREE في الرياض",
      en: "Short clip of GREE AC gas check and refill in Riyadh",
    },
    alt: {
      ar: "فيديو لفحص غاز وتعبئة فريون مكيف في الرياض من عاصم لخدمات المكيفات",
      en: "Asim AC Services AC gas check and refill video in Riyadh",
    },
  },
  {
    id: "video-cleaning-rooftop-02",
    type: "video",
    category: "cleaning",
    src: BRAND_ASSETS.videos.rooftopServiceCleaningRiyadh02,
    poster: BRAND_ASSETS.photos.galleryGreeCleaningTechnicianRiyadh,
    objectPosition: "center 40%",
    title: { ar: "فيديو تنظيف مكيفات على السطح", en: "Rooftop AC Cleaning Video" },
    caption: {
      ar: "مقطع قصير من تنظيف وحدات مكيفات GREE على سطح مبنى في الرياض",
      en: "Short clip of GREE rooftop AC unit cleaning in Riyadh",
    },
    alt: {
      ar: "فيديو لتنظيف مكيفات GREE على سطح مبنى في الرياض من عاصم لخدمات المكيفات",
      en: "Asim AC Services rooftop GREE AC cleaning video in Riyadh",
    },
  },
  {
    id: "hvac-rooftop-maintenance",
    type: "image",
    category: "commercial",
    src: BRAND_ASSETS.photos.galleryGreeCleaningRooftopRiyadh,
    title: { ar: "صيانة HVAC في الرياض", en: "HVAC Maintenance in Riyadh" },
    caption: {
      ar: "فحص وصيانة مكيفات على سطح مبنى في الرياض",
      en: "Rooftop AC and HVAC maintenance check in Riyadh",
    },
    alt: {
      ar: "صيانة HVAC على سطح مبنى في الرياض من عاصم لخدمات المكيفات",
      en: "Rooftop AC and HVAC maintenance by Asim AC Services in Riyadh",
    },
  },
];

export function filterGalleryItems(
  category: GalleryCategory,
  items: WorkGalleryItem[] = HOME_WORK_GALLERY,
): WorkGalleryItem[] {
  if (category === "all") return items;
  return items.filter((item) => item.category === category);
}

export function pickFeaturedItem(items: WorkGalleryItem[]): WorkGalleryItem | undefined {
  return items.find((item) => item.featured) ?? items[0];
}

export const HOME_GALLERY_TEASER_COUNT = 4;

/** Curated homepage teaser — image, video, image, video (cleaning photo → gas video → gas photo → cleaning video). */
export const HOME_GALLERY_TEASER_ITEMS: WorkGalleryItem[] = [
  {
    id: "teaser-cleaning-gree-rooftop",
    type: "image",
    category: "cleaning",
    src: BRAND_ASSETS.photos.galleryGreeCleaningRooftopRiyadh,
    objectPosition: "center 35%",
    title: { ar: "تنظيف مكيفات GREE على السطح", en: "GREE Rooftop AC Cleaning" },
    caption: {
      ar: "تنظيف وحدات مكيفات GREE على سطح مبنى في الرياض",
      en: "GREE outdoor AC unit cleaning on a Riyadh rooftop",
    },
    alt: {
      ar: "تنظيف وحدات مكيفات GREE على سطح مبنى في الرياض من عاصم لخدمات المكيفات",
      en: "Asim AC Services cleaning GREE outdoor AC units on a rooftop in Riyadh",
    },
  },
  {
    id: "teaser-video-gas-refill-rooftop-01",
    type: "video",
    category: "gas",
    src: BRAND_ASSETS.videos.rooftopServiceCleaningRiyadh01,
    poster: BRAND_ASSETS.photos.galleryGreeGasRefillKingdomRiyadh,
    objectPosition: "center bottom",
    title: { ar: "فيديو فحص وتعبئة فريون", en: "AC Gas Check & Refill Video" },
    caption: {
      ar: "مقطع قصير من فحص غاز وتعبئة فريون مكيف في الرياض",
      en: "Short AC gas check and refill clip in Riyadh",
    },
    alt: {
      ar: "فيديو لفحص غاز وتعبئة فريون مكيف في الرياض من عاصم لخدمات المكيفات",
      en: "Asim AC Services AC gas check and refill video in Riyadh",
    },
  },
  {
    id: "teaser-gas-refill-kingdom",
    type: "image",
    category: "gas",
    src: BRAND_ASSETS.photos.galleryGreeGasRefillKingdomRiyadh,
    objectPosition: "center bottom",
    title: { ar: "فحص وتعبئة فريون في الرياض", en: "AC Gas Check & Refill in Riyadh" },
    caption: {
      ar: "فحص غاز وتعبئة فريون لمكيف GREE بجوار برج المملكة في الرياض",
      en: "GREE AC gas check and refill near Kingdom Tower in Riyadh",
    },
    alt: {
      ar: "فني عاصم يفحص غاز ويعبئ فريون مكيف GREE بجوار برج المملكة في الرياض",
      en: "Asim AC technician checking gas and refilling a GREE unit near Kingdom Tower in Riyadh",
    },
  },
  {
    id: "teaser-video-cleaning-rooftop-02",
    type: "video",
    category: "cleaning",
    src: BRAND_ASSETS.videos.rooftopServiceCleaningRiyadh02,
    poster: BRAND_ASSETS.photos.galleryGreeCleaningTechnicianRiyadh,
    objectPosition: "center 40%",
    title: { ar: "فيديو تنظيف مكيفات على السطح", en: "Rooftop AC Cleaning Video" },
    caption: {
      ar: "مقطع قصير من تنظيف مكيفات على سطح مبنى في الرياض",
      en: "Short rooftop AC cleaning clip in Riyadh",
    },
    alt: {
      ar: "فيديو لتنظيف مكيفات على سطح مبنى في الرياض من عاصم لخدمات المكيفات",
      en: "Asim AC Services rooftop AC cleaning video in Riyadh",
    },
  },
];

/** Homepage gallery teaser — fixed curated set (not random). */
export function pickTeaserGalleryItems(): WorkGalleryItem[] {
  return HOME_GALLERY_TEASER_ITEMS;
}
