"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Sparkline } from "@/components/ui/Sparkline";
import { TrendingUp, BarChart3, Globe, Bitcoin, Landmark } from "lucide-react";

// The `trend` arrays are schematic ornaments (not a live feed) — a small
// visual pulse to make each asset-class card feel alive.
const markets = [
  { icon: TrendingUp, name: "Forex", pairs: "60+", desc: "Major, minor, and exotic currency pairs with spreads from 0.0 pips", trend: [4, 5, 4.4, 6, 5.6, 7, 6.8, 8] },
  { icon: BarChart3, name: "Commodities", pairs: "15+", desc: "Gold, silver, oil, and natural gas with competitive margins", trend: [6, 5.4, 6.2, 5.6, 6.8, 7.4, 7, 8.2] },
  { icon: Globe, name: "Indices", pairs: "20+", desc: "Trade the world's top indices including US30, US500, and UK100", trend: [5, 5.6, 5.2, 6.4, 6, 6.6, 7.2, 7] },
  { icon: Bitcoin, name: "Crypto", pairs: "10+", desc: "Bitcoin, Ethereum, and top altcoins available 24/7", trend: [4, 6, 3.6, 7, 5, 8, 6.4, 9] },
  { icon: Landmark, name: "Stocks", pairs: "100+", desc: "CFDs on global equities from US, EU, and Asia markets", trend: [5, 5.2, 5.6, 6, 6.2, 6.6, 7, 7.4] },
];

export function MarketOverview() {
  return (
    <section className="section-padding">
      <div className="max-site">
        <SectionHeading
          eyebrow="Markets"
          title="Trade Global Markets"
          subtitle="Access thousands of instruments across 5 asset classes, all from a single account."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {markets.map((market, i) => (
            <AnimateOnScroll key={market.name} delay={i * 0.1}>
              <Card className="h-full text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[rgba(41,171,226,0.1)] flex items-center justify-center">
                  <market.icon className="w-7 h-7 text-[#29ABE2]" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{market.name}</h3>
                <p className="text-[#29ABE2] font-mono text-sm font-semibold nums mb-2">{market.pairs} instruments</p>
                <div className="flex justify-center mb-3 opacity-70">
                  <Sparkline data={market.trend} up width={90} height={22} />
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm">{market.desc}</p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="secondary" href="/markets">
            View All Markets
          </Button>
        </div>
      </div>
    </section>
  );
}
