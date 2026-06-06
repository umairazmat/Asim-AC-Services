type ServiceIconProps = {
  name:
    | "fan"
    | "gas"
    | "snowflake"
    | "wrench"
    | "install"
    | "duct"
    | "truck"
    | "shield"
    | "technician";
  className?: string;
};

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const icons = {
    fan: (
      <>
        <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" opacity="0.95" />
        <path d="M12 3.5v3.2M12 17.3v3.2M3.5 12h3.2M17.3 12h3.2" />
        <path d="M6.2 6.2l2.3 2.3M15.5 15.5l2.3 2.3M6.2 17.8l2.3-2.3M15.5 8.5l2.3-2.3" />
        <path
          d="M9 16l1.2-2.2 2.2-.8-2.2-.8L9 10l-.8 2.2-2.2.8 2.2.8L9 16z"
          fill="currentColor"
          stroke="none"
          opacity="0.55"
        />
      </>
    ),
    gas: (
      <>
        <rect x="8.5" y="3" width="7" height="4.5" rx="1.2" fill="currentColor" opacity="0.2" />
        <rect x="8.5" y="3" width="7" height="4.5" rx="1.2" />
        <path d="M9.5 7.5v12.5h5V7.5" />
        <path d="M11.5 11h1v4.5h-1z" fill="currentColor" stroke="none" />
        <circle cx="12" cy="5.2" r="1" fill="currentColor" stroke="none" />
        <path d="M15.5 10.5a3.5 3.5 0 11-7 0" />
        <path d="M12 10.5V9" />
      </>
    ),
    snowflake: (
      <>
        <path d="M12 2.5v19M4.5 7.5l15 9M4.5 16.5l15-9M5 12h14" />
        <path d="M12 6.5v2M12 15.5v2M8 12h2M14 12h2" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <path d="M7.5 8.5l1.4 1.4M15.1 14.1l1.4 1.4M16.5 8.5l-1.4 1.4M8.9 14.1l-1.4 1.4" />
      </>
    ),
    wrench: (
      <>
        <path d="M14.2 5.8a3.8 3.8 0 00-5.2 5.2L4.5 19.5l2 2 8.5-8.5a3.8 3.8 0 005.2-5.2l-2.1 2.1-1.6-1.6 2.1-2.1z" />
        <path d="M16.8 7.2c.8.8.8 2 0 2.8" strokeWidth="1.4" />
        <path d="M8.5 15.5c1 .9 2.4.9 3.3 0" strokeWidth="1.4" />
        <circle cx="17.8" cy="6.2" r="1" fill="currentColor" stroke="none" opacity="0.75" />
      </>
    ),
    install: (
      <>
        <rect x="5" y="4" width="14" height="10" rx="1.5" fill="currentColor" opacity="0.16" />
        <rect x="5" y="4" width="14" height="10" rx="1.5" />
        <path d="M8 8h8M8 11h5" strokeWidth="1.4" opacity="0.75" />
        <path d="M12 14v5M9.5 19h5" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
        <path d="M17.5 5.3v2.4M16.4 6.5h2.2" strokeWidth="1.2" />
      </>
    ),
    duct: (
      <>
        <path d="M3 9h18M3 15h18" strokeWidth="1.5" />
        <path d="M6 9v6M10 9v6M14 9v6M18 9v6" strokeWidth="1.5" />
        <path d="M4.5 6.5h3v3h-3zM8.5 6.5h3v3h-3zM12.5 6.5h3v3h-3zM16.5 6.5h3v3h-3z" fill="currentColor" opacity="0.2" />
        <path d="M4.5 14.5h3v3h-3zM8.5 14.5h3v3h-3zM12.5 14.5h3v3h-3zM16.5 14.5h3v3h-3z" fill="currentColor" opacity="0.2" />
        <path d="M6 12h2M10 12h2M14 12h2M18 12h2" strokeWidth="1.3" opacity="0.65" />
      </>
    ),
    truck: (
      <>
        <path d="M2.5 8.5h10.5v8H2.5z" fill="currentColor" opacity="0.15" />
        <path d="M2.5 8.5h10.5v8H2.5z" />
        <path d="M13 10.5h2.2L18 14v2.5h-5V10.5z" />
        <circle cx="6" cy="18.5" r="1.75" />
        <circle cx="15.5" cy="18.5" r="1.75" />
        <path d="M4.5 11.5h4M4.5 14h2.5" strokeWidth="1.3" opacity="0.65" />
      </>
    ),
    shield: (
      <>
        <path
          d="M12 3.2l7.5 3.1v5.8c0 4.2-3 7.4-7.5 8.9-4.5-1.5-7.5-4.7-7.5-8.9V6.3L12 3.2z"
          fill="currentColor"
          opacity="0.18"
        />
        <path d="M12 3.2l7.5 3.1v5.8c0 4.2-3 7.4-7.5 8.9-4.5-1.5-7.5-4.7-7.5-8.9V6.3L12 3.2z" />
        <path d="M9.2 12.2l1.9 1.9 4.2-4.2" strokeWidth="2" />
      </>
    ),
    technician: (
      <>
        <circle cx="12" cy="8" r="3" fill="currentColor" opacity="0.18" />
        <circle cx="12" cy="8" r="3" />
        <path d="M5.5 20c0-3.4 2.9-6 6.5-6s6.5 2.6 6.5 6" />
        <path d="M9.5 7.2l-1.2 1.6M14.5 7.2l1.2 1.6" strokeWidth="1.3" />
        <path d="M12 5.5v1.2" strokeWidth="1.3" />
        <rect x="10.8" y="4.1" width="2.4" height="1.2" rx="0.4" fill="currentColor" stroke="none" opacity="0.8" />
      </>
    ),
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
