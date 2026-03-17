import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIO4X Algorator — Algorithmic Trading Platform",
  description:
    "Build, backtest, and deploy automated trading strategies with GIO4X Algorator. No coding required — create algorithmic forex trading strategies with a visual strategy builder and real-time market data.",
  keywords: [
    "algorithmic trading",
    "Algorator",
    "automated trading strategies",
    "forex algorithm",
    "strategy builder",
    "backtesting",
    "algo trading",
    "trading automation",
    "no-code trading",
    "GIO4X Algorator",
    "quantitative trading",
  ],
  openGraph: {
    title: "GIO4X Algorator — Algorithmic Trading Platform",
    description:
      "Build, backtest, and deploy automated trading strategies with GIO4X Algorator. No coding required.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIO4X Algorator — Algorithmic Trading Platform",
    description:
      "Build, backtest, and deploy automated trading strategies with GIO4X Algorator. No coding required.",
  },
};

export default function AlgoratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
