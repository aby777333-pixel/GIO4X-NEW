"use client";

// Preconfigured TradingView widgets (light theme to match the site).
// Catalog: https://www.tradingview.com/widget/

import { TVWidget } from "./TVWidget";

// Ticker symbols per "Trading view widgets.docx" (under-menu ticker tape).
const FX_SYMBOLS = [
  { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
  { proName: "FOREXCOM:NSXUSD", title: "US 100" },
  { proName: "FOREXCOM:DJI", title: "Dow 30" },
  { proName: "FX:EURUSD", title: "EUR/USD" },
  { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
  { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
  { proName: "CMCMARKETS:GOLD", title: "Gold" },
];

/** Scrolling ticker tape — real-time TradingView prices. */
export function TVTickerTape() {
  return (
    <TVWidget
      widget="ticker-tape"
      height={46}
      config={{
        symbols: FX_SYMBOLS,
        showSymbolLogo: true,
        isTransparent: true,
        displayMode: "adaptive",
        colorTheme: "light",
        locale: "en",
      }}
    />
  );
}

/** Full advanced real-time chart. */
export function TVAdvancedChart({ symbol = "FX:EURUSD" }: { symbol?: string }) {
  return (
    <TVWidget
      widget="advanced-chart"
      height={560}
      config={{
        autosize: true,
        symbol,
        interval: "60",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        allow_symbol_change: true,
        calendar: false,
        hide_side_toolbar: false,
        support_host: "https://www.tradingview.com",
      }}
    />
  );
}

/** Multi-tab market overview (indices / forex / crypto / futures). */
export function TVMarketOverview() {
  return (
    <TVWidget
      widget="market-overview"
      height={560}
      config={{
        colorTheme: "light",
        dateRange: "12M",
        showChart: true,
        locale: "en",
        width: "100%",
        height: "100%",
        isTransparent: true,
        showSymbolLogo: true,
        showFloatingTooltip: true,
        tabs: [
          {
            title: "Forex",
            symbols: [
              { s: "FX:EURUSD", d: "EUR/USD" },
              { s: "FX:GBPUSD", d: "GBP/USD" },
              { s: "FX:USDJPY", d: "USD/JPY" },
              { s: "FX:AUDUSD", d: "AUD/USD" },
              { s: "FX:USDCAD", d: "USD/CAD" },
              { s: "FX:USDCHF", d: "USD/CHF" },
            ],
          },
          {
            title: "Indices",
            symbols: [
              { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
              { s: "FOREXCOM:NSXUSD", d: "US 100" },
              { s: "FOREXCOM:DJI", d: "Dow 30" },
              { s: "INDEX:NKY", d: "Nikkei 225" },
              { s: "INDEX:DEU40", d: "DAX 40" },
              { s: "FOREXCOM:UKXGBP", d: "FTSE 100" },
            ],
          },
          {
            title: "Commodities",
            symbols: [
              { s: "OANDA:XAUUSD", d: "Gold" },
              { s: "OANDA:XAGUSD", d: "Silver" },
              { s: "TVC:USOIL", d: "WTI Crude" },
              { s: "TVC:UKOIL", d: "Brent Crude" },
              { s: "NYMEX:NG1!", d: "Natural Gas" },
            ],
          },
          {
            title: "Crypto",
            symbols: [
              { s: "BITSTAMP:BTCUSD", d: "Bitcoin" },
              { s: "BITSTAMP:ETHUSD", d: "Ethereum" },
              { s: "BINANCE:SOLUSDT", d: "Solana" },
              { s: "BINANCE:XRPUSDT", d: "Ripple" },
              { s: "BINANCE:LTCUSDT", d: "Litecoin" },
            ],
          },
        ],
      }}
    />
  );
}

/** Watchlist / market quotes table. */
export function TVMarketQuotes() {
  return (
    <TVWidget
      widget="market-quotes"
      height={560}
      config={{
        width: "100%",
        height: "100%",
        symbolsGroups: [
          {
            name: "Forex",
            symbols: [
              { name: "FX:EURUSD", displayName: "EUR/USD" },
              { name: "FX:GBPUSD", displayName: "GBP/USD" },
              { name: "FX:USDJPY", displayName: "USD/JPY" },
              { name: "FX:AUDUSD", displayName: "AUD/USD" },
              { name: "FX:USDCAD", displayName: "USD/CAD" },
              { name: "FX:NZDUSD", displayName: "NZD/USD" },
              { name: "FX:EURGBP", displayName: "EUR/GBP" },
            ],
          },
          {
            name: "Metals & Energy",
            symbols: [
              { name: "OANDA:XAUUSD", displayName: "Gold" },
              { name: "OANDA:XAGUSD", displayName: "Silver" },
              { name: "TVC:USOIL", displayName: "WTI Crude" },
              { name: "TVC:UKOIL", displayName: "Brent" },
            ],
          },
          {
            name: "Crypto",
            symbols: [
              { name: "BITSTAMP:BTCUSD", displayName: "Bitcoin" },
              { name: "BITSTAMP:ETHUSD", displayName: "Ethereum" },
              { name: "BINANCE:SOLUSDT", displayName: "Solana" },
            ],
          },
        ],
        showSymbolLogo: true,
        isTransparent: true,
        colorTheme: "light",
        locale: "en",
      }}
    />
  );
}

/** Forex cross-rates matrix. */
export function TVCrossRates() {
  return (
    <TVWidget
      widget="forex-cross-rates"
      height={480}
      config={{
        width: "100%",
        height: "100%",
        currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"],
        isTransparent: true,
        colorTheme: "light",
        locale: "en",
      }}
    />
  );
}

/** Forex heat map. */
export function TVForexHeatmap() {
  return (
    <TVWidget
      widget="forex-heat-map"
      height={420}
      config={{
        width: "100%",
        height: "100%",
        currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"],
        isTransparent: true,
        colorTheme: "light",
        locale: "en",
      }}
    />
  );
}

/** Forex screener. */
export function TVScreener() {
  return (
    <TVWidget
      widget="screener"
      height={520}
      config={{
        width: "100%",
        height: "100%",
        defaultColumn: "overview",
        defaultScreen: "general",
        market: "forex",
        showToolbar: true,
        colorTheme: "light",
        isTransparent: true,
        locale: "en",
      }}
    />
  );
}

/** Technical analysis gauge for one symbol. */
export function TVTechnicalAnalysis({ symbol = "FX:EURUSD" }: { symbol?: string }) {
  return (
    <TVWidget
      widget="technical-analysis"
      height={450}
      config={{
        interval: "1h",
        width: "100%",
        height: "100%",
        isTransparent: true,
        symbol,
        showIntervalTabs: true,
        displayMode: "single",
        colorTheme: "light",
        locale: "en",
      }}
    />
  );
}

/** Economic calendar. */
export function TVEconomicCalendar() {
  return (
    <TVWidget
      widget="events"
      height={520}
      config={{
        width: "100%",
        height: "100%",
        colorTheme: "light",
        isTransparent: true,
        locale: "en",
        importanceFilter: "0,1",
        countryFilter: "us,eu,gb,jp,ch,au,ca,nz,cn,in",
      }}
    />
  );
}

/** Top stories news feed. */
export function TVTopStories() {
  return (
    <TVWidget
      widget="timeline"
      height={520}
      config={{
        feedMode: "market",
        market: "forex",
        colorTheme: "light",
        isTransparent: true,
        displayMode: "regular",
        width: "100%",
        height: "100%",
        locale: "en",
      }}
    />
  );
}

/** Symbol overview — compact multi-symbol chart card. */
export function TVSymbolOverview() {
  return (
    <TVWidget
      widget="symbol-overview"
      height={420}
      config={{
        symbols: [
          ["EUR/USD", "FX:EURUSD|1D"],
          ["GBP/USD", "FX:GBPUSD|1D"],
          ["Gold", "OANDA:XAUUSD|1D"],
          ["Bitcoin", "BITSTAMP:BTCUSD|1D"],
        ],
        chartOnly: false,
        width: "100%",
        height: "100%",
        locale: "en",
        colorTheme: "light",
        autosize: true,
        showVolume: false,
        showMA: false,
        hideDateRanges: false,
        hideMarketStatus: false,
        hideSymbolLogo: false,
        scalePosition: "right",
        scaleMode: "Normal",
        fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        fontSize: "10",
        noTimeScale: false,
        valuesTracking: "1",
        changeMode: "price-and-percent",
        chartType: "area",
        isTransparent: true,
      }}
    />
  );
}

/** Mini chart card for one symbol. */
export function TVMiniChart({ symbol = "OANDA:XAUUSD" }: { symbol?: string }) {
  return (
    <TVWidget
      widget="mini-symbol-overview"
      height={220}
      config={{
        symbol,
        width: "100%",
        height: "100%",
        locale: "en",
        dateRange: "1M",
        colorTheme: "light",
        isTransparent: true,
        autosize: true,
        largeChartUrl: "",
      }}
    />
  );
}

/** Single ticker strip for one symbol. */
export function TVSingleTicker({ symbol = "FX:EURUSD" }: { symbol?: string }) {
  return (
    <TVWidget
      widget="single-quote"
      height={106}
      config={{
        symbol,
        width: "100%",
        isTransparent: true,
        colorTheme: "light",
        locale: "en",
      }}
    />
  );
}

/** Crypto coins heat map. */
export function TVCryptoHeatmap() {
  return (
    <TVWidget
      widget="crypto-coins-heatmap"
      height={480}
      config={{
        dataSource: "Crypto",
        blockSize: "market_cap_calc",
        blockColor: "change",
        locale: "en",
        symbolUrl: "",
        colorTheme: "light",
        hasTopBar: false,
        isDataSetEnabled: false,
        isZoomEnabled: true,
        hasSymbolTooltip: true,
        isMonoSize: false,
        width: "100%",
        height: "100%",
      }}
    />
  );
}

/** Stock heat map (S&P 500). */
export function TVStockHeatmap() {
  return (
    <TVWidget
      widget="stock-heatmap"
      height={480}
      config={{
        exchanges: [],
        dataSource: "SPX500",
        grouping: "sector",
        blockSize: "market_cap_basic",
        blockColor: "change",
        locale: "en",
        symbolUrl: "",
        colorTheme: "light",
        hasTopBar: false,
        isDataSetEnabled: false,
        isZoomEnabled: true,
        hasSymbolTooltip: true,
        isMonoSize: false,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
