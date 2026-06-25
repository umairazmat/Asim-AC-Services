import { BRAND_ASSETS, HOME_SERVICE_PHOTOS } from "@/lib/constants/brand-assets";
import { buildServiceEntitySummary } from "@/lib/constants/geo-seo";
import type { PageId } from "@/lib/i18n/pages";
import { buildStandardLinkPageIds } from "@/app/[locale]/shared/service-pages/constants";
import {
  buildBookingSection,
  pickServiceCards,
  SHARED_RIYADH_SERVICE_AREA,
  SHARED_SERVICE_CTA,
  SHARED_WHY_CHOOSE,
} from "@/app/[locale]/shared/service-pages/content/shared";
import type { ServiceChildContent } from "@/app/[locale]/shared/service-pages/types";

export const AC_GAS_REFILL_CONTENT: ServiceChildContent = {
  kind: "service",
  pageId: "ac-gas-refill-riyadh",
  bookServiceId: "gas",
  metadata: {
    title: {
      ar: "فحص الغاز وتعبئة فريون المكيفات في الرياض | عاصم لخدمات المكيفات",
      en: "AC Gas Check & Refill in Riyadh | Asim AC Services",
    },
    description: {
      ar: "تقدم خدمة المكيفات عاصم فحص الغاز وتعبئة فريون المكيفات في الرياض، المملكة العربية السعودية مع فحص التسرب قبل التعبئة.",
      en: "Asim AC Services provides AC gas checking and refill in Riyadh, Saudi Arabia (KSA), with leak inspection before refill.",
    },
    openGraphTitle: {
      ar: "فحص الغاز وتعبئة فريون في الرياض | عاصم",
      en: "AC Gas Check & Refill in Riyadh | Asim",
    },
    openGraphDescription: {
      ar: "فحص الغاز وتعبئة فريون بعد المعاينة مع فحص التسرب في الرياض.",
      en: "Gas check and freon refill after inspection with leak check in Riyadh.",
    },
  },
  hero: {
    eyebrow: { ar: "فحص الغاز", en: "GAS CHECK" },
    h1: { ar: "فحص الغاز وتعبئة فريون المكيفات في الرياض", en: "AC Gas Check & Refill in Riyadh" },
    subheadline: {
      ar: "ضعف التبريد قد يشير إلى نقص غاز أو تسرب. نفحص المكيف أولاً ونوضح إذا كانت التعبئة مطلوبة بعد المعاينة.",
      en: "Weak cooling may indicate low gas or a leak. We inspect the AC first and explain if refill is needed after inspection.",
    },
    entitySummary: {
      ar: "خدمة فحص الغاز وتعبئة فريون المكيفات في الرياض، المملكة العربية السعودية. التعبئة تتم بعد الفحص وقد يشير نقص الغاز إلى تسرب. احجز عبر واتساب.",
      en: "AC gas check and refill service in Riyadh, Saudi Arabia (KSA). Refill is done after inspection; low gas may indicate a leak. Book on WhatsApp.",
    },
    image: {
      src: HOME_SERVICE_PHOTOS.gas,
      alt: { ar: "فحص غاز وتعبئة فريون في الرياض", en: "AC gas check and refill in Riyadh" },
    },
  },
  problems: {
    sectionId: "ac-gas-problems",
    eyebrow: { ar: "المشكلة", en: "THE PROBLEM" },
    heading: { ar: "متى يحتاج المكيف فحص غاز أو تعبئة فريون؟", en: "When Does AC Need Gas Check or Refill?" },
    body: {
      ar: "قد يحتاج المكيف لفحص الغاز عند ضعف التبريد، خروج هواء دافئ، أو تكرار مشاكل الأداء. نقص الغاز قد يشير إلى تسرب، لذلك نفحص قبل التعبئة.",
      en: "Your AC may need a gas check when cooling is weak, warm air comes out, or performance issues repeat. Low gas may indicate a leak, so we inspect before refill.",
    },
    image: {
      src: BRAND_ASSETS.photos.stockGasCondensers,
      alt: {
        ar: "فحص وحدات تكييف خارجية للغاز في الرياض",
        en: "Checking outdoor AC condenser units for gas in Riyadh",
      },
    },
    chips: [
      { id: "weak", label: { ar: "ضعف التبريد", en: "Weak cooling signs" } },
      { id: "warm", label: { ar: "هواء دافئ", en: "Warm air from AC" } },
      { id: "low-gas", label: { ar: "نقص غاز", en: "Low gas" } },
      { id: "leak", label: { ar: "احتمال تسرب", en: "Possible leak" } },
    ],
  },
  includes: {
    sectionId: "ac-gas-includes",
    eyebrow: { ar: "يشمل الخدمة", en: "WHAT'S INCLUDED" },
    heading: { ar: "ماذا يشمل فحص الغاز وتعبئة الفريون؟", en: "What Does Gas Check & Refill Include?" },
    body: {
      ar: "يشمل فحص مستوى الغاز، تقييم ضعف التبريد، فحص التسرب عند الحاجة، ثم تعبئة الفريون بعد المعاينة لمكيفات سبليت والوحدات التجارية المختارة.",
      en: "Includes gas level check, weak cooling assessment, leak check when needed, then freon refill after inspection for split and selected commercial units.",
    },
    image: {
      src: HOME_SERVICE_PHOTOS.gas,
      alt: {
        ar: "فحص غاز مكيف GREE في الرياض",
        en: "Checking GREE AC gas in Riyadh",
      },
    },
    chips: [
      { id: "check", label: { ar: "فحص الغاز", en: "Gas check" } },
      { id: "leak", label: { ar: "فحص التسرب", en: "Leak check" } },
      { id: "refill", label: { ar: "تعبئة بعد المعاينة", en: "Refill after inspection" } },
      { id: "split", label: { ar: "مكيف سبليت", en: "Split AC" } },
    ],
  },
  acTypes: {
    sectionId: "ac-gas-types",
    eyebrow: { ar: "أنواع المكيفات", en: "AC TYPES" },
    heading: { ar: "أنواع المكيفات التي نفحص غازها", en: "AC Types for Gas Check" },
    body: {
      ar: "نفحص غاز مكيفات سبليت للمنازل والمحلات، وبعض الوحدات التجارية في الرياض.",
      en: "We check gas for split AC in homes and businesses, and selected commercial units in Riyadh.",
    },
    chips: [
      { id: "split", label: { ar: "مكيف سبليت", en: "Split AC gas refill" } },
      { id: "commercial", label: { ar: "مكيف تجاري", en: "Commercial AC gas check" } },
      { id: "homes", label: { ar: "المنازل", en: "Homes" } },
      { id: "shops", label: { ar: "المحلات", en: "Shops" } },
    ],
  },
  booking: buildBookingSection({
    sectionId: "ac-gas-booking",
    headline: { ar: "حجز فحص الغاز في الرياض", en: "Book AC Gas Check in Riyadh" },
  }),
  whyChoose: SHARED_WHY_CHOOSE,
  serviceArea: { ...SHARED_RIYADH_SERVICE_AREA, sectionId: "ac-gas-area" },
  relatedServices: {
    sectionId: "ac-gas-related",
    eyebrow: { ar: "خدمات ذات صلة", en: "RELATED SERVICES" },
    heading: { ar: "خدمات مكيفات ذات صلة", en: "Related AC Services" },
    cards: pickServiceCards(["ac-repair-riyadh", "ac-cleaning-riyadh", "emergency-ac-repair-riyadh"] satisfies PageId[]),
    linkPageIds: buildStandardLinkPageIds([]),
  },
  faq: {
    eyebrow: { ar: "الأسئلة الشائعة", en: "FAQ" },
    heading: { ar: "أسئلة شائعة عن فحص الغاز", en: "AC Gas Check FAQ" },
    items: [
      {
        id: "provide",
        question: { ar: "هل تقدمون تعبئة فريون في الرياض؟", en: "Do you provide AC gas refill in Riyadh?" },
        answer: {
          ar: "نعم، بعد فحص المكيف وتحديد الحاجة للتعبئة.",
          en: "Yes, after inspecting the AC and confirming refill is needed.",
        },
      },
      {
        id: "when",
        question: { ar: "متى يحتاج المكيف تعبئة غاز؟", en: "When does AC need gas refill?" },
        answer: {
          ar: "عند ضعف التبريد أو نقص الغاز بعد الفحص. قد يشير نقص الغاز إلى تسرب.",
          en: "When cooling is weak or gas is low after inspection. Low gas may indicate a leak.",
        },
      },
      {
        id: "leak",
        question: { ar: "لماذا فحص التسرب مهم؟", en: "Why is leak check important?" },
        answer: {
          ar: "لأن تعبئة الغاز دون معالجة التسرب قد لا تحل المشكلة على المدى الطويل.",
          en: "Because refilling without addressing a leak may not fix the problem long term.",
        },
      },
      {
        id: "inspect",
        question: { ar: "هل التعبئة تتم قبل الفحص؟", en: "Is refill done before inspection?" },
        answer: {
          ar: "لا، التعبئة تتم بعد الفحص وتوضيح حالة المكيف.",
          en: "No, refill is done after inspection and explaining the AC condition.",
        },
      },
      {
        id: "book",
        question: { ar: "كيف أحجز فحص غاز؟", en: "How can I book a gas check?" },
        answer: {
          ar: "تواصل عبر واتساب واذكر ضعف التبريد أو نوع المشكلة.",
          en: "Contact us on WhatsApp and mention weak cooling or the issue.",
        },
      },
    ],
  },
  cta: SHARED_SERVICE_CTA,
  schema: {
    serviceName: { ar: "فحص الغاز وتعبئة فريون في الرياض", en: "AC Gas Check & Refill in Riyadh" },
    serviceDescription: {
      ar: "فحص الغاز وتعبئة فريون بعد المعاينة مع فحص التسرب في الرياض.",
      en: "Gas check and freon refill after inspection with leak check in Riyadh.",
    },
    serviceType: { ar: "فحص غاز مكيفات", en: "Air conditioner gas service" },
  },
};

export const AC_INSTALLATION_CONTENT: ServiceChildContent = {
  kind: "service",
  pageId: "ac-installation-riyadh",
  bookServiceId: "installation",
  metadata: {
    title: {
      ar: "تركيب مكيفات في الرياض | عاصم لخدمات المكيفات",
      en: "AC Installation in Riyadh | Asim AC Services",
    },
    description: {
      ar: "تقدم خدمة المكيفات عاصم تركيب مكيفات في الرياض، المملكة العربية السعودية للمنازل والفلل والمحلات والمكاتب.",
      en: "Asim AC Services provides AC installation in Riyadh, Saudi Arabia (KSA) for homes, villas, apartments, shops, and offices.",
    },
    openGraphTitle: {
      ar: "تركيب مكيفات في الرياض | عاصم",
      en: "AC Installation in Riyadh | Asim",
    },
    openGraphDescription: {
      ar: "تركيب مكيفات سبليت وشباك للمنازل والمحلات في الرياض.",
      en: "Split and window AC installation for homes and businesses in Riyadh.",
    },
  },
  hero: {
    eyebrow: { ar: "تركيب المكيفات", en: "INSTALLATION" },
    h1: { ar: "تركيب مكيفات في الرياض", en: "AC Installation in Riyadh" },
    subheadline: {
      ar: "نقدم تركيب مكيفات للمنازل، الفلل، الشقق، المحلات والمكاتب في الرياض مع فحص الموقع واختبار التشغيل بعد التركيب.",
      en: "We provide AC installation for homes, villas, apartments, shops, and offices in Riyadh with site check and testing after installation.",
    },
    entitySummary: buildServiceEntitySummary({
      ar: "خدمة تركيب مكيفات",
      en: "AC installation service",
    }),
    image: {
      src: HOME_SERVICE_PHOTOS.installation,
      alt: { ar: "تركيب مكيفات في الرياض", en: "AC installation in Riyadh" },
    },
  },
  problems: {
    sectionId: "ac-install-problems",
    eyebrow: { ar: "الحاجة", en: "THE NEED" },
    heading: { ar: "متى تحتاج تركيب مكيف جديد في الرياض؟", en: "When Do You Need AC Installation in Riyadh?" },
    body: {
      ar: "قد تحتاج تركيب مكيف عند تجديد المنزل، إضافة وحدة جديدة، استبدال مكيف قديم، أو فتح محل أو مكتب جديد في الرياض.",
      en: "You may need AC installation when renovating, adding a new unit, replacing an old AC, or opening a new shop or office in Riyadh.",
    },
    image: {
      src: BRAND_ASSETS.photos.stockInstallationWall,
      alt: {
        ar: "تركيب مكيف على الحائط في الرياض",
        en: "Wall AC installation in Riyadh",
      },
    },
    chips: [
      { id: "new", label: { ar: "مكيف جديد", en: "New AC unit" } },
      { id: "replace", label: { ar: "استبدال مكيف", en: "AC replacement" } },
      { id: "renovation", label: { ar: "تجديد منزل", en: "Home renovation" } },
      { id: "commercial", label: { ar: "محل أو مكتب", en: "Shop or office" } },
    ],
  },
  includes: {
    sectionId: "ac-install-includes",
    eyebrow: { ar: "يشمل الخدمة", en: "WHAT'S INCLUDED" },
    heading: { ar: "ماذا يشمل تركيب المكيفات؟", en: "What Does AC Installation Include?" },
    body: {
      ar: "يشمل فحص الموقع، تركيب الوحدات، توصيل الأساسيات، واختبار التشغيل بعد التركيب لمكيفات سبليت وشباك وكاسيت ومخفية وبعض الوحدات التجارية.",
      en: "Includes site check, unit mounting, basic connections, and operation testing after installation for split, window, cassette, concealed, and selected commercial units.",
    },
    image: {
      src: HOME_SERVICE_PHOTOS.installation,
      alt: { ar: "فني يركب مكيف سبليت", en: "Technician installing split AC" },
    },
    chips: [
      { id: "site", label: { ar: "فحص الموقع", en: "Site inspection" } },
      { id: "mount", label: { ar: "تركيب الوحدات", en: "Unit mounting" } },
      { id: "test", label: { ar: "اختبار بعد التركيب", en: "Testing after installation" } },
    ],
  },
  acTypes: {
    sectionId: "ac-install-types",
    eyebrow: { ar: "أنواع المكيفات", en: "AC TYPES" },
    heading: { ar: "أنواع المكيفات التي نركبها", en: "AC Types We Install" },
    body: {
      ar: "نركب مكيفات سبليت، شباك، كاسيت، مخفية وبعض الوحدات التجارية للمنازل والمحلات.",
      en: "We install split, window, cassette, concealed, and selected commercial units for homes and businesses.",
    },
    chips: [
      { id: "split", label: { ar: "سبليت", en: "Split AC" } },
      { id: "window", label: { ar: "شباك", en: "Window AC" } },
      { id: "cassette", label: { ar: "كاسيت", en: "Cassette AC" } },
      { id: "concealed", label: { ar: "مخفية", en: "Concealed units" } },
      { id: "homes", label: { ar: "منازل", en: "Homes" } },
      { id: "shops", label: { ar: "محلات", en: "Shops" } },
    ],
  },
  booking: buildBookingSection({
    sectionId: "ac-install-booking",
    headline: { ar: "حجز تركيب مكيفات في الرياض", en: "Book AC Installation in Riyadh" },
    image: {
      src: BRAND_ASSETS.photos.stockInstallationWall,
      alt: { ar: "تركيب مكيف في الرياض", en: "AC installation in Riyadh" },
    },
  }),
  whyChoose: SHARED_WHY_CHOOSE,
  serviceArea: { ...SHARED_RIYADH_SERVICE_AREA, sectionId: "ac-install-area" },
  relatedServices: {
    sectionId: "ac-install-related",
    eyebrow: { ar: "خدمات ذات صلة", en: "RELATED SERVICES" },
    heading: { ar: "خدمات مكيفات ذات صلة", en: "Related AC Services" },
    cards: pickServiceCards(["ac-services-riyadh", "ac-repair-riyadh", "commercial-hvac-riyadh"] satisfies PageId[]),
    linkPageIds: buildStandardLinkPageIds([]),
  },
  faq: {
    eyebrow: { ar: "الأسئلة الشائعة", en: "FAQ" },
    heading: { ar: "أسئلة شائعة عن تركيب المكيفات", en: "AC Installation FAQ" },
    items: [
      {
        id: "provide",
        question: { ar: "هل تقدمون تركيب مكيفات في الرياض؟", en: "Do you provide AC installation in Riyadh?" },
        answer: { ar: "نعم، للمنازل والمحلات حسب نوع المكيف.", en: "Yes, for homes and businesses depending on AC type." },
      },
      {
        id: "split",
        question: { ar: "هل تركبون مكيفات سبليت؟", en: "Do you install split AC units?" },
        answer: { ar: "نعم، نركب مكيفات سبليت للمنازل والمكاتب.", en: "Yes, we install split AC for homes and offices." },
      },
      {
        id: "commercial",
        question: { ar: "هل تركبون وحدات تجارية؟", en: "Do you install commercial units?" },
        answer: {
          ar: "نعم، بعض الوحدات التجارية المختارة. تواصل معنا لتوضيح النوع.",
          en: "Yes, selected commercial units. Contact us to confirm your unit type.",
        },
      },
      {
        id: "test",
        question: { ar: "هل تختبرون المكيف بعد التركيب؟", en: "Do you test the AC after installation?" },
        answer: { ar: "نعم، نختبر التشغيل بعد إتمام التركيب.", en: "Yes, we test operation after installation is complete." },
      },
      {
        id: "book",
        question: { ar: "كيف أحجز تركيب مكيف؟", en: "How can I book AC installation?" },
        answer: { ar: "تواصل عبر واتساب واذكر نوع المكيف والموقع.", en: "Contact us on WhatsApp with AC type and location." },
      },
    ],
  },
  cta: SHARED_SERVICE_CTA,
  schema: {
    serviceName: { ar: "تركيب مكيفات في الرياض", en: "AC Installation in Riyadh" },
    serviceDescription: {
      ar: "تركيب مكيفات سبليت وشباك وكاسيت للمنازل والمحلات في الرياض.",
      en: "Split, window, and cassette AC installation for homes and businesses in Riyadh.",
    },
    serviceType: { ar: "تركيب مكيفات", en: "Air conditioner installation" },
  },
};

export const EMERGENCY_AC_REPAIR_CONTENT: ServiceChildContent = {
  kind: "service",
  pageId: "emergency-ac-repair-riyadh",
  bookServiceId: "repair",
  metadata: {
    title: {
      ar: "صيانة مكيفات طارئة في الرياض | عاصم لخدمات المكيفات",
      en: "Emergency AC Repair in Riyadh | Asim AC Services",
    },
    description: {
      ar: "تحتاج صيانة مكيفات طارئة في الرياض، المملكة العربية السعودية؟ تواصل معنا لمشاكل توقف المكيف وتسريب الماء حسب توفر الموعد.",
      en: "Need urgent AC repair in Riyadh, Saudi Arabia (KSA)? Contact Asim AC Services for breakdowns and cooling issues based on appointment availability.",
    },
    openGraphTitle: {
      ar: "صيانة مكيفات طارئة الرياض | عاصم",
      en: "Emergency AC Repair Riyadh | Asim",
    },
    openGraphDescription: {
      ar: "صيانة مكيفات عاجلة حسب توفر الموعد في الرياض. تواصل عبر واتساب.",
      en: "Urgent AC repair based on appointment availability in Riyadh. Contact on WhatsApp.",
    },
  },
  hero: {
    eyebrow: { ar: "صيانة طارئة", en: "EMERGENCY" },
    h1: { ar: "صيانة مكيفات طارئة في الرياض", en: "Emergency AC Repair in Riyadh" },
    subheadline: {
      ar: "إذا توقف المكيف فجأة، لا يبرد، أو يوجد تسريب ماء عاجل، تواصل معنا عبر واتساب. الخدمة العاجلة حسب توفر الموعد.",
      en: "If your AC stopped suddenly, is not cooling, or has urgent water leakage, contact us on WhatsApp. Urgent service is based on appointment availability.",
    },
    entitySummary: {
      ar: "صيانة مكيفات طارئة في الرياض، المملكة العربية السعودية. الخدمة العاجلة حسب توفر الموعد. احجز عبر واتساب.",
      en: "Emergency AC repair in Riyadh, Saudi Arabia (KSA). Urgent service based on appointment availability. Book on WhatsApp.",
    },
    image: {
      src: BRAND_ASSETS.photos.emergencyServiceRiyadh,
      alt: { ar: "صيانة مكيفات طارئة في الرياض", en: "Emergency AC repair in Riyadh" },
      position: "center 30%",
    },
  },
  problems: {
    sectionId: "emergency-problems",
    eyebrow: { ar: "المشكلة", en: "THE PROBLEM" },
    heading: { ar: "مشاكل المكيفات التي تحتاج صيانة عاجلة", en: "AC Problems That Need Urgent Repair" },
    body: {
      ar: "قد تحتاج صيانة عاجلة عند توقف المكيف، ضعف تبريد مفاجئ، تسريب ماء، أو صوت مزعج يؤثر على الاستخدام. تواصل عبر واتساب لتأكيد توفر الموعد.",
      en: "You may need urgent repair when the AC stops, cooling drops suddenly, water leaks, or loud noise affects use. Contact us on WhatsApp to confirm availability.",
    },
    image: {
      src: HOME_SERVICE_PHOTOS.repair,
      alt: { ar: "إصلاح عاجل لمكيف في الرياض", en: "Urgent AC repair in Riyadh" },
    },
    chips: [
      { id: "stopped", label: { ar: "توقف المكيف", en: "AC stopped working" } },
      { id: "sudden", label: { ar: "ضعف تبريد مفاجئ", en: "Sudden weak cooling" } },
      { id: "leak", label: { ar: "تسريب ماء", en: "Water leakage" } },
      { id: "noise", label: { ar: "صوت مزعج", en: "Loud noise" } },
    ],
  },
  includes: {
    sectionId: "emergency-includes",
    eyebrow: { ar: "يشمل الخدمة", en: "WHAT'S INCLUDED" },
    heading: { ar: "ماذا تشمل الصيانة الطارئة؟", en: "What Does Emergency Repair Include?" },
    body: {
      ar: "تشمل فحص المشكلة العاجلة، تشخيص سريع، وإصلاح الأعطال الشائعة حسب توفر الموعد ونوع المشكلة.",
      en: "Includes urgent problem inspection, quick diagnosis, and repair of common faults based on availability and issue type.",
    },
    image: {
      src: BRAND_ASSETS.photos.stockCoolingUnits,
      alt: { ar: "فحص وحدات تكييف عاجلة", en: "Urgent AC unit inspection" },
    },
    chips: [
      { id: "inspect", label: { ar: "فحص عاجل", en: "Urgent inspection" } },
      { id: "whatsapp", label: { ar: "حجز عبر واتساب", en: "WhatsApp booking" } },
      { id: "confirm", label: { ar: "تأكيد التوفر", en: "Availability confirmation" } },
    ],
  },
  acTypes: {
    sectionId: "emergency-types",
    eyebrow: { ar: "العملاء", en: "CUSTOMERS" },
    heading: { ar: "من نخدم في الصيانة الطارئة", en: "Who We Help With Emergency Repair" },
    body: {
      ar: "نساعد المنازل، الفلل، المحلات والمكاتب في الرياض عند المشاكل العاجلة.",
      en: "We help homes, villas, shops, and offices in Riyadh with urgent AC issues.",
    },
    chips: [
      { id: "homes", label: { ar: "المنازل", en: "Homes" } },
      { id: "shops", label: { ar: "المحلات", en: "Shops" } },
      { id: "offices", label: { ar: "المكاتب", en: "Offices" } },
      { id: "split", label: { ar: "مكيف سبليت", en: "Split AC" } },
    ],
  },
  booking: buildBookingSection({
    sectionId: "emergency-booking",
    headline: { ar: "حجز صيانة طارئة عبر واتساب", en: "Book Urgent AC Repair on WhatsApp" },
    image: {
      src: BRAND_ASSETS.photos.emergencyServiceRiyadh,
      alt: { ar: "تواصل عاجل لصيانة مكيفات", en: "Urgent AC repair contact" },
    },
  }),
  whyChoose: SHARED_WHY_CHOOSE,
  serviceArea: { ...SHARED_RIYADH_SERVICE_AREA, sectionId: "emergency-area" },
  relatedServices: {
    sectionId: "emergency-related",
    eyebrow: { ar: "خدمات ذات صلة", en: "RELATED SERVICES" },
    heading: { ar: "خدمات مكيفات ذات صلة", en: "Related AC Services" },
    cards: pickServiceCards(["ac-repair-riyadh", "ac-gas-refill-riyadh", "ac-cleaning-riyadh"] satisfies PageId[]),
    linkPageIds: buildStandardLinkPageIds([]),
  },
  faq: {
    eyebrow: { ar: "الأسئلة الشائعة", en: "FAQ" },
    heading: { ar: "أسئلة شائعة عن الصيانة الطارئة", en: "Emergency AC Repair FAQ" },
    items: [
      {
        id: "provide",
        question: { ar: "هل تقدمون صيانة مكيفات طارئة في الرياض؟", en: "Do you provide emergency AC repair in Riyadh?" },
        answer: {
          ar: "نعم، حسب توفر الموعد. تواصل عبر واتساب للمشاكل العاجلة.",
          en: "Yes, based on appointment availability. Contact us on WhatsApp for urgent issues.",
        },
      },
      {
        id: "availability",
        question: { ar: "هل الخدمة متاحة دائماً؟", en: "Is service always available?" },
        answer: {
          ar: "الخدمة العاجلة حسب توفر الموعد وجدول الفنيين. لا نعد بوقت وصول ثابت.",
          en: "Urgent service depends on appointment availability and technician schedule. No fixed arrival time is guaranteed.",
        },
      },
      {
        id: "stopped",
        question: { ar: "ماذا أفعل إذا توقف المكيف؟", en: "What if my AC stopped working?" },
        answer: {
          ar: "تواصل عبر واتساب واذكر نوع المشكلة والحي بأسرع وقت.",
          en: "Contact us on WhatsApp as soon as possible with the issue and district.",
        },
      },
      {
        id: "cooling",
        question: { ar: "هل تصلحون ضعف التبريد المفاجئ؟", en: "Do you fix sudden weak cooling?" },
        answer: { ar: "نعم، نفحص السبب ونوضح الإصلاح المطلوب.", en: "Yes, we inspect the cause and explain the required repair." },
      },
      {
        id: "book",
        question: { ar: "كيف أحجز صيانة طارئة؟", en: "How can I book emergency repair?" },
        answer: { ar: "أرسل رسالة واتساب مع وصف المشكلة والحي.", en: "Send a WhatsApp message with the issue and district." },
      },
    ],
  },
  cta: SHARED_SERVICE_CTA,
  schema: {
    serviceName: { ar: "صيانة مكيفات طارئة في الرياض", en: "Emergency AC Repair in Riyadh" },
    serviceDescription: {
      ar: "صيانة مكيفات عاجلة حسب توفر الموعد في الرياض.",
      en: "Urgent AC repair based on appointment availability in Riyadh.",
    },
    serviceType: { ar: "صيانة مكيفات طارئة", en: "Emergency air conditioner repair" },
  },
};

export const COMMERCIAL_HVAC_CONTENT: ServiceChildContent = {
  kind: "service",
  pageId: "commercial-hvac-riyadh",
  bookServiceId: "duct",
  metadata: {
    title: {
      ar: "صيانة مكيفات تجارية وأنظمة HVAC في الرياض | عاصم لخدمات المكيفات",
      en: "Commercial HVAC Services in Riyadh | Asim AC Services",
    },
    description: {
      ar: "تقدم خدمة المكيفات عاصم صيانة مكيفات تجارية وأنظمة HVAC في الرياض، المملكة العربية السعودية للمحلات والمطاعم والمكاتب.",
      en: "Asim AC Services provides commercial AC and HVAC in Riyadh, Saudi Arabia (KSA) for shops, restaurants, offices, and businesses.",
    },
    openGraphTitle: {
      ar: "صيانة HVAC تجارية الرياض | عاصم",
      en: "Commercial HVAC Riyadh | Asim",
    },
    openGraphDescription: {
      ar: "صيانة مكيفات تجارية، باكيج، دكت وHVAC للمحلات والمكاتب.",
      en: "Commercial AC, packaged units, duct and HVAC for shops and offices.",
    },
  },
  hero: {
    eyebrow: { ar: "HVAC تجاري", en: "COMMERCIAL HVAC" },
    h1: { ar: "صيانة مكيفات تجارية وأنظمة HVAC في الرياض", en: "Commercial HVAC Services in Riyadh" },
    subheadline: {
      ar: "نقدم صيانة مكيفات تجارية وأنظمة HVAC للمحلات، المطاعم، المكاتب والشركات في الرياض، بما في ذلك وحدات الباكيج، الدكت وبعض الأنظمة المركزية.",
      en: "We provide commercial AC and HVAC maintenance for shops, restaurants, offices, and businesses in Riyadh, including packaged units, duct systems, and selected central AC systems.",
    },
    entitySummary: buildServiceEntitySummary({
      ar: "خدمة HVAC تجارية",
      en: "Commercial HVAC service",
    }),
    image: {
      src: HOME_SERVICE_PHOTOS.commercial,
      alt: { ar: "صيانة HVAC تجارية في الرياض", en: "Commercial HVAC service in Riyadh" },
    },
  },
  problems: {
    sectionId: "commercial-problems",
    eyebrow: { ar: "المشكلة", en: "THE PROBLEM" },
    heading: { ar: "متى تحتاج صيانة HVAC تجارية في الرياض؟", en: "When Do You Need Commercial HVAC Service?" },
    body: {
      ar: "قد تحتاج صيانة HVAC عند ضعف التبريد في المحل، أعطال في وحدات الباكيج، مشاكل في الدكت، أو توقف نظام التكييف التجاري.",
      en: "You may need commercial HVAC service when shop cooling is weak, packaged units fail, duct issues appear, or commercial AC systems stop working.",
    },
    image: {
      src: BRAND_ASSETS.photos.servicesCommercialRooftop,
      alt: { ar: "صيانة مكيفات على سطح مبنى تجاري", en: "Commercial rooftop AC maintenance" },
    },
    chips: [
      { id: "weak", label: { ar: "ضعف التبريد", en: "Weak cooling" } },
      { id: "packaged", label: { ar: "وحدات باكيج", en: "Packaged units" } },
      { id: "duct", label: { ar: "أنظمة الدكت", en: "Duct systems" } },
      { id: "rooftop", label: { ar: "HVAC سطحي", en: "Rooftop HVAC" } },
    ],
  },
  includes: {
    sectionId: "commercial-includes",
    eyebrow: { ar: "يشمل الخدمة", en: "WHAT'S INCLUDED" },
    heading: { ar: "ماذا تشمل خدمة HVAC التجارية؟", en: "What Does Commercial HVAC Include?" },
    body: {
      ar: "تشمل فحص أنظمة التكييف التجارية، صيانة وحدات الباكيج، الدكت، والدعم لبعض الأنظمة المركزية حسب نوع الوحدة.",
      en: "Includes inspection of commercial cooling systems, packaged unit maintenance, duct work, and support for selected central systems depending on unit type.",
    },
    image: {
      src: HOME_SERVICE_PHOTOS.commercial,
      alt: { ar: "فني HVAC تجاري في الرياض", en: "Commercial HVAC technician in Riyadh" },
    },
    chips: [
      { id: "maintain", label: { ar: "صيانة تجارية", en: "Commercial maintenance" } },
      { id: "packaged", label: { ar: "وحدات باكيج", en: "Packaged units" } },
      { id: "duct", label: { ar: "الدكت", en: "Duct systems" } },
      { id: "central", label: { ar: "دعم مركزي", en: "Central AC support" } },
    ],
  },
  acTypes: {
    sectionId: "commercial-types",
    eyebrow: { ar: "القطاعات", en: "SECTORS" },
    heading: { ar: "القطاعات والأنظمة التي نخدمها", en: "Sectors and Systems We Serve" },
    body: {
      ar: "نخدم المحلات، المطاعم، المكاتب، الشركات، وحدات الباكيج، الدكت وأنظمة HVAC السطحية في الرياض.",
      en: "We serve shops, restaurants, offices, businesses, packaged units, duct systems, and rooftop HVAC in Riyadh.",
    },
    chips: [
      { id: "shops", label: { ar: "المحلات", en: "Shops" } },
      { id: "restaurants", label: { ar: "المطاعم", en: "Restaurants" } },
      { id: "offices", label: { ar: "المكاتب", en: "Offices" } },
      { id: "packaged", label: { ar: "باكيج", en: "Packaged units" } },
      { id: "duct", label: { ar: "دكت", en: "Duct systems" } },
      { id: "rooftop", label: { ar: "سطحي", en: "Rooftop HVAC" } },
    ],
  },
  booking: buildBookingSection({
    sectionId: "commercial-booking",
    headline: { ar: "حجز صيانة HVAC تجارية في الرياض", en: "Book Commercial HVAC in Riyadh" },
    image: {
      src: BRAND_ASSETS.photos.commercialHvacRooftop,
      alt: { ar: "حجز HVAC تجاري", en: "Book commercial HVAC service" },
    },
  }),
  whyChoose: SHARED_WHY_CHOOSE,
  serviceArea: { ...SHARED_RIYADH_SERVICE_AREA, sectionId: "commercial-area" },
  relatedServices: {
    sectionId: "commercial-related",
    eyebrow: { ar: "خدمات ذات صلة", en: "RELATED SERVICES" },
    heading: { ar: "خدمات مكيفات ذات صلة", en: "Related AC Services" },
    cards: pickServiceCards(["ac-services-riyadh", "ac-repair-riyadh", "ac-installation-riyadh"] satisfies PageId[]),
    linkPageIds: buildStandardLinkPageIds([]),
  },
  faq: {
    eyebrow: { ar: "الأسئلة الشائعة", en: "FAQ" },
    heading: { ar: "أسئلة شائعة عن HVAC التجاري", en: "Commercial HVAC FAQ" },
    items: [
      {
        id: "provide",
        question: { ar: "هل تقدمون صيانة HVAC تجارية في الرياض؟", en: "Do you provide commercial HVAC in Riyadh?" },
        answer: {
          ar: "نعم، للمحلات والمكاتب وبعض الأنظمة التجارية.",
          en: "Yes, for shops, offices, and selected commercial systems.",
        },
      },
      {
        id: "packaged",
        question: { ar: "هل تصلحون وحدات الباكيج؟", en: "Do you service packaged units?" },
        answer: { ar: "نعم، صيانة وحدات الباكيج حسب نوع الوحدة.", en: "Yes, packaged unit maintenance depending on unit type." },
      },
      {
        id: "duct",
        question: { ar: "هل تقدمون خدمات الدكت؟", en: "Do you provide duct services?" },
        answer: { ar: "نعم، أعمال الدكت وأنظمة HVAC المرتبطة.", en: "Yes, duct work and related HVAC systems." },
      },
      {
        id: "central",
        question: { ar: "هل تدعمون الأنظمة المركزية؟", en: "Do you support central AC systems?" },
        answer: {
          ar: "ندعم بعض الأنظمة المركزية المختارة. تواصل معنا لتوضيح النظام.",
          en: "We support selected central systems. Contact us to confirm your system.",
        },
      },
      {
        id: "book",
        question: { ar: "كيف أحجز صيانة تجارية؟", en: "How can I book commercial service?" },
        answer: { ar: "تواصل عبر واتساب واذكر نوع النشاط والمكيف.", en: "Contact us on WhatsApp with business type and AC system." },
      },
    ],
  },
  cta: SHARED_SERVICE_CTA,
  schema: {
    serviceName: { ar: "صيانة HVAC تجارية في الرياض", en: "Commercial HVAC Services in Riyadh" },
    serviceDescription: {
      ar: "صيانة مكيفات تجارية، باكيج، دكت وHVAC في الرياض.",
      en: "Commercial AC, packaged units, duct and HVAC maintenance in Riyadh.",
    },
    serviceType: { ar: "صيانة HVAC تجارية", en: "Commercial HVAC service" },
  },
};
