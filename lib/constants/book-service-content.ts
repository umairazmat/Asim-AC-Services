/** Global book-service CTA section — shown before footer on all pages. */
export const BOOK_SERVICE_SECTION = {
  heading: {
    ar: "احجز خدمة مكيفات في الرياض",
    en: "Book AC Service in Riyadh",
  },
  subline: {
    ar: "اختر المشكلة واكتب رقم الواتساب وسنتواصل معك لتأكيد الخدمة.",
    en: "Tell us your AC issue and we'll contact you through WhatsApp.",
  },
  navCta: {
    heading: {
      ar: "احجز خدمة مكيفات في الرياض",
      en: "Book AC Service in Riyadh",
    },
    description: {
      ar: "اختر مشكلة المكيف، أرسل رقم الواتساب، وسنتواصل معك بسرعة لتأكيد الموعد.",
      en: "Choose your AC issue, send your WhatsApp number, and we'll confirm your appointment fast.",
    },
    button: {
      ar: "احجز الآن عبر واتساب",
      en: "Book Now on WhatsApp",
    },
    navLabel: {
      ar: "احجز الخدمة",
      en: "Book Service",
    },
  },
  trust: {
    eyebrow: {
      ar: "خدمة موثوقة",
      en: "TRUSTED AC SERVICE",
    },
    heading: {
      ar: "خدمة مكيفات موثوقة في الرياض",
      en: "Trusted AC Service in Riyadh",
    },
    intro: {
      ar: "يختار العملاء عاصم لخدمات المكيفات بسبب سرعة التواصل، وضوح الفحص، والخدمة الاحترافية للمنازل والفلل والمحلات والمكاتب.",
      en: "Customers choose Asim AC Services for fast communication, clear inspection, and professional AC service for homes, villas, shops, and offices.",
    },
    points: [
      {
        ar: "خدمة سريعة حسب توفر الموعد",
        en: "Fast service based on availability",
      },
      {
        ar: "فنيون ذوو خبرة",
        en: "Experienced technicians",
      },
      {
        ar: "فحص واضح قبل بدء العمل",
        en: "Clear inspection before work",
      },
      {
        ar: "خدمة للمنازل والمحلات في الرياض",
        en: "Homes and businesses in Riyadh",
      },
    ],
    image: {
      src: "/brand/assets/photos/hero-indoor-service.png",
      alt: {
        ar: "فني عاصم لخدمات المكيفات أثناء صيانة مكيف سبليت داخلي في الرياض",
        en: "Asim AC Services technician servicing an indoor split AC unit in Riyadh",
      },
    },
  },
  form: {
    service: { ar: "الخدمة المطلوبة", en: "Service required" },
    servicePlaceholder: { ar: "اختر الخدمة أو المشكلة", en: "Select service or issue" },
    serviceGroupServices: { ar: "خدمات المكيفات", en: "Our AC Services" },
    serviceGroupIssues: { ar: "مشاكل شائعة", en: "Common AC Problems" },
    phone: { ar: "رقم الواتساب", en: "WhatsApp number" },
    district: { ar: "الحي في الرياض (اختياري)", en: "Riyadh district optional" },
    districtPlaceholder: { ar: "اختر الحي", en: "Select district" },
    note: { ar: "ملاحظة (اختياري)", en: "Note optional" },
    notePlaceholder: {
      ar: "مثال: مكيف غرفة النوم، صوت غريب...",
      en: "e.g. bedroom AC, strange noise...",
    },
  },
  ctaPrimary: {
    ar: "إرسال الطلب وفتح واتساب",
    en: "Send Request & Open WhatsApp",
  },
  ctaSecondary: {
    ar: "إرسال الطلب فقط",
    en: "Send Request Only",
  },
  submitting: { ar: "جاري الإرسال...", en: "Sending..." },
  success: {
    title: { ar: "تم إرسال طلبك!", en: "Request sent!" },
    message: {
      ar: "سنتواصل معك قريباً عبر واتساب لتأكيد الخدمة.",
      en: "We'll contact you shortly on WhatsApp to confirm your service.",
    },
  },
  errors: {
    service: { ar: "يرجى اختيار الخدمة", en: "Please select a service" },
    phone: { ar: "يرجى إدخال رقم واتساب صحيح", en: "Please enter a valid WhatsApp number" },
    generic: {
      ar: "تعذر إرسال الطلب. حاول مرة أخرى أو تواصل معنا عبر واتساب.",
      en: "Could not send your request. Try again or contact us on WhatsApp.",
    },
  },
  trustBadges: [
    { ar: "حجز سريع عبر واتساب", en: "Fast WhatsApp Booking" },
    { ar: "فحص واضح قبل العمل", en: "Clear Inspection" },
    { ar: "فنيون ذوو خبرة", en: "Experienced Technicians" },
  ],
  contact: {
    heading: { ar: "تواصل معنا", en: "Contact us" },
    whatsapp: { ar: "واتساب", en: "WhatsApp" },
    phone: { ar: "الهاتف", en: "Phone" },
    location: { ar: "منطقة الخدمة", en: "Service area" },
    email: { ar: "البريد الإلكتروني", en: "Email" },
    hours: {
      ar: "الرد على واتساب حسب توفر الموعد",
      en: "WhatsApp replies based on appointment availability",
    },
  },
} as const;

export const BOOK_SERVICE_SECTION_ID = "book-service";
