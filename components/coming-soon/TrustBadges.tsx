import { TRUST_BADGES } from "@/lib/constants/services";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

type TrustBadgesProps = {
  locale: "ar" | "en";
  compact?: boolean;
};

const TRUST_ICON_CLASS: Record<(typeof TRUST_BADGES)[number]["color"], string> = {
  mint: "trust-icon-wrap--mint",
  emerald: "trust-icon-wrap--emerald",
  violet: "trust-icon-wrap--violet",
};

export function TrustBadges({ locale, compact = false }: TrustBadgesProps) {
  return (
    <div className="grid min-w-0 grid-cols-3 gap-1.5 sm:gap-2">
      {TRUST_BADGES.map((badge, index) => (
        <div
          key={badge.id}
          className={`trust-badge flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl text-center sm:rounded-2xl ${
            compact ? "px-1 py-2.5 sm:px-2 sm:py-3" : "gap-2 px-2 py-3 sm:px-3 sm:py-3.5"
          }`}
          style={{ animationDelay: `${0.35 + index * 0.06}s` }}
        >
          <span
            className={`trust-icon-wrap flex items-center justify-center rounded-xl ${
              compact ? "h-9 w-9 sm:h-10 sm:w-10" : "h-10 w-10 sm:h-11 sm:w-11"
            } ${TRUST_ICON_CLASS[badge.color]}`}
          >
            <ServiceIcon
              name={badge.icon}
              className="icon-glyph h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]"
            />
          </span>
          <span className="text-[0.58rem] leading-snug font-semibold break-words text-white sm:text-[0.65rem]">
            {badge.label[locale]}
          </span>
        </div>
      ))}
    </div>
  );
}
