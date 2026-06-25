import { HOME_CONTENT } from "@/app/[locale]/home/content";
import { BRAND_ASSETS, HOME_SERVICE_PHOTOS } from "@/lib/constants/brand-assets";
import { GEO_KSA_LABEL, SITE_AREA_INTERNAL_LINKS } from "@/lib/constants/geo-seo";
import type { PageId } from "@/lib/i18n/pages";
import type {
  ProcessSectionContent,
  ServiceCardContent,
  ServicePageCtaContent,
  SplitSectionContent,
} from "@/app/[locale]/shared/service-pages/types";

export const SHARED_WHY_CHOOSE = HOME_CONTENT.whyChoose;

export const SHARED_SERVICE_CTA: ServicePageCtaContent = {
  eyebrow: { ar: "تواصل معنا", en: "GET STARTED" },
  heading: { ar: "احجز خدمة مكيفات في الرياض", en: "Book AC Service in Riyadh" },
  subline: {
    ar: "أرسل مشكلة المكيف عبر واتساب في الرياض، المملكة العربية السعودية. سنؤكد توفر الموعد وتفاصيل الخدمة قبل بدء العمل.",
    en: "Send your AC issue on WhatsApp in Riyadh, Saudi Arabia (KSA). We confirm availability and service details before work starts.",
  },
  contactPageId: "contact" satisfies PageId,
  contactLabel: { ar: "صفحة التواصل", en: "Contact Page" },
};

export const SHARED_RIYADH_SERVICE_AREA: SplitSectionContent = {
  sectionId: "service-riyadh-area",
  eyebrow: { ar: "مناطق الخدمة", en: "SERVICE AREAS" },
  heading: { ar: "خدمة مكيفات في الرياض والعليا", en: "AC Service in Riyadh and Al Olaya" },
  body: {
    ar: "نخدم مدينة الرياض مع تركيز على حي العليا والمناطق القريبة حسب توفر الموعد. يمكنك التواصل عبر واتساب لتأكيد توفر الخدمة في حيّك أو منطقتك في المملكة العربية السعودية.",
    en: "We serve Riyadh with focus on Al Olaya and nearby areas based on appointment availability. Contact us on WhatsApp to confirm service in your district across Saudi Arabia.",
  },
  image: {
    src: BRAND_ASSETS.photos.galleryGreeGasRefillKingdomRiyadh,
    alt: {
      ar: "خدمة مكيفات في الرياض والعليا مع إطلالة على المدينة",
      en: "AC service in Riyadh and Al Olaya with city skyline view",
    },
    position: "center 32%",
  },
  chips: [
    { id: "riyadh", label: { ar: "الرياض", en: "Riyadh" } },
    { id: "olaya", label: { ar: "العليا", en: "Al Olaya" } },
    { id: "ksa", label: GEO_KSA_LABEL },
    { id: "homes", label: { ar: "المنازل", en: "Homes" } },
    { id: "businesses", label: { ar: "المحلات والمكاتب", en: "Shops & Offices" } },
  ],
};

export function buildBookingSection(options: {
  sectionId: string;
  headline: { ar: string; en: string };
  image?: SplitSectionContent["image"];
}): ProcessSectionContent {
  return {
    sectionId: options.sectionId,
    eyebrow: { ar: "الحجز", en: "BOOKING" },
    heading: { ar: "طريقة حجز الخدمة", en: "How Booking Works" },
    headline: options.headline,
    image:
      options.image ??
      ({
        src: BRAND_ASSETS.photos.heroIndoorService,
        alt: {
          ar: "فني مكيفات يقدم خدمة في الرياض",
          en: "AC technician providing service in Riyadh",
        },
        position: "center 28%",
      } satisfies ProcessSectionContent["image"]),
    steps: [
      {
        id: "issue",
        title: { ar: "أرسل مشكلة المكيف عبر واتساب", en: "Send your AC issue on WhatsApp" },
        description: {
          ar: "اذكر نوع المشكلة، نوع المكيف، وعدد الوحدات إن أمكن.",
          en: "Share the issue, AC type, and number of units if possible.",
        },
      },
      {
        id: "district",
        title: { ar: "شارك حيّك في الرياض", en: "Share your Riyadh district" },
        description: {
          ar: "أرسل اسم الحي أو المنطقة القريبة لتأكيد توفر الموعد.",
          en: "Send your district or nearby area so we can confirm availability.",
        },
      },
      {
        id: "units",
        title: { ar: "اذكر نوع المكيف", en: "Mention the AC type" },
        description: {
          ar: "مثال: مكيف سبليت، شباك، كاسيت، أو وحدة تجارية.",
          en: "Example: split AC, window AC, cassette, or commercial unit.",
        },
      },
      {
        id: "confirm",
        title: { ar: "نؤكد توفر الموعد وتفاصيل الخدمة", en: "We confirm availability and service details" },
        description: {
          ar: "نرد عبر واتساب ونوضح الخدمة المناسبة قبل بدء العمل.",
          en: "We reply on WhatsApp and explain the right service before work starts.",
        },
      },
    ],
  };
}

export const ALL_CHILD_SERVICE_CARDS: ReadonlyArray<ServiceCardContent> = [
  {
    id: "repair",
    pageId: "ac-repair-riyadh" satisfies PageId,
    title: { ar: "تصليح مكيفات في الرياض", en: "AC Repair in Riyadh" },
    description: {
      ar: "للمكيف الذي لا يبرد، تسريب الماء، الصوت المزعج، ضعف الهواء، وكشف التسربات.",
      en: "For AC not cooling, water leakage, noise, weak airflow, and leak detection.",
    },
    image: HOME_SERVICE_PHOTOS.repair,
    imagePosition: "center center",
  },
  {
    id: "cleaning",
    pageId: "ac-cleaning-riyadh" satisfies PageId,
    title: { ar: "تنظيف مكيفات في الرياض", en: "AC Cleaning in Riyadh" },
    description: {
      ar: "تنظيف مكيفات سبليت، الوحدات الداخلية والخارجية، الفلاتر، الغبار والروائح.",
      en: "Cleaning for split AC, indoor and outdoor units, filters, dust, and smell.",
    },
    image: HOME_SERVICE_PHOTOS.cleaning,
    imagePosition: "center 35%",
  },
  {
    id: "gas",
    pageId: "ac-gas-refill-riyadh" satisfies PageId,
    title: { ar: "فحص الغاز وتعبئة فريون في الرياض", en: "AC Gas Check & Refill in Riyadh" },
    description: {
      ar: "فحص مستوى الغاز والتعبئة بعد المعاينة مع فحص التسرب عند الحاجة.",
      en: "Gas level check and refill after inspection, with leak check when needed.",
    },
    image: HOME_SERVICE_PHOTOS.gas,
    imagePosition: "center center",
  },
  {
    id: "installation",
    pageId: "ac-installation-riyadh" satisfies PageId,
    title: { ar: "تركيب مكيفات في الرياض", en: "AC Installation in Riyadh" },
    description: {
      ar: "تركيب مكيفات للمنازل، الفلل، الشقق، المحلات والمكاتب.",
      en: "AC installation for homes, villas, apartments, shops, and offices.",
    },
    image: HOME_SERVICE_PHOTOS.installation,
    imagePosition: "center center",
  },
  {
    id: "emergency",
    pageId: "emergency-ac-repair-riyadh" satisfies PageId,
    title: { ar: "صيانة مكيفات طارئة في الرياض", en: "Emergency AC Repair in Riyadh" },
    description: {
      ar: "للمشاكل العاجلة مثل توقف المكيف، ضعف التبريد المفاجئ، أو تسريب الماء حسب توفر الموعد.",
      en: "For urgent issues like AC breakdown, sudden weak cooling, or water leakage based on availability.",
    },
    image: BRAND_ASSETS.photos.emergencyServiceRiyadh,
    imagePosition: "center 30%",
  },
  {
    id: "commercial",
    pageId: "commercial-hvac-riyadh" satisfies PageId,
    title: { ar: "صيانة HVAC تجارية في الرياض", en: "Commercial HVAC in Riyadh" },
    description: {
      ar: "خدمة للمحلات، المطاعم، المكاتب، وحدات الباكيج، الدكت وأنظمة التكييف التجارية.",
      en: "HVAC for shops, restaurants, offices, packaged units, duct systems, and commercial AC.",
    },
    image: HOME_SERVICE_PHOTOS.commercial,
    imagePosition: "center center",
  },
];

export function pickServiceCards(pageIds: ReadonlyArray<PageId>): ServiceCardContent[] {
  return ALL_CHILD_SERVICE_CARDS.filter((card) => pageIds.includes(card.pageId));
}
