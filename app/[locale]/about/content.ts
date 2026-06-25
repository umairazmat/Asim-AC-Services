import { BRAND_ASSETS } from "@/lib/constants/brand-assets";
import { buildFullEntitySummary } from "@/lib/constants/geo-seo";
import type { PageId } from "@/lib/i18n/pages";

/** About page copy — Arabic first, SEO / GEO / E-E-A-T per docs/SEO.md §6.9 */
export const ABOUT_CONTENT = {
  metadata: {
    title: {
      ar: "من نحن | عاصم لخدمات المكيفات في الرياض",
      en: "About Asim AC Services | AC Technicians in Riyadh",
    },
    description: {
      ar: "تعرف على عاصم لخدمات المكيفات في الرياض، المملكة العربية السعودية: فريق فنيين محترفين وخدمة سريعة للمنازل والمحلات.",
      en: "Learn about Asim AC Services in Riyadh, Saudi Arabia (KSA): professional technicians and fast AC service for homes and businesses.",
    },
    openGraphTitle: {
      ar: "من نحن | عاصم لخدمات المكيفات في الرياض",
      en: "About Asim AC Services | AC Technicians in Riyadh",
    },
    openGraphDescription: {
      ar: "فريق فنيين مكيفات في الرياض: تنظيف، صيانة، تصليح، تركيب وتعبئة فريون للمنازل والمحلات.",
      en: "AC technician team in Riyadh: cleaning, repair, installation, and gas refill for homes and businesses.",
    },
  },
  hero: {
    eyebrow: { ar: "من نحن", en: "ABOUT US" },
    h1: {
      ar: "من نحن | خدمة المكيفات عاصم في الرياض",
      en: "About Asim AC Services in Riyadh",
    },
    subheadline: {
      ar: "فريق محترف لخدمات تنظيف وصيانة وتصليح وتركيب المكيفات في الرياض للمنازل والفلل والمحلات والمكاتب.",
      en: "A professional team for AC cleaning, repair, maintenance, and installation in Riyadh for homes, villas, shops, and offices.",
    },
    entitySummary: buildFullEntitySummary(),
    experienceBadge: {
      ar: "خبرة +1 سنة في الرياض",
      en: "1+ Year Serving Riyadh",
    },
    image: {
      src: BRAND_ASSETS.photos.aboutTeamVan,
      alt: {
        ar: "فريق عاصم لخدمات المكيفات أمام شاحنة الخدمة في الرياض",
        en: "Asim AC Services team in front of branded service van in Riyadh",
      },
    },
  },
  whoWeAre: {
    eyebrow: { ar: "قصتنا", en: "OUR STORY" },
    heading: {
      ar: "من نحن | فريق خدمة مكيفات في الرياض",
      en: "Who We Are | AC Service Team in Riyadh",
    },
    paragraphs: [
      {
        ar: "خدمة المكيفات عاصم شركة محلية في الرياض متخصصة في تنظيف وصيانة وتصليح وتركيب المكيفات. نركز على الفحص الواضح، التواصل السريع عبر واتساب، وخدمة موثوقة للمنازل والمحلات.",
        en: "Asim AC Services is a local Riyadh company focused on AC cleaning, maintenance, repair, and installation. We emphasize clear inspection, fast WhatsApp communication, and reliable service for homes and businesses.",
      },
      {
        ar: "نخدم الرياض مع تركيز على منطقة العليا والمناطق القريبة. هدفنا مساعدة العملاء على استعادة التبريد بسرعة وبجودة عالية، من تنظيف مكيفات سبليت إلى صيانة أنظمة HVAC التجارية.",
        en: "We serve Riyadh with focus on Al Olaya and nearby areas. Our goal is to restore cooling quickly and professionally, from split AC cleaning to commercial HVAC maintenance.",
      },
    ],
    image: {
      src: BRAND_ASSETS.photos.heroIndoorService,
      alt: {
        ar: "فني عاصم لخدمات المكيفات أثناء صيانة مكيف داخلي في الرياض",
        en: "Asim AC Services technician servicing an indoor AC unit in Riyadh",
      },
      position: "center 28%",
    },
  },
  whatWeDo: {
    eyebrow: { ar: "خدماتنا", en: "WHAT WE DO" },
    heading: {
      ar: "ماذا نقدم من خدمات مكيفات في الرياض؟",
      en: "What AC Services Do We Provide in Riyadh?",
    },
    subline: {
      ar: "خدمات مكيفات شاملة للمنازل والمحلات. اختر الخدمة المناسبة أو تواصل معنا عبر واتساب.",
      en: "Complete AC services for homes and businesses. Choose a service or contact us on WhatsApp.",
    },
    hubLink: {
      label: { ar: "عرض جميع خدمات المكيفات", en: "View All AC Services" },
      pageId: "ac-services-riyadh" satisfies PageId,
    },
  },
  audience: {
    eyebrow: { ar: "عملاؤنا", en: "WHO WE SERVE" },
    heading: {
      ar: "خدمة مكيفات للمنازل والمحلات في الرياض",
      en: "AC Services for Homes and Businesses in Riyadh",
    },
    subline: {
      ar: "نقدم خدمات مكيفات للمنازل والفلل والشقق والمحلات والمكاتب والشركات في الرياض والعليا.",
      en: "We provide AC services for homes, villas, apartments, shops, offices, and businesses in Riyadh and Al Olaya.",
    },
    cards: [
      {
        id: "homes",
        pageId: "ac-services-riyadh" satisfies PageId,
        title: { ar: "للمنازل والفلل", en: "Homes and Villas" },
        description: {
          ar: "تنظيف وصيانة وتركيب مكيفات لتحسين التبريد والراحة داخل المنزل.",
          en: "AC cleaning, repair, and installation to improve cooling and comfort at home.",
        },
      },
      {
        id: "businesses",
        pageId: "commercial-hvac-riyadh" satisfies PageId,
        title: { ar: "للمحلات والمكاتب", en: "Shops and Offices" },
        description: {
          ar: "خدمات مكيفات وأنظمة HVAC للمحلات والمطاعم والمكاتب والشركات.",
          en: "AC and HVAC services for shops, restaurants, offices, and businesses.",
        },
      },
    ],
    types: [
      { id: "homes", label: { ar: "المنازل", en: "Homes" } },
      { id: "villas", label: { ar: "الفلل", en: "Villas" } },
      { id: "apartments", label: { ar: "الشقق", en: "Apartments" } },
      { id: "shops", label: { ar: "المحلات", en: "Shops" } },
      { id: "offices", label: { ar: "المكاتب", en: "Offices" } },
      { id: "businesses", label: { ar: "الشركات", en: "Businesses" } },
    ],
  },
  howWeWork: {
    eyebrow: { ar: "طريقة العمل", en: "HOW WE WORK" },
    heading: {
      ar: "كيف نقدم خدمة المكيفات في الرياض؟",
      en: "How We Deliver AC Service in Riyadh",
    },
    subline: {
      ar: "عملية بسيطة وواضحة، من التواصل إلى إتمام الخدمة.",
      en: "A simple, clear process, from contact to completed service.",
    },
    steps: [
      {
        id: "contact",
        title: { ar: "تواصل معنا", en: "Contact Us" },
        description: {
          ar: "أرسل المشكلة عبر واتساب أو نموذج الحجز مع الحي ونوع المكيف.",
          en: "Send your issue on WhatsApp or the booking form with district and AC type.",
        },
      },
      {
        id: "inspect",
        title: { ar: "فحص وتشخيص", en: "Inspect & Diagnose" },
        description: {
          ar: "يفحص الفني المكيف ويوضح الخدمة المطلوبة قبل بدء العمل.",
          en: "Our technician inspects the AC and explains the required service before work starts.",
        },
      },
      {
        id: "service",
        title: { ar: "تنفيذ الخدمة", en: "Complete the Service" },
        description: {
          ar: "تنظيف، صيانة، تصليح، تعبئة فريون أو تركيب حسب حالة المكيف.",
          en: "Cleaning, maintenance, repair, gas refill, or installation based on AC condition.",
        },
      },
      {
        id: "followup",
        title: { ar: "متابعة ورضا العميل", en: "Follow-Up & Satisfaction" },
        description: {
          ar: "نتأكد من رضاك عن التبريد والأداء بعد إتمام الخدمة.",
          en: "We make sure you are satisfied with cooling and performance after service.",
        },
      },
    ],
  },
  whyChoose: {
    eyebrow: {
      ar: "لماذا نحن؟",
      en: "WHY CHOOSE US",
    },
    heading: {
      ar: "لماذا يختار عملاء الرياض عاصم لخدمات المكيفات؟",
      en: "Why Do Riyadh Customers Choose Asim AC Services?",
    },
    subline: {
      ar: "نركز على الفحص الواضح، سرعة التواصل، وجودة الخدمة للمنازل والفلل والمحلات والمكاتب في الرياض.",
      en: "We focus on clear inspection, fast communication, and reliable AC service for homes, villas, shops, and offices in Riyadh.",
    },
    reasons: [
      {
        id: "technicians",
        color: "amber" as const,
        title: { ar: "فنيون ذوو خبرة", en: "Experienced AC Technicians" },
        description: {
          ar: "فنيون لخدمات تنظيف وصيانة وتصليح المكيفات، فحص الغاز، التركيب، كشف التسربات وأنظمة HVAC.",
          en: "Skilled technicians for AC cleaning, repair, gas check, installation, leak detection, and HVAC service.",
        },
      },
      {
        id: "whatsapp",
        color: "teal" as const,
        title: { ar: "حجز سريع عبر واتساب", en: "Fast WhatsApp Booking" },
        description: {
          ar: "احجز خدمة المكيف بسهولة عبر واتساب وأرسل نوع المشكلة، الموقع، والوقت المناسب.",
          en: "Book your AC service quickly through WhatsApp and share your issue, location, and preferred time.",
        },
      },
      {
        id: "inspection",
        color: "blue" as const,
        title: { ar: "فحص واضح قبل العمل", en: "Clear Inspection Before Work" },
        description: {
          ar: "نقوم بفحص المشكلة أولاً وتوضيح الخدمة المطلوبة قبل بدء العمل.",
          en: "We check the AC problem first and explain the required service before starting the work.",
        },
      },
      {
        id: "homes-businesses",
        color: "indigo" as const,
        title: { ar: "خدمة للمنازل والمحلات", en: "Homes & Businesses" },
        description: {
          ar: "نخدم المنازل، الفلل، الشقق، المحلات، المكاتب والشركات في الرياض ومنطقة العليا.",
          en: "Serving homes, villas, apartments, shops, offices, and businesses in Riyadh and Al Olaya.",
        },
      },
      {
        id: "pricing",
        color: "orange" as const,
        title: { ar: "أسعار مناسبة حسب الخدمة", en: "Fair Service Pricing" },
        description: {
          ar: "السعر يعتمد على نوع الخدمة، حالة المكيف، وعدد الوحدات. يمكنك طلب عرض سعر قبل الحجز.",
          en: "Pricing depends on service type, AC condition, and number of units. Request a quote before booking.",
        },
      },
    ],
    ctaCard: {
      title: {
        ar: "تحتاج فني مكيفات في الرياض؟",
        en: "Need an AC technician in Riyadh?",
      },
      description: {
        ar: "تواصل معنا الآن وسنساعدك في تحديد الخدمة المناسبة.",
        en: "Contact us now and we'll help you choose the right AC service.",
      },
      button: {
        ar: "احجز عبر واتساب",
        en: "Book on WhatsApp",
      },
    },
  },
  teamGallery: {
    eyebrow: { ar: "فريقنا وأعمالنا", en: "TEAM & WORK" },
    heading: {
      ar: "فريق عاصم لخدمات المكيفات في الرياض",
      en: "Asim AC Services Team & Work in Riyadh",
    },
    subline: {
      ar: "صور من فريق الخدمة وأعمال تنظيف وصيانة وتصليح المكيفات في الرياض.",
      en: "Photos from our service team and AC cleaning, repair, and maintenance work in Riyadh.",
    },
    images: [
      {
        id: "team-van",
        src: BRAND_ASSETS.photos.aboutTeamVan,
        alt: {
          ar: "فريق عاصم لخدمات المكيفات مع شاحنة الخدمة في الرياض",
          en: "Asim AC Services team with service van in Riyadh",
        },
        position: "center center",
      },
      {
        id: "indoor-service",
        src: BRAND_ASSETS.photos.galleryGreeCleaningTechnicianRiyadh,
        alt: {
          ar: "فني مكيفات ينظف وحدات GREE الخارجية في الرياض",
          en: "AC technician cleaning GREE outdoor units in Riyadh",
        },
        position: "center center",
      },
      {
        id: "cleaning",
        src: BRAND_ASSETS.photos.cleaningSplitIndoor,
        alt: {
          ar: "تنظيف مكيف سبليت داخلي في الرياض",
          en: "Split AC indoor unit cleaning in Riyadh",
        },
        position: "center 30%",
      },
      {
        id: "gas-refill",
        src: BRAND_ASSETS.photos.galleryGreeGasRefillKingdomRiyadh,
        alt: {
          ar: "تعبئة فريون مكيفات في الرياض",
          en: "AC gas refill service in Riyadh",
        },
        position: "center 32%",
      },
      {
        id: "rooftop",
        src: BRAND_ASSETS.photos.galleryGreeCleaningRooftopRiyadh,
        alt: {
          ar: "صيانة مكيفات على السطح في الرياض",
          en: "Rooftop AC maintenance in Riyadh",
        },
        position: "center 40%",
      },
      {
        id: "commercial",
        src: BRAND_ASSETS.photos.commercialHvacRooftop,
        alt: {
          ar: "صيانة مكيفات تجارية HVAC في الرياض",
          en: "Commercial HVAC maintenance in Riyadh",
        },
        position: "center 35%",
      },
    ],
  },
  cta: {
    eyebrow: { ar: "ابدأ الآن", en: "GET STARTED" },
    heading: {
      ar: "جاهز لحجز خدمة مكيفات في الرياض؟",
      en: "Ready to Book AC Service in Riyadh?",
    },
    subline: {
      ar: "تواصل عبر واتساب أو املأ نموذج الحجز. نخدم الرياض والعليا للمنازل والمحلات.",
      en: "Contact us on WhatsApp or fill the booking form. We serve Riyadh and Al Olaya for homes and businesses.",
    },
    contact: { ar: "صفحة اتصل بنا", en: "Contact Page" },
    contactPageId: "contact" satisfies PageId,
  },
} as const;
