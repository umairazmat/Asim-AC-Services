import { SERVICES } from "@/lib/constants/services";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

type ServiceGridProps = {
  locale: "ar" | "en";
  embedded?: boolean;
  fill?: boolean;
};

const ICON_BADGE_CLASS: Record<(typeof SERVICES)[number]["color"], string> = {
  teal: "icon-badge--teal",
  orange: "icon-badge--orange",
  blue: "icon-badge--blue",
  amber: "icon-badge--amber",
  rose: "icon-badge--rose",
  indigo: "icon-badge--indigo",
};

export function ServiceGrid({
  locale,
  embedded = false,
  fill = false,
}: ServiceGridProps) {
  return (
    <section
      aria-label={locale === "ar" ? "الخدمات المتوفرة" : "Available services"}
      className={
        fill
          ? "flex h-full min-h-0 flex-1 flex-col"
          : embedded
            ? "w-full"
            : "surface-panel w-full rounded-2xl p-3.5 sm:rounded-3xl sm:p-5"
      }
    >
      <p
        className={`section-title mb-3 block shrink-0 w-fit text-xs font-bold tracking-[0.14em] text-[var(--color-gold-light)] uppercase ${
          embedded || fill ? "text-start" : "mx-auto text-center"
        }`}
      >
        {locale === "ar" ? "تشمل الخدمة" : "Service Includes"}
      </p>

      <div
        className={`grid min-h-0 min-w-0 grid-cols-2 gap-2 sm:gap-2.5 ${
          fill ? "service-grid-fill flex-1" : ""
        }`}
      >
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            className={`service-card flex items-center gap-2 rounded-xl px-2 py-2.5 sm:gap-2.5 sm:rounded-2xl sm:px-2.5 sm:py-3 ${
              fill ? "h-full min-h-[3.5rem]" : "min-h-[3.75rem] sm:min-h-[4rem]"
            }`}
            style={{ animationDelay: `${0.2 + index * 0.05}s` }}
          >
            <span
              className={`icon-badge flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10 ${ICON_BADGE_CLASS[service.color]}`}
            >
              <ServiceIcon
                name={service.icon}
                className="icon-glyph h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5"
              />
            </span>
            <span className="service-card-label min-w-0 flex-1 text-[0.62rem] leading-snug font-semibold text-white sm:text-[0.7rem] lg:text-[0.72rem]">
              {service.label[locale]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
