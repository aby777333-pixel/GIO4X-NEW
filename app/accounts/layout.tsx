import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trading Account Types | Classic, Premium & ECN",
  description:
    "Choose your ideal GIO4X trading account — Classic, Premium, or ECN. Enjoy spreads from 0.0 pips, flexible leverage, and institutional-grade execution tailored to your trading style and experience level.",
  keywords: [
    "trading account",
    "forex account types",
    "ECN account",
    "classic account",
    "premium account",
    "forex spreads",
    "trading leverage",
    "open trading account",
    "forex broker account",
    "low spread account",
    "GIO4X accounts",
  ],
  openGraph: {
    title: "Trading Account Types | Classic, Premium & ECN | GIO4X",
    description:
      "Open a GIO4X trading account — Classic, Premium, or ECN with spreads from 0.0 pips and flexible leverage.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Account Types | Classic, Premium & ECN | GIO4X",
    description:
      "Open a GIO4X trading account — Classic, Premium, or ECN with spreads from 0.0 pips and flexible leverage.",
  },
};

export default function AccountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
