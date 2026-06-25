import { BRAND_ASSETS, HOME_SERVICE_PHOTOS } from "@/lib/constants/brand-assets";
import { AL_OLAYA_NEARBY_AREA_IDS } from "@/lib/constants/service-areas-districts";
import { RIYADH_AREAS } from "@/lib/constants/riyadh-areas";
import { buildFullEntitySummary, SITE_AREA_INTERNAL_LINKS } from "@/lib/constants/geo-seo";
import type { PageId } from "@/lib/i18n/pages";

/** Al Olaya local landing page — Arabic first, distinct from Service Areas hub. */
export const AL_OLAYA_CONTENT = {
  metadata: {
    title: {
      ar: "صيانة مكيفات العليا الرياض | عاصم لخدمات المكيفات",
      en: "AC Service in Al Olaya Riyadh | Asim AC Services",
    },
    description: {
      ar: "احجز خدمة صيانة وتصليح وتنظيف مكيفات في حي العليا بالرياض، المملكة العربية السعودية. فحص الغاز، تعبئة الفريون، التركيب وHVAC.",
      en: "Book AC service in Al Olaya, Riyadh, Saudi Arabia (KSA). AC repair, cleaning, gas refill, installation, and HVAC for homes and businesses.",
    },
    openGraphTitle: {
      ar: "صيانة مكيفات العليا الرياض | عاصم لخدمات المكيفات",
      en: "AC Service in Al Olaya Riyadh | Asim AC Services",
    },
    openGraphDescription: {
      ar: "فني مكيفات في العليا: تصليح، تنظيف، تعبئة فريون وتركيب. احجز عبر واتساب.",
      en: "AC technician in Al Olaya: repair, cleaning, gas refill, and installation. Book on WhatsApp.",
    },
  },
  hero: {
    eyebrow: { ar: "العليا الرياض", en: "AL OLAYA RIYADH" },
    h1: {
      ar: "صيانة مكيفات في العليا الرياض",
      en: "AC Service in Al Olaya, Riyadh",
    },
    subheadline: {
      ar: "تقدم خدمة المكيفات عاصم خدمات تصليح وتنظيف وصيانة وتركيب المكيفات، فحص الغاز، تعبئة الفريون وخدمات HVAC في حي العليا بالرياض للمنازل والفلل والمحلات والمكاتب.",
      en: "Asim AC Services provides AC repair, cleaning, maintenance, gas check, gas refill, installation, and HVAC services in Al Olaya, Riyadh for homes, villas, shops, offices, and businesses.",
    },
    entitySummary: buildFullEntitySummary({
      suffix: {
        ar: "مع تركيز على حي العليا في الرياض. احجز عبر واتساب",
        en: "with focus on Al Olaya district in Riyadh. Book on WhatsApp",
      },
    }),
    image: {
      src: BRAND_ASSETS.photos.galleryGreeGasRefillKingdomRiyadh,
      alt: {
        ar: "فني عاصم لخدمات المكيفات يقدم خدمة مكيفات في العليا الرياض",
        en: "Asim AC Services technician providing AC service in Al Olaya Riyadh",
      },
      position: "center 32%",
    },
  },
  localIntro: {
    sectionId: "al-olaya-intro",
    eyebrow: { ar: "محلياً", en: "LOCAL" },
    heading: { ar: "فني مكيفات في العليا", en: "AC Technician in Al Olaya" },
    body: {
      ar: "إذا كان المكيف لا يبرد، يوجد تسريب ماء، صوت مزعج، أو يحتاج تنظيف في حي العليا، يمكنك التواصل مع عاصم لخدمات المكيفات عبر واتساب. نخدم العملاء السكنيين والتجاريين بفحص واضح وخدمة حسب توفر الموعد.",
      en: "If your AC is not cooling, leaking water, making noise, or needs cleaning in Al Olaya, you can contact Asim AC Services through WhatsApp. We help residential and commercial customers with clear inspection and AC service based on appointment availability.",
    },
    image: {
      src: BRAND_ASSETS.photos.galleryGreeCleaningTechnicianRiyadh,
      alt: {
        ar: "فني مكيفات في حي العليا بالرياض",
        en: "AC technician serving Al Olaya district in Riyadh",
      },
      position: "center center",
    },
  },
  problems: {
    sectionId: "al-olaya-problems",
    eyebrow: { ar: "المشاكل", en: "PROBLEMS" },
    heading: {
      ar: "مشاكل المكيفات التي نعالجها في العليا",
      en: "Common AC Problems We Handle in Al Olaya",
    },
    cards: [
      { id: "not-cooling", label: { ar: "المكيف لا يبرد", en: "AC not cooling" } },
      { id: "weak-cooling", label: { ar: "ضعف التبريد", en: "Weak cooling" } },
      { id: "water-leak", label: { ar: "تسريب ماء", en: "Water leakage" } },
      { id: "loud-noise", label: { ar: "صوت مزعج", en: "Loud noise" } },
      { id: "low-gas", label: { ar: "نقص فريون أو غاز", en: "Low gas or freon" } },
      { id: "dirty-filters", label: { ar: "اتساخ الفلاتر أو وجود رائحة", en: "Dirty filters or bad smell" } },
      { id: "outdoor-unit", label: { ar: "مشاكل الوحدة الخارجية", en: "Outdoor unit issues" } },
      { id: "installation", label: { ar: "مشاكل التركيب", en: "Installation problems" } },
    ],
  },
  services: {
    sectionId: "al-olaya-services",
    eyebrow: { ar: "خدماتنا", en: "SERVICES" },
    heading: { ar: "خدمات المكيفات المتوفرة في العليا", en: "AC Services Available in Al Olaya" },
    cards: [
      {
        id: "repair",
        pageId: "ac-repair-riyadh" satisfies PageId,
        title: { ar: "تصليح مكيفات في العليا", en: "AC Repair in Al Olaya" },
        description: {
          ar: "تصليح المكيف الذي لا يبرد، تسريب الماء، ضعف الهواء، الصوت الغريب وتكرار الأعطال.",
          en: "Repair for AC not cooling, water leakage, weak airflow, strange noise, and repeated AC issues.",
        },
        image: HOME_SERVICE_PHOTOS.repair,
        imagePosition: "center center",
      },
      {
        id: "cleaning",
        pageId: "ac-cleaning-riyadh" satisfies PageId,
        title: { ar: "تنظيف مكيفات في العليا", en: "AC Cleaning in Al Olaya" },
        description: {
          ar: "تنظيف مكيفات سبليت والوحدة الداخلية لتحسين تدفق الهواء، تقليل الغبار وتحسين التبريد.",
          en: "Split AC and indoor unit cleaning to improve airflow, reduce dust, and support better cooling.",
        },
        image: HOME_SERVICE_PHOTOS.cleaning,
        imagePosition: "center 35%",
      },
      {
        id: "gas",
        pageId: "ac-gas-refill-riyadh" satisfies PageId,
        title: { ar: "فحص الغاز وتعبئة الفريون في العليا", en: "Gas Check & Refill in Al Olaya" },
        description: {
          ar: "فحص مستوى الغاز والتعبئة عند الحاجة، مع فحص التسرب إذا كان التبريد ضعيفاً.",
          en: "Gas level inspection and refill when needed, with leak checking if cooling is weak.",
        },
        image: HOME_SERVICE_PHOTOS.gas,
        imagePosition: "center center",
      },
      {
        id: "installation",
        pageId: "ac-installation-riyadh" satisfies PageId,
        title: { ar: "تركيب مكيفات في العليا", en: "AC Installation in Al Olaya" },
        description: {
          ar: "تركيب مكيفات سبليت، شباك، كاسيت، مخفية وبعض الوحدات التجارية حسب نوع الجهاز.",
          en: "Installation for split AC, window AC, cassette AC, concealed units, and selected commercial AC units.",
        },
        image: HOME_SERVICE_PHOTOS.installation,
        imagePosition: "center center",
      },
      {
        id: "commercial",
        pageId: "commercial-hvac-riyadh" satisfies PageId,
        title: { ar: "صيانة HVAC تجارية في العليا", en: "Commercial HVAC in Al Olaya" },
        description: {
          ar: "خدمة HVAC للمحلات، المكاتب، المطاعم والشركات في حي العليا.",
          en: "HVAC service for shops, offices, restaurants, and businesses in Al Olaya.",
        },
        image: HOME_SERVICE_PHOTOS.commercial,
        imagePosition: "center center",
      },
    ],
  },
  audience: {
    sectionId: "al-olaya-audience",
    eyebrow: { ar: "عملاؤنا", en: "CUSTOMERS" },
    heading: {
      ar: "خدمة مكيفات للمنازل والمحلات والمكاتب في العليا",
      en: "AC Service for Homes, Shops, and Offices in Al Olaya",
    },
    body: {
      ar: "نخدم الشقق، الفلل، المحلات، المطاعم، المكاتب والشركات في حي العليا. سواء كنت تحتاج تنظيف مكيف غرفة، تصليح مكيف مكتب، أو صيانة HVAC لمكان تجاري، يمكنك إرسال الطلب عبر واتساب.",
      en: "We serve apartments, villas, shops, restaurants, offices, and businesses in Al Olaya. Whether you need bedroom AC cleaning, office AC repair, or commercial HVAC maintenance, you can send your request through WhatsApp.",
    },
    image: {
      src: BRAND_ASSETS.photos.aboutTeamVan,
      alt: {
        ar: "فريق عاصم لخدمات المكيفات في العليا الرياض",
        en: "Asim AC Services team serving Al Olaya Riyadh",
      },
      position: "center 35%",
    },
  },
  booking: {
    sectionId: "al-olaya-booking",
    eyebrow: { ar: "الحجز", en: "BOOKING" },
    heading: { ar: "طريقة حجز خدمة مكيفات في العليا", en: "How to Book AC Service in Al Olaya" },
    headline: {
      ar: "حجز سريع وواضح لخدمة المكيفات في العليا",
      en: "Fast, Clear AC Service Booking in Al Olaya",
    },
    image: {
      src: BRAND_ASSETS.photos.heroIndoorService,
      alt: {
        ar: "فني مكيفات يقدم خدمة في العليا الرياض",
        en: "AC technician providing service in Al Olaya Riyadh",
      },
      position: "center 28%",
    },
    steps: [
      {
        id: "issue",
        title: { ar: "اختر مشكلة المكيف", en: "Choose your AC issue" },
        description: {
          ar: "مثل: لا يبرد، تسريب ماء، صوت مزعج، أو يحتاج تنظيف.",
          en: "For example: not cooling, water leak, noise, or needs cleaning.",
        },
      },
      {
        id: "whatsapp",
        title: { ar: "أرسل رقم الواتساب", en: "Send your WhatsApp number" },
        description: {
          ar: "للتواصل السريع وتأكيد الموعد في العليا.",
          en: "For fast contact and appointment confirmation in Al Olaya.",
        },
      },
      {
        id: "location",
        title: { ar: "شارك موقعك في العليا أو أقرب معلم", en: "Share your Al Olaya location or nearby landmark" },
        description: {
          ar: "يساعد الفني في الوصول بسرعة إلى موقعك.",
          en: "Helps our technician reach your location quickly.",
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
      {
        id: "inspect",
        title: { ar: "يقوم الفني بفحص المكيف قبل بدء العمل", en: "Technician checks the AC before work starts" },
        description: {
          ar: "فحص واضح ثم تنفيذ التنظيف أو التصليح أو التركيب.",
          en: "Clear inspection, then cleaning, repair, or installation as needed.",
        },
      },
    ],
  },
  nearby: {
    sectionId: "al-olaya-nearby",
    eyebrow: { ar: "قريب من العليا", en: "NEARBY" },
    heading: { ar: "المناطق القريبة من العليا", en: "Nearby Riyadh Areas" },
    body: {
      ar: "بالإضافة إلى حي العليا، قد نخدم بعض المناطق القريبة في الرياض حسب توفر الفني وجدول المواعيد.",
      en: "Along with Al Olaya, we may also serve nearby Riyadh areas based on technician availability and appointment schedule.",
    },
    areaIds: AL_OLAYA_NEARBY_AREA_IDS,
    extraChips: [
      { id: "nearby", label: { ar: "مناطق قريبة في الرياض", en: "Nearby Riyadh Areas" } },
    ],
  },
  internalLinks: {
    sectionId: "al-olaya-links",
    eyebrow: { ar: "روابط مفيدة", en: "RELATED PAGES" },
    heading: { ar: "صفحات خدمة المكيفات ذات الصلة", en: "Related AC Service Pages" },
    pageIds: SITE_AREA_INTERNAL_LINKS,
  },
  faq: {
    eyebrow: { ar: "الأسئلة الشائعة", en: "FAQ" },
    heading: { ar: "أسئلة شائعة عن خدمة مكيفات العليا", en: "Al Olaya AC Service FAQ" },
    subline: {
      ar: "إجابات عن الحجز، التصليح، التنظيف، والخدمة للمنازل والمحلات في حي العليا.",
      en: "Answers about booking, repair, cleaning, and service for homes and businesses in Al Olaya.",
    },
    items: [
      {
        id: "service-olaya",
        question: { ar: "هل تقدمون خدمة مكيفات في العليا الرياض؟", en: "Do you provide AC service in Al Olaya Riyadh?" },
        answer: {
          ar: "نعم، تقدم خدمة المكيفات عاصم خدمات تصليح وتنظيف وتعبئة فريون وتركيب وصيانة HVAC في حي العليا بالرياض حسب توفر الموعد.",
          en: "Yes, Asim AC Services provides AC repair, cleaning, gas refill, installation, and HVAC services in Al Olaya, Riyadh based on appointment availability.",
        },
      },
      {
        id: "book-olaya",
        question: { ar: "كيف أحجز خدمة مكيفات في العليا؟", en: "How can I book AC service in Al Olaya?" },
        answer: {
          ar: "يمكنك الحجز عبر واتساب أو الاتصال المباشر أو نموذج الموقع. أرسل مشكلة المكيف، رقم الواتساب، والموقع في العليا.",
          en: "You can book through WhatsApp, direct call, or the website form. Send your AC issue, WhatsApp number, and location in Al Olaya.",
        },
      },
      {
        id: "not-cooling",
        question: { ar: "هل تصلحون مشكلة المكيف لا يبرد في العليا؟", en: "Do you repair AC not cooling in Al Olaya?" },
        answer: {
          ar: "نعم، نفحص مشاكل ضعف التبريد والمكيف الذي لا يبرد، مثل اتساخ الفلاتر، نقص الغاز، التسرب، ضعف تدفق الهواء، وأعطال الوحدة الخارجية.",
          en: "Yes, we check weak cooling and AC not cooling issues, including dirty filters, low gas, leaks, airflow problems, and outdoor unit faults.",
        },
      },
      {
        id: "cleaning",
        question: { ar: "هل تقدمون تنظيف مكيفات في العليا؟", en: "Do you provide AC cleaning in Al Olaya?" },
        answer: {
          ar: "نعم، نقدم تنظيف مكيفات سبليت، الوحدات الداخلية والخارجية، الفلاتر ومشاكل ضعف تدفق الهواء.",
          en: "Yes, we provide AC cleaning for split AC units, indoor units, outdoor units, filters, and airflow problems.",
        },
      },
      {
        id: "shops-offices",
        question: { ar: "هل تخدمون المحلات والمكاتب في العليا؟", en: "Do you serve shops and offices in Al Olaya?" },
        answer: {
          ar: "نعم، نقدم خدمات مكيفات و HVAC للمحلات، المكاتب، المطاعم والشركات في حي العليا.",
          en: "Yes, we provide AC and HVAC services for shops, offices, restaurants, and businesses in Al Olaya.",
        },
      },
    ],
    cta: {
      title: { ar: "تحتاج فني مكيفات في العليا؟", en: "Need an AC technician in Al Olaya?" },
      description: {
        ar: "تواصل عبر واتساب وسنؤكد توفر الموعد في حي العليا.",
        en: "Contact us on WhatsApp and we will confirm availability in Al Olaya.",
      },
      button: { ar: "احجز عبر واتساب", en: "Book on WhatsApp" },
    },
  },
  cta: {
    eyebrow: { ar: "ابدأ الآن", en: "GET STARTED" },
    heading: { ar: "جاهز لحجز خدمة مكيفات في العليا؟", en: "Ready to Book AC Service in Al Olaya?" },
    subline: {
      ar: "احجز عبر واتساب أو نموذج الحجز. نخدم المنازل والمحلات والمكاتب في حي العليا.",
      en: "Book on WhatsApp or the booking form. We serve homes, shops, and offices in Al Olaya.",
    },
    contactPageId: "contact" satisfies PageId,
    contactLabel: { ar: "صفحة اتصل بنا", en: "Contact Page" },
  },
} as const;

export function getAlOlayaNearbyAreas() {
  const areaMap = new Map(RIYADH_AREAS.map((area) => [area.id, area]));

  return [
    ...AL_OLAYA_CONTENT.nearby.areaIds.map((id) => {
      const area = areaMap.get(id);
      if (!area) {
        throw new Error(`Missing Riyadh area config for nearby id: ${id}`);
      }

      return { id: area.id, label: area.label };
    }),
    ...AL_OLAYA_CONTENT.nearby.extraChips,
  ];
}
