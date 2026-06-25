import { BRAND_ASSETS, HOME_SERVICE_PHOTOS } from "@/lib/constants/brand-assets";
import { buildFullEntitySummary } from "@/lib/constants/geo-seo";
import type { PageId } from "@/lib/i18n/pages";
import {
  ALL_CHILD_SERVICE_CARDS,
  SHARED_RIYADH_SERVICE_AREA,
  SHARED_SERVICE_CTA,
  SHARED_WHY_CHOOSE,
} from "@/app/[locale]/shared/service-pages/content/shared";
import type { ServiceHubContent } from "@/app/[locale]/shared/service-pages/types";

export const AC_SERVICES_HUB_CONTENT: ServiceHubContent = {
  kind: "hub",
  pageId: "ac-services-riyadh",
  metadata: {
    title: {
      ar: "خدمة مكيفات في الرياض | عاصم لخدمات المكيفات",
      en: "AC Services in Riyadh | Asim AC Services",
    },
    description: {
      ar: "تقدم خدمة المكيفات عاصم خدمات تصليح وتنظيف وصيانة وتركيب المكيفات، فحص الغاز، تعبئة الفريون وخدمات HVAC في الرياض، المملكة العربية السعودية.",
      en: "Asim AC Services provides AC repair, cleaning, gas check, gas refill, installation, leak detection, and commercial HVAC in Riyadh, Saudi Arabia (KSA).",
    },
    openGraphTitle: {
      ar: "خدمة مكيفات في الرياض | عاصم لخدمات المكيفات",
      en: "AC Services in Riyadh | Asim AC Services",
    },
    openGraphDescription: {
      ar: "تصليح، تنظيف، تعبئة فريون، تركيب وHVAC في الرياض والعليا. احجز عبر واتساب.",
      en: "AC repair, cleaning, gas refill, installation, and HVAC in Riyadh and Al Olaya. Book on WhatsApp.",
    },
  },
  hero: {
    eyebrow: { ar: "خدمات المكيفات", en: "AC SERVICES" },
    h1: { ar: "خدمة مكيفات في الرياض", en: "AC Services in Riyadh" },
    subheadline: {
      ar: "تقدم خدمة المكيفات عاصم خدمات تصليح وتنظيف وصيانة وتركيب المكيفات، فحص الغاز، تعبئة الفريون وخدمات HVAC في الرياض والعليا للمنازل والفلل والمحلات والمكاتب.",
      en: "Asim AC Services provides AC repair, cleaning, maintenance, gas check, gas refill, installation, and HVAC services in Riyadh and Al Olaya for homes, villas, shops, offices, and businesses.",
    },
    entitySummary: buildFullEntitySummary({
      suffix: { ar: "احجز عبر واتساب", en: "Book on WhatsApp" },
    }),
    image: {
      src: HOME_SERVICE_PHOTOS.intro,
      alt: {
        ar: "عاصم لخدمات المكيفات يقدم خدمة مكيفات في الرياض",
        en: "Asim AC Services providing AC services in Riyadh",
      },
      position: "center 35%",
    },
    scrollCta: { ar: "استعرض الخدمات", en: "Browse Services" },
    scrollTargetId: "ac-services-hub-cards",
  },
  overview: {
    sectionId: "ac-services-hub-overview",
    eyebrow: { ar: "نظرة عامة", en: "OVERVIEW" },
    heading: { ar: "جميع خدمات المكيفات في الرياض", en: "All AC Services in Riyadh" },
    body: {
      ar: "نقدم خدمات المكيفات للمنازل والفلل والشقق والمحلات والمكاتب في الرياض. تشمل خدماتنا تصليح المكيفات، التنظيف، فحص الغاز وتعبئة الفريون، التركيب، كشف التسربات، الصيانة الطارئة، وخدمات HVAC التجارية.",
      en: "We provide AC services for homes, villas, apartments, shops, and offices in Riyadh. Our services include AC repair, cleaning, gas check and refill, installation, leak detection, emergency repair, and commercial HVAC.",
    },
    image: {
      src: BRAND_ASSETS.photos.heroTechnicianRiyadh,
      alt: {
        ar: "فني مكيفات يقدم خدمة في الرياض",
        en: "AC technician providing service in Riyadh",
      },
      position: "center 30%",
    },
    chips: [
      { id: "repair", label: { ar: "تصليح", en: "Repair" } },
      { id: "cleaning", label: { ar: "تنظيف", en: "Cleaning" } },
      { id: "gas", label: { ar: "فحص الغاز", en: "Gas Check" } },
      { id: "install", label: { ar: "تركيب", en: "Installation" } },
      { id: "emergency", label: { ar: "طوارئ", en: "Emergency" } },
      { id: "hvac", label: { ar: "HVAC تجاري", en: "Commercial HVAC" } },
    ],
  },
  problems: {
    sectionId: "ac-services-hub-problems",
    eyebrow: { ar: "المشاكل", en: "PROBLEMS" },
    heading: { ar: "مشاكل المكيفات الشائعة في الرياض", en: "Common AC Problems in Riyadh" },
    cards: [
      { id: "not-cooling", label: { ar: "المكيف لا يبرد", en: "AC not cooling" } },
      { id: "weak-cooling", label: { ar: "ضعف التبريد", en: "Weak cooling" } },
      { id: "water-leak", label: { ar: "تسريب ماء", en: "Water leakage" } },
      { id: "loud-noise", label: { ar: "صوت مزعج", en: "Loud noise" } },
      { id: "low-gas", label: { ar: "نقص فريون", en: "Low freon" } },
      { id: "dirty", label: { ar: "اتساخ وروائح", en: "Dust and smell" } },
      { id: "outdoor", label: { ar: "مشاكل الوحدة الخارجية", en: "Outdoor unit issues" } },
      { id: "repeated", label: { ar: "تكرار الأعطال", en: "Repeated AC faults" } },
    ],
  },
  serviceCards: {
    sectionId: "ac-services-hub-cards",
    eyebrow: { ar: "خدماتنا", en: "OUR SERVICES" },
    heading: { ar: "خدمات المكيفات في الرياض", en: "AC Services in Riyadh" },
    cards: ALL_CHILD_SERVICE_CARDS,
  },
  audience: {
    sectionId: "ac-services-hub-audience",
    eyebrow: { ar: "عملاؤنا", en: "CUSTOMERS" },
    heading: { ar: "خدمة مكيفات للمنازل والمحلات", en: "AC Services for Homes and Businesses" },
    body: {
      ar: "نقدم خدمات المكيفات لغرف النوم، المجالس، الفلل، الشقق، المحلات، المطاعم، المكاتب والمساحات التجارية في الرياض والعليا.",
      en: "We provide AC services for bedrooms, living rooms, villas, apartments, shops, restaurants, offices, and commercial spaces in Riyadh and Al Olaya.",
    },
    image: {
      src: BRAND_ASSETS.photos.heroIndoorService,
      alt: {
        ar: "خدمة مكيفات للمنازل والمحلات في الرياض",
        en: "AC service for homes and businesses in Riyadh",
      },
      position: "center 28%",
    },
    chips: [
      { id: "homes", label: { ar: "المنازل", en: "Homes" } },
      { id: "villas", label: { ar: "الفلل", en: "Villas" } },
      { id: "apartments", label: { ar: "الشقق", en: "Apartments" } },
      { id: "shops", label: { ar: "المحلات", en: "Shops" } },
      { id: "offices", label: { ar: "المكاتب", en: "Offices" } },
      { id: "restaurants", label: { ar: "المطاعم", en: "Restaurants" } },
    ],
  },
  serviceArea: {
    ...SHARED_RIYADH_SERVICE_AREA,
    sectionId: "ac-services-hub-area",
  },
  whyChoose: SHARED_WHY_CHOOSE,
  faq: {
    eyebrow: { ar: "الأسئلة الشائعة", en: "FAQ" },
    heading: { ar: "أسئلة شائعة عن خدمة المكيفات في الرياض", en: "AC Services FAQ in Riyadh" },
    items: [
      {
        id: "services",
        question: { ar: "ما الخدمات التي تقدمونها في الرياض؟", en: "What AC services do you provide in Riyadh?" },
        answer: {
          ar: "نقدم تصليح وتنظيف وصيانة وتركيب المكيفات، فحص الغاز، تعبئة الفريون، كشف التسربات، الصيانة الطارئة، وخدمات HVAC التجارية في الرياض.",
          en: "We provide AC repair, cleaning, maintenance, installation, gas check, gas refill, leak detection, emergency repair, and commercial HVAC in Riyadh.",
        },
      },
      {
        id: "areas",
        question: { ar: "هل تخدمون العليا والرياض؟", en: "Do you serve Al Olaya and Riyadh?" },
        answer: {
          ar: "نعم، نخدم الرياض مع تركيز على العليا والمناطق القريبة حسب توفر الموعد.",
          en: "Yes, we serve Riyadh with focus on Al Olaya and nearby areas based on appointment availability.",
        },
      },
      {
        id: "homes-businesses",
        question: { ar: "هل تخدمون المنازل والمحلات؟", en: "Do you serve homes and businesses?" },
        answer: {
          ar: "نعم، نخدم المنازل، الفلل، الشقق، المحلات، المطاعم، المكاتب والشركات.",
          en: "Yes, we serve homes, villas, apartments, shops, restaurants, offices, and businesses.",
        },
      },
      {
        id: "book",
        question: { ar: "كيف أحجز خدمة مكيفات؟", en: "How can I book AC service?" },
        answer: {
          ar: "تواصل معنا عبر واتساب، أرسل نوع المشكلة، الحي، ونوع المكيف وسنؤكد توفر الموعد.",
          en: "Contact us on WhatsApp, share the issue, district, and AC type and we will confirm availability.",
        },
      },
      {
        id: "gas",
        question: { ar: "هل تقدمون فحص الغاز وتعبئة الفريون؟", en: "Do you provide gas check and refill?" },
        answer: {
          ar: "نعم، نفحص مستوى الغاز ونعبئ الفريون بعد المعاينة مع فحص التسرب عند الحاجة.",
          en: "Yes, we check gas levels and refill freon after inspection, with leak checking when needed.",
        },
      },
    ],
  },
  cta: SHARED_SERVICE_CTA,
  schema: {
    serviceName: { ar: "خدمة مكيفات في الرياض", en: "AC Services in Riyadh" },
    serviceDescription: {
      ar: "تصليح وتنظيف وصيانة وتركيب المكيفات وفحص الغاز وخدمات HVAC في الرياض.",
      en: "AC repair, cleaning, maintenance, installation, gas check, and HVAC services in Riyadh.",
    },
    serviceType: {
      ar: "خدمة مكيفات وتكييف",
      en: "Air conditioning and HVAC service",
    },
  },
};
