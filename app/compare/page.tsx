"use client";

// Compare — GIO4X Raptor vs cTrader vs MetaTrader 5. Positioned to win on the
// native AI + capital-protection + integrated-broker story, while keeping the
// competitor columns honest (MT5 & cTrader are mature platforms with real
// strengths — an unfair table reads as a scam and hurts conversion).
//
// ⚠️ Competitor cells are stated as of the page's authored date and are
// broker-configurable in places; verify before each publish and keep the
// comparison legally reviewed.
//
// House style: blue-dominant accents, gold/emerald as premium/protection
// semantics; golden-ratio intro block.

import { Fragment } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { SITE } from "@/lib/constants";
import Link from "next/link";
import { Check, Minus, Brain, ShieldCheck, Cpu, Sparkles } from "lucide-react";

type Cell = string | boolean;

type Row = { label: string; raptor: Cell; ctrader: Cell; mt5: Cell };

type Group = { title: string; note?: string; rows: Row[] };

/* The comparison, grouped so Raptor sweeps the intelligence section — the moat. */
const groups: Group[] = [
  {
    title: "Platform & Execution",
    rows: [
      { label: "Platform origin", raptor: "Proprietary, in-house", ctrader: "Third-party (Spotware)", mt5: "Third-party (MetaQuotes)" },
      { label: "Spreads from", raptor: "0.0 pips (ECN)", ctrader: "0.0 pips (ECN)", mt5: "Broker-dependent" },
      { label: "Max leverage", raptor: "Up to 500:1", ctrader: "Broker-dependent", mt5: "Broker-dependent" },
      { label: "Execution", raptor: "Sub-10ms", ctrader: "Fast", mt5: "Fast" },
      { label: "One-click trading", raptor: true, ctrader: true, mt5: true },
      { label: "Level-2 depth of market", raptor: true, ctrader: true, mt5: true },
      { label: "FIX API", raptor: "FIX 4.4", ctrader: true, mt5: false },
    ],
  },
  {
    title: "Intelligence & Protection",
    note: "The layer a third-party terminal can't add after the fact.",
    rows: [
      { label: "Native AI trading assistant", raptor: "EMIL + Lara", ctrader: false, mt5: false },
      { label: "AI strategy generation", raptor: "AI Strategy Lab", ctrader: false, mt5: false },
      { label: "AI correlation hedge engine", raptor: true, ctrader: false, mt5: false },
      { label: "Built-in equity-floor kill switch", raptor: "Shield", ctrader: false, mt5: false },
      { label: "Behavioural discipline tools", raptor: "Tilt-meter, discipline score", ctrader: false, mt5: false },
      { label: "Multilingual voice trading", raptor: "11 Indian languages", ctrader: false, mt5: false },
    ],
  },
  {
    title: "Trading & Automation",
    rows: [
      { label: "Automated trading (EAs / bots)", raptor: "EAs + GIO Bots", ctrader: "cBots (C#)", mt5: "EAs (MQL5)" },
      { label: "Accepts third-party EAs", raptor: true, ctrader: true, mt5: true },
      { label: "Integrated backtesting", raptor: true, ctrader: true, mt5: true },
      { label: "Copy trading", raptor: "Native", ctrader: "cTrader Copy", mt5: "via Signals" },
      { label: "PAMM / managed accounts", raptor: true, ctrader: "Broker-dependent", mt5: "Broker-dependent" },
      { label: "Built-in indicators", raptor: "100+", ctrader: "70+", mt5: "38+" },
      { label: "Built-in economic calendar", raptor: true, ctrader: "Limited", mt5: true },
    ],
  },
  {
    title: "Access & Experience",
    rows: [
      { label: "Web platform", raptor: true, ctrader: true, mt5: true },
      { label: "iOS & Android apps", raptor: true, ctrader: true, mt5: true },
      { label: "Windows desktop", raptor: true, ctrader: true, mt5: true },
      { label: "Mac desktop", raptor: true, ctrader: "via web", mt5: true },
      { label: "Interface", raptor: "Modern, guided", ctrader: "Modern", mt5: "Dated, steeper curve" },
      { label: "Single broker login (funding + trading)", raptor: true, ctrader: false, mt5: false },
    ],
  },
];

const highlights = [
  { icon: Brain, title: "Native intelligence", desc: "EMIL, ABIN and Lara live inside the terminal — not a bolt-on plugin or a separate app." },
  { icon: ShieldCheck, title: "Capital protection", desc: "Shield gates every order with an equity-floor kill switch and loss circuit-breakers. No MetaTrader broker ships this." },
  { icon: Cpu, title: "One integrated stack", desc: "Funding, trading, AI and protection behind a single login — because we built the whole platform ourselves." },
];

/* ---- Cell renderer: booleans → check / dash, strings → text. ---- */
function CellValue({ value, strong = false }: { value: Cell; strong?: boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center">
        <Check className={`h-5 w-5 ${strong ? "text-[#10B981]" : "text-[var(--color-sky)]"}`} aria-label="Yes" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center">
        <Minus className="h-5 w-5 text-[var(--color-text-tertiary)]" aria-label="No" />
      </span>
    );
  }
  return (
    <span className={`text-sm ${strong ? "font-semibold text-[var(--color-text)]" : "text-[var(--color-text-secondary)]"}`}>
      {value}
    </span>
  );
}

export default function ComparePage() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        image="raptor27.png"
        title={<>GIO4X Raptor vs <span className="gradient-text">cTrader &amp; MT5</span></>}
        caption="MetaTrader 5 and cTrader are capable, mature platforms. GIO4X Raptor matches them on the fundamentals — then adds a native AI and capital-protection layer a third-party terminal simply can't."
        ctas={[
          { label: "Open Live Account", href: SITE.signUpUrl },
          { label: "Try the Raptor Demo", href: SITE.demoUrl, variant: "secondary" },
        ]}
      />

      {/* ---- Why it matters — golden-ratio intro ---- */}
      <section className="golden-spiral py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="The difference"
            title="Same fundamentals. A layer they don't have."
            subtitle="Where Raptor pulls ahead isn't spreads or execution — those are table stakes across all three. It's what only an in-house platform can build in."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((h, i) => (
              <AnimateOnScroll key={h.title} delay={i * 0.06} className="h-full">
                <Card className="relative flex h-full flex-col overflow-hidden p-6">
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-[#10B981]" aria-hidden="true" />
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(16,185,129,0.10)] text-[#10B981] ring-1 ring-[rgba(16,185,129,0.22)]">
                    <h.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--color-text)]">{h.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{h.desc}</p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ---- The comparison table ---- */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Feature by feature"
            title="The full comparison"
            subtitle="Honest across the board — we don't pretend MT5 and cTrader lack the basics. We just do more."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="premium-table w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-[34%] px-4 py-4 align-bottom text-sm font-semibold text-[var(--color-text-secondary)]">
                    Capability
                  </th>
                  <th className="w-[22%] rounded-t-xl bg-[rgba(41,171,226,0.08)] px-4 py-4 text-center align-bottom">
                    <span className="flex flex-col items-center gap-1">
                      <Sparkles className="h-5 w-5 text-[var(--color-sky)]" />
                      <span className="text-base font-bold text-[var(--color-text)]">GIO4X Raptor</span>
                    </span>
                  </th>
                  <th className="w-[22%] px-4 py-4 text-center align-bottom text-base font-semibold text-[var(--color-text-secondary)]">
                    cTrader
                  </th>
                  <th className="w-[22%] px-4 py-4 text-center align-bottom text-base font-semibold text-[var(--color-text-secondary)]">
                    MetaTrader 5
                  </th>
                </tr>
              </thead>
              <tbody>
                {groups.map((g) => (
                  <Fragment key={g.title}>
                    <tr>
                      <td colSpan={4} className="px-4 pt-8 pb-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-sky)]">
                          {g.title}
                        </p>
                        {g.note && (
                          <p className="mt-1 text-xs text-[var(--color-text-tertiary)]">{g.note}</p>
                        )}
                      </td>
                    </tr>
                    {g.rows.map((r) => (
                      <tr
                        key={g.title + r.label}
                        className="border-t border-[var(--color-border)]"
                      >
                        <td className="px-4 py-3 text-sm text-[var(--color-text)]">{r.label}</td>
                        <td className="bg-[rgba(41,171,226,0.05)] px-4 py-3 text-center">
                          <CellValue value={r.raptor} strong />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <CellValue value={r.ctrader} />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <CellValue value={r.mt5} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend + honesty note */}
          <div className="mt-6 flex flex-col gap-3 text-xs text-[var(--color-text-tertiary)]">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-[var(--color-sky)]" /> Included</span>
              <span className="inline-flex items-center gap-1.5"><Minus className="h-4 w-4 text-[var(--color-text-tertiary)]" /> Not available</span>
            </div>
            <p className="max-w-3xl leading-relaxed">
              cTrader and MetaTrader 5 are trademarks of their respective owners and are shown here for
              comparison only. Several rows (leverage, spreads, PAMM) are configured by each individual
              broker and will vary. Figures reflect standard platform capabilities and are reviewed
              periodically. Trading leveraged products carries substantial risk of loss.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/features" className="text-sm text-[var(--color-sky)] hover:underline">All Features &rarr;</Link>
            <Link href="/pricing" className="text-sm text-[var(--color-sky)] hover:underline">Pricing &amp; Spreads &rarr;</Link>
            <Link href="/platforms" className="text-sm text-[var(--color-sky)] hover:underline">Platform Overview &rarr;</Link>
          </div>

          <div className="mt-10 flex justify-center">
            <Button href={SITE.signUpUrl} size="lg">Open Your Account</Button>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
