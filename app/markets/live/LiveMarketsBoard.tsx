"use client";

// Live Markets — the full TradingView widget suite on one page.
// Every card is an official TradingView embed streaming real market data.

import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  TVAdvancedChart,
  TVMarketOverview,
  TVMarketQuotes,
  TVCrossRates,
  TVForexHeatmap,
  TVScreener,
  TVTechnicalAnalysis,
  TVEconomicCalendar,
  TVTopStories,
  TVSymbolOverview,
  TVMiniChart,
  TVSingleTicker,
  TVCryptoHeatmap,
  TVStockHeatmap,
} from "@/components/tradingview/widgets";

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
      className={`overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm ${className}`}
    >
      <div className="border-b border-[var(--color-border)] px-5 py-3">
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
}

export function LiveMarketsBoard() {
  return (
    <section className="section-padding">
      <div className="max-site space-y-10">
        {/* Quick tickers */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <TVSingleTicker symbol="FX:EURUSD" />
          <TVSingleTicker symbol="OANDA:XAUUSD" />
          <TVSingleTicker symbol="BITSTAMP:BTCUSD" />
          <TVSingleTicker symbol="FOREXCOM:SPXUSD" />
        </div>

        {/* Main chart + technical analysis */}
        <SectionHeading
          eyebrow="Charts"
          title="Advanced real-time charting"
          subtitle="The full TradingView chart — indicators, drawing tools, and live data."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <Panel title="Advanced Chart" className="lg:col-span-2">
            <TVAdvancedChart />
          </Panel>
          <Panel title="Technical Analysis">
            <TVTechnicalAnalysis />
          </Panel>
        </div>

        {/* Watchlist + overview */}
        <SectionHeading
          eyebrow="Quotes"
          title="Watchlist & market overview"
          subtitle="Real-time prices across forex, metals, indices, and crypto."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="Watchlist">
            <TVMarketQuotes />
          </Panel>
          <Panel title="Market Overview">
            <TVMarketOverview />
          </Panel>
        </div>

        {/* Mini charts */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <TVMiniChart symbol="FX:EURUSD" />
          <TVMiniChart symbol="FX:GBPUSD" />
          <TVMiniChart symbol="OANDA:XAUUSD" />
          <TVMiniChart symbol="BITSTAMP:BTCUSD" />
        </div>

        {/* FX tools */}
        <SectionHeading
          eyebrow="Forex Tools"
          title="Cross rates, heat map & screener"
          subtitle="Spot strength and weakness across the majors at a glance."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="Forex Cross Rates">
            <TVCrossRates />
          </Panel>
          <Panel title="Forex Heat Map">
            <TVForexHeatmap />
          </Panel>
        </div>
        <Panel title="Forex Screener">
          <TVScreener />
        </Panel>

        {/* Heatmaps */}
        <SectionHeading
          eyebrow="Heat Maps"
          title="Stocks & crypto at a glance"
          subtitle="Sector and market-cap weighted performance maps."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="S&P 500 Heat Map">
            <TVStockHeatmap />
          </Panel>
          <Panel title="Crypto Heat Map">
            <TVCryptoHeatmap />
          </Panel>
        </div>

        {/* Symbol overview */}
        <Panel title="Symbol Overview">
          <TVSymbolOverview />
        </Panel>

        {/* Calendar + news */}
        <SectionHeading
          eyebrow="Intelligence"
          title="Economic calendar & market news"
          subtitle="What moves the markets — releases, events, and top stories."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="Economic Calendar">
            <TVEconomicCalendar />
          </Panel>
          <Panel title="Top Stories">
            <TVTopStories />
          </Panel>
        </div>

        <p className="text-center text-xs text-[var(--color-text-secondary)]">
          Market data and widgets provided by{" "}
          <a
            href="https://www.tradingview.com/"
            target="_blank"
            rel="noopener noreferrer"
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

