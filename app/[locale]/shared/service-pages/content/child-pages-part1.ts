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

export const AC_REPAIR_CONTENT: ServiceChildContent = {
  kind: "service",
  pageId: "ac-repair-riyadh",
  bookServiceId: "repair",
  metadata: {
    title: {
      ar: "تصليح مكيفات في الرياض | عاصم لخدمات المكيفات",
      en: "AC Repair in Riyadh | Asim AC Services",
    },
    description: {
      ar: "احجز خدمة تصليح مكيفات في الرياض، المملكة العربية السعودية مع عاصم لخدمات المكيفات. نعالج المكيف لا يبرد، تسريب الماء، الصوت المزعج وكشف التسربات.",
      en: "Book AC repair in Riyadh, Saudi Arabia (KSA) with Asim AC Services. We handle AC not cooling, water leakage, loud noise, weak airflow, and leak detection.",
    },
    openGraphTitle: {
      ar: "تصليح مكيفات في الرياض | عاصم لخدمات المكيفات",
      en: "AC Repair in Riyadh | Asim AC Services",
    },
    openGraphDescription: {
      ar: "تصليح مكيفات لا يبرد، تسريب ماء، صوت مزعج وكشف تسربات في الرياض. احجز عبر واتساب.",
      en: "AC repair for not cooling, water leak, noise, and leak detection in Riyadh. Book on WhatsApp.",
    },
  },
  hero: {
    eyebrow: { ar: "تصليح المكيفات", en: "AC REPAIR" },
    h1: { ar: "تصليح مكيفات في الرياض", en: "AC Repair in Riyadh" },
    subheadline: {
      ar: "إذا كان المكيف لا يبرد، يوجد تسريب ماء، صوت مزعج، أو ضعف في الهواء، يمكنك حجز خدمة تصليح مكيفات في الرياض مع فحص واضح قبل بدء العمل.",
      en: "If your AC is not cooling, leaking water, making noise, or has weak airflow, book AC repair in Riyadh with clear inspection before work starts.",
    },
    entitySummary: buildServiceEntitySummary({
      ar: "خدمة تصليح مكيفات",
      en: "AC repair service",
    }),
    image: {
      src: HOME_SERVICE_PHOTOS.repair,
      alt: {
        ar: "تصليح مكيفات في الرياض",
        en: "AC repair service in Riyadh",
      },
      position: "center center",
    },
  },
  problems: {
    sectionId: "ac-repair-problems",
    eyebrow: { ar: "المشكلة", en: "THE PROBLEM" },
    heading: { ar: "متى تحتاج تصليح مكيفات في الرياض؟", en: "When Do You Need AC Repair in Riyadh?" },
    body: {
      ar: "تظهر مشاكل المكيفات في الرياض بسبب الاستخدام المكثف، اتساخ الفلاتر، نقص الغاز، أو أعطال في الوحدات الداخلية والخارجية. نبدأ بفحص المشكلة وتوضيح الحل قبل التصليح.",
      en: "AC problems in Riyadh often come from heavy use, dirty filters, low gas, or faults in indoor and outdoor units. We inspect the issue and explain the solution before repair.",
    },
    image: {
      src: BRAND_ASSETS.photos.stockRepairOutdoor,
      alt: {
        ar: "فحص وتصليح وحدة مكيف خارجية في الرياض",
        en: "Inspecting and repairing an outdoor AC unit in Riyadh",
      },
    },
    chips: [
      { id: "not-cooling", label: { ar: "المكيف لا يبرد", en: "AC not cooling" } },
      { id: "weak", label: { ar: "ضعف التبريد", en: "Weak cooling" } },
      { id: "leak", label: { ar: "تسريب ماء", en: "Water leakage" } },
      { id: "noise", label: { ar: "صوت مزعج", en: "Loud noise" } },
      { id: "outdoor", label: { ar: "مشاكل الوحدة الخارجية", en: "Outdoor unit issue" } },
      { id: "repeat", label: { ar: "تكرار الأعطال", en: "Repeated AC fault" } },
      { id: "leak-detect", label: { ar: "كشف التسربات", en: "Leak detection" } },
    ],
  },
  includes: {
    sectionId: "ac-repair-includes",
    eyebrow: { ar: "يشمل الخدمة", en: "WHAT'S INCLUDED" },
    heading: { ar: "ماذا يشمل تصليح المكيفات؟", en: "What Does AC Repair Include?" },
    body: {
      ar: "يشمل تصليح المكيفات فحص المشكلة، تشخيص السبب، وإصلاح الأعطال الشائعة في مكيفات سبليت وشباك والوحدات التجارية المختارة. نوضح الخدمة المطلوبة قبل بدء العمل.",
      en: "AC repair includes problem inspection, diagnosis, and fixing common faults in split, window, and selected commercial units. We explain the required service before starting work.",
    },
    image: {
      src: HOME_SERVICE_PHOTOS.leakCooling,
      alt: {
        ar: "فحص وتصليح مشاكل التبريد والتسرب في الرياض",
        en: "Inspecting cooling and leak issues during AC repair in Riyadh",
      },
    },
    chips: [
      { id: "inspect", label: { ar: "فحص واضح", en: "Clear inspection" } },
      { id: "diagnose", label: { ar: "تشخيص المشكلة", en: "Problem diagnosis" } },
      { id: "repair", label: { ar: "إصلاح الأعطال", en: "Fault repair" } },
      { id: "leak", label: { ar: "كشف التسربات", en: "Leak detection" } },
      { id: "test", label: { ar: "اختبار بعد التصليح", en: "Post-repair testing" } },
    ],
  },
  acTypes: {
    sectionId: "ac-repair-types",
    eyebrow: { ar: "أنواع المكيفات", en: "AC TYPES" },
    heading: { ar: "أنواع المكيفات والعملاء الذين نخدمهم", en: "AC Types and Customers We Serve" },
    body: {
      ar: "نقدم تصليح مكيفات للمنازل، الفلل، الشقق، المحلات، المكاتب والمساحات التجارية في الرياض.",
      en: "We provide AC repair for homes, villas, apartments, shops, offices, and commercial spaces in Riyadh.",
    },
    chips: [
      { id: "split", label: { ar: "مكيف سبليت", en: "Split AC" } },
      { id: "window", label: { ar: "مكيف شباك", en: "Window AC" } },
      { id: "homes", label: { ar: "المنازل", en: "Homes" } },
      { id: "villas", label: { ar: "الفلل", en: "Villas" } },
      { id: "shops", label: { ar: "المحلات", en: "Shops" } },
      { id: "offices", label: { ar: "المكاتب", en: "Offices" } },
    ],
  },
  booking: buildBookingSection({
    sectionId: "ac-repair-booking",
    headline: {
      ar: "حجز سريع لتصليح مكيفات في الرياض",
      en: "Fast AC Repair Booking in Riyadh",
    },
  }),
  whyChoose: SHARED_WHY_CHOOSE,
  serviceArea: { ...SHARED_RIYADH_SERVICE_AREA, sectionId: "ac-repair-area" },
  relatedServices: {
    sectionId: "ac-repair-related",
    eyebrow: { ar: "خدمات ذات صلة", en: "RELATED SERVICES" },
    heading: { ar: "خدمات مكيفات ذات صلة في الرياض", en: "Related AC Services in Riyadh" },
    cards: pickServiceCards([
      "ac-gas-refill-riyadh",
      "ac-cleaning-riyadh",
      "emergency-ac-repair-riyadh",
    ] satisfies PageId[]),
    linkPageIds: buildStandardLinkPageIds([]),
  },
  faq: {
    eyebrow: { ar: "الأسئلة الشائعة", en: "FAQ" },
    heading: { ar: "أسئلة شائعة عن تصليح المكيفات", en: "AC Repair FAQ" },
    items: [
      {
        id: "provide",
        question: { ar: "هل تقدمون تصليح مكيفات في الرياض؟", en: "Do you provide AC repair in Riyadh?" },
        answer: {
          ar: "نعم، نقدم خدمة تصليح مكيفات في الرياض والعليا للمنازل والمحلات حسب توفر الموعد.",
          en: "Yes, we provide AC repair in Riyadh and Al Olaya for homes and businesses based on appointment availability.",
        },
      },
      {
        id: "not-cooling",
        question: { ar: "ما سبب أن المكيف لا يبرد؟", en: "Why is my AC not cooling?" },
        answer: {
          ar: "قد يكون السبب اتساخ الفلاتر، نقص الغاز، مشكلة في الضاغط، أو عطل في الوحدة الداخلية أو الخارجية. نفحص المكيف أولاً لتحديد السبب.",
          en: "It may be caused by dirty filters, low gas, compressor issues, or faults in the indoor or outdoor unit. We inspect the AC first to find the cause.",
        },
      },
      {
        id: "water",
        question: { ar: "هل تصلحون تسريب الماء من المكيف؟", en: "Can you repair AC water leakage?" },
        answer: {
          ar: "نعم، نفحص ونصلح تسريب الماء من الوحدات الداخلية والخارجية حسب حالة المكيف.",
          en: "Yes, we inspect and repair water leakage from indoor and outdoor units depending on the AC condition.",
        },
      },
      {
        id: "noise",
        question: { ar: "هل تصلحون صوت المكيف المزعج؟", en: "Do you repair loud AC noise?" },
        answer: {
          ar: "نعم، نفحص أسباب الصوت المزعج مثل المروحة، الاهتزاز، أو الأجزاء التالفة.",
          en: "Yes, we inspect causes of loud noise such as fan issues, vibration, or damaged parts.",
        },
      },
      {
        id: "book",
        question: { ar: "كيف أحجز خدمة تصليح مكيف؟", en: "How can I book AC repair?" },
        answer: {
          ar: "تواصل معنا عبر واتساب، أرسل نوع المشكلة والحي وسنؤكد توفر الموعد.",
          en: "Contact us on WhatsApp, share the issue and district, and we will confirm availability.",
        },
      },
    ],
  },
  cta: SHARED_SERVICE_CTA,
  schema: {
    serviceName: { ar: "تصليح مكيفات في الرياض", en: "AC Repair in Riyadh" },
    serviceDescription: {
      ar: "تصليح مكيفات لا يبرد، تسريب ماء، صوت مزعج وكشف تسربات في الرياض.",
      en: "AC repair for not cooling, water leakage, noise, and leak detection in Riyadh.",
    },
    serviceType: { ar: "تصليح مكيفات", en: "Air conditioner repair" },
  },
};

export const AC_CLEANING_CONTENT: ServiceChildContent = {
  kind: "service",
  pageId: "ac-cleaning-riyadh",
  bookServiceId: "cleaning",
  metadata: {
    title: {
      ar: "تنظيف مكيفات في الرياض | عاصم لخدمات المكيفات",
      en: "AC Cleaning in Riyadh | Asim AC Services",
    },
    description: {
      ar: "احجز تنظيف مكيفات في الرياض، المملكة العربية السعودية. تنظيف سبليت، الوحدات الداخلية والخارجية، الفلاتر والغبار.",
      en: "Book AC cleaning in Riyadh, Saudi Arabia (KSA). Split AC, indoor and outdoor units, filters, dust, smell, and weak airflow.",
    },
    openGraphTitle: {
      ar: "تنظيف مكيفات في الرياض | عاصم لخدمات المكيفات",
      en: "AC Cleaning in Riyadh | Asim AC Services",
    },
    openGraphDescription: {
      ar: "تنظيف مكيفات سبليت، فلاتر، وحدات داخلية وخارجية في الرياض. احجز عبر واتساب.",
      en: "Split AC cleaning, filters, indoor and outdoor units in Riyadh. Book on WhatsApp.",
    },
  },
  hero: {
    eyebrow: { ar: "تنظيف المكيفات", en: "AC CLEANING" },
    h1: { ar: "تنظيف مكيفات في الرياض", en: "AC Cleaning in Riyadh" },
    subheadline: {
      ar: "تنظيف المكيفات يساعد على تحسين التبريد، تقليل الروائح، وإزالة الغبار المتراكم. احجز تنظيف مكيفات سبليت والوحدات الداخلية والخارجية في الرياض.",
      en: "AC cleaning helps improve cooling, reduce smell, and remove dust buildup. Book split AC cleaning for indoor and outdoor units in Riyadh.",
    },
    entitySummary: buildServiceEntitySummary({
      ar: "خدمة تنظيف مكيفات",
      en: "AC cleaning service",
    }),
    image: {
      src: HOME_SERVICE_PHOTOS.cleaning,
      alt: { ar: "تنظيف مكيفات في الرياض", en: "AC cleaning in Riyadh" },
      position: "center 35%",
    },
  },
  problems: {
    sectionId: "ac-cleaning-problems",
    eyebrow: { ar: "المشكلة", en: "THE PROBLEM" },
    heading: { ar: "متى تحتاج تنظيف مكيفات في الرياض؟", en: "When Do You Need AC Cleaning in Riyadh?" },
    body: {
      ar: "يحتاج المكيف للتنظيف عند وجود غبار، رائحة كريهة، ضعف في تدفق الهواء، أو تراكم أوساخ على الفلاتر والوحدات. التنظيف المنتظم يساعد على أداء أفضل.",
      en: "Your AC needs cleaning when there is dust, bad smell, weak airflow, or buildup on filters and units. Regular cleaning helps improve performance.",
    },
    image: {
      src: BRAND_ASSETS.photos.galleryGreeCleaningTechnicianRiyadh,
      alt: {
        ar: "فني ينظف وحدات مكيف خارجية في الرياض",
        en: "Technician cleaning outdoor AC units in Riyadh",
      },
    },
    chips: [
      { id: "smell", label: { ar: "رائحة كريهة", en: "Bad smell" } },
      { id: "dust", label: { ar: "تراكم الغبار", en: "Dust buildup" } },
      { id: "airflow", label: { ar: "ضعف تدفق الهواء", en: "Weak airflow" } },
      { id: "filters", label: { ar: "فلاتر متسخة", en: "Dirty filters" } },
      { id: "cooling", label: { ar: "ضعف التبريد", en: "Weak cooling" } },
    ],
  },
  includes: {
    sectionId: "ac-cleaning-includes",
    eyebrow: { ar: "يشمل الخدمة", en: "WHAT'S INCLUDED" },
    heading: { ar: "ماذا يشمل تنظيف المكيفات؟", en: "What Does AC Cleaning Include?" },
    body: {
      ar: "يشمل تنظيف المكيفات تنظيف الوحدات الداخلية والخارجية، الفلاتر، المكثف، وإزالة الغبار والأوساخ التي تؤثر على الأداء.",
      en: "AC cleaning includes indoor and outdoor unit cleaning, filters, condenser areas, and removal of dust and dirt that affect performance.",
    },
    image: {
      src: BRAND_ASSETS.photos.galleryGreeCleaningRooftopRiyadh,
      alt: {
        ar: "تنظيف وحدات مكيف على سطح مبنى في الرياض",
        en: "Cleaning AC units on a rooftop in Riyadh",
      },
    },
    chips: [
      { id: "indoor", label: { ar: "الوحدة الداخلية", en: "Indoor unit" } },
      { id: "outdoor", label: { ar: "الوحدة الخارجية", en: "Outdoor unit" } },
      { id: "filters", label: { ar: "تنظيف الفلاتر", en: "Filter cleaning" } },
      { id: "split", label: { ar: "مكيف سبليت", en: "Split AC" } },
    ],
  },
  acTypes: {
    sectionId: "ac-cleaning-types",
    eyebrow: { ar: "أنواع المكيفات", en: "AC TYPES" },
    heading: { ar: "أنواع المكيفات التي ننظفها", en: "AC Types We Clean" },
    body: {
      ar: "ننظف مكيفات سبليت وشباك للمنازل، الفلل، الشقق، المحلات والمكاتب في الرياض.",
      en: "We clean split and window AC units for homes, villas, apartments, shops, and offices in Riyadh.",
    },
    chips: [
      { id: "split", label: { ar: "مكيف سبليت", en: "Split AC" } },
      { id: "window", label: { ar: "مكيف شباك", en: "Window AC" } },
      { id: "homes", label: { ar: "المنازل", en: "Homes" } },
      { id: "shops", label: { ar: "المحلات", en: "Shops" } },
      { id: "offices", label: { ar: "المكاتب", en: "Offices" } },
    ],
  },
  booking: buildBookingSection({
    sectionId: "ac-cleaning-booking",
    headline: { ar: "حجز تنظيف مكيفات في الرياض", en: "Book AC Cleaning in Riyadh" },
    image: {
      src: HOME_SERVICE_PHOTOS.cleaning,
      alt: { ar: "تنظيف مكيف سبليت في الرياض", en: "Split AC cleaning in Riyadh" },
      position: "center 35%",
    },
  }),
  whyChoose: SHARED_WHY_CHOOSE,
  serviceArea: { ...SHARED_RIYADH_SERVICE_AREA, sectionId: "ac-cleaning-area" },
  relatedServices: {
    sectionId: "ac-cleaning-related",
    eyebrow: { ar: "خدمات ذات صلة", en: "RELATED SERVICES" },
    heading: { ar: "خدمات مكيفات ذات صلة", en: "Related AC Services" },
    cards: pickServiceCards(["ac-repair-riyadh", "ac-gas-refill-riyadh", "emergency-ac-repair-riyadh"] satisfies PageId[]),
    linkPageIds: buildStandardLinkPageIds([]),
  },
  faq: {
    eyebrow: { ar: "الأسئلة الشائعة", en: "FAQ" },
    heading: { ar: "أسئلة شائعة عن تنظيف المكيفات", en: "AC Cleaning FAQ" },
    items: [
      {
        id: "provide",
        question: { ar: "هل تقدمون تنظيف مكيفات في الرياض؟", en: "Do you provide AC cleaning in Riyadh?" },
        answer: {
          ar: "نعم، نقدم تنظيف مكيفات في الرياض للمنازل والمحلات.",
          en: "Yes, we provide AC cleaning in Riyadh for homes and businesses.",
        },
      },
      {
        id: "split",
        question: { ar: "هل تنظفون مكيفات سبليت؟", en: "Do you clean split AC units?" },
        answer: {
          ar: "نعم، ننظف الوحدات الداخلية والخارجية لمكيفات سبليت.",
          en: "Yes, we clean indoor and outdoor split AC units.",
        },
      },
      {
        id: "smell",
        question: { ar: "هل يساعد التنظيف على إزالة الرائحة؟", en: "Does cleaning help remove bad smell?" },
        answer: {
          ar: "نعم، تنظيف الفلاتر والوحدات يساعد على تقليل الروائح الناتجة عن الغبار والرطوبة.",
          en: "Yes, cleaning filters and units helps reduce smell caused by dust and moisture.",
        },
      },
      {
        id: "cooling",
        question: { ar: "هل يتحسن التبريد بعد التنظيف؟", en: "Does cooling improve after cleaning?" },
        answer: {
          ar: "غالباً نعم، لأن إزالة الغبار يحسّن تدفق الهواء والأداء.",
          en: "Often yes, because removing dust improves airflow and performance.",
        },
      },
      {
        id: "book",
        question: { ar: "كيف أحجز تنظيف مكيف؟", en: "How can I book AC cleaning?" },
        answer: {
          ar: "تواصل عبر واتساب وأرسل نوع المكيف والحي.",
          en: "Contact us on WhatsApp and share your AC type and district.",
        },
      },
    ],
  },
  cta: SHARED_SERVICE_CTA,
  schema: {
    serviceName: { ar: "تنظيف مكيفات في الرياض", en: "AC Cleaning in Riyadh" },
    serviceDescription: {
      ar: "تنظيف مكيفات سبليت، فلاتر، وحدات داخلية وخارجية في الرياض.",
      en: "Split AC cleaning, filters, indoor and outdoor units in Riyadh.",
    },
    serviceType: { ar: "تنظيف مكيفات", en: "Air conditioner cleaning" },
  },
};
