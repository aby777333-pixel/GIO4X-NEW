// Currency-pair correlation matrix — same indicative dataset as the GIO4X
// portal's CurrencyCorrelation component so a visitor coming from the
// marketing site into the portal sees identical numbers. Hardcoded; refresh
// values manually on major macro events.

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

// 8x8 symmetric matrix, diagonal = 1.
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
        <span className="inline-block h-3 w-3 rounded bg-[var(--color-bg-secondary,#F4F6FA)] border border-slate-200" />≈ 0
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
  return (
    <section className="section-padding">
      <div className="max-site">
        <SectionHeading
          eyebrow="FX Research"
          title="Currency pair correlation"
          subtitle="How major pairs and gold tend to move together. Use it to size positions, hedge exposure, or spot diversification. Values are indicative 30-day rolling — refresh on major macro events."
        />

        <AnimateOnScroll>
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-[640px] w-full border-separate border-spacing-0 text-sm">
                <thead>
                  <tr>
                    <th className="sticky left-0 z-10 bg-[var(--color-bg,white)] px-3 py-2 text-left text-xs uppercase tracking-wider text-[var(--color-text-secondary)]">
                      Pair
                    </th>
                    {PAIRS.map((p) => (
                      <th
                        key={p}
                        className="px-3 py-2 text-center font-mono text-xs font-semibold text-[var(--color-text)]"
                      >
                        {p}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MATRIX.map((row, i) => (
                    <tr key={PAIRS[i]}>
                      <th
                        scope="row"
                        className="sticky left-0 z-10 bg-[var(--color-bg,white)] px-3 py-2 text-left font-mono text-xs font-semibold text-[var(--color-text)]"
                      >
                        {PAIRS[i]}
                      </th>
                      {row.map((v, j) => (
                        <td
                          key={PAIRS[j]}
                          className={`px-3 py-2 text-center font-mono text-xs ${cellTone(v, i === j)}`}
                          title={`${PAIRS[i]} vs ${PAIRS[j]}: ${fmt(v)}`}
                        >
                          {fmt(v)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 border-t border-[var(--color-border,#E2E8F0)] pt-4">
              <Legend />
              <p className="mt-3 text-center text-xs text-[var(--color-text-secondary)]">
                Positive ⇒ pairs trend together · Negative ⇒ pairs trend opposite · Near zero ⇒
                unrelated over the window
              </p>
            </div>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
