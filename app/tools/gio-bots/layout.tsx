import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIO Bots — AI Trading Bots Coming Soon",
  description:
    "GIO Bots — AI-powered automated trading bots by GIO4X. Coming soon: intelligent forex trading algorithms that analyze markets 24/7 and execute trades with precision. Join the waitlist.",
  keywords: [
    "AI trading bots",
    "automated trading",
    "forex bots",
    "trading automation",
    "algorithmic trading",
    "GIO Bots",
    "AI forex trading",
    "automated forex",
    "trading robots",
    "GIO4X bots",
  ],
  openGraph: {
    title: "GIO Bots — AI Trading Bots Coming Soon | GIO4X",
    description:
      "AI-powered automated trading bots by GIO4X. Intelligent forex algorithms that analyze markets 24/7. Coming soon.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIO Bots — AI Trading Bots Coming Soon | GIO4X",
    description:
      "AI-powered automated trading bots by GIO4X. Intelligent forex algorithms that analyze markets 24/7. Coming soon.",
  },
};

export default function GioBotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
