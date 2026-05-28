"use client";

// Currency-pair correlation matrix — same indicative dataset as the GIO4X
// portal's CurrencyCorrelation component so a visitor coming from the
// marketing site into the portal sees identical numbers. Hover a pair label
// (tap on mobile) to dim the unrelated cells and emphasise the row+column.

import { useState } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const PAIRS = [
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "USD/CHF",
  "AUD/USD",
  "USD/CAD",
  "NZD/USD",
  "XAU/USD",
] as const;

const MATRIX: number[][] = [
  [ 1.00,  0.85, -0.55, -0.92,  0.75, -0.55,  0.70,  0.40 ],
  [ 0.85,  1.00, -0.45, -0.78,  0.70, -0.50,  0.65,  0.35 ],
  [-0.55, -0.45,  1.00,  0.55, -0.30,  0.45, -0.25, -0.40 ],
  [-0.92, -0.78,  0.55,  1.00, -0.65,  0.60, -0.60, -0.45 ],
  [ 0.75,  0.70, -0.30, -0.65,  1.00, -0.55,  0.92,  0.65 ],
  [-0.55, -0.50,  0.45,  0.60, -0.55,  1.00, -0.55, -0.30 ],
  [ 0.70,  0.65, -0.25, -0.60,  0.92, -0.55,  1.00,  0.55 ],
  [ 0.40,  0.35, -0.40, -0.45,  0.65, -0.30,  0.55,  1.00 ],
];

function cellTone(v: number, isDiagonal: boolean): string {
  if (isDiagonal) return "bg-[#0A2540] text-white";
  if (v >= 0.8)  return "bg-emerald-500/90 text-white";
  if (v >= 0.5)  return "bg-emerald-300/80 text-emerald-950";
  if (v >= 0.2)  return "bg-emerald-100 text-emerald-900";
  if (v > -0.2)  return "bg-[var(--color-bg-secondary,#F4F6FA)] text-[var(--color-text-secondary,#475569)]";
  if (v > -0.5)  return "bg-rose-100 text-rose-900";
  if (v > -0.8)  return "bg-rose-300/80 text-rose-950";
  return            "bg-rose-500/90 text-white";
}

function fmt(v: number): string {
  if (v >= 1) return "1.00";
  if (v <= -1) return "-1.00";
  const s = v.toFixed(2);
  return v > 0 ? `+${s}` : s;
}

function headerHighlight(
  pair: string,
  hovered: string | null,
  pairIndex: number,
  hoveredIndex: number,
): string {
  if (!hovered) return "text-[var(--color-text)]";
  if (pair === hovered)
    return "text-[#29ABE2] font-bold underline decoration-[#29ABE2] decoration-2 underline-offset-4";
  const r = Math.abs(MATRIX[hoveredIndex][pairIndex]);
  if (r >= 0.8) return "text-[var(--color-text)] font-semibold";
  if (r >= 0.6) return "text-[var(--color-text)]";
  if (r >= 0.3) return "text-[var(--color-text-secondary)]";
  return "text-[var(--color-text-secondary)] opacity-60";
}

function Legend() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[var(--color-text-secondary)]">
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-block h-3 w-3 rounded bg-emerald-500/90" />≥ +0.8
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-block h-3 w-3 rounded bg-emerald-300/80" />+0.5
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-block h-3 w-3 rounded border border-slate-200 bg-[var(--color-bg-secondary,#F4F6FA)]" />
        ≈ 0
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-block h-3 w-3 rounded bg-rose-300/80" />-0.5
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-block h-3 w-3 rounded bg-rose-500/90" />≤ -0.8
      </span>
    </div>
  );
}

export function CurrencyCorrelation() {
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredIndex = hovered ? PAIRS.indexOf(hovered as (typeof PAIRS)[number]) : -1;
  const hoverOn = (p: string) => setHovered(p);
  const hoverOff = () => setHovered(null);
  const togglePair = (p: string) => setHovered((prev) => (prev === p ? null : p));

  return (
    <section className="section-padding">
      <div className="max-site">
        <SectionHeading
          eyebrow="FX Research"
          title="Currency pair correlation"
          subtitle="How major pairs and gold tend to move together. Hover any pair (tap on mobile) to dim unrelated cells. Values are indicative 30-day rolling — refresh on major macro events."
        />

        <AnimateOnScroll>
          <Card className="p-6">
            <div className="overflow-x-auto" onMouseLeave={hoverOff}>
              <table className="min-w-[640px] w-full border-separate border-spacing-0 text-sm">
                <thead>
                  <tr>
                    <th className="sticky left-0 z-10 bg-[var(--color-bg,white)] px-3 py-2 text-left text-xs uppercase tracking-wider text-[var(--color-text-secondary)]">
                      Pair
                    </th>
                    {PAIRS.map((p, j) => (
                      <th
                        key={p}
                        scope="col"
                        onMouseEnter={() => hoverOn(p)}
                        onFocus={() => hoverOn(p)}
                        onClick={() => togglePair(p)}
                        tabIndex={0}
                        className={`cursor-pointer select-none px-3 py-2 text-center font-mono text-xs transition-colors ${headerHighlight(
                          p, hovered, j, hoveredIndex,
                        )}`}
                      >
                        {p}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MATRIX.map((row, i) => {
                    const rowPair = PAIRS[i];
                    const rowHovered = hovered === rowPair;
                    return (
                      <tr key={rowPair}>
                        <th
                          scope="row"
                          onMouseEnter={() => hoverOn(rowPair)}
                          onFocus={() => hoverOn(rowPair)}
                          onClick={() => togglePair(rowPair)}
                          tabIndex={0}
                          className={`sticky left-0 z-10 cursor-pointer select-none bg-[var(--color-bg,white)] px-3 py-2 text-left font-mono text-xs font-semibold transition-colors ${headerHighlight(
                            rowPair, hovered, i, hoveredIndex,
                          )}`}
                        >
                          {rowPair}
                        </th>
                        {row.map((v, j) => {
                          const colPair = PAIRS[j];
                          const tone = cellTone(v, i === j);
                          const inHoveredRowOrCol = hovered !== null && (rowHovered || hovered === colPair);
                          const dimmed = hovered !== null && !inHoveredRowOrCol;
                          const intersection = hovered !== null && rowHovered && hovered === colPair;
                          return (
                            <td
                              key={colPair}
                              onMouseEnter={() => hoverOn(rowPair)}
                              className={[
                                "px-3 py-2 text-center font-mono text-xs transition-all",
                                tone,
                                dimmed ? "opacity-25" : "opacity-100",
                                inHoveredRowOrCol ? "ring-1 ring-inset ring-[#29ABE2]/50" : "",
                                intersection ? "outline outline-2 outline-[#29ABE2]" : "",
                              ].join(" ")}
                              title={`${rowPair} vs ${colPair}: ${fmt(v)}`}
                            >
                              {fmt(v)}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-5 border-t border-[var(--color-border,#E2E8F0)] pt-4">
              <Legend />
              <p className="mt-3 text-center text-xs text-[var(--color-text-secondary)]">
                {hovered ? (
                  <>
                    Showing correlations for{" "}
                    <span className="font-semibold text-[#29ABE2]">{hovered}</span>. Bright cells ⇒
                    pairs it actually correlates with; faded cells ⇒ ignore for {hovered} sizing.
                  </>
                ) : (
                  <>
                    Positive ⇒ pairs trend together · Negative ⇒ pairs trend opposite · Near zero ⇒
                    unrelated over the window
                  </>
                )}
              </p>
            </div>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
