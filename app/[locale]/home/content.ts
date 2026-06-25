import { BRAND_ASSETS, HOME_SERVICE_PHOTOS } from "@/lib/constants/brand-assets";
import { buildFullEntitySummary, GEO_KSA_LABEL } from "@/lib/constants/geo-seo";
import { BOOK_SERVICE_SECTION } from "@/lib/constants/book-service-content";
import type { PageId } from "@/lib/i18n/pages";

/** Home page copy — Arabic first per SEO / requirements. */
export const HOME_CONTENT = {
  metadata: {
    title: {
      ar: "خدمة مكيفات الرياض | تنظيف وصيانة وتركيب | عاصم",
      en: "AC Services in Riyadh | Cleaning, Repair & Installation | Asim",
    },
    description: {
      ar: "خدمة مكيفات في الرياض، المملكة العربية السعودية: تنظيف وصيانة وتصليح وتعبئة فريون وتركيب وكشف تسربات للمنازل والمحلات. احجز عبر واتساب.",
      en: "AC services in Riyadh, Saudi Arabia (KSA): cleaning, repair, maintenance, gas refill, installation, and leak detection for homes and businesses. Book on WhatsApp.",
    },
    openGraphTitle: {
      ar: "خدمة مكيفات الرياض | تنظيف وصيانة وتركيب | عاصم",
      en: "AC Services in Riyadh | Cleaning, Repair & Installation | Asim",
    },
    openGraphDescription: {
      ar: "تنظيف وصيانة وتصليح وتركيب مكيفات في الرياض والعليا، المملكة العربية السعودية. تواصل عبر واتساب.",
      en: "AC cleaning, repair, installation, and gas refill in Riyadh and Al Olaya, Saudi Arabia. Contact us on WhatsApp.",
    },
  },
  hero: {
    eyebrow: {
      ar: "خبراء في تصليح وصيانة المكيفات",
      en: "Expert Air Conditioner Repairing & Maintenance",
    },
    h1Lead: {
      ar: "خدمة مكيفات في الرياض",
      en: "AC Services",
    },
    h1Tail: {
      ar: "بسرعة وجودة عالية",
      en: "in Riyadh",
    },
    subheadline: {
      ar: "حافظ على برودة منزلك ومكتبك ومحلك مع خدمات تصليح وصيانة وتركيب مكيفات احترافية، متاحة على مدار 24/7 في الرياض.",
      en: "Keep your home, office, shop, and business cool and comfortable with expert AC repair, maintenance, and installation, available 24/7 across Riyadh.",
    },
    trustBadge: {
      title: { ar: "عملاء سعداء", en: "Happy Clients" },
      count: { ar: "2k+", en: "2k+" },
    },
    points: [
      {
        id: "emergency",
        label: {
          ar: "خدمة طوارئ على مدار 24/7",
          en: "24/7 Emergency Services",
        },
      },
      {
        id: "same-day",
        label: {
          ar: "مواعيد في نفس اليوم",
          en: "Same Day Appointments",
        },
      },
      {
        id: "guarantee",
        label: {
          ar: "رضا العملاء مضمون",
          en: "Satisfaction Guaranteed",
        },
      },
      {
        id: "technicians",
        label: {
          ar: "فنيون ذوو خبرة",
          en: "Experienced Technicians",
        },
      },
    ],
    stats: [
      {
        id: "satisfaction",
        value: 100,
        suffix: "%",
        label: { ar: "رضا العملاء", en: "Customer Satisfaction" },
      },
      {
        id: "reviews",
        value: 5,
        suffix: "★",
        label: { ar: "تقييم جوجل", en: "Google Reviews" },
      },
      {
        id: "emergency",
        value: null,
        display: { ar: "24/7", en: "24/7" },
        label: { ar: "خدمة طوارئ", en: "Emergency Service" },
      },
      {
        id: "licensed",
        value: 100,
        suffix: "%",
        label: { ar: "مرخّص ومؤمّن", en: "Licensed & Insured" },
      },
      {
        id: "same-day",
        value: null,
        display: { ar: "نفس اليوم", en: "Same-Day" },
        label: { ar: "الخدمة متاحة", en: "Service Available" },
      },
    ],
    bookCta: {
      ar: "احجز الخدمة",
      en: "Book Services",
    },
    callCta: {
      ar: "اطلب مكالمة",
      en: "Request a Call",
    },
    gallery: {
      main: {
        ar: "عميل راضٍ عن خدمة المكيفات عاصم مع فني وشاحنة الخدمة في الرياض",
        en: "Satisfied customer with Asim AC Services technician and van in Riyadh",
      },
      team: {
        ar: "فريق فنيي خدمة المكيفات عاصم أمام شاحنة الخدمة",
        en: "Asim AC Services technician team in front of branded service van",
      },
      commercial: {
        ar: "فريق صيانة مكيفات تجارية على سطح مبنى في الرياض",
        en: "Commercial AC maintenance team on a rooftop in Riyadh",
      },
    },
  },
  painStrip: {
    eyebrow: {
      ar: "مشاكل المكيفات الشائعة في الرياض",
      en: "COMMON AC PROBLEMS IN RIYADH",
    },
    heading: {
      ar: "هل تواجه مشكلة في المكيف؟",
      en: "Is Your AC Having One of These Problems?",
    },
    subline: {
      ar: "اختر المشكلة واحجز خدمة مكيفات بسرعة عبر واتساب.",
      en: "Choose the issue and book fast AC service through WhatsApp.",
    },
    cta: {
      ar: "اختر المشكلة واحجز عبر واتساب",
      en: "Choose Your Issue & Book on WhatsApp",
    },
    cardAction: {
      ar: "احجز الآن",
      en: "Book Now",
    },
    cards: [
      {
        id: "not-cooling",
        serviceId: "repair",
        label: { ar: "المكيف لا يبرد", en: "AC Not Cooling" },
        description: {
          ar: "هواء دافئ أو ضعف واضح في التبريد.",
          en: "Warm air or weak airflow from your AC.",
        },
        color: "blue",
      },
      {
        id: "weak-cooling",
        serviceId: "cooling",
        label: { ar: "ضعف التبريد", en: "Weak Cooling" },
        description: {
          ar: "التبريد بطيء أو لا يصل للغرفة.",
          en: "Cooling is slow or not reaching the room.",
        },
        color: "teal",
      },
      {
        id: "water-leak",
        serviceId: "repair",
        label: { ar: "تسريب ماء", en: "Water Leakage" },
        description: {
          ar: "نزول ماء من الوحدة الداخلية أو الخارجية.",
          en: "Water dripping from indoor or outdoor unit.",
        },
        color: "blue",
      },
      {
        id: "loud-noise",
        serviceId: "repair",
        label: { ar: "صوت مزعج", en: "Loud Noise" },
        description: {
          ar: "صوت غير طبيعي أو اهتزاز أثناء التشغيل.",
          en: "Unusual sound, vibration, or motor noise.",
        },
        color: "amber",
      },
      {
        id: "low-gas",
        serviceId: "gas",
        label: { ar: "نقص فريون", en: "Low Gas / Freon" },
        description: {
          ar: "ضعف التبريد بسبب احتمال نقص الغاز.",
          en: "Cooling drops because gas may be low.",
        },
        color: "orange",
      },
      {
        id: "needs-service",
        serviceId: "cleaning",
        label: { ar: "يحتاج تنظيف", en: "Needs Cleaning" },
        description: {
          ar: "غبار، رائحة، أو ضعف تدفق الهواء.",
          en: "Dust, smell, or weak airflow from filters.",
        },
        color: "rose",
      },
    ],
  },
  bookService: BOOK_SERVICE_SECTION,
  mainServices: {
    eyebrow: {
      ar: "خدماتنا الرئيسية",
      en: "OUR SERVICES",
    },
    heading: {
      ar: "خدمات مكيفات احترافية في الرياض",
      en: "Expert AC Services You Can Trust in Riyadh",
    },
    subline: {
      ar: "اختر الخدمة المناسبة لمشكلتك واحجز فني مكيفات بسرعة عبر واتساب.",
      en: "Choose the service that matches your AC problem and book a technician fast on WhatsApp.",
    },
    intro: {
      title: {
        ar: "حلول مكيفات شاملة للمنازل والمحلات",
        en: "Complete AC Solutions for Homes & Businesses",
      },
      text: {
        ar: "من التنظيف والتصليح إلى التركيب والصيانة التجارية. نخدم جميع أنواع المكيفات في الرياض بجودة عالية وأسعار مناسبة.",
        en: "From cleaning and repair to installation and commercial HVAC. We service all AC types across Riyadh with quality work and fair prices.",
      },
      imageAlt: {
        ar: "فريق عاصم لخدمات المكيفات أمام شاحنة الخدمة في الرياض",
        en: "Asim AC Services team in front of branded service van in Riyadh",
      },
      image: HOME_SERVICE_PHOTOS.intro,
      imagePosition: "center 35%",
    },
    viewAllCta: {
      ar: "عرض جميع الخدمات",
      en: "View All Services",
    },
    cardCta: {
      ar: "اقرأ المزيد",
      en: "Read More",
    },
    bookNowCta: {
      ar: "احجز الآن",
      en: "Book Now",
    },
    cards: [
      {
        id: "repair",
        pageId: "ac-repair-riyadh" satisfies PageId,
        title: { ar: "تصليح مكيفات", en: "AC Repair" },
        description: {
          ar: "فحص أعطال المكيف، ضعف التبريد، التسريب والصوت المزعج.",
          en: "Fix cooling issues, leaks, noise, and AC faults.",
        },
        image: HOME_SERVICE_PHOTOS.repair,
        imagePosition: "center center",
      },
      {
        id: "cleaning",
        pageId: "ac-cleaning-riyadh" satisfies PageId,
        title: { ar: "تنظيف مكيفات", en: "AC Cleaning" },
        description: {
          ar: "تنظيف شامل لتحسين التبريد وتدفق الهواء.",
          en: "Complete AC cleaning to improve airflow and cooling.",
        },
        image: HOME_SERVICE_PHOTOS.cleaning,
        imagePosition: "center 35%",
      },
      {
        id: "gas",
        pageId: "ac-gas-refill-riyadh" satisfies PageId,
        title: { ar: "فحص الغاز وتعبئة الفريون", en: "Gas Check & Refill" },
        description: {
          ar: "فحص مستوى الغاز والتعبئة عند الحاجة بعد المعاينة.",
          en: "Check gas level and refill when needed after inspection.",
        },
        image: HOME_SERVICE_PHOTOS.gas,
        imagePosition: "center center",
      },
      {
        id: "installation",
        pageId: "ac-installation-riyadh" satisfies PageId,
        title: { ar: "تركيب مكيفات", en: "AC Installation" },
        description: {
          ar: "تركيب مكيفات للمنازل والمحلات باحترافية.",
          en: "Professional AC installation for homes and shops.",
        },
        image: HOME_SERVICE_PHOTOS.installation,
        imagePosition: "center center",
      },
      {
        id: "leak-cooling",
        pageId: "ac-repair-riyadh" satisfies PageId,
        title: {
          ar: "كشف التسربات وضعف التبريد",
          en: "Leak Detection & Cooling Issues",
        },
        description: {
          ar: "تحديد سبب ضعف التبريد أو تكرار مشاكل المكيف.",
          en: "Find leaks and solve weak cooling or repeated AC problems.",
        },
        image: HOME_SERVICE_PHOTOS.leakCooling,
        imagePosition: "center center",
      },
      {
        id: "commercial",
        pageId: "commercial-hvac-riyadh" satisfies PageId,
        title: {
          ar: "أعمال الدكت وأنظمة HVAC",
          en: "Duct Work & Commercial HVAC",
        },
        description: {
          ar: "خدمة للمحال والمكاتب والوحدات التجارية وأنظمة الدكت.",
          en: "HVAC service for shops, offices, packaged units, and duct systems.",
        },
        image: HOME_SERVICE_PHOTOS.commercial,
        imagePosition: "center 30%",
      },
    ],
  },
  acTypesBrands: {
    eyebrow: {
      ar: "أنواع وماركات المكيفات",
      en: "AC TYPES & BRANDS",
    },
    heading: {
      ar: "أنواع وماركات المكيفات التي نخدمها",
      en: "AC Types & Brands We Service",
    },
    subline: {
      ar: "نخدم أنواع المكيفات الشائعة وأشهر الماركات في الرياض حسب نوع الجهاز، حالة المكيف، وتوفر القطع.",
      en: "We service common AC types and major AC brands in Riyadh, depending on the unit type, AC condition, and parts availability.",
    },
    typesLabel: {
      ar: "أنواع المكيفات",
      en: "AC Types",
    },
    brandsLabel: {
      ar: "الماركات",
      en: "Brands",
    },
    types: [
      { id: "central", label: { ar: "مكيفات مركزية", en: "Central AC" } },
      { id: "split", label: { ar: "مكيفات سبليت", en: "Split Units" } },
      { id: "window", label: { ar: "مكيفات شباك", en: "Window Units" } },
      { id: "concealed", label: { ar: "مكيفات مخفية", en: "Concealed Units" } },
      { id: "cassette", label: { ar: "مكيفات كاسيت", en: "Cassette AC" } },
      { id: "packaged", label: { ar: "وحدات باكيج", en: "Packaged Units" } },
    ],
    brands: [
      { id: "gree", name: "GREE", logo: BRAND_ASSETS.acBrandLogos.gree },
      { id: "midea", name: "Midea", logo: BRAND_ASSETS.acBrandLogos.midea },
      { id: "lg", name: "LG", logo: BRAND_ASSETS.acBrandLogos.lg },
      { id: "samsung", name: "Samsung", logo: BRAND_ASSETS.acBrandLogos.samsung },
      { id: "haier", name: "Haier", logo: BRAND_ASSETS.acBrandLogos.haier },
      { id: "zamil", name: "Zamil", logo: BRAND_ASSETS.acBrandLogos.zamil },
      { id: "carrier", name: "Carrier", logo: BRAND_ASSETS.acBrandLogos.carrier },
      { id: "panasonic", name: "Panasonic", logo: BRAND_ASSETS.acBrandLogos.panasonic },
    ],
    ctaHeadline: {
      ar: "هل تحتاج خدمة لمكيفك؟",
      en: "Need service for your AC brand?",
    },
    cta: {
      ar: "احجز عبر واتساب",
      en: "Book on WhatsApp",
    },
    servicesLink: {
      ar: "عرض جميع خدمات المكيفات في الرياض",
      en: "View All AC Services in Riyadh",
    },
  },
  whyChoose: {
    eyebrow: {
      ar: "لماذا تختارنا؟",
      en: "WHY CHOOSE ASIM AC SERVICES",
    },
    heading: {
      ar: "لماذا تختار عاصم لخدمات المكيفات في الرياض؟",
      en: "Why Choose Asim AC Services in Riyadh?",
    },
    subline: {
      ar: "نركز على الفحص الواضح، سرعة التواصل، وجودة الخدمة للمنازل والفلل والمحلات والمكاتب في الرياض.",
      en: "We focus on clear inspection, fast communication, and reliable AC service for homes, villas, shops, and offices in Riyadh.",
    },
    reasons: [
      {
        id: "technicians",
        color: "amber",
        title: { ar: "فنيون ذوو خبرة", en: "Experienced AC Technicians" },
        description: {
          ar: "فنيون لخدمات تنظيف وصيانة وتصليح المكيفات، فحص الغاز، التركيب، كشف التسربات وأنظمة HVAC.",
          en: "Skilled technicians for AC cleaning, repair, gas check, installation, leak detection, and HVAC service.",
        },
      },
      {
        id: "whatsapp",
        color: "teal",
        title: { ar: "حجز سريع عبر واتساب", en: "Fast WhatsApp Booking" },
        description: {
          ar: "احجز خدمة المكيف بسهولة عبر واتساب وأرسل نوع المشكلة، الموقع، والوقت المناسب.",
          en: "Book your AC service quickly through WhatsApp and share your issue, location, and preferred time.",
        },
      },
      {
        id: "inspection",
        color: "blue",
        title: { ar: "فحص واضح قبل العمل", en: "Clear Inspection Before Work" },
        description: {
          ar: "نقوم بفحص المشكلة أولاً وتوضيح الخدمة المطلوبة قبل بدء العمل.",
          en: "We check the AC problem first and explain the required service before starting the work.",
        },
      },
      {
        id: "homes-businesses",
        color: "indigo",
        title: { ar: "خدمة للمنازل والمحلات", en: "Homes & Businesses" },
        description: {
          ar: "نخدم المنازل، الفلل، الشقق، المحلات، المكاتب والشركات في الرياض ومنطقة العليا.",
          en: "Serving homes, villas, apartments, shops, offices, and businesses in Riyadh and Al Olaya.",
        },
      },
      {
        id: "pricing",
        color: "orange",
        title: { ar: "أسعار مناسبة حسب الخدمة", en: "Fair Service Pricing" },
        description: {
          ar: "السعر يعتمد على نوع الخدمة، حالة المكيف، وعدد الوحدات. يمكنك طلب عرض سعر قبل الحجز.",
          en: "Pricing depends on service type, AC condition, and number of units. Request a quote before booking.",
        },
      },
    ],
    ctaCard: {
      title: {
        ar: "تحتاج خدمة مكيفات في الرياض؟",
        en: "Need AC service in Riyadh?",
      },
      description: {
        ar: "أرسل لنا المشكلة وسنساعدك عبر واتساب.",
        en: "Tell us the issue and we'll guide you through WhatsApp.",
      },
      button: {
        ar: "احجز عبر واتساب",
        en: "Book on WhatsApp",
      },
    },
  },
  serviceArea: {
    eyebrow: {
      ar: "مناطق الخدمة",
      en: "SERVICE AREAS",
    },
    heading: {
      ar: "خدمة مكيفات في الرياض للمنازل والمحلات",
      en: "AC Services for Homes and Businesses in Riyadh",
    },
    subline: {
      ar: "نقدم خدمة تنظيف وصيانة وتصليح وتركيب المكيفات في الرياض، المملكة العربية السعودية، مع تركيز على منطقة العليا والمناطق القريبة حسب توفر الموعد.",
      en: "We provide AC cleaning, repair, maintenance, installation, gas check, and refill services in Riyadh, Saudi Arabia, with focus on Al Olaya and nearby areas based on appointment availability.",
    },
    subline2: {
      ar: "نخدم المنازل، الفلل، الشقق، المحلات، المكاتب والشركات بخدمات مكيفات سريعة وواضحة عبر واتساب.",
      en: "We serve homes, villas, apartments, shops, offices, and businesses with fast WhatsApp booking.",
    },
    teaserSubline: {
      ar: "خدمة مكيفات في الرياض، المملكة العربية السعودية، مع تركيز على العليا والمناطق القريبة حسب توفر الموعد.",
      en: "AC services in Riyadh, Saudi Arabia, with focus on Al Olaya and nearby districts based on appointment availability.",
    },
    viewAllCta: {
      ar: "عرض جميع مناطق الخدمة",
      en: "View All Service Areas",
    },
    highlightsLabel: {
      ar: "مناطق الخدمة الرئيسية",
      en: "Primary Service Areas",
    },
    highlights: [
      { id: "riyadh", label: { ar: "الرياض", en: "Riyadh" } },
      { id: "olaya", label: { ar: "العليا", en: "Al Olaya" } },
      { id: "ksa", label: GEO_KSA_LABEL },
      { id: "nearby", label: { ar: "المناطق القريبة", en: "Nearby Areas" } },
    ],
    districtsLabel: {
      ar: "أحياء الرياض التي نخدمها",
      en: "Riyadh Districts We Serve",
    },
    availabilityNote: {
      ar: "التوفر حسب الموعد في جميع الأحياء المذكورة.",
      en: "Availability in all listed districts is based on appointment scheduling.",
    },
    customerTypesLabel: {
      ar: "نخدم",
      en: "We Serve",
    },
    customerTypes: [
      { id: "homes", label: { ar: "المنازل", en: "Homes" } },
      { id: "villas", label: { ar: "الفلل", en: "Villas" } },
      { id: "apartments", label: { ar: "الشقق", en: "Apartments" } },
      { id: "shops", label: { ar: "المحلات", en: "Shops" } },
      { id: "offices", label: { ar: "المكاتب", en: "Offices" } },
      { id: "businesses", label: { ar: "الشركات", en: "Businesses" } },
    ],
    audienceCards: [
      {
        id: "homes",
        title: { ar: "للمنازل والفلل", en: "Homes and Villas" },
        description: {
          ar: "تنظيف وصيانة وتركيب مكيفات لتحسين التبريد والراحة داخل المنزل.",
          en: "AC cleaning, repair, and installation to improve cooling and comfort.",
        },
      },
      {
        id: "businesses",
        title: { ar: "للمحلات والمكاتب", en: "Shops and Offices" },
        description: {
          ar: "خدمات مكيفات وأنظمة HVAC للمحلات والمطاعم والمكاتب حسب الحاجة.",
          en: "AC and HVAC services for shops, restaurants, offices, and businesses.",
        },
      },
    ],
    coverage: {
      servingLabel: { ar: "نخدم", en: "Serving" },
      servingValue: { ar: "الرياض", en: "Riyadh" },
      focusLabel: { ar: "التركيز", en: "Focused Area" },
      focusValue: { ar: "العليا", en: "Al Olaya" },
      nearbyLabel: { ar: "المناطق القريبة", en: "Nearby Areas" },
      nearbyValue: {
        ar: "حسب توفر الموعد",
        en: "Based on availability",
      },
      bookingLabel: { ar: "الحجز", en: "Booking" },
      bookingValue: { ar: "واتساب", en: "WhatsApp" },
    },
    visual: {
      image: BRAND_ASSETS.photos.galleryGreeGasRefillKingdomRiyadh,
      imageAlt: {
        ar: "خدمة مكيفات في الرياض مع إطلالة على أفق المدينة",
        en: "AC service in Riyadh with city skyline coverage view",
      },
      floatingChips: [
        { id: "riyadh", label: { ar: "الرياض", en: "Riyadh" } },
        { id: "olaya", label: { ar: "العليا", en: "Al Olaya" } },
        { id: "homes", label: { ar: "المنازل", en: "Homes" } },
        { id: "shops", label: { ar: "المحلات", en: "Shops" } },
        { id: "offices", label: { ar: "المكاتب", en: "Offices" } },
      ],
    },
    ctaPrimary: {
      ar: "تحقق من توفر الخدمة",
      en: "Check Service Availability",
    },
    ctaSecondary: {
      ar: "احجز عبر واتساب",
      en: "Book on WhatsApp",
    },
  },
  workGallery: {
    eyebrow: {
      ar: "معرض الأعمال",
      en: "WORK GALLERY",
    },
    heading: {
      ar: "صور وفيديوهات من خدماتنا في الرياض",
      en: "Our AC Service Work in Riyadh",
    },
    subline: {
      ar: "شاهد نماذج من خدمات تنظيف وصيانة وتصليح وتركيب المكيفات وخدمات HVAC من عاصم لخدمات المكيفات في الرياض.",
      en: "See photos and short videos from AC cleaning, repair, gas refill, installation, and HVAC service work by Asim AC Services in Riyadh.",
    },
    filters: {
      all: { ar: "الكل", en: "All" },
      cleaning: { ar: "تنظيف مكيفات", en: "AC Cleaning" },
      repair: { ar: "تصليح مكيفات", en: "AC Repair" },
      gas: { ar: "تعبئة فريون", en: "Gas Refill" },
      installation: { ar: "تركيب مكيفات", en: "Installation" },
      commercial: { ar: "HVAC تجاري", en: "Commercial HVAC" },
      team: { ar: "الفريق والسيارة", en: "Service Van / Team" },
    },
    mediaBadges: {
      photo: { ar: "صورة", en: "Photo" },
      video: { ar: "فيديو", en: "Video" },
    },
    playVideo: {
      ar: "تشغيل الفيديو",
      en: "Play video",
    },
    closeVideo: {
      ar: "إغلاق الفيديو",
      en: "Close video",
    },
    cta: {
      title: {
        ar: "تحتاج خدمة مكيفات مثل هذه؟",
        en: "Need AC service like this?",
      },
      button: {
        ar: "احجز عبر واتساب",
        en: "Book on WhatsApp",
      },
    },
    viewAllCta: {
      ar: "عرض معرض الأعمال الكامل",
      en: "View Full Work Gallery",
    },
  },
  customerFeedback: {
    eyebrow: {
      ar: "آراء العملاء",
      en: "CUSTOMER FEEDBACK",
    },
    heading: {
      ar: "ماذا يقول عملاء الرياض عن عاصم لخدمات المكيفات؟",
      en: "What Riyadh Customers Say About Asim AC Services",
    },
    subline: {
      ar: "آراء العملاء تساعد الزوار على معرفة طريقة عمل عاصم لخدمات المكيفات في خدمات التصليح، التنظيف، تعبئة الفريون، التركيب وصيانة أنظمة HVAC في الرياض.",
      en: "Real customer feedback helps new visitors understand how Asim AC Services handles AC repair, cleaning, gas refill, installation, and HVAC service in Riyadh.",
    },
    reviewNote: {
      ar: "آراء العملاء الحقيقية قريباً",
      en: "Real customer reviews coming soon",
    },
    slider: {
      prev: { ar: "الرأي السابق", en: "Previous review" },
      next: { ar: "الرأي التالي", en: "Next review" },
    },
    items: [
      {
        id: "repair-riyadh-home",
        initials: "RH",
        color: "blue",
        customerLabel: { ar: "عميل في الرياض", en: "Customer in Riyadh" },
        customerType: { ar: "منزل", en: "Home" },
        location: { ar: "الرياض", en: "Riyadh" },
        service: { ar: "خدمة تصليح مكيف", en: "AC Repair Service" },
        problem: { ar: "فحص مشكلة المكيف", en: "AC issue inspection" },
        quote: {
          ar: "قام الفني بفحص مشكلة المكيف بوضوح وشرح الخدمة المطلوبة قبل بدء العمل. الحجز عبر واتساب كان سهلاً.",
          en: "The technician checked the AC issue clearly and explained what needed to be done before starting the work. Booking through WhatsApp was simple.",
        },
      },
      {
        id: "cleaning-olaya-home",
        initials: "AO",
        color: "teal",
        customerLabel: { ar: "عميل في العليا", en: "Customer in Al Olaya" },
        customerType: { ar: "منزل", en: "Home" },
        location: { ar: "العليا", en: "Al Olaya" },
        service: { ar: "خدمة تنظيف مكيف", en: "AC Cleaning Service" },
        problem: { ar: "ضعف تدفق الهواء", en: "Weak airflow" },
        quote: {
          ar: "الخدمة كانت منظمة واحترافية. تحسن تدفق الهواء بعد التنظيف، وتم الحفاظ على نظافة المكان.",
          en: "The service was smooth and professional. The AC airflow improved after cleaning and the technician kept the area clean.",
        },
      },
      {
        id: "hvac-riyadh-shop",
        initials: "BS",
        color: "indigo",
        customerLabel: { ar: "عميل تجاري في الرياض", en: "Business Customer in Riyadh" },
        customerType: { ar: "محل", en: "Shop" },
        location: { ar: "الرياض", en: "Riyadh" },
        service: { ar: "صيانة مكيفات تجارية", en: "Commercial HVAC Service" },
        problem: { ar: "صيانة دورية", en: "Routine maintenance" },
        quote: {
          ar: "ساعدتنا خدمة المكيفات عاصم في صيانة مكيفات المحل. التواصل كان واضحاً والخدمة تمت باحترافية.",
          en: "Asim AC Services helped with AC maintenance for our shop. Communication was clear and the service was handled professionally.",
        },
      },
      {
        id: "gas-riyadh-home",
        initials: "GR",
        color: "orange",
        customerLabel: { ar: "عميل منزل في الرياض", en: "Home Customer in Riyadh" },
        customerType: { ar: "منزل", en: "Home" },
        location: { ar: "الرياض", en: "Riyadh" },
        service: { ar: "خدمة تعبئة فريون", en: "Gas Refill Service" },
        problem: { ar: "ضعف التبريد", en: "Weak cooling" },
        quote: {
          ar: "كان التبريد ضعيفاً. فحص الفني مستوى الغاز ووضّح المشكلة، وتحسّن التبريد بعد الخدمة.",
          en: "Cooling was weak before the visit. The technician checked the gas level, explained the issue clearly, and cooling improved after service.",
        },
      },
      {
        id: "install-olaya-villa",
        initials: "VL",
        color: "amber",
        customerLabel: { ar: "عميل فيلا في العليا", en: "Villa Customer in Al Olaya" },
        customerType: { ar: "فيلا", en: "Villa" },
        location: { ar: "العليا", en: "Al Olaya" },
        service: { ar: "تركيب مكيف", en: "AC Installation Service" },
        problem: { ar: "تركيب وحدة جديدة", en: "New unit installation" },
        quote: {
          ar: "تم تركيب المكيف بعناية في الفيلا. شرح الفريق خطوات التركيب والاختبار قبل إنهاء العمل.",
          en: "The AC installation was handled carefully for our villa units. The team explained the setup and testing before finishing the work.",
        },
      },
      {
        id: "repair-riyadh-office",
        initials: "OF",
        color: "navy",
        customerLabel: { ar: "عميل مكتب في الرياض", en: "Office Customer in Riyadh" },
        customerType: { ar: "مكتب", en: "Office" },
        location: { ar: "الرياض", en: "Riyadh" },
        service: { ar: "خدمة تصليح مكيف", en: "AC Repair Service" },
        problem: { ar: "المكيف لا يبرد", en: "AC not cooling" },
        quote: {
          ar: "توقف مكيف المكتب عن التبريد. استجابت عاصم لخدمات المكيفات بسرعة عبر واتساب وتم إصلاح المشكلة باحترافية.",
          en: "Our office AC stopped cooling during the week. Asim AC Services responded quickly on WhatsApp and handled the repair professionally.",
        },
      },
    ],
    cta: {
      title: {
        ar: "تحتاج خدمة مكيفات في الرياض؟",
        en: "Need AC service in Riyadh?",
      },
      button: {
        ar: "احجز عبر واتساب",
        en: "Book on WhatsApp",
      },
    },
  },
  entitySummary: {
    heading: {
      ar: "خدمة مكيفات في الرياض | عاصم لخدمات المكيفات",
      en: "AC Services in Riyadh | Asim AC Services",
    },
    paragraph: buildFullEntitySummary({
      suffix: {
        ar: "احجز عبر واتساب",
        en: "Book on WhatsApp",
      },
    }),
    linksLabel: {
      ar: "صفحات الخدمة والمناطق في الرياض",
      en: "Riyadh service & area pages",
    },
    cta: {
      ar: "احجز خدمة مكيفات في الرياض",
      en: "Book AC Service in Riyadh",
    },
    visual: {
      src: BRAND_ASSETS.photos.galleryGreeGasRefillKingdomRiyadh,
      alt: {
        ar: "خدمة مكيفات عاصم في الرياض مع أفق المدينة",
        en: "Asim AC Services in Riyadh with city skyline",
      },
      position: "center 40%",
      badge: { ar: "الرياض · العليا", en: "Riyadh · Al Olaya" },
    },
  },
  faq: {
    eyebrow: {
      ar: "أسئلة شائعة",
      en: "FREQUENTLY ASKED QUESTIONS",
    },
    heading: {
      ar: "أسئلة شائعة عن خدمة المكيفات في الرياض",
      en: "Questions About AC Services in Riyadh?",
    },
    subline: {
      ar: "إجابات سريعة عن تنظيف وصيانة وتصليح المكيفات، تعبئة الفريون، التركيب والحجز مع عاصم لخدمات المكيفات في الرياض.",
      en: "Find quick answers about AC repair, cleaning, gas refill, installation, and booking with Asim AC Services in Riyadh.",
    },
    items: [
      {
        id: "riyadh-service",
        question: {
          ar: "هل تقدمون خدمة مكيفات في الرياض؟",
          en: "Do you provide AC services in Riyadh?",
        },
        answer: {
          ar: "نعم، تقدم خدمة المكيفات عاصم خدمات تنظيف وصيانة وتصليح وتركيب المكيفات في الرياض، وتشمل فحص الغاز، تعبئة الفريون، كشف التسربات وتحسين التبريد للمنازل والمحلات.",
          en: "Yes, Asim AC Services provides AC cleaning, repair, maintenance, installation, gas check, gas refill, leak detection, and cooling improvement services in Riyadh for homes and businesses.",
        },
      },
      {
        id: "olaya-areas",
        question: {
          ar: "هل تخدمون حي العليا والمناطق القريبة؟",
          en: "Do you serve Al Olaya and nearby areas?",
        },
        answer: {
          ar: "نعم، نخدم الرياض مع تركيز على منطقة العليا والمناطق القريبة حسب توفر الموعد. يمكنك التواصل عبر واتساب لتأكيد توفر الخدمة في موقعك.",
          en: "Yes, we serve Riyadh with focus on Al Olaya and nearby areas based on appointment availability. You can contact us on WhatsApp to confirm service availability in your area.",
        },
      },
      {
        id: "not-cooling",
        question: {
          ar: "ما سبب أن المكيف لا يبرد؟",
          en: "Why is my AC not cooling properly?",
        },
        answer: {
          ar: "قد يكون السبب اتساخ الفلاتر، نقص الفريون، وجود تسرب، ضعف في الوحدة الخارجية، انسداد في تدفق الهواء أو مشكلة في التركيب. يبدأ الفني بالفحص لتحديد السبب قبل تنفيذ الخدمة.",
          en: "An AC may not cool properly because of dirty filters, low gas, a leak, outdoor unit issues, blocked airflow, or installation problems. Our technician checks the issue first before starting the service.",
        },
      },
      {
        id: "split-cleaning",
        question: {
          ar: "هل تقدمون تنظيف مكيفات سبليت؟",
          en: "Do you provide split AC cleaning?",
        },
        answer: {
          ar: "نعم، نقدم تنظيف مكيفات سبليت في الرياض لتحسين التبريد، تدفق الهواء، وتقليل الغبار والروائح داخل الغرفة.",
          en: "Yes, we provide split AC cleaning in Riyadh to improve cooling, airflow, and reduce dust or smell inside the room.",
        },
      },
      {
        id: "gas-refill",
        question: {
          ar: "متى يحتاج المكيف إلى تعبئة فريون؟",
          en: "When does an AC need gas refill?",
        },
        answer: {
          ar: "قد يحتاج المكيف إلى فحص الغاز أو تعبئة الفريون إذا كان التبريد ضعيفاً أو يخرج هواء دافئ. من الأفضل فحص وجود أي تسرب قبل التعبئة حتى لا تتكرر المشكلة.",
          en: "An AC may need gas checking or refill if cooling is weak or warm air is coming from the unit. It is better to check for leaks before refill so the problem does not return.",
        },
      },
      {
        id: "water-leak",
        question: {
          ar: "هل تصلحون تسريب الماء من المكيف؟",
          en: "Do you repair water leakage from AC units?",
        },
        answer: {
          ar: "نعم، نفحص سبب تسريب الماء من المكيف، مثل انسداد التصريف، اتساخ الوحدة الداخلية، أو مشكلة في التركيب، ثم نوضح الخدمة المطلوبة قبل العمل.",
          en: "Yes, we inspect AC water leakage issues such as blocked drainage, dirty indoor units, or installation problems, then explain the required service before starting work.",
        },
      },
      {
        id: "installation",
        question: {
          ar: "هل تقدمون خدمة تركيب المكيفات؟",
          en: "Do you install new AC units?",
        },
        answer: {
          ar: "نعم، نقدم تركيب مكيفات في الرياض للمنازل والمحلات، ويشمل ذلك مكيفات سبليت، شباك، كاسيت، مخفية وبعض أنظمة التكييف التجارية حسب نوع الجهاز.",
          en: "Yes, we provide AC installation in Riyadh for homes and shops, including split units, window units, cassette AC, concealed units, and some commercial AC systems depending on the unit type.",
        },
      },
      {
        id: "commercial-hvac",
        question: {
          ar: "هل تقدمون صيانة مكيفات تجارية وأنظمة HVAC؟",
          en: "Do you provide commercial HVAC services?",
        },
        answer: {
          ar: "نعم، نقدم خدمات صيانة مكيفات تجارية وأنظمة HVAC للمحلات، المكاتب، المطاعم والشركات، وتشمل وحدات الباكيج، الدكت، وبعض أنظمة التكييف المركزية حسب الحالة.",
          en: "Yes, we provide commercial AC and HVAC services for shops, offices, restaurants, and businesses, including packaged units, duct work, and some central AC systems depending on the condition.",
        },
      },
      {
        id: "pricing",
        question: {
          ar: "هل أسعار خدمة المكيفات ثابتة؟",
          en: "Are AC service prices fixed?",
        },
        answer: {
          ar: "الأسعار تعتمد على نوع الخدمة، حالة المكيف، عدد الوحدات، والموقع. يمكنك إرسال تفاصيل المشكلة عبر واتساب للحصول على تقدير أو تأكيد السعر قبل الحجز.",
          en: "Prices depend on the service type, AC condition, number of units, and location. You can send the issue details through WhatsApp to request a quote or confirm pricing before booking.",
        },
      },
      {
        id: "booking",
        question: {
          ar: "كيف أحجز خدمة مكيفات؟",
          en: "How can I book AC service?",
        },
        answer: {
          ar: "يمكنك حجز خدمة المكيفات عبر واتساب أو الاتصال المباشر أو نموذج الطلب في الموقع. اختر نوع المشكلة، أضف رقم الواتساب والحي، وسنتواصل معك لتأكيد الخدمة.",
          en: "You can book AC service through WhatsApp, direct call, or the website request form. Choose your AC issue, add your WhatsApp number and district, and we will contact you to confirm the service.",
        },
      },
    ],
    cta: {
      title: {
        ar: "لم تجد إجابتك؟",
        en: "Still have questions?",
      },
      description: {
        ar: "تواصل معنا عبر واتساب وسنساعدك في تحديد الخدمة المناسبة.",
        en: "Contact us on WhatsApp and we'll help you choose the right AC service.",
      },
      button: {
        ar: "احجز عبر واتساب",
        en: "Book on WhatsApp",
      },
    },
  },
} as const;
