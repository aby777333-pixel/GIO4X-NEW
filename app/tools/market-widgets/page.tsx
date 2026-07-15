import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { SITE } from "@/lib/constants";
import { MarketWidgetsBoard } from "./MarketWidgetsBoard";

export const metadata: Metadata = {
  title: "Market Widgets — Screeners, Fundamentals, Calendar & News",
  description:
    "TradingView market widgets: global market data, forex cross rates and heat map, forex and crypto screeners, fundamentals, technical analysis, economic calendar, and top stories.",
};

export default function MarketWidgetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Market Widgets"
        image="gio4x7.png"
        title={
          <>
            Market Intelligence, <span className="gradient-text">All In One Place</span>
          </>
        }
        caption="Screeners, cross rates, fundamentals, technicals, calendar, and news — live TradingView widgets on a single page."
        ctas={[
          { label: "Open Live Account", href: SITE.signUpUrl },
          { label: "Try Demo Free", href: SITE.demoUrl, variant: "secondary" },
        ]}
      />
      <MarketWidgetsBoard />
      <CTABand />
    </>
  );
}
