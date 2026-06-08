import { ServiceIcon } from "@/components/ui/ServiceIcon";
import type { HEADER_HIGHLIGHTS } from "@/lib/constants/highlights";

type HighlightIconName = (typeof HEADER_HIGHLIGHTS)[number]["icon"];

type HeaderHighlightIconProps = {
  name: HighlightIconName;
  className?: string;
};

export function HeaderHighlightIcon({ name, className }: HeaderHighlightIconProps) {
  if (name === "bolt") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13V2z" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10.4V7h-2v7l5.2 3.1.9-1.5L13 12.4z" />
      </svg>
    );
  }

  return <ServiceIcon name={name} className={className} />;
}
