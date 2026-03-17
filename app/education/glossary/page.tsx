"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABand } from "@/components/sections/CTABand";
import { Search } from "lucide-react";

const glossaryTerms = [
  // A
  { term: "Aggregate Demand", definition: "The total demand for goods and services within an economy at a given time. Forex traders monitor aggregate demand as it influences inflation, interest rates, and ultimately currency valuations." },
  { term: "Appreciation", definition: "An increase in the value of a currency relative to another currency. When the euro appreciates against the dollar, it takes more dollars to buy one euro." },
  { term: "Arbitrage", definition: "The simultaneous purchase and sale of an asset in different markets to profit from small price discrepancies. In forex, this might involve exploiting rate differences between brokers or across currency pairs." },
  { term: "Ask Rate", definition: "The lowest price at which a seller is willing to sell a currency pair. Also known as the offer price. The ask is always higher than the bid." },
  { term: "Asset Allocation", definition: "The strategy of distributing investments across various asset classes — currencies, equities, commodities — to balance risk and reward according to a trader's goals and risk tolerance." },
  { term: "ATR (Average True Range)", definition: "A volatility indicator that measures the average range between high and low prices over a set number of periods. Traders use ATR to set stop-loss distances and gauge market volatility." },

  // B
  { term: "Balance of Payments", definition: "A record of all economic transactions between a country and the rest of the world over a given period. A deficit or surplus in the balance of payments can significantly affect a nation's currency value." },
  { term: "Base Currency", definition: "The first currency in a currency pair. In EUR/USD, the euro is the base currency. Exchange rates show how much quote currency is needed to buy one unit of the base currency." },
  { term: "Bear Market", definition: "A market characterised by sustained falling prices and pessimistic sentiment. In forex, a bear market for a currency means it is losing value against other currencies." },
  { term: "Bid Price", definition: "The highest price a buyer is willing to pay for a currency pair. Traders sell at the bid price and buy at the ask price." },
  { term: "Bollinger Bands", definition: "A technical analysis indicator consisting of a middle moving average and two standard deviation bands above and below it. They help traders identify overbought or oversold conditions and potential breakouts." },
  { term: "Breakout", definition: "A price movement through an identified level of support or resistance, often accompanied by increased volume and volatility. Breakout trading strategies aim to enter positions early in a new trend." },
  { term: "Bull Market", definition: "A market characterised by sustained rising prices and optimistic sentiment. In forex, a bull market for a currency means it is gaining value against other currencies." },
  { term: "Broker", definition: "An intermediary that facilitates trading between buyers and sellers in the forex market. Brokers provide the platform, leverage, and market access that retail traders need." },

  // C
  { term: "Cable", definition: "A slang term for the GBP/USD currency pair, originating from the transatlantic telegraph cable laid in the 19th century that was used to transmit exchange rates between London and New York." },
  { term: "Candlestick", definition: "A chart type that displays the open, high, low, and close prices for a given period, forming a candle-shaped pattern. The body shows the open-to-close range while the wicks show the high and low." },
  { term: "Carry Trade", definition: "A strategy where a trader borrows a currency with a low interest rate to buy a currency with a higher interest rate, profiting from the interest rate differential. Popular in stable market conditions." },
  { term: "Central Bank", definition: "A national institution responsible for monetary policy, interest rate decisions, and currency stability. Major central banks — such as the Fed, ECB, and BoJ — heavily influence forex markets through their policy decisions." },
  { term: "Commodity Currencies", definition: "Currencies of countries whose economies are heavily dependent on commodity exports, such as the Australian dollar (AUD), Canadian dollar (CAD), and New Zealand dollar (NZD). Their values often correlate with commodity prices." },
  { term: "Correlation", definition: "A statistical measure of how two currency pairs move in relation to each other. Positive correlation means they move in the same direction; negative correlation means they move in opposite directions." },
  { term: "Cross Rate", definition: "An exchange rate between two currencies that does not include the US dollar, such as EUR/GBP or AUD/JPY. Cross rates are derived from each currency's rate against the USD." },
  { term: "CFD (Contract for Difference)", definition: "A derivative product that allows you to speculate on price movements without owning the underlying asset. CFDs mirror the price of the underlying instrument and are traded on margin." },
  { term: "Consolidation", definition: "A period where price moves sideways within a narrow range after a significant move. Consolidation often precedes a breakout and represents market indecision." },
  { term: "Currency Pair", definition: "Two currencies quoted against each other, such as EUR/USD. The first is the base currency, the second is the quote currency. The rate shows how much quote currency is needed to buy one unit of the base." },

  // D
  { term: "Day Trading", definition: "A trading style where all positions are opened and closed within the same trading day, avoiding overnight risk. Day traders rely on short-term price movements and technical analysis." },
  { term: "Dead Cat Bounce", definition: "A temporary recovery in price after a significant decline, followed by a continuation of the downtrend. The bounce can mislead traders into thinking a reversal has occurred." },
  { term: "Deflation", definition: "A sustained decrease in the general price level of goods and services. Deflation increases a currency's purchasing power but can signal economic weakness, often prompting central banks to lower interest rates." },
  { term: "Depreciation", definition: "A decrease in the value of a currency relative to another currency. When a currency depreciates, it buys less of another currency than before." },
  { term: "Divergence", definition: "A situation where the price of a currency pair moves in the opposite direction of a technical indicator, such as RSI or MACD. Divergence often signals a potential trend reversal." },
  { term: "Dovish", definition: "A term describing a central bank stance that favours lower interest rates and expansionary monetary policy to stimulate economic growth. Dovish signals typically weaken a currency." },
  { term: "Double Bottom", definition: "A bullish reversal chart pattern that forms after a downtrend, where price tests the same support level twice before breaking above the neckline resistance." },
  { term: "Double Top", definition: "A bearish reversal chart pattern that forms after an uptrend, where price tests the same resistance level twice before breaking below the neckline support." },
  { term: "Drawdown", definition: "The decline from a peak to a trough in account equity, usually expressed as a percentage. Maximum drawdown is a key metric for evaluating trading strategy risk." },

  // E
  { term: "ECN (Electronic Communication Network)", definition: "A system that matches buy and sell orders from multiple liquidity providers, offering direct market access with tighter spreads. ECN brokers pass orders directly to the interbank market without a dealing desk." },
  { term: "Elliott Wave Theory", definition: "A technical analysis approach that identifies recurring wave patterns in price movements. The theory proposes that markets move in five-wave impulse patterns followed by three-wave corrective patterns." },
  { term: "Equity", definition: "The current value of your trading account, including unrealised profits and losses on open positions. Equity = Account Balance + Unrealised P&L." },
  { term: "EMA (Exponential Moving Average)", definition: "A type of moving average that gives more weight to recent prices, making it more responsive to new information than a simple moving average. Commonly used periods include 9, 21, 50, and 200." },
  { term: "Expert Advisor (EA)", definition: "An automated trading program that runs on the MetaTrader platform. EAs execute trades based on pre-programmed rules and algorithms without requiring manual intervention." },
  { term: "Exotic Pairs", definition: "Currency pairs that include one major currency and one from a developing or smaller economy, such as USD/TRY or EUR/ZAR. Exotic pairs typically have wider spreads and lower liquidity." },

  // F
  { term: "Fibonacci Retracement", definition: "A technical analysis tool that uses horizontal lines at key Fibonacci ratios (23.6%, 38.2%, 50%, 61.8%) to identify potential support and resistance levels where price may reverse during a pullback." },
  { term: "Fill", definition: "The completion of an order to buy or sell a currency pair. A fill occurs when an order has been executed at a specific price. Partial fills happen when only part of an order is executed." },
  { term: "Floating Exchange Rate", definition: "An exchange rate that is determined by supply and demand in the open market rather than being fixed or pegged by a government. Most major currencies operate under a floating exchange rate system." },
  { term: "FOMC", definition: "The Federal Open Market Committee — the branch of the US Federal Reserve responsible for setting monetary policy and interest rates. FOMC meetings and statements are major market-moving events in forex." },
  { term: "Forex", definition: "The foreign exchange market — the largest and most liquid financial market in the world, with daily turnover exceeding $7 trillion. Currencies are traded 24 hours a day, five days a week." },
  { term: "Forward Contract", definition: "An agreement to buy or sell a currency at a predetermined price on a specific future date. Forward contracts are used by businesses and traders to hedge against exchange rate fluctuations." },
  { term: "Flat", definition: "Having no open positions in the market. A trader who has closed all trades is said to be flat or square." },
  { term: "Fundamental Analysis", definition: "Evaluating a currency's value based on economic indicators (GDP, inflation, employment), central bank policies, interest rates, and geopolitical events to forecast future price movements." },

  // G
  { term: "Gap", definition: "A break between prices on a chart where no trading occurred. Gaps often appear at the market open on Sunday when prices differ from Friday's close due to weekend news events." },
  { term: "GDP (Gross Domestic Product)", definition: "The total monetary value of all goods and services produced within a country over a specific period. GDP is one of the most important economic indicators, as strong GDP growth tends to strengthen a currency." },
  { term: "Going Long", definition: "Buying a currency pair with the expectation that its value will rise. When you go long on EUR/USD, you are buying euros and selling US dollars." },
  { term: "Going Short", definition: "Selling a currency pair with the expectation that its value will fall. When you go short on EUR/USD, you are selling euros and buying US dollars." },
  { term: "Golden Cross", definition: "A bullish technical signal that occurs when a short-term moving average (e.g., 50-period) crosses above a long-term moving average (e.g., 200-period), indicating potential upward momentum." },
  { term: "Gearing", definition: "Another term for leverage — the ratio of a trader's capital to the size of the position they control. Higher gearing means greater exposure relative to the margin deposited." },

  // H
  { term: "Hawkish", definition: "A term describing a central bank stance that favours higher interest rates and tighter monetary policy to control inflation. Hawkish signals typically strengthen a currency." },
  { term: "Head and Shoulders", definition: "A chart pattern consisting of three peaks — a higher middle peak (head) flanked by two lower peaks (shoulders). It signals a potential trend reversal from bullish to bearish." },
  { term: "Hedging", definition: "Opening a position to offset potential losses in another position, reducing overall risk exposure. In forex, hedging can involve taking an opposite position in the same pair or a correlated pair." },

  // I
  { term: "Inflation", definition: "A sustained increase in the general price level of goods and services, eroding purchasing power. Central banks raise interest rates to combat inflation, which often strengthens the currency." },
  { term: "Interbank Market", definition: "The network of banks that trade currencies directly with each other, forming the backbone of the forex market. The interbank market sets the exchange rates that retail traders see." },
  { term: "Indicator", definition: "A mathematical calculation based on price, volume, or open interest used to forecast future price movements. Common forex indicators include RSI, MACD, Bollinger Bands, and moving averages." },
  { term: "Interest Rate Differential", definition: "The difference in interest rates between two countries whose currencies form a pair. Interest rate differentials drive carry trades and significantly influence currency valuations." },

  // J
  { term: "Japanese Candlestick", definition: "A charting technique developed in 18th-century Japan that uses candle-shaped formations to represent price action. Each candlestick shows the open, high, low, and close for a specific time period." },

  // K
  { term: "Knock-In Option", definition: "A type of barrier option that only becomes active when the underlying price reaches a specified level. Until that barrier is hit, the option has no value." },
  { term: "Knock-Out Option", definition: "A type of barrier option that ceases to exist when the underlying price reaches a specified level. Once the barrier is breached, the option expires worthless regardless of subsequent price movements." },

  // L
  { term: "Leverage", definition: "The ability to control a large position with a relatively small amount of capital. For example, 1:100 leverage means $1,000 controls $100,000. Leverage amplifies both profits and losses." },
  { term: "Limit Order", definition: "An order to buy or sell at a specified price or better. A buy limit is placed below the current price; a sell limit is placed above. It only executes at the limit price or a more favourable one." },
  { term: "Liquidity", definition: "The degree to which a currency pair can be quickly bought or sold without significantly affecting its price. Major pairs like EUR/USD have the highest liquidity in the forex market." },
  { term: "Long Position", definition: "A trade in which a currency pair is purchased with the expectation that it will increase in value. Profits are realised when the pair is sold at a higher price." },
  { term: "Lot", definition: "A standardised unit of trading. A standard lot is 100,000 units of the base currency, a mini lot is 10,000, a micro lot is 1,000, and a nano lot is 100 units." },

  // M
  { term: "MACD", definition: "Moving Average Convergence Divergence — a momentum indicator that shows the relationship between two moving averages of a price. Traders use MACD crossovers and divergences to identify trend changes and entry points." },
  { term: "Major Pairs", definition: "The most heavily traded currency pairs in the forex market, all including the US dollar: EUR/USD, USD/JPY, GBP/USD, USD/CHF, AUD/USD, USD/CAD, and NZD/USD." },
  { term: "Margin", definition: "The collateral required to open and maintain a leveraged position, expressed as a percentage of the full trade value. Margin is not a cost — it is a portion of your equity set aside as a deposit." },
  { term: "Margin Call", definition: "A notification from your broker that your account equity has fallen below the required margin level. You must deposit additional funds or close positions to bring your margin back above the minimum threshold." },
  { term: "Market Maker", definition: "A broker or institution that provides liquidity by quoting both bid and ask prices and is prepared to take the other side of a trade. Market makers profit from the spread between bid and ask." },
  { term: "Market Order", definition: "An order to buy or sell a currency pair immediately at the best available current price. Market orders guarantee execution but not a specific price." },
  { term: "Martingale Strategy", definition: "A high-risk trading strategy where the position size is doubled after each loss, with the expectation that a single winning trade will recover all previous losses. Widely considered dangerous due to exponential risk." },
  { term: "MetaTrader", definition: "A popular electronic trading platform (MT4 and MT5) developed by MetaQuotes Software, widely used by retail forex traders for charting, analysis, and automated trading through Expert Advisors (EAs)." },
  { term: "Minor Pairs", definition: "Currency pairs that do not include the US dollar but feature other major currencies, such as EUR/GBP, EUR/JPY, or GBP/JPY. Also known as cross pairs, they generally have slightly wider spreads than majors." },
  { term: "Momentum", definition: "The rate of acceleration of a price movement. Momentum indicators like RSI and MACD help traders gauge the strength of a trend and identify potential reversals when momentum weakens." },
  { term: "Money Management", definition: "The process of budgeting, saving, and controlling trading capital to ensure long-term survival. Effective money management includes setting maximum risk per trade and maintaining appropriate position sizes." },
  { term: "Moving Average", definition: "A technical indicator that smooths price data by calculating the average closing price over a set number of periods. Common types include simple (SMA) and exponential (EMA) moving averages." },

  // N
  { term: "NFP (Non-Farm Payrolls)", definition: "A key US economic indicator released on the first Friday of each month, measuring job creation excluding the farming sector. NFP releases often cause significant volatility in forex markets." },
  { term: "Non-Dealing Desk", definition: "A type of forex broker that passes client orders directly to liquidity providers without intervention. NDD brokers offer greater transparency and typically tighter spreads than dealing desk brokers." },

  // O
  { term: "Offer", definition: "Another term for the ask price — the price at which a seller is willing to sell a currency pair. The offer is the price you pay when entering a long (buy) position." },
  { term: "Open Position", definition: "A trade that has been entered but not yet closed by an opposing trade. Open positions are subject to gains and losses from market fluctuations until they are closed." },
  { term: "Order", definition: "An instruction to a broker to buy or sell a financial instrument at a specific price or at the current market price. Common order types include market, limit, stop, and trailing stop orders." },
  { term: "Overbought", definition: "A condition where a currency pair's price has risen too far, too fast, and may be due for a pullback or reversal. Indicators like RSI above 70 suggest overbought conditions." },
  { term: "Oversold", definition: "A condition where a currency pair's price has fallen too far, too fast, and may be due for a bounce or reversal. Indicators like RSI below 30 suggest oversold conditions." },
  { term: "Overnight Position", definition: "A trade that remains open past the end of the trading day (typically 5 PM EST). Overnight positions incur swap charges or credits based on the interest rate differential between the two currencies." },

  // P
  { term: "Pair", definition: "Short for currency pair — two currencies quoted together showing their relative value. The first currency is the base and the second is the quote, e.g. EUR/USD." },
  { term: "Pending Order", definition: "An order to open a position at a future price level rather than the current market price. Types include buy limit, sell limit, buy stop, and sell stop orders." },
  { term: "Pip", definition: "The smallest standard price movement in a currency pair. For most pairs, 1 pip equals 0.0001 (the fourth decimal place). For JPY pairs, 1 pip equals 0.01 (the second decimal place)." },
  { term: "Pivot Point", definition: "A technical indicator calculated from the previous period's high, low, and close prices, used to identify potential support and resistance levels. Pivot points are widely used by day traders." },
  { term: "Position Trading", definition: "A long-term trading style where positions are held for weeks, months, or even years. Position traders focus on fundamental analysis and long-term trends rather than short-term price fluctuations." },
  { term: "Price Action", definition: "A trading approach that analyses raw price movements on a chart without relying on indicators. Price action traders use candlestick patterns, support/resistance levels, and chart patterns to make decisions." },
  { term: "Profit Taking", definition: "The act of closing a profitable position to realise gains. Profit taking can cause temporary price reversals, especially when many traders close positions at similar levels." },
  { term: "Pullback", definition: "A temporary reversal in the direction of a prevailing trend. Pullbacks are seen as opportunities to enter a trade in the direction of the main trend at a better price." },

  // Q
  { term: "Quantitative Easing", definition: "A monetary policy tool where a central bank purchases government bonds or other financial assets to inject money into the economy and lower interest rates. QE typically weakens the domestic currency." },
  { term: "Quote Currency", definition: "The second currency in a currency pair. In EUR/USD, the US dollar is the quote currency. The exchange rate shows how much of the quote currency is needed to buy one unit of the base currency." },

  // R
  { term: "Rally", definition: "A sustained increase in the price of a currency pair or market. Rallies can be driven by positive economic data, central bank policy changes, or shifts in market sentiment." },
  { term: "Range", definition: "A period where price oscillates between a defined support and resistance level without establishing a clear trend. Range-bound trading strategies involve buying at support and selling at resistance." },
  { term: "Resistance", definition: "A price level where selling pressure tends to prevent further upward movement. Resistance levels are identified through previous price highs, trendlines, and technical indicators." },
  { term: "Retracement", definition: "A temporary price movement against the prevailing trend, often measured using Fibonacci levels. Retracements differ from reversals in that the original trend is expected to resume." },
  { term: "Risk Management", definition: "The process of identifying, assessing, and controlling potential trading losses through position sizing, stop losses, diversification, and adherence to a maximum risk per trade (commonly 1-2% of account equity)." },
  { term: "Risk-Reward Ratio", definition: "The ratio between the potential loss and potential gain on a trade. A 1:3 risk-reward ratio means risking $1 to potentially gain $3. Successful traders typically seek ratios of at least 1:2." },
  { term: "Rollover", definition: "The process of extending the settlement date of an open position to the next trading day. Rollover involves paying or receiving swap interest based on the interest rate differential of the currency pair." },
  { term: "RSI (Relative Strength Index)", definition: "A momentum oscillator that measures the speed and magnitude of price changes on a scale of 0 to 100. Readings above 70 suggest overbought conditions; below 30 suggest oversold conditions." },

  // S
  { term: "Scalping", definition: "A trading strategy that aims to profit from very small price movements, typically holding positions for seconds or minutes. Scalpers make many trades per day, targeting a few pips of profit each time." },
  { term: "Sentiment", definition: "The overall attitude of traders toward a particular currency pair or the market as a whole. Sentiment can be bullish, bearish, or neutral and is gauged through positioning data, surveys, and price action." },
  { term: "Short Selling", definition: "Selling a currency pair you do not own with the expectation of buying it back at a lower price. In forex, short selling is as straightforward as going long because every trade involves selling one currency to buy another." },
  { term: "Slippage", definition: "The difference between the expected price of a trade and the actual price at which it is executed. Slippage commonly occurs during high volatility or low liquidity periods." },
  { term: "Spot Market", definition: "A market where financial instruments are traded for immediate delivery, typically settling within two business days (T+2). The forex spot market is the largest segment of the foreign exchange market." },
  { term: "Spread", definition: "The difference between the bid and ask price of a currency pair, measured in pips. The spread represents the primary transaction cost in forex trading. Tighter spreads mean lower costs." },
  { term: "Stop Loss", definition: "An order to close a position at a specified price to limit potential losses if the market moves against you. Stop losses are a fundamental risk management tool for protecting trading capital." },
  { term: "Stop Order", definition: "An order that becomes a market order once the price reaches a specified level. A buy stop is placed above the current price; a sell stop is placed below. Used for breakout strategies." },
  { term: "Support", definition: "A price level where buying pressure tends to prevent further downward movement. Support levels are identified through previous price lows, trendlines, and technical indicators." },
  { term: "Swap", definition: "The interest rate differential charged or credited for holding a position overnight, also known as rollover. Swap rates vary by currency pair and depend on the central bank interest rates of the two currencies." },
  { term: "Swing Trading", definition: "A trading style that aims to capture gains from price swings over several days to weeks. Swing traders use a combination of technical and fundamental analysis to identify entry and exit points." },

  // T
  { term: "Take Profit", definition: "An order to close a position at a specified profit level, automatically locking in gains when the target is reached. Take profit orders help traders maintain discipline and avoid giving back unrealised gains." },
  { term: "Technical Analysis", definition: "The study of historical price charts, patterns, and indicators to forecast future price movements. Technical analysts believe that all relevant information is already reflected in the price." },
  { term: "Tick", definition: "The minimum price change for a currency pair, smaller than a pip. Most brokers now quote prices to five decimal places, where the fifth decimal represents a fractional pip or tick." },
  { term: "Trader", definition: "An individual or institution that buys and sells financial instruments such as currency pairs in the forex market. Traders range from retail individuals to large institutional participants." },
  { term: "Trailing Stop", definition: "A dynamic stop-loss order that moves with the market price at a fixed distance. As the price moves in your favour, the stop follows; if the price reverses, the stop remains in place to protect profits." },
  { term: "Trend", definition: "The general direction of market price movement. An uptrend consists of higher highs and higher lows; a downtrend consists of lower highs and lower lows; a sideways trend shows no clear direction." },
  { term: "Trend Line", definition: "A straight line drawn on a chart connecting two or more price points, used to identify and confirm trends. An upward trend line connects rising lows; a downward trend line connects falling highs." },
  { term: "Triangle Pattern", definition: "A chart pattern formed by converging trend lines, indicating a period of consolidation before a breakout. Triangles can be ascending (bullish), descending (bearish), or symmetrical (neutral)." },
  { term: "Turnover", definition: "The total volume of currency traded over a given period. The global forex market has a daily turnover exceeding $7 trillion, making it the most liquid financial market in the world." },

  // U
  { term: "Unrealized P&L", definition: "The profit or loss on an open position that has not yet been closed. Unrealised P&L fluctuates with the market and only becomes realised (actual) when the position is closed." },
  { term: "Uptick", definition: "A trade that occurs at a price higher than the previous trade. An uptick indicates positive short-term momentum and is the opposite of a downtick." },
  { term: "USD", definition: "United States Dollar — the world's primary reserve currency and the most traded currency in the forex market. The USD is involved in approximately 88% of all forex transactions." },

  // V
  { term: "Variable Spread", definition: "A spread that fluctuates based on market conditions, liquidity, and volatility. Variable spreads are typically tighter during high-liquidity sessions and wider during news events or off-peak hours." },
  { term: "VIX", definition: "The CBOE Volatility Index, often called the \"fear gauge,\" measures expected market volatility. Forex traders watch the VIX because higher volatility often leads to increased currency market movements." },
  { term: "Volatility", definition: "The degree of price variation over time. High volatility means large and rapid price swings, creating both opportunity and risk. Low volatility indicates smaller, more predictable movements." },
  { term: "Volume", definition: "The total number of units or contracts traded during a given period. In forex, true volume data is limited due to the decentralised market, so tick volume (number of price changes) is often used as a proxy." },
  { term: "VPS (Virtual Private Server)", definition: "A remote server used to run trading platforms and Expert Advisors 24/7 with low latency and high uptime. VPS hosting ensures automated strategies execute even when your local computer is offline." },

  // W
  { term: "Wedge Pattern", definition: "A chart pattern formed by converging trend lines that both slope in the same direction. Rising wedges are bearish; falling wedges are bullish. Wedges signal a potential reversal of the current trend." },
  { term: "Whipsaw", definition: "A rapid price movement in one direction quickly followed by a sharp reversal, often triggering stop losses on both sides. Whipsaws commonly occur during choppy, low-liquidity, or news-driven market conditions." },
  { term: "Wick", definition: "The thin lines above and below a candlestick body, representing the high and low prices during the period. Long wicks indicate strong rejection of prices at those levels." },

  // X
  { term: "XAU/USD", definition: "The trading symbol for gold priced in US dollars. Gold is widely traded in the forex market as a safe-haven asset and is often inversely correlated with the US dollar." },

  // Y
  { term: "Yield", definition: "The income return on an investment, usually expressed as a percentage. In forex, yield differences between countries drive currency flows as traders seek higher returns through carry trades." },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let terms = glossaryTerms;
    if (search) {
      const q = search.toLowerCase();
      terms = terms.filter(
        (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
      );
    }
    if (activeLetter) {
      terms = terms.filter((t) => t.term[0].toUpperCase() === activeLetter);
    }
    return terms;
  }, [search, activeLetter]);

  const availableLetters = useMemo(
    () => new Set(glossaryTerms.map((t) => t.term[0].toUpperCase())),
    []
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-56 pb-36">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
        </div>
        <div className="max-site text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">Education</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-h1)] font-bold mt-4 mb-6"
          >
            Trading <span className="gradient-text">Glossary</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto"
          >
            Over 130 essential forex trading terms explained. From Aggregate Demand to Yield — your comprehensive A-Z terminology reference.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[var(--color-text-secondary)] text-sm mt-3"
          >
            {glossaryTerms.length} terms &bull; Updated regularly
          </motion.p>
        </div>
      </section>

      {/* Search + Alphabet + Terms */}
      <section className="py-12 bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl">
          <SectionHeading
            eyebrow="Reference"
            title="A-Z Forex Terms"
            subtitle="Search or browse by letter to find the term you need."
          />

          {/* Search Bar */}
          <AnimateOnScroll>
            <div className="relative mb-8 mt-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-secondary)]" />
              <input
                type="text"
                placeholder="Search terms..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setActiveLetter(null); }}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:border-[#29ABE2] focus:outline-none transition-colors placeholder:text-[var(--color-text-secondary)]"
              />
            </div>
          </AnimateOnScroll>

          {/* Alphabetical Navigation */}
          <AnimateOnScroll delay={0.1}>
            <div className="flex flex-wrap justify-center gap-1 mb-8">
              <button
                onClick={() => { setActiveLetter(null); setSearch(""); }}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                  !activeLetter
                    ? "bg-gradient-to-r from-[#1B3A6B] to-[#29ABE2] text-white"
                    : "bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                }`}
              >
                All
              </button>
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => { setActiveLetter(letter); setSearch(""); }}
                  disabled={!availableLetters.has(letter)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    activeLetter === letter
                      ? "bg-gradient-to-r from-[#1B3A6B] to-[#29ABE2] text-white"
                      : availableLetters.has(letter)
                      ? "bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                      : "bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)] opacity-30 cursor-not-allowed"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Results Count */}
          <AnimateOnScroll delay={0.15}>
            <p className="text-xs text-[var(--color-text-secondary)] mb-4 text-center">
              Showing {filtered.length} of {glossaryTerms.length} terms
              {activeLetter ? ` starting with "${activeLetter}"` : ""}
              {search ? ` matching "${search}"` : ""}
            </p>
          </AnimateOnScroll>

          {/* Terms List */}
          <div className="grid gap-4">
            {filtered.map((item, i) => (
              <AnimateOnScroll key={item.term} delay={Math.min(i * 0.02, 0.3)}>
                <div className="glass-panel p-5">
                  <h3 className="font-semibold text-[#29ABE2] mb-1">{item.term}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.definition}</p>
                </div>
              </AnimateOnScroll>
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[var(--color-text-secondary)]">No terms found. Try a different search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
