import { BRAND_ASSETS, HOME_SERVICE_PHOTOS } from "@/lib/constants/brand-assets";
import { SERVICE_AREAS_HUB_DISTRICT_IDS } from "@/lib/constants/service-areas-districts";
import { RIYADH_AREAS } from "@/lib/constants/riyadh-areas";
import { SITE_AREA_INTERNAL_LINKS } from "@/lib/constants/geo-seo";
import type { PageId } from "@/lib/i18n/pages";

/** Service Areas hub page — Arabic first per SEO spec. */
export const SERVICE_AREAS_CONTENT = {
  metadata: {
    title: {
      ar: "مناطق خدمة المكيفات في الرياض | عاصم لخدمات المكيفات",
      en: "AC Service Areas in Riyadh | Asim AC Services",
    },
    description: {
      ar: "تقدم خدمة المكيفات عاصم خدمات تنظيف وصيانة وتصليح وتركيب المكيفات وتعبئة الفريون في الرياض، المملكة العربية السعودية، مع تركيز على العليا.",
      en: "Asim AC Services provides AC cleaning, repair, gas refill, installation, and HVAC across Riyadh, Saudi Arabia (KSA), with focus on Al Olaya.",
    },
    openGraphTitle: {
      ar: "مناطق خدمة المكيفات في الرياض | عاصم لخدمات المكيفات",
      en: "AC Service Areas in Riyadh | Asim AC Services",
    },
    openGraphDescription: {
      ar: "خدمة مكيفات في الرياض والعليا: تنظيف، تصليح، تعبئة فريون، تركيب وHVAC للمنازل والمحلات.",
      en: "AC services in Riyadh and Al Olaya: cleaning, repair, gas refill, installation, and HVAC for homes and businesses.",
    },
  },
  hero: {
    eyebrow: { ar: "مناطق الخدمة", en: "SERVICE AREAS" },
    h1: {
      ar: "مناطق خدمة المكيفات في الرياض",
      en: "AC Service Areas in Riyadh",
    },
    subheadline: {
      ar: "تقدم خدمة المكيفات عاصم خدمات تنظيف وصيانة وتصليح وتركيب المكيفات، فحص الغاز، تعبئة الفريون وخدمات HVAC في الرياض للمنازل والفلل والمحلات والمكاتب.",
      en: "Asim AC Services provides AC cleaning, repair, maintenance, gas check, gas refill, installation, and HVAC services in Riyadh for homes, villas, shops, offices, and businesses.",
    },
    entitySummary: {
      ar: "خدمة المكيفات عاصم مزود خدمة مكيفات في الرياض، المملكة العربية السعودية. التركيز على العليا والمناطق القريبة حسب توفر الموعد.",
      en: "Asim AC Services is an AC service provider in Riyadh, Saudi Arabia, with focus on Al Olaya and nearby areas based on appointment availability.",
    },
    scrollCta: {
      ar: "تحقق من توفر الخدمة",
      en: "Check Your Area",
    },
    image: {
      src: BRAND_ASSETS.photos.aboutTeamVan,
      alt: {
        ar: "عاصم لخدمات المكيفات يقدم خدمة مكيفات في الرياض والعليا",
        en: "Asim AC Services providing AC service across Riyadh and Al Olaya",
      },
      position: "center 35%",
    },
  },
  primaryArea: {
    sectionId: "service-areas-primary",
    eyebrow: { ar: "التغطية", en: "COVERAGE" },
    heading: { ar: "منطقة الخدمة الرئيسية", en: "Primary Service Area" },
    body: {
      ar: "نخدم مدينة الرياض مع تركيز على منطقة العليا والمناطق القريبة حسب توفر الموعد. يمكن للعملاء التواصل عبر واتساب لتأكيد توفر الخدمة في الحي.",
      en: "We serve Riyadh with focus on Al Olaya and nearby areas based on appointment availability. Customers can contact us through WhatsApp to confirm service availability in their district.",
    },
    chips: [
      { id: "riyadh", label: { ar: "الرياض", en: "Riyadh" } },
      { id: "olaya", label: { ar: "العليا", en: "Al Olaya" } },
      { id: "nearby", label: { ar: "المناطق القريبة", en: "Nearby Areas" } },
      { id: "homes", label: { ar: "المنازل", en: "Homes" } },
      { id: "villas", label: { ar: "الفلل", en: "Villas" } },
      { id: "apartments", label: { ar: "الشقق", en: "Apartments" } },
      { id: "shops", label: { ar: "المحلات", en: "Shops" } },
      { id: "offices", label: { ar: "المكاتب", en: "Offices" } },
      { id: "businesses", label: { ar: "الشركات", en: "Businesses" } },
    ],
    image: {
      src: BRAND_ASSETS.photos.galleryGreeGasRefillKingdomRiyadh,
      alt: {
        ar: "خدمة مكيفات في الرياض مع إطلالة على أفق المدينة",
        en: "AC service in Riyadh with city skyline coverage view",
      },
      position: "center 32%",
    },
  },
  districts: {
    sectionId: "service-areas-districts",
    eyebrow: { ar: "الأحياء", en: "DISTRICTS" },
    heading: { ar: "الأحياء التي نخدمها في الرياض", en: "Riyadh Districts We Serve" },
    intro: {
      ar: "قد يختلف توفر الخدمة حسب جدول المواعيد، مسار الفني، ونوع الخدمة المطلوبة. تواصل معنا عبر واتساب لتأكيد توفر الخدمة في حيّك.",
      en: "Service availability may vary by appointment schedule, technician route, and service type. Contact us on WhatsApp to confirm availability in your district.",
    },
    districtIds: SERVICE_AREAS_HUB_DISTRICT_IDS,
    olayaPageId: "ac-service-al-olaya-riyadh" satisfies PageId,
  },
  services: {
    sectionId: "service-areas-services",
    eyebrow: { ar: "خدماتنا", en: "SERVICES" },
    heading: { ar: "خدمات المكيفات المتوفرة في الرياض", en: "AC Services Available in Riyadh" },
    cards: [
      {
        id: "repair",
        pageId: "ac-repair-riyadh" satisfies PageId,
        title: { ar: "تصليح مكيفات في الرياض", en: "AC Repair in Riyadh" },
        description: {
          ar: "للمكيف الذي لا يبرد، تسريب الماء، الصوت المزعج، ضعف الهواء، وتكرار أعطال المكيف.",
          en: "For AC not cooling, water leakage, noise, weak airflow, and repeated AC problems.",
        },
        image: HOME_SERVICE_PHOTOS.repair,
        imagePosition: "center center",
      },
      {
        id: "cleaning",
        pageId: "ac-cleaning-riyadh" satisfies PageId,
        title: { ar: "تنظيف مكيفات في الرياض", en: "AC Cleaning in Riyadh" },
        description: {
          ar: "تنظيف مكيفات سبليت وشباك، الوحدات الداخلية والخارجية، الفلاتر، الغبار وتحسين تدفق الهواء.",
          en: "Cleaning for split AC, window AC, indoor units, outdoor units, filters, dust, and airflow improvement.",
        },
        image: HOME_SERVICE_PHOTOS.cleaning,
        imagePosition: "center 35%",
      },
      {
        id: "gas",
        pageId: "ac-gas-refill-riyadh" satisfies PageId,
        title: { ar: "فحص الغاز وتعبئة الفريون في الرياض", en: "AC Gas Check & Refill in Riyadh" },
        description: {
          ar: "فحص مستوى الغاز والتعبئة بعد المعاينة، مع فحص التسرب عند الحاجة.",
          en: "Gas level checking and refill after inspection, with leak checking when needed.",
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
        id: "commercial",
        pageId: "commercial-hvac-riyadh" satisfies PageId,
        title: { ar: "صيانة HVAC تجارية في الرياض", en: "Commercial HVAC in Riyadh" },
        description: {
          ar: "خدمة للمحلات، المكاتب، المطاعم، وحدات الباكيج، الدكت وأنظمة التكييف التجارية.",
          en: "HVAC service for shops, offices, restaurants, packaged units, duct systems, and commercial AC units.",
        },
        image: HOME_SERVICE_PHOTOS.commercial,
        imagePosition: "center center",
      },
    ],
  },
  audience: {
    sectionId: "service-areas-audience",
    eyebrow: { ar: "عملاؤنا", en: "CUSTOMERS" },
    heading: { ar: "خدمة مكيفات للمنازل والمحلات", en: "AC Services for Homes and Businesses" },
    body: {
      ar: "نقدم خدمات المكيفات لغرف النوم، المجالس، الفلل، الشقق، المحلات، المطاعم، المكاتب والمساحات التجارية في الرياض.",
      en: "We provide AC services for bedrooms, living rooms, villas, apartments, shops, restaurants, offices, and commercial spaces in Riyadh.",
    },
    image: {
      src: BRAND_ASSETS.photos.heroIndoorService,
      alt: {
        ar: "خدمة مكيفات للمنازل والمحلات في الرياض",
        en: "AC service for homes and businesses in Riyadh",
      },
      position: "center 28%",
    },
  },
  confirmArea: {
    sectionId: "service-areas-confirm",
    eyebrow: { ar: "التوفر", en: "AVAILABILITY" },
    heading: { ar: "كيف تتحقق من توفر الخدمة؟", en: "How to Confirm Service Availability" },
    headline: {
      ar: "حجز سريع وواضح لخدمة المكيفات في الرياض",
      en: "Fast, Clear AC Service Booking Across Riyadh",
    },
    image: {
      src: BRAND_ASSETS.photos.cleaningSplitIndoor,
      alt: {
        ar: "فني مكيفات يقدم خدمة في الرياض",
        en: "AC technician providing service in Riyadh",
      },
      position: "center 30%",
    },
    steps: [
      {
        id: "issue",
        title: { ar: "أرسل مشكلة المكيف عبر واتساب", en: "Send your AC issue on WhatsApp" },
        description: {
          ar: "اذكر إذا كان المكيف لا يبرد، يوجد تسريب، صوت مزعج، أو يحتاج تنظيف.",
          en: "Tell us if the AC is not cooling, leaking, noisy, or needs cleaning.",
        },
      },
      {
        id: "district",
        title: { ar: "شارك اسم الحي في الرياض", en: "Share your Riyadh district" },
        description: {
          ar: "أرسل اسم الحي أو المنطقة القريبة لتأكيد توفر الموعد.",
          en: "Send your district or nearby area so we can confirm availability.",
        },
      },
      {
        id: "units",
        title: { ar: "اذكر نوع المكيف وعدد الوحدات", en: "Mention the AC type and number of units" },
        description: {
          ar: "مثال: مكيف سبليت، شباك، أو تجاري وعدد الوحدات المطلوبة.",
          en: "Example: split AC, window AC, or commercial unit and how many units.",
        },
      },
      {
        id: "confirm",
        title: { ar: "نؤكد توفر الموعد وتفاصيل الخدمة", en: "We confirm availability and service details" },
        description: {
          ar: "نرد بسرعة عبر واتساب ونوضح الخدمة المناسبة قبل بدء العمل.",
          en: "We reply quickly on WhatsApp and explain the right service before work starts.",
        },
      },
    ],
  },
  internalLinks: {
    sectionId: "service-areas-links",
    eyebrow: { ar: "روابط مفيدة", en: "RELATED PAGES" },
    heading: { ar: "صفحات خدمة المكيفات في الرياض", en: "Related AC Service Pages" },
    pageIds: SITE_AREA_INTERNAL_LINKS,
  },
  faq: {
    eyebrow: { ar: "الأسئلة الشائعة", en: "FAQ" },
    heading: { ar: "أسئلة شائعة عن مناطق الخدمة في الرياض", en: "Service Areas FAQ in Riyadh" },
    subline: {
      ar: "إجابات عن تغطية الرياض، الأحياء، المنازل والمحلات، وخدمات المكيفات المتوفرة.",
      en: "Answers about Riyadh coverage, districts, homes and businesses, and available AC services.",
    },
    items: [
      {
        id: "across-riyadh",
        question: { ar: "هل تقدمون خدمة مكيفات في الرياض؟", en: "Do you provide AC services across Riyadh?" },
        answer: {
          ar: "نعم، نقدم خدمات المكيفات في الرياض مع تركيز على منطقة العليا والمناطق القريبة حسب توفر الموعد.",
          en: "Yes, we provide AC services in Riyadh, with focus on Al Olaya and nearby areas based on appointment availability.",
        },
      },
      {
        id: "check-district",
        question: { ar: "كيف أتأكد أنكم تخدمون حيّي؟", en: "How can I check if you serve my district?" },
        answer: {
          ar: "أرسل اسم الحي ومشكلة المكيف عبر واتساب وسنؤكد توفر الخدمة.",
          en: "Send your district name and AC issue through WhatsApp, and we will confirm availability.",
        },
      },
      {
        id: "homes-businesses",
        question: { ar: "هل تخدمون المنازل والمحلات؟", en: "Do you serve homes and businesses?" },
        answer: {
          ar: "نعم، نخدم المنازل، الفلل، الشقق، المحلات، المكاتب، المطاعم والشركات.",
          en: "Yes, we serve homes, villas, apartments, shops, offices, restaurants, and businesses.",
        },
      },
      {
        id: "which-services",
        question: { ar: "ما خدمات المكيفات المتوفرة في الرياض؟", en: "Which AC services are available in Riyadh?" },
        answer: {
          ar: "نقدم التصليح، التنظيف، الصيانة، فحص الغاز، تعبئة الفريون، التركيب، كشف التسربات وصيانة HVAC التجارية.",
          en: "We provide AC repair, cleaning, maintenance, gas check, gas refill, installation, leak detection, and commercial HVAC service.",
        },
      },
      {
        id: "pricing-area",
        question: { ar: "هل يختلف السعر حسب المنطقة؟", en: "Do prices change by area?" },
        answer: {
          ar: "قد يختلف السعر حسب نوع الخدمة، حالة المكيف، عدد الوحدات والموقع.",
          en: "Prices may depend on service type, AC condition, number of units, and location.",
        },
      },
    ],
    cta: {
      title: { ar: "تحتاج تأكيد توفر الخدمة في حيّك؟", en: "Need to confirm service in your district?" },
      description: {
        ar: "تواصل معنا عبر واتساب وسنؤكد توفر الموعد في الرياض.",
        en: "Contact us on WhatsApp and we will confirm availability in Riyadh.",
      },
      button: { ar: "احجز عبر واتساب", en: "Book on WhatsApp" },
    },
  },
  cta: {
    eyebrow: { ar: "ابدأ الآن", en: "GET STARTED" },
    heading: { ar: "جاهز لحجز خدمة مكيفات في الرياض؟", en: "Ready to Book AC Service in Riyadh?" },
    subline: {
      ar: "تواصل عبر واتساب أو املأ نموذج الحجز. نخدم الرياض والعليا للمنازل والمحلات.",
      en: "Contact us on WhatsApp or fill the booking form. We serve Riyadh and Al Olaya for homes and businesses.",
    },
    contactPageId: "contact" satisfies PageId,
    contactLabel: { ar: "صفحة اتصل بنا", en: "Contact Page" },
  },
} as const;

export function getServiceAreasDistricts() {
  const areaMap = new Map(RIYADH_AREAS.map((area) => [area.id, area]));

  return SERVICE_AREAS_CONTENT.districts.districtIds.map((id) => {
    const area = areaMap.get(id);
    if (!area) {
      throw new Error(`Missing Riyadh area config for district id: ${id}`);
    }

    return {
      id: area.id,
      label: area.label,
      pageId: id === "olaya" ? SERVICE_AREAS_CONTENT.districts.olayaPageId : undefined,
    };
  });
}
