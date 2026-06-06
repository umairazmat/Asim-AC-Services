type FlagIconProps = {
  code: "sa" | "us";
  className?: string;
  title?: string;
};

/** Official colors — Saudi Arabia & United States (English). */
export function FlagIcon({
  code,
  className = "lang-flag",
  title,
}: FlagIconProps) {
  if (code === "sa") {
    return (
      <svg
        className={className}
        viewBox="0 0 900 600"
        aria-hidden={title ? undefined : true}
        role={title ? "img" : undefined}
      >
        {title ? <title>{title}</title> : null}
        <rect width="900" height="600" fill="#006C35" />
        <g fill="#fff" transform="translate(255 300)">
          <path d="M0-92c58-24 132-24 190 0-58 24-132 24-190 0z" opacity="0.92" />
          <path d="M-168 18h336v16c-6 10-22 18-40 18h-48c-18 0-34-8-40-18V18z" />
          <path d="M-188 6l20-12h316l20 12-20 12H-168L-188 6z" />
          <path d="M148 24l52 8-8 10-44-6 8-12z" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 190 100"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <rect width="190" height="100" fill="#B22234" />
      <path
        fill="#fff"
        d="M0 7.7H190V15.4H0zm0 15.4H190V23H0zm0 15.3H190V30.7H0zm0 15.4H190V46H0zm0 15.4H190V61.4H0zm0 15.3H190V76.7H0zm0 15.4H190V92H0z"
      />
      <rect width="76" height="53.8" fill="#3C3B6E" />
      <g fill="#fff">
        <circle cx="8" cy="6" r="2.2" />
        <circle cx="20" cy="6" r="2.2" />
        <circle cx="32" cy="6" r="2.2" />
        <circle cx="44" cy="6" r="2.2" />
        <circle cx="56" cy="6" r="2.2" />
        <circle cx="68" cy="6" r="2.2" />
        <circle cx="14" cy="12.5" r="2.2" />
        <circle cx="26" cy="12.5" r="2.2" />
        <circle cx="38" cy="12.5" r="2.2" />
        <circle cx="50" cy="12.5" r="2.2" />
        <circle cx="62" cy="12.5" r="2.2" />
        <circle cx="8" cy="19" r="2.2" />
        <circle cx="20" cy="19" r="2.2" />
        <circle cx="32" cy="19" r="2.2" />
        <circle cx="44" cy="19" r="2.2" />
        <circle cx="56" cy="19" r="2.2" />
        <circle cx="68" cy="19" r="2.2" />
        <circle cx="14" cy="25.5" r="2.2" />
        <circle cx="26" cy="25.5" r="2.2" />
        <circle cx="38" cy="25.5" r="2.2" />
        <circle cx="50" cy="25.5" r="2.2" />
        <circle cx="62" cy="25.5" r="2.2" />
        <circle cx="8" cy="32" r="2.2" />
        <circle cx="20" cy="32" r="2.2" />
        <circle cx="32" cy="32" r="2.2" />
        <circle cx="44" cy="32" r="2.2" />
        <circle cx="56" cy="32" r="2.2" />
        <circle cx="68" cy="32" r="2.2" />
        <circle cx="14" cy="38.5" r="2.2" />
        <circle cx="26" cy="38.5" r="2.2" />
        <circle cx="38" cy="38.5" r="2.2" />
        <circle cx="50" cy="38.5" r="2.2" />
        <circle cx="62" cy="38.5" r="2.2" />
        <circle cx="8" cy="45" r="2.2" />
        <circle cx="20" cy="45" r="2.2" />
        <circle cx="32" cy="45" r="2.2" />
        <circle cx="44" cy="45" r="2.2" />
        <circle cx="56" cy="45" r="2.2" />
        <circle cx="68" cy="45" r="2.2" />
      </g>
    </svg>
  );
}
