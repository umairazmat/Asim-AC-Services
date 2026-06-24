import Image from "next/image";

type FlagIconProps = {
  code: "sa" | "us";
  className?: string;
  title?: string;
};

const FLAG_SRC = {
  sa: "/brand/flags/sa.svg",
  us: "/brand/flags/us.svg",
} as const;

const FLAG_LABEL = {
  sa: "Saudi Arabia",
  us: "United States",
} as const;

/** Official Saudi Arabia & United States flags for the language switcher. */
export function FlagIcon({
  code,
  className = "lang-flag",
  title,
}: FlagIconProps) {
  const alt = title ?? FLAG_LABEL[code];

  return (
    <Image
      src={FLAG_SRC[code]}
      alt={title ? alt : ""}
      width={20}
      height={15}
      className={className}
      aria-hidden={title ? undefined : true}
    />
  );
}
