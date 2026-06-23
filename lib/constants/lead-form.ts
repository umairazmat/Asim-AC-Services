export const LEAD_FORM = {
  eyebrow: {
    ar: "احجز خلال دقيقة",
    en: "Book in under a minute",
  },
  title: {
    ar: "ما الخدمة التي تحتاجها؟",
    en: "What service do you need?",
  },
  subtitle: {
    ar: "سجّل طلبك — يُرسل بالبريد ويفتح واتساب لتأكيد الحجز.",
    en: "Submit your request — saved by email & WhatsApp opens to confirm booking.",
  },
  secure: {
    ar: "بياناتك آمنة — للتواصل فقط وفق نظام حماية البيانات في المملكة",
    en: "Secure & private — contact only, per KSA data protection",
  },
  fields: {
    service: { ar: "الخدمة المطلوبة", en: "Service needed" },
    servicePlaceholder: { ar: "اختر الخدمة", en: "Select a service" },
    area: { ar: "الحي في الرياض", en: "Area in Riyadh" },
    areaPlaceholder: { ar: "اختر الحي", en: "Select area" },
    phone: { ar: "رقم الجوال", en: "Phone number" },
    issue: { ar: "وصف المشكلة (اختياري)", en: "Describe the issue (optional)" },
    issuePlaceholder: {
      ar: "مثال: المكيف لا يبرد، تسريب ماء...",
      en: "e.g. AC not cooling, water leak...",
    },
    location: { ar: "الموقع (اختياري)", en: "Location (optional)" },
    locationHint: { ar: "تحديد الموقع", en: "Pin location" },
    locationAttached: { ar: "تم التحديد", en: "Pinned" },
    locationRemove: { ar: "إزالة", en: "Remove" },
  },
  submit: { ar: "إرسال وفتح واتساب", en: "Send & open WhatsApp" },
  submitting: { ar: "جاري الإرسال...", en: "Sending..." },
  close: { ar: "إغلاق", en: "Close" },
  later: { ar: "لاحقاً", en: "Maybe later" },
  success: {
    title: { ar: "تم حفظ طلبك!", en: "Request saved!" },
    message: {
      ar: "اضغط «إرسال» في واتساب لتأكيد الحجز. سنتواصل معك قريباً.",
      en: "Tap Send in WhatsApp to confirm your booking. We'll contact you shortly.",
    },
    whatsappCta: { ar: "فتح واتساب مرة أخرى", en: "Open WhatsApp again" },
  },
  errors: {
    service: { ar: "يرجى اختيار الخدمة", en: "Please select a service" },
    area: { ar: "يرجى اختيار الحي", en: "Please select an area" },
    phone: { ar: "يرجى إدخال رقم جوال صحيح", en: "Please enter a valid phone number" },
    generic: {
      ar: "تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.",
      en: "The message could not be sent. Please try again or contact us via WhatsApp.",
    },
    locationDenied: {
      ar: "لم يتم السماح بالموقع. يمكنك المتابعة بدونه.",
      en: "Location access denied. You can continue without it.",
    },
  },
  otherService: { ar: "خدمة أخرى / استفسار", en: "Other / General inquiry" },
} as const;

export const LEAD_STORAGE_KEYS = {
  submitted: "asim-lead-submitted",
  dismissedAt: "asim-lead-dismissed-at",
  scrollShown: "asim-lead-scroll-shown",
} as const;

export const LEAD_MODAL_TIMING = {
  initialDelayMs: 3000,
  pageChangeDelayMs: 2000,
  dismissCooldownMs: 30 * 60 * 1000,
  scrollThreshold: 0.45,
} as const;
