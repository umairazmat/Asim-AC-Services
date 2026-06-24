type SnowflakeIconProps = {
  className?: string;
};

export function SnowflakeIcon({ className = "h-4 w-4 shrink-0" }: SnowflakeIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19M8 2l4 4 4-4M8 22l4-4 4 4M2 8l4 4-4 4M22 8l-4 4 4 4" />
    </svg>
  );
}
