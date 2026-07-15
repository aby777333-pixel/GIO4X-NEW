import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { SITE } from "@/lib/constants";
import { LiveMarketsBoard } from "./LiveMarketsBoard";

export const metadata: Metadata = {
  title: "Live Markets — Real-Time Quotes, Charts & Analysis",
  description:
    "Real-time market data powered by TradingView: live charts, watchlist, cross rates, heat maps, screener, technical analysis, economic calendar, and market news.",
};

export default function LiveMarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Live Markets"
        image="gio4x7.png"
        title={
          <>
            Real-Time Markets, <span className="gradient-text">Powered by TradingView</span>
          </>
        }
        caption="Live quotes, charts, heat maps, screeners, and news — streaming real market data across forex, metals, indices, and crypto."
        ctas={[
          { label: "Open Live Account", href: SITE.signUpUrl },
          { label: "Try Demo Free", href: SITE.demoUrl, variant: "secondary" },
        ]}
      />
      <LiveMarketsBoard />
      <CTABand />
    </>
  );
}
