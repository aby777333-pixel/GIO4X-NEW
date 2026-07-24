import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MARKET_DETAILS } from "@/lib/market-details";
import { InstrumentLanding } from "@/components/sections/InstrumentLanding";

// Only the known instruments are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(MARKET_DETAILS).map((symbol) => ({ symbol }));
}

export function generateMetadata({ params }: { params: { symbol: string } }): Metadata {
  const d = MARKET_DETAILS[params.symbol];
  if (!d) return {};
  return {
    title: `Trade ${d.name} (${d.symbol}) — Spreads, Leverage & Live Pricing`,
    description: d.blurb,
    openGraph: {
      title: `Trade ${d.symbol} with GIO4X`,
      description: d.blurb,
    },
  };
}

export default function InstrumentPage({ params }: { params: { symbol: string } }) {
  const d = MARKET_DETAILS[params.symbol];
  if (!d) notFound();
  return <InstrumentLanding d={d} />;
}
