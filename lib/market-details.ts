// Per-instrument landing content for /markets/[symbol]. Static, SEO-facing.
// Spread/leverage figures mirror lib/constants; copy stays honest (indicative
// pricing, no guaranteed outcomes).

export type InstrumentDetail = {
  slug: string;
  symbol: string;
  name: string;
  category: string;
  heroImage: string;
  tagline: string;
  blurb: string;
  spread: string;
  leverage: string;
  minLot: string;
  swap: string;
  sessions: string;
  trend: number[];
  trendUp: boolean;
  why: { title: string; desc: string }[];
  facts: { label: string; value: string }[];
};

export const MARKET_DETAILS: Record<string, InstrumentDetail> = {
  eurusd: {
    slug: "eurusd",
    symbol: "EUR/USD",
    name: "Euro vs US Dollar",
    category: "Major Forex Pair",
    heroImage: "gio4x21.png",
    tagline: "The world's most traded pair",
    blurb:
      "Trade EUR/USD on GIO4X Raptor with spreads from 0.1 pips, leverage up to 500:1 and sub-10ms execution. The deepest liquidity in FX, priced razor-thin.",
    spread: "0.1 pips",
    leverage: "1:500",
    minLot: "0.01",
    swap: "Competitive",
    sessions: "London · New York overlap",
    trend: [4, 5, 4.4, 6, 5.6, 6.6, 6.2, 7.2],
    trendUp: true,
    why: [
      { title: "Unmatched liquidity", desc: "The single most-traded currency pair on earth — tight spreads and minimal slippage around the clock." },
      { title: "Macro-driven moves", desc: "ECB and Federal Reserve policy make EUR/USD a clean expression of the global macro cycle." },
      { title: "Ideal for every style", desc: "Deep enough for scalping, trending enough for swing and position traders alike." },
    ],
    facts: [
      { label: "Spread from", value: "0.1 pips" },
      { label: "Max leverage", value: "1:500" },
      { label: "Min trade size", value: "0.01 lot" },
      { label: "Trading hours", value: "24/5" },
      { label: "Contract size", value: "100,000" },
      { label: "Margin call / stop out", value: "100% / 30%" },
    ],
  },
  xauusd: {
    slug: "xauusd",
    symbol: "XAU/USD",
    name: "Gold vs US Dollar",
    category: "Precious Metal",
    heroImage: "gio4x20.png",
    tagline: "The timeless safe haven",
    blurb:
      "Trade Gold (XAU/USD) on GIO4X Raptor with spreads from 0.05, leverage up to 200:1 and institutional execution. The market's oldest store of value, precisely priced.",
    spread: "0.05",
    leverage: "1:200",
    minLot: "0.01",
    swap: "Competitive",
    sessions: "Round-the-clock demand",
    trend: [5, 5.4, 5.1, 6, 6.4, 6.1, 7, 7.6],
    trendUp: true,
    why: [
      { title: "The ultimate hedge", desc: "Gold has protected capital through every crisis for millennia — a portfolio anchor in volatile times." },
      { title: "Volatility with structure", desc: "Strong intraday ranges and clean technical behaviour reward disciplined traders." },
      { title: "Inflation & rates play", desc: "A direct expression of real yields, the dollar and geopolitical risk." },
    ],
    facts: [
      { label: "Spread from", value: "0.05" },
      { label: "Max leverage", value: "1:200" },
      { label: "Min trade size", value: "0.01 lot" },
      { label: "Trading hours", value: "23/5" },
      { label: "Contract size", value: "100 oz" },
      { label: "Margin call / stop out", value: "100% / 30%" },
    ],
  },
  btcusd: {
    slug: "btcusd",
    symbol: "BTC/USD",
    name: "Bitcoin vs US Dollar",
    category: "Cryptocurrency",
    heroImage: "raptor28.png",
    tagline: "The 24/7 digital frontier",
    blurb:
      "Trade Bitcoin (BTC/USD) CFDs on GIO4X Raptor with leverage up to 20:1, deep liquidity and a platform built for volatility — long or short, around the clock.",
    spread: "25.0",
    leverage: "1:20",
    minLot: "0.01",
    swap: "Competitive",
    sessions: "24/7 — never sleeps",
    trend: [4, 6, 3.6, 7, 5, 8, 6.4, 9],
    trendUp: true,
    why: [
      { title: "Trade both directions", desc: "Go long or short with CFDs — profit from Bitcoin's moves without holding the underlying asset." },
      { title: "Always-on markets", desc: "Crypto never closes. Trade weekends, holidays and every hour in between." },
      { title: "Built for volatility", desc: "Shield's capital-protection rules and guaranteed order gating keep discipline in fast markets." },
    ],
    facts: [
      { label: "Spread from", value: "25.0" },
      { label: "Max leverage", value: "1:20" },
      { label: "Min trade size", value: "0.01 lot" },
      { label: "Trading hours", value: "24/7" },
      { label: "Instrument", value: "CFD" },
      { label: "Margin call / stop out", value: "100% / 30%" },
    ],
  },
};
