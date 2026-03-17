"use client";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="GIO4X Logo"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#29ABE2" />
          <stop offset="100%" stopColor="#1B3A6B" />
        </linearGradient>
      </defs>

      {/* Icon: bracket + candlestick sliders + D-bracket */}
      <g>
        {/* Left bracket "[" */}
        <path
          d="M6 4 L2 4 C1.4 4 1 4.6 1 5.2 L1 46.8 C1 47.4 1.4 48 2 48 L6 48"
          stroke="url(#logo-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Slider bar 1 — short, node low */}
        <line x1="14" y1="10" x2="14" y2="42" stroke="url(#logo-grad)" strokeWidth="2" strokeLinecap="round" />
        <rect x="11" y="26" width="6" height="8" rx="1.5" fill="url(#logo-grad)" />

        {/* Slider bar 2 — tall, node high */}
        <line x1="24" y1="6" x2="24" y2="46" stroke="url(#logo-grad)" strokeWidth="2" strokeLinecap="round" />
        <rect x="21" y="14" width="6" height="10" rx="1.5" fill="url(#logo-grad)" />

        {/* Slider bar 3 — medium, node mid */}
        <line x1="34" y1="8" x2="34" y2="44" stroke="url(#logo-grad)" strokeWidth="2" strokeLinecap="round" />
        <rect x="31" y="20" width="6" height="9" rx="1.5" fill="url(#logo-grad)" />

        {/* Right bracket curving into "D" shape */}
        <path
          d="M42 4 L44 4 C50 4 54 10 54 18 L54 34 C54 42 50 48 44 48 L42 48"
          stroke="url(#logo-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* "GIO" — steel gray */}
      <text
        x="64"
        y="37"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="32"
        fill="#6D6E71"
        letterSpacing="-0.5"
      >
        GIO
      </text>

      {/* "4X" — sky blue */}
      <text
        x="148"
        y="37"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="32"
        fill="#29ABE2"
        letterSpacing="-0.5"
      >
        4X
      </text>
    </svg>
  );
}
