"use client";

// Sparkline — a tiny, dependency-free SVG micro-trend. Purely decorative /
// schematic (not a data feed); use where a small visual pulse helps a number
// feel alive. Colour follows an optional up/down direction.

export function Sparkline({
  data,
  width = 84,
  height = 24,
  up,
  className = "",
}: {
  data: number[];
  width?: number;
  height?: number;
  up?: boolean;
  className?: string;
}) {
  if (!data || data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pad = 2;

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * (width - pad * 2) + pad;
      const y = height - pad - ((d - min) / range) * (height - pad * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  const color = up === true ? "#0EA371" : up === false ? "#E0524B" : "var(--color-sky)";

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
