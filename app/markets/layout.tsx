import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade Forex, Metals, Indices, Crypto & CFDs",
  description:
    "Explore GIO4X markets — trade over 300+ instruments including forex currency pairs, precious metals, global indices, cryptocurrencies, commodities, and CFDs with ultra-tight spreads and fast execution.",
  keywords: [
    "forex trading",
    "CFD trading",
    "trade metals",
    "indices trading",
    "crypto trading",
    "commodities trading",
    "currency pairs",
    "gold trading",
    "oil trading",
    "forex market",
    "GIO4X markets",
  ],
  openGraph: {
    title: "Trade Forex, Metals, Indices, Crypto & CFDs | GIO4X",
    description:
      "Access 300+ tradeable instruments across forex, metals, indices, crypto & CFDs with spreads from 0.0 pips.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade Forex, Metals, Indices, Crypto & CFDs | GIO4X",
    description:
      "Access 300+ tradeable instruments across forex, metals, indices, crypto & CFDs with spreads from 0.0 pips.",
  },
};

export default function MarketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
