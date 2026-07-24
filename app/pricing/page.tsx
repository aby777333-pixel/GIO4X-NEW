"use client";

// Pricing — the single "what does it cost" page the site was missing. Driven by
// the shared ACCOUNT_TYPES + instrument constants so numbers stay in one place.
// House style: blue-dominant accents, gold/emerald as premium/protection
// semantics. Pricing is platform-feed / indicative until the live LP connection.

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import {
  ACCOUNT_TYPES, SITE,
  FOREX_PAIRS, METALS, INDICES, CRYPTO,
} from "@/lib/constants";
import { StatStrip } from "@/components/ui/StatStrip";
import Link from "next/link";
import { Check, Minus, Star } from "lucide-react";

/* Spread tables shown by asset class — a representative slice of each. */
const spreadTables: { title: string; rows: readonly { symbol: string; name: string; spread: string; leverage: string }[] }[] = [
  { title: "Forex", rows: FOREX_PAIRS.slice(0, 6) },
  { title: "Metals", rows: METALS },
  { title: "Indices", rows: INDICES.slice(0, 5) },
  { title: "Crypto", rows: CRYPTO.slice(0, 5) },
];

/* The comparable spec rows for the account matrix. */
type SpecRow = { label: string; key: "minDeposit" | "spreadFrom" | "commission" | "leverage" | "minTrade" | "marginCall" | "stopOut" | "swap" | "accountManager" | "prioritySupport" | "bestFor" };
const specRows: SpecRow[] = [
  { label: "Minimum deposit", key: "minDeposit" },
  { label: "Spreads from", key: "spreadFrom" },
  { label: "Commission", key: "commission" },
  { label: "Max leverage", key: "leverage" },
  { label: "Minimum trade", key: "minTrade" },
  { label: "Margin call", key: "marginCall" },
  { label: "Stop out", key: "stopOut" },
  { label: "Swap-free available", key: "swap" },
  { label: "Account manager", key: "accountManager" },
  { label: "Priority support", key: "prioritySupport" },
  { label: "Best for", key: "bestFor" },
];

function SpecValue({ value }: { value: unknown }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-[#10B981]" aria-label="Yes" />;
  if (value === false) return <Minus className="mx-auto h-5 w-5 text-[var(--color-text-tertiary)]" aria-label="No" />;
  return <span className="text-sm text-[var(--color-text)]">{String(value)}</span>;
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & spreads"
        image="gio4x18.png"
        title={<>Transparent <span className="gradient-text">pricing</span></>}
        caption="Spreads, commission, swap and leverage across every account tier — laid out plainly. No hidden costs, no surprises on withdrawal."
        ctas={[
          { label: "Open Live Account", href: SITE.signUpUrl },
          { label: "Compare Platforms", href: "/compare", variant: "secondary" },
        ]}
      />

      {/* ---- Count-up stat strip ---- */}
      <StatStrip
        stats={[
          { value: 0, prefix: "$", label: "Deposit fees", accent: "sky" },
          { value: 0.2, decimals: 1, suffix: " pips", label: "ECN spreads from", accent: "gold" },
          { value: 500, suffix: ":1", label: "Max leverage", accent: "sky" },
          { value: 3.5, decimals: 1, prefix: "$", suffix: "/lot", label: "ECN commission", accent: "gold" },
        ]}
      />

      {/* ---- Account tiers ---- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Account types"
            title="Choose the account that fits"
            subtitle="Every tier trades on GIO4X Raptor with the full AI, protection and automation stack. The differences are cost structure and service level."
          />

          {/* Cards on mobile / spec matrix on larger screens */}
          <div className="mt-12 grid gap-6 lg:hidden">
            {ACCOUNT_TYPES.map((a) => (
              <AnimateOnScroll key={a.name} className="h-full">
                <Card className={`relative flex h-full flex-col overflow-hidden p-6 ${a.highlighted ? "ring-1 ring-[var(--color-gold)]" : ""}`}>
                  {a.highlighted && (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[rgba(201,168,76,0.12)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-gold)] ring-1 ring-[rgba(201,168,76,0.26)]">
                      <Star className="h-3 w-3" /> Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[var(--color-text)]">{a.name}</h3>
                  <p className="mb-4 mt-1 text-sm text-[var(--color-text-secondary)]">For {a.bestFor.toLowerCase()}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[var(--color-sky)]">{a.minDeposit}</span>
                    <span className="text-sm text-[var(--color-text-tertiary)]"> min deposit</span>
                  </div>
                  <ul className="mb-6 flex-1 space-y-2">
                    {specRows.slice(1).map((s) => (
                      <li key={s.key} className="flex items-center justify-between gap-3 text-sm">
                        <span className="text-[var(--color-text-secondary)]">{s.label}</span>
                        <span className="text-right font-medium"><SpecValue value={(a as Record<string, unknown>)[s.key]} /></span>
                      </li>
                    ))}
                  </ul>
                  <Button href={SITE.signUpUrl} className="w-full">Open {a.name}</Button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-12 hidden overflow-x-auto lg:block">
            <table className="premium-table w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-1/4 px-4 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">Feature</th>
                  {ACCOUNT_TYPES.map((a) => (
                    <th
                      key={a.name}
                      className={`px-4 py-4 text-center align-bottom ${a.highlighted ? "rounded-t-xl bg-[rgba(201,168,76,0.07)]" : ""}`}
                    >
                      <span className="flex flex-col items-center gap-1">
                        {a.highlighted && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                            <Star className="h-3 w-3" /> Popular
                          </span>
                        )}
                        <span className="text-lg font-bold text-[var(--color-text)]">{a.name}</span>
                        <span className="text-xs text-[var(--color-text-tertiary)]">{a.minDeposit} min</span>
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specRows.map((s) => (
                  <tr key={s.key} className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 text-sm text-[var(--color-text)]">{s.label}</td>
                    {ACCOUNT_TYPES.map((a) => (
                      <td
                        key={a.name + s.key}
                        className={`px-4 py-3 text-center ${a.highlighted ? "bg-[rgba(201,168,76,0.05)]" : ""}`}
                      >
                        <SpecValue value={(a as Record<string, unknown>)[s.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-[var(--color-border)]">
                  <td className="px-4 py-4" />
                  {ACCOUNT_TYPES.map((a) => (
                    <td key={a.name + "cta"} className={`px-4 py-4 text-center ${a.highlighted ? "rounded-b-xl bg-[rgba(201,168,76,0.05)]" : ""}`}>
                      <Button href={SITE.signUpUrl} size="sm" variant={a.highlighted ? "primary" : "secondary"}>
                        Open {a.name}
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- Live spreads by asset class ---- */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Typical spreads"
            title="Indicative spreads by market"
            subtitle="Representative spreads on the ECN account. Live pricing varies with market conditions — check the terminal for real-time quotes."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {spreadTables.map((t, i) => (
              <AnimateOnScroll key={t.title} delay={(i % 2) * 0.05} className="h-full">
                <Card className="h-full p-6">
                  <h3 className="mb-4 text-lg font-semibold text-[var(--color-text)]">{t.title}</h3>
                  <table className="premium-table w-full text-left text-sm">
                    <thead>
                      <tr className="text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                        <th className="pb-2 font-medium">Symbol</th>
                        <th className="pb-2 font-medium">Instrument</th>
                        <th className="pb-2 text-right font-medium">Spread</th>
                        <th className="pb-2 text-right font-medium">Leverage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {t.rows.map((r) => (
                        <tr key={r.symbol} className="border-t border-[var(--color-border)]">
                          <td className="py-2.5 font-mono font-semibold text-[var(--color-text)]">{r.symbol}</td>
                          <td className="py-2.5 text-[var(--color-text-secondary)]">{r.name}</td>
                          <td className="py-2.5 text-right font-mono nums text-[var(--color-sky)]">{r.spread}</td>
                          <td className="py-2.5 text-right font-mono nums text-[var(--color-text-secondary)]">{r.leverage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-[var(--color-text-tertiary)]">
            Spreads shown are indicative and expressed in pips (points for indices/crypto). Actual spreads depend on
            liquidity and volatility. Leverage is subject to your jurisdiction and account tier. Trading leveraged
            products carries substantial risk of loss.
          </p>
        </div>
      </section>

      {/* ---- Deposits & withdrawals note ---- */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl items-start gap-8 lg:grid-cols-[1.618fr_1fr]">
            <div>
              <SectionHeading
                centered={false}
                eyebrow="Funding"
                title="No fees to fund your account"
                className="mb-6"
              />
              <ul className="space-y-3">
                {[
                  "Zero deposit fees across all supported methods",
                  "Fast withdrawals processed to source",
                  "Client funds held in segregated accounts",
                  "No hidden inactivity or platform fees",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#10B981]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/funding" className="text-sm text-[var(--color-sky)] hover:underline">Funding &amp; Withdrawals &rarr;</Link>
                <Link href="/accounts" className="text-sm text-[var(--color-sky)] hover:underline">Account details &rarr;</Link>
              </div>
            </div>
            <Card className="p-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--color-text)]">Not sure which account?</h3>
              <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Start on a free demo with the full Raptor platform, then upgrade to live when you&apos;re ready.
              </p>
              <Button href={SITE.demoUrl} variant="secondary" size="sm" className="w-full">
                Try the Demo Free
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
