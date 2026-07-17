import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Strategy Lab | GIO4X Raptor Multi-Agent Trading Research",
  description:
    "The GIO4X Raptor AI Strategy Lab — a visual, multi-agent laboratory where specialised AI agents research markets, build strategies, backtest and stress-test them, debate and vote, and hand you the final candidates for approval. Demo, paper, and live modes with an always-on kill switch.",
  keywords: [
    "AI trading strategy lab",
    "multi-agent trading",
    "AI trading agents",
    "algorithmic strategy generator",
    "backtesting",
    "walk-forward analysis",
    "EA generator",
    "GIO4X Raptor",
    "Indian markets trading AI",
    "quant research automation",
  ],
  openGraph: {
    title: "AI Strategy Lab | GIO4X Raptor",
    description:
      "Watch specialised AI agents research, build, backtest, debate, and rank trading strategies — then approve the winners. Part of the GIO4X Raptor ecosystem.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Strategy Lab | GIO4X Raptor",
    description:
      "A visual multi-agent AI trading research, testing, and monitoring environment — built into the GIO4X Raptor ecosystem.",
  },
};

export default function AiLabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
