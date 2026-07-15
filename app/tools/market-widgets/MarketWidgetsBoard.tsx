"use client";

// Market Widgets — the widget set specified in "Trading view widgets.docx",
// rendered exactly with the provided configs (dark widgets in dark panels),
// laid out as clean cards. All are official TradingView embeds.

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TVWidget } from "@/components/tradingview/TVWidget";
import { TVElement } from "@/components/tradingview/TVElement";

const MARKET_DATA_SECTIONS = JSON.stringify([
  {
    sectionName: "Indices",
    symbols: [
      "FOREXCOM:SPXUSD",
      "FOREXCOM:NSXUSD",
      "FOREXCOM:DJI",
      "INDEX:NKY",
      "INDEX:DEU40",
      "FOREXCOM:UKXGBP",
    ],
  },
  {
    sectionName: "Futures",
    symbols: [
      "BMFBOVESPA:ISP1!",
      "BMFBOVESPA:EUR1!",
      "CMCMARKETS:GOLD",
      "TVC:USOIL",
      "BMFBOVESPA:CCM1!",
    ],
  },
  {
    sectionName: "Bonds",
    symbols: ["EUREX:FGBL1!", "EUREX:FBTP1!", "EUREX:FGBM1!"],
  },
  {
    sectionName: "Forex",
    symbols: [
      "FX:EURUSD",
      "FX:GBPUSD",
      "FX:USDJPY",
      "FX:USDCHF",
      "FX:AUDUSD",
      "FX:USDCAD",
    ],
  },
]);

function Panel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[#131722] shadow-sm ${className}`}
    >
      <div className="border-b border-white/10 px-5 py-3">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
}

export function MarketWidgetsBoard() {
  return (
    <section className="section-padding">
      <div className="max-site space-y-10">
        {/* Global market data */}
        <SectionHeading
          eyebrow="Market Data"
          title="Indices, futures, bonds & forex"
          subtitle="Live quotes across the major asset classes."
        />
        <Panel title="Market Data">
          <TVElement
            tag="tv-market-data"
            attrs={{ "symbol-sectors": MARKET_DATA_SECTIONS }}
            minHeight={560}
          />
        </Panel>

        {/* Forex table + heatmap */}
        <SectionHeading
          eyebrow="Forex"
          title="Cross rates & heat map"
          subtitle="Real-time currency table and daily-change heat map."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="Forex Cross Rates">
            <TVElement tag="tv-forex-table" minHeight={460} />
          </Panel>
          <Panel title="Forex Heat Map">
            <TVElement
              tag="tv-forex-table"
              attrs={{ "displayed-value": "dailyChange", heatmap: true }}
              minHeight={460}
            />
          </Panel>
        </div>

        {/* Screeners */}
        <SectionHeading
          eyebrow="Screeners"
          title="Forex & crypto screeners"
          subtitle="Scan the markets with TradingView's full screener toolset."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="Forex Screener">
            <TVWidget
              widget="screener"
              height={550}
              config={{
                market: "forex",
                showToolbar: true,
                defaultColumn: "overview",
                defaultScreen: "general",
                isTransparent: false,
                locale: "en",
                colorTheme: "dark",
                width: "100%",
                height: 550,
              }}
            />
          </Panel>
          <Panel title="Crypto Markets">
            <TVWidget
              widget="screener"
              height={550}
              config={{
                defaultColumn: "overview",
                screener_type: "crypto_mkt",
                displayCurrency: "USD",
                colorTheme: "dark",
                isTransparent: false,
                locale: "en",
                width: "100%",
                height: 550,
              }}
            />
          </Panel>
        </div>

        {/* Fundamentals + technical analysis */}
        <SectionHeading
          eyebrow="Analysis"
          title="Fundamentals & technicals"
          subtitle="Company financials and multi-timeframe technical ratings."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="AAPL Fundamentals">
            <TVWidget
              widget="financials"
              height={550}
              config={{
                symbol: "NASDAQ:AAPL",
                colorTheme: "dark",
                displayMode: "regular",
                isTransparent: false,
                locale: "en",
                width: "100%",
                height: 550,
              }}
            />
          </Panel>
          <Panel title="Technical Analysis — AAPL">
            <TVElement
              tag="tv-technical-analysis"
              attrs={{ symbol: "NASDAQ:AAPL" }}
              minHeight={550}
            />
          </Panel>
        </div>

        {/* News + calendar */}
        <SectionHeading
          eyebrow="Intelligence"
          title="Top stories & economic calendar"
          subtitle="Market-moving headlines and every scheduled release."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="Top Stories">
            <TVWidget
              widget="timeline"
              height={550}
              config={{
                displayMode: "regular",
                feedMode: "all_symbols",
                colorTheme: "dark",
                isTransparent: false,
                locale: "en",
                width: "100%",
                height: 550,
              }}
            />
          </Panel>
          <Panel title="Economic Calendar">
            <TVWidget
              widget="events"
              height={550}
              config={{
                colorTheme: "dark",
                isTransparent: false,
                locale: "en",
                countryFilter:
                  "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
                importanceFilter: "-1,0,1",
                width: "100%",
                height: 550,
              }}
            />
          </Panel>
        </div>

        <p className="text-center text-xs text-[var(--color-text-secondary)]">
          Widgets and market data provided by{" "}
          <a
            href="https://www.tradingview.com/"
            target="_blank"
            rel="noopener nofollow noreferrer"
            className="underline hover:no-underline"
          >
            TradingView
          </a>
          .
        </p>
      </div>
    </section>
  );
}
