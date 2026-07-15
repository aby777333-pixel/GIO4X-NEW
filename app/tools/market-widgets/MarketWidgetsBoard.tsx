"use client";

// Market Widgets — the widget set specified in "Trading view widgets.docx",
// rendered exactly with the provided configs (dark widgets in dark panels),
// laid out as clean cards. All are official TradingView embeds.

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TVWidget } from "@/components/tradingview/TVWidget";

// Doc-specified market-data sections, served through the classic
// market-quotes embed (the web-component variant failed to load data).
const MARKET_DATA_GROUPS = [
  {
    name: "Indices",
    symbols: [
      { name: "FOREXCOM:SPXUSD", displayName: "S&P 500" },
      { name: "FOREXCOM:NSXUSD", displayName: "US 100" },
      { name: "FOREXCOM:DJI", displayName: "Dow 30" },
      { name: "INDEX:NKY", displayName: "Nikkei 225" },
      { name: "INDEX:DEU40", displayName: "DAX 40" },
      { name: "FOREXCOM:UKXGBP", displayName: "FTSE 100" },
    ],
  },
  {
    name: "Futures",
    symbols: [
      { name: "BMFBOVESPA:ISP1!", displayName: "S&P 500 Futures" },
      { name: "BMFBOVESPA:EUR1!", displayName: "Euro Futures" },
      { name: "CMCMARKETS:GOLD", displayName: "Gold" },
      { name: "TVC:USOIL", displayName: "WTI Crude" },
      { name: "BMFBOVESPA:CCM1!", displayName: "Corn Futures" },
    ],
  },
  {
    name: "Bonds",
    symbols: [
      { name: "EUREX:FGBL1!", displayName: "Euro Bund" },
      { name: "EUREX:FBTP1!", displayName: "Euro BTP" },
      { name: "EUREX:FGBM1!", displayName: "Euro BOBL" },
    ],
  },
  {
    name: "Forex",
    symbols: [
      { name: "FX:EURUSD", displayName: "EUR/USD" },
      { name: "FX:GBPUSD", displayName: "GBP/USD" },
      { name: "FX:USDJPY", displayName: "USD/JPY" },
      { name: "FX:USDCHF", displayName: "USD/CHF" },
      { name: "FX:AUDUSD", displayName: "AUD/USD" },
      { name: "FX:USDCAD", displayName: "USD/CAD" },
    ],
  },
];

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
          <TVWidget
            widget="market-quotes"
            height={560}
            config={{
              width: "100%",
              height: "100%",
              symbolsGroups: MARKET_DATA_GROUPS,
              showSymbolLogo: true,
              isTransparent: false,
              colorTheme: "dark",
              locale: "en",
            }}
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
            <TVWidget
              widget="forex-cross-rates"
              height={460}
              config={{
                width: "100%",
                height: "100%",
                currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"],
                isTransparent: false,
                colorTheme: "dark",
                locale: "en",
              }}
            />
          </Panel>
          <Panel title="Forex Heat Map">
            <TVWidget
              widget="forex-heat-map"
              height={460}
              config={{
                width: "100%",
                height: "100%",
                currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"],
                isTransparent: false,
                colorTheme: "dark",
                locale: "en",
              }}
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
