"use client";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PremiumDivider } from "@/components/ui/PremiumDivider";
import { Sparkline } from "@/components/ui/Sparkline";
import { CTABand } from "@/components/sections/CTABand";
import { SITE } from "@/lib/constants";
import type { InstrumentDetail } from "@/lib/market-details";
import Link from "next/link";
import { TrendingUp, Gauge, Clock, Layers, CheckCircle2 } from "lucide-react";

export function InstrumentLanding({ d }: { d: InstrumentDetail }) {
  const highlights = [
    { icon: TrendingUp, label: "Spread from", value: d.spread },
    { icon: Gauge, label: "Max leverage", value: d.leverage },
    { icon: Layers, label: "Min trade", value: `${d.minLot} lot` },
    { icon: Clock, label: "Sessions", value: d.sessions },
  ];

  return (
    <>
      <PageHero
        eyebrow={d.category}
        image={d.heroImage}
        title={<>Trade {d.name.split(" vs ")[0]} <span className="gradient-text-gold">{d.symbol}</span></>}
        caption={d.blurb}
        ctas={[
          { label: "Open Live Account", href: SITE.signUpUrl },
          { label: "Try the Demo", href: SITE.demoUrl, variant: "secondary" },
        ]}
      />

      {/* ---- Highlight strip ---- */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container mx-auto grid grid-cols-2 gap-px px-4 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <AnimateOnScroll key={h.label} delay={i * 0.05}>
              <div className="flex items-center gap-3 px-4 py-7">
                <span className="icon-chip h-10 w-10 shrink-0">
                  <h.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)]">{h.label}</p>
                  <p className="font-mono text-sm font-semibold text-[var(--color-text)] nums">{h.value}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ---- Why trade — golden-ratio split ---- */}
      <section className="section-aurora py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.618fr] lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <AnimateOnScroll>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-sky)]">{d.tagline}</span>
                <h2 className="font-display mt-2 text-[var(--text-h1)] font-medium text-[var(--color-text)]">
                  Why trade {d.symbol}
                </h2>
                <div className="hr-gold my-6 max-w-[160px]" />
                <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                  <Sparkline data={d.trend} up={d.trendUp} width={110} height={30} />
                  <span className="text-xs">Illustrative momentum</span>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="grid gap-6">
              {d.why.map((w, i) => (
                <AnimateOnScroll key={w.title} delay={i * 0.06}>
                  <Card className="flex items-start gap-4 p-6">
                    <span className="font-display text-3xl font-medium leading-none text-[var(--color-gold)] tabular-nums opacity-80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="mb-1.5 text-lg font-semibold text-[var(--color-text)]">{w.title}</h3>
                      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{w.desc}</p>
                    </div>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Specifications ---- */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Contract specs" title={`${d.symbol} at a glance`} />
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden p-0">
              <table className="premium-table w-full text-left">
                <tbody>
                  {d.facts.map((f) => (
                    <tr key={f.label} className="border-t border-[var(--color-border)] first:border-t-0">
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">{f.label}</td>
                      <td className="px-6 py-4 text-right font-mono text-sm font-semibold text-[var(--color-text)] nums">{f.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
            <p className="mt-4 text-center text-xs text-[var(--color-text-tertiary)]">
              Figures are indicative and vary with market conditions and account tier. Trading leveraged products carries substantial risk of loss.
            </p>
          </div>

          <PremiumDivider className="my-14" />

          <div className="flex flex-col items-center gap-5 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              {["Sub-10ms execution", "Native AI + Shield protection", "Web, desktop & mobile"].map((f) => (
                <span key={f} className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-sky)]" />
                  {f}
                </span>
              ))}
            </div>
            <Button href={SITE.signUpUrl} size="lg">Trade {d.symbol} Now</Button>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/markets" className="text-sm text-[var(--color-sky)] hover:underline">All Markets &rarr;</Link>
              <Link href="/pricing" className="text-sm text-[var(--color-sky)] hover:underline">Pricing &amp; Spreads &rarr;</Link>
              <Link href="/platforms" className="text-sm text-[var(--color-sky)] hover:underline">The Platform &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
