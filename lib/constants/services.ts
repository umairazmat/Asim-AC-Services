export const SERVICES = [
  {
    id: "cleaning",
    icon: "fan",
    color: "teal",
    label: { ar: "تنظيف شامل للمكيف", en: "Complete AC Cleaning" },
  },
  {
    id: "gas",
    icon: "gas",
    color: "orange",
    label: { ar: "فحص الغاز وإعادة التعبئة", en: "Gas Check & Refill" },
  },
  {
    id: "cooling",
    icon: "snowflake",
    color: "blue",
    label: { ar: "تحسين التبريد والأداء", en: "Improve Cooling & Performance" },
  },
  {
    id: "repair",
    icon: "wrench",
    color: "amber",
    label: {
      ar: "كشف وإصلاح التسربات والأعطال",
      en: "Leak Detection & Repair / Other Issues",
    },
  },
  {
    id: "installation",
    icon: "install",
    color: "rose",
    label: { ar: "تركيب المكيفات", en: "AC Installation" },
  },
  {
    id: "duct",
    icon: "duct",
    color: "indigo",
    label: {
      ar: "أعمال الدكت ووحدات الباكج وأنظمة HVAC",
      en: "Duct Work, Packaged Units & HVAC Systems",
    },
  },
] as const;

export type ServiceId = (typeof SERVICES)[number]["id"];

export const TRUST_BADGES = [
  {
    id: "fast",
    icon: "truck",
    color: "mint",
    label: { ar: "خدمة سريعة في الوقت", en: "Fast Service On Time" },
  },
  {
    id: "guarantee",
    icon: "shield",
    color: "emerald",
    label: { ar: "رضا العملاء مضمون", en: "Satisfaction Guaranteed" },
  },
  {
    id: "expert",
    icon: "technician",
    color: "violet",
    label: { ar: "فنيون ذوو خبرة", en: "Experienced Technicians" },
  },
] as const;
