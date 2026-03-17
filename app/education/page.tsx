"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BookOpen, BarChart3, Globe, Shield, Monitor, GraduationCap, PlayCircle,
  FileText, Video, Users, Presentation, TrendingUp, Zap, Brain, Bot,
  Copy, Bitcoin, Newspaper, Target, Layers, ArrowRight, ChevronRight,
  ChevronDown, ChevronUp, X, Clock, User, Calendar, Share2,
} from "lucide-react";
import Link from "next/link";
import { EDUCATION_ARTICLES, type EducationArticle } from "@/lib/education-articles";

/* ───────────────────── Learning Paths ───────────────────── */
const learningPaths = [
  {
    id: "trade-management",
    title: "Trade Management",
    desc: "For active traders learning strategies, technical analysis, and risk management to consistently profit from the forex market.",
    icon: TrendingUp,
    color: "from-[#1B3A6B] to-[#29ABE2]",
    courses: ["Forex Trading Fundamentals", "Technical Analysis Mastery", "Trading Strategies", "Risk Management & Psychology"],
  },
  {
    id: "pamm-copy",
    title: "PAMM & Copy Trading",
    desc: "For investors who want professionals to manage their capital, and for money managers building their track record on GIO4X.",
    icon: Copy,
    color: "from-[#29ABE2] to-[#06B6D4]",
    courses: ["PAMM, MAM & Copy Trading", "Risk Management & Psychology", "Fundamental Analysis"],
  },
  {
    id: "fx-basics",
    title: "FX Trading Basics",
    desc: "For complete beginners starting their forex journey — learn the language of the markets, how to read charts, and place your first trade.",
    icon: BookOpen,
    color: "from-[#06B6D4] to-[#10B981]",
    courses: ["Forex Trading Fundamentals", "GIO4X Raptor Platform Mastery", "Risk Management & Psychology"],
  },
];

/* ───────────────────── Course Modules ───────────────────── */
const courseModules = [
  {
    id: 1,
    title: "Forex Trading Fundamentals",
    icon: Globe,
    topics: "Currency pairs, pips, lots, leverage, margin, order types, market sessions, bid/ask spread",
    lessons: 12,
    duration: "4 hours",
    level: "Beginner",
    content: [
      "The foreign exchange market is the largest financial market in the world, with over $7 trillion traded daily. Unlike stock markets, forex operates 24 hours a day, 5 days a week across four major trading sessions: Sydney, Tokyo, London, and New York. Understanding when sessions overlap is critical, as these periods offer the highest liquidity and tightest spreads.",
      "Currency pairs are the foundation of forex trading. Every trade involves buying one currency while simultaneously selling another. Pairs are categorised as majors (involving USD), minors (cross pairs without USD), and exotics (a major currency paired with a developing economy's currency). GIO4X offers 60+ currency pairs across all categories.",
      "A pip (percentage in point) is the smallest standard price movement — 0.0001 for most pairs and 0.01 for JPY pairs. Lot sizes determine your position volume: a standard lot is 100,000 units, a mini lot is 10,000, and a micro lot is 1,000. On GIO4X, the minimum trade size is 0.01 lots.",
      "Leverage allows you to control a larger position with a smaller amount of capital. GIO4X offers leverage up to 500:1 on ECN accounts, meaning $200 can control a $100,000 position. While leverage amplifies profits, it equally amplifies losses — making risk management essential. Margin is the collateral required to maintain your leveraged position.",
      "Order types include market orders (instant execution at current price), limit orders (execute at a specified or better price), stop orders (triggered when price reaches a set level), and trailing stops (dynamic stop-loss that follows price movement). Mastering order types is fundamental to executing any trading strategy effectively.",
    ],
  },
  {
    id: 2,
    title: "Technical Analysis Mastery",
    icon: BarChart3,
    topics: "Candlestick patterns, support & resistance, Fibonacci, Bollinger Bands, moving averages, RSI, MACD, chart patterns",
    lessons: 24,
    duration: "10 hours",
    level: "Intermediate",
    content: [
      "Technical analysis is the study of historical price data to forecast future price movements. The core principle is that all relevant information — economic data, market sentiment, geopolitical events — is already reflected in the price. By studying charts, patterns, and indicators, technical analysts identify high-probability trade setups.",
      "Candlestick patterns are the building blocks of price action analysis. Single-candle patterns like doji (indecision), hammer (potential reversal), and marubozu (strong momentum) provide immediate insight into market sentiment. Multi-candle patterns like engulfing, morning star, evening star, and three white soldiers confirm trend reversals or continuations.",
      "Support and resistance levels are the backbone of technical trading. Support is where buying pressure prevents further decline; resistance is where selling pressure caps rises. These levels can be horizontal (fixed price levels), diagonal (trendlines), or dynamic (moving averages). When support breaks, it often becomes resistance, and vice versa — a concept called polarity.",
      "Fibonacci retracement uses the golden ratio (23.6%, 38.2%, 50%, 61.8%, 78.6%) to identify potential reversal zones during pullbacks in trending markets. Fibonacci extensions (127.2%, 161.8%, 261.8%) project potential profit targets. On GIO4X Raptor, the Fibonacci tool automatically calculates these levels when drawn on a chart.",
      "Indicators like RSI (Relative Strength Index), MACD (Moving Average Convergence Divergence), and Bollinger Bands provide quantitative signals. RSI measures momentum on a 0-100 scale (above 70 = overbought, below 30 = oversold). MACD identifies trend changes through moving average crossovers. Bollinger Bands measure volatility through standard deviation envelopes around a moving average.",
    ],
  },
  {
    id: 3,
    title: "Fundamental Analysis",
    icon: Newspaper,
    topics: "Interest rates, GDP, CPI, NFP, FOMC decisions, economic calendar, currency correlation, central bank policy",
    lessons: 14,
    duration: "6 hours",
    level: "Intermediate",
    content: [
      "Fundamental analysis examines macroeconomic factors that influence currency values. The premise is simple: currencies represent the economic health of their nation. Strong economies attract investment, driving currency appreciation; weak economies see capital outflows and currency depreciation.",
      "Interest rates are the single most important driver of currency values. Central banks (Fed, ECB, BOE, BOJ, RBA) set benchmark rates that influence borrowing costs, investment flows, and inflation. Higher interest rates attract foreign capital seeking better returns, strengthening the currency. Traders closely watch FOMC meetings (8 times per year) for US rate decisions.",
      "GDP (Gross Domestic Product) measures total economic output. Rising GDP indicates a growing economy and typically supports currency strength. CPI (Consumer Price Index) measures inflation — central banks raise rates to combat high inflation, making CPI releases market-moving events. NFP (Non-Farm Payrolls), released the first Friday of each month, reports US job creation and often causes significant USD volatility.",
      "Currency correlation measures how currency pairs move relative to each other. EUR/USD and GBP/USD are positively correlated (tend to move together), while EUR/USD and USD/CHF are negatively correlated (tend to move inversely). Understanding correlations helps avoid double exposure and identify hedging opportunities across your portfolio.",
      "The economic calendar is an essential tool for fundamental traders. It lists upcoming data releases, central bank announcements, and geopolitical events that could move markets. GIO4X Raptor integrates a real-time economic calendar directly into the platform, allowing you to prepare for high-impact events without leaving your charts.",
    ],
  },
  {
    id: 4,
    title: "Trading Strategies",
    icon: Target,
    topics: "Scalping, day trading, swing trading, position trading, hedging, breakout strategies, trend following",
    lessons: 18,
    duration: "8 hours",
    level: "Advanced",
    content: [
      "Scalping is the fastest trading style, targeting small profits (5-15 pips) over very short timeframes (1-5 minutes). Scalpers execute dozens of trades per day, relying on tight spreads, fast execution, and high win rates. GIO4X's sub-10ms execution and ECN spreads from 0.0 pips make it ideal for scalping strategies.",
      "Day trading involves opening and closing all positions within the same trading day. Day traders avoid overnight risk and swap fees by being flat before the daily close. Common day trading approaches include breakout trading (entering when price breaks key levels), momentum trading (following strong intraday moves), and range trading (buying support, selling resistance during consolidation).",
      "Swing trading captures multi-day moves over 2-14 days. Swing traders use daily and 4-hour charts to identify trends and enter on pullbacks. This style suits traders who cannot monitor charts all day, as entries and exits are planned in advance with clear stop-loss and take-profit levels. Swing trading balances the frequency of day trading with the patience of position trading.",
      "Hedging involves opening opposite positions to manage risk. A trader long EUR/USD might open a short position on the same pair (or a correlated pair like GBP/USD) to protect against adverse moves. While hedging limits profit potential, it provides protection during uncertain market conditions. GIO4X allows full hedging on all account types.",
      "Breakout strategies identify key price levels (support, resistance, chart patterns) and enter trades when price breaks through these levels with momentum. False breakouts are common, so confirmation signals (volume spike, candle close beyond the level, retest of the broken level) are essential. Trailing stops help maximise profits when genuine breakouts produce extended moves.",
    ],
  },
  {
    id: 5,
    title: "Risk Management & Psychology",
    icon: Brain,
    topics: "Position sizing, risk-reward ratio, managing emotions, overtrading prevention, trading journal, drawdown management",
    lessons: 10,
    duration: "5 hours",
    level: "All Levels",
    content: [
      "Risk management is not about avoiding losses — it is about controlling them. The 1-2% rule states that you should never risk more than 1-2% of your account on any single trade. On a $10,000 account, that means your maximum risk per trade is $100-$200. This ensures that even a streak of losses will not devastate your account.",
      "Position sizing is calculated based on your risk tolerance and stop-loss distance. Formula: Position Size = (Account Risk / Stop Loss in Pips) x Pip Value. If your account risk is $100 and your stop loss is 50 pips on EUR/USD (pip value $10/lot), your position size is $100 / (50 x $10) = 0.2 lots. Always calculate position size before entering a trade.",
      "The risk-reward ratio compares potential loss to potential profit. A minimum 1:2 ratio (risking $100 to gain $200) means you only need to win 34% of your trades to break even. Professional traders aim for 1:3 or better. Never enter a trade where the potential reward does not justify the risk — no matter how \"certain\" the setup looks.",
      "Trading psychology is arguably more important than any strategy. Common psychological traps include FOMO (entering late after a move has already happened), revenge trading (taking impulsive trades after a loss to \"get even\"), overconfidence after a winning streak (increasing position sizes recklessly), and analysis paralysis (being unable to take action despite valid setups).",
      "A trading journal is your most powerful self-improvement tool. Record every trade: date, pair, direction, entry, exit, stop-loss, take-profit, lot size, P&L, screenshot, and — critically — your emotional state and reasoning. Review your journal weekly to identify patterns in your behavior. Over time, you will discover which setups you excel at and which emotional triggers cause your worst losses.",
    ],
  },
  {
    id: 6,
    title: "GIO4X Raptor Platform Mastery",
    icon: Monitor,
    topics: "Platform navigation, advanced charting, custom indicators, algo trading IDE, Expert Advisors setup, mobile trading",
    lessons: 16,
    duration: "7 hours",
    level: "Beginner",
    content: [
      "GIO4X Raptor is our proprietary trading platform, available on Windows, macOS, iOS, Android, and web browser. The desktop version provides the most comprehensive feature set, while the mobile and web versions offer full trading functionality in a streamlined interface. All versions sync seamlessly — a trade placed on desktop appears instantly on mobile.",
      "The chart window supports 100+ technical indicators, 9 timeframes (M1 to Monthly), and multiple chart types (candlestick, bar, line, Heikin Ashi). You can open multiple charts simultaneously, tile them across monitors, and save custom workspace layouts. Drawing tools include trendlines, channels, Fibonacci retracements, rectangles, and text annotations.",
      "One-click trading enables instant order execution with a single click — essential for scalpers and fast-moving market conditions. Configure your default lot size, and a single click on the bid or ask price places a market order immediately. Combine this with Raptor's sub-10ms execution speed for the fastest possible order fills.",
      "The Algo Trading IDE (Integrated Development Environment) is built directly into Raptor. Write, backtest, and deploy automated trading strategies without leaving the platform. The IDE supports strategy development with visual backtesting, walk-forward optimisation, and live paper trading before deployment with real capital.",
      "Expert Advisors (EAs) and trading robots are fully supported. Import third-party EAs, use GIO4X's proprietary GIO Bots, or develop your own. Raptor provides full EA management tools: enable/disable, parameter adjustment, real-time performance monitoring, and drawdown controls. Run multiple EAs simultaneously across different instruments and timeframes.",
    ],
  },
  {
    id: 7,
    title: "Expert Advisors & Automated Trading",
    icon: Bot,
    topics: "EA types, backtesting, optimization, developing custom EAs, managing automated strategies, VPS setup",
    lessons: 14,
    duration: "7 hours",
    level: "Advanced",
    content: [
      "Expert Advisors (EAs) are automated trading programs that execute trades based on predefined rules without human intervention. They eliminate emotional decision-making, can monitor multiple markets simultaneously, and execute trades 24/5 without fatigue. However, EAs are not \"set and forget\" — they require monitoring, optimization, and risk controls.",
      "Types of EAs include trend-following (buy in uptrends, sell in downtrends), mean reversion (trade price returns to average), scalping (high-frequency small-profit trades), news trading (capitalize on economic releases), and grid/martingale (systematic lot size management). Each type has specific risk characteristics — scalping EAs need tight spreads, while trend-followers need trending markets.",
      "Backtesting evaluates how an EA would have performed on historical data. On GIO4X Raptor, the strategy tester replays historical price data and generates detailed performance reports: net profit, drawdown, win rate, Sharpe ratio, and trade distribution. Always backtest across multiple timeframes and market conditions — an EA that works in trending markets may fail in ranging markets.",
      "Optimization adjusts EA parameters to find the best-performing settings. However, over-optimization (curve fitting) is a dangerous trap — an EA perfectly tuned to historical data will likely fail on live markets because it has memorized past patterns rather than learning genuine market dynamics. Use walk-forward optimization and out-of-sample testing to validate robustness.",
      "Developing your own EA requires defining your strategy logic clearly, translating it into code (or using Raptor's visual strategy builder), backtesting extensively, optimizing carefully, paper-trading on a demo account, and only then deploying with real capital at small position sizes. Start simple — a basic moving average crossover EA teaches you the entire development lifecycle before you attempt complex strategies.",
    ],
  },
  {
    id: 8,
    title: "PAMM, MAM & Copy Trading",
    icon: Layers,
    topics: "How PAMM works, investor vs manager roles, MAM/LAMM differences, social trading, copy trading setup & monitoring",
    lessons: 10,
    duration: "4 hours",
    level: "Intermediate",
    content: [
      "PAMM (Percentage Allocation Management Module) is an investment model where a professional money manager trades a pooled account on behalf of multiple investors. Each investor's share of profits (and losses) is proportional to their investment. The manager earns a performance fee (typically 10-30%) only on profitable periods — aligning the manager's interests with the investors'.",
      "For investors, PAMM offers professional forex management without requiring trading knowledge. You select a manager based on their verified track record, allocate capital, and the manager's trades are applied proportionally to your allocation. You retain full visibility of your account and can withdraw at any time. GIO4X PAMM managers are screened for consistent performance and risk management discipline.",
      "MAM (Multi-Account Manager) and LAMM (Lot Allocation Management Module) are variations for professional money managers. MAM allocates trades based on equity percentage (like PAMM), while LAMM allocates based on fixed lot sizes. These tools allow managers to trade multiple client accounts from a single master interface on GIO4X Raptor.",
      "Copy trading is the most accessible form of social trading. Browse GIO4X's leaderboard of strategy providers, review their performance metrics (return, drawdown, risk score, number of followers), allocate funds, and their trades are automatically mirrored in your account. You can pause, adjust, or stop copying at any time. Minimum copy allocation is $100.",
      "Choosing the right trader or manager to follow requires due diligence: look for at least 6 months of track record, maximum drawdown under 20%, consistent (not erratic) equity curve, reasonable leverage usage, and a clear trading style that matches your risk tolerance. Diversify across multiple providers to spread risk — never allocate your entire capital to a single trader.",
    ],
  },
  {
    id: 9,
    title: "Cryptocurrency Trading",
    icon: Bitcoin,
    topics: "Blockchain basics, Bitcoin, Ethereum, stablecoins, crypto trading strategies, crypto CFDs on Raptor",
    lessons: 12,
    duration: "5 hours",
    level: "Intermediate",
    content: [
      "Cryptocurrency represents a fundamental shift in financial technology. Built on blockchain — a decentralized, immutable ledger — cryptocurrencies operate without central authority. Bitcoin, created in 2009, demonstrated that digital scarcity and peer-to-peer value transfer were possible. Today, thousands of cryptocurrencies serve different purposes across the financial ecosystem.",
      "Bitcoin (BTC) is the original cryptocurrency and remains the market benchmark. Its fixed supply of 21 million coins creates digital scarcity, driving its \"digital gold\" narrative. Ethereum (ETH) introduced smart contracts — self-executing agreements that power decentralized finance (DeFi), NFTs, and decentralized applications. Understanding the technology behind each cryptocurrency is essential for fundamental analysis.",
      "Stablecoins (USDT, USDC, DAI) are pegged to fiat currencies, providing the stability needed for trading and as a safe haven during crypto market downturns. They serve as bridge currencies between crypto and traditional finance. Utility tokens (UNI, FIL, LINK) provide access to specific blockchain services and derive their value from the usage of their respective platforms.",
      "On GIO4X Raptor, you trade cryptocurrency CFDs — speculating on price movements without owning the underlying asset. This means no wallet management, no private key security concerns, and no blockchain transaction fees. Crypto CFDs are available 24/7 with leverage, allowing you to go both long (buy) and short (sell) across major cryptocurrencies.",
      "Crypto trading strategies include trend following (riding major bull or bear cycles), range trading (buying support/selling resistance during consolidation), news trading (reacting to regulatory announcements, exchange listings, and technological developments), and correlation trading (exploiting relationships between Bitcoin and altcoins). Risk management is especially critical given crypto's high volatility.",
    ],
  },
  {
    id: 10,
    title: "News Trading",
    icon: Zap,
    topics: "Economic indicators impact, geopolitical events, developing news trading strategies, volatility management",
    lessons: 8,
    duration: "3 hours",
    level: "Advanced",
    content: [
      "News trading capitalises on the sharp price movements that occur when economic data is released. High-impact events like NFP, FOMC rate decisions, CPI, and GDP figures can move currency pairs by 50-200 pips within minutes. News traders position themselves to profit from this volatility by either trading the initial spike or the post-news correction.",
      "Key economic indicators and their typical market impact: Interest Rate Decisions (highest impact — directly affects currency valuation), Non-Farm Payrolls (high impact — moves USD pairs significantly), CPI/Inflation (high impact — signals future rate changes), GDP (medium-high impact — measures economic health), Retail Sales (medium impact — consumer spending indicator), PMI (medium impact — leading economic indicator).",
      "Geopolitical events including elections, trade wars, military conflicts, and natural disasters can cause sudden, dramatic currency movements. Unlike scheduled economic releases, geopolitical events are often unexpected, making risk management crucial. During heightened geopolitical uncertainty, safe-haven currencies (USD, JPY, CHF, gold) tend to strengthen while risk currencies (AUD, NZD, emerging market currencies) weaken.",
      "A news trading strategy requires preparation: check the economic calendar for upcoming releases, know the consensus forecast and previous reading, set alerts for the release time, pre-define your entry criteria and risk parameters, and be prepared for either outcome. Many news traders use straddle orders — placing both a buy stop and sell stop above and below current price to catch the move regardless of direction.",
      "Risk management during news events is critical. Spreads widen significantly during high-impact releases, slippage increases, and price gaps are common. Never use excessive leverage during news events, always use stop-losses (though be aware they may be filled at worse prices), and consider reducing position sizes. Some traders prefer to wait for the initial volatility to settle and trade the secondary move — sacrificing the first spike for more orderly execution.",
    ],
  },
];

/* ───────────────────── Categories & Articles ───────────────────── */
const categories = [
  { id: "all", label: "All" },
  { id: "getting-started", label: "Getting Started" },
  { id: "technical", label: "Technical Analysis" },
  { id: "fundamental", label: "Fundamental Analysis" },
  { id: "risk", label: "Risk Management" },
  { id: "platform", label: "Platform Guides" },
];

const articles = [
  { title: "Introduction to Forex Trading", category: "getting-started", readTime: "8 min", icon: BookOpen, desc: "Learn the basics of the forex market, how currency pairs work, and how to place your first trade on GIO4X Raptor." },
  { title: "Understanding Currency Pairs", category: "getting-started", readTime: "6 min", icon: Globe, desc: "Majors, minors, and exotics — understand how the 41 currency pairs available on GIO4X are quoted and traded." },
  { title: "What is Leverage & Margin?", category: "getting-started", readTime: "7 min", icon: Shield, desc: "Learn how leverage up to 1:1000 amplifies your buying power and the risks and rewards of margin trading." },
  { title: "Candlestick Patterns Masterclass", category: "technical", readTime: "15 min", icon: BarChart3, desc: "Master essential candlestick patterns including doji, hammer, engulfing, and morning/evening star formations. Learn to read price action like a professional." },
  { title: "Support & Resistance Levels", category: "technical", readTime: "10 min", icon: BarChart3, desc: "Master the art of identifying support and resistance zones for better entry and exit points. Learn horizontal levels, trendlines, and dynamic S/R." },
  { title: "Moving Averages Strategy", category: "technical", readTime: "12 min", icon: BarChart3, desc: "How to use SMA, EMA, and moving average crossovers to identify trends and generate trading signals." },
  { title: "Fibonacci Retracement Guide", category: "technical", readTime: "11 min", icon: BarChart3, desc: "Use Fibonacci levels (23.6%, 38.2%, 50%, 61.8%) to identify potential reversal points in trending markets and set precise entry targets." },
  { title: "RSI and MACD Strategies", category: "technical", readTime: "13 min", icon: BarChart3, desc: "Combine the Relative Strength Index and MACD indicator to identify overbought/oversold conditions and momentum shifts." },
  { title: "Bollinger Bands Trading", category: "technical", readTime: "10 min", icon: BarChart3, desc: "Learn how to use Bollinger Bands to measure volatility, identify squeeze patterns, and time your entries and exits." },
  { title: "Trading the News", category: "fundamental", readTime: "9 min", icon: Globe, desc: "How economic releases like NFP, CPI, and interest rate decisions move the forex markets and how to position yourself." },
  { title: "Central Bank Policies Explained", category: "fundamental", readTime: "10 min", icon: Globe, desc: "Understand how central bank decisions on interest rates affect currency valuations and long-term trends." },
  { title: "Risk-Reward Ratio Explained", category: "risk", readTime: "7 min", icon: Shield, desc: "Why risk-reward ratios matter and how to calculate them for every trade to improve long-term profitability." },
  { title: "Position Sizing Strategies", category: "risk", readTime: "9 min", icon: Shield, desc: "The Kelly Criterion, fixed fractional, and other methods to determine optimal trade size based on your account." },
  { title: "Managing Trading Psychology", category: "risk", readTime: "8 min", icon: Shield, desc: "Overcome fear, greed, and emotional trading with proven psychological techniques used by professional traders." },
  { title: "Getting Started with GIO4X Raptor", category: "platform", readTime: "10 min", icon: Monitor, desc: "A complete walkthrough of the Raptor platform, from installation to placing your first trade on all supported devices." },
  { title: "Setting Up Custom Indicators", category: "platform", readTime: "8 min", icon: Monitor, desc: "Learn how to add, configure, and create custom technical indicators on Raptor using 100+ built-in options." },
  { title: "Using the Algo Trading IDE", category: "platform", readTime: "14 min", icon: Monitor, desc: "Build, backtest, and deploy automated trading strategies with Raptor's built-in algorithmic trading IDE." },
  { title: "Setting Up EAs and Trading Robots", category: "platform", readTime: "10 min", icon: Monitor, desc: "Step-by-step guide to installing and configuring Expert Advisors and Trading Robots on the GIO4X Raptor platform." },
];

/* ───────────────────── Learning Formats ───────────────────── */
const learningFormats = [
  { icon: Video, title: "Live Webinars", desc: "Join live webinar sessions with market experts covering technical analysis, fundamental analysis, and trading strategies. Interactive Q&A included." },
  { icon: Presentation, title: "In-Person Seminars", desc: "Attend seminars in key cities across India, UAE, UK, and Singapore. Hands-on learning with experienced traders and networking opportunities." },
  { icon: Users, title: "Zoom Classes", desc: "Interactive Zoom classes for hands-on learning in small groups. Perfect for traders who want personalized attention and real-time market walkthroughs." },
  { icon: FileText, title: "Research Reports", desc: "Weekly and monthly research reports covering market outlook, currency pair analysis, and trading opportunities. Free for all GIO4X clients." },
];

/* ───────────────────── Featured Topics ───────────────────── */
const featuredTopics = [
  {
    title: "Candlestick Patterns",
    content: [
      "Candlestick patterns are the foundation of price action analysis. Understanding formations like doji, hammer, engulfing, and morning/evening star patterns gives you insight into market sentiment and potential reversals. At GIO4X Academy, our Candlestick Patterns Masterclass covers over 30 patterns with real chart examples and practical trading strategies.",
      "Single-candle patterns provide immediate insight into the balance between buyers and sellers within a given period. A doji indicates indecision — the open and close are nearly equal, signaling that neither bulls nor bears have control. A hammer, with its small body and long lower wick, suggests that sellers pushed price down but buyers regained control by the close, often signaling a reversal at support levels.",
      "Multi-candle patterns tell a more complete story. The bullish engulfing pattern occurs when a large green candle completely engulfs the previous red candle, indicating a shift from selling to buying pressure. Morning star and evening star are three-candle reversal patterns that mark major turning points. Three white soldiers — three consecutive large green candles — confirm the beginning of a strong uptrend. Learning to combine these patterns with support/resistance levels and volume analysis dramatically improves their reliability.",
    ],
    link: "Read the full Candlestick Masterclass",
  },
  {
    title: "Fibonacci Retracement",
    content: [
      "Fibonacci retracement levels (23.6%, 38.2%, 50%, 61.8%, and 78.6%) are among the most widely used tools in technical analysis. They help identify potential support and resistance levels where price may reverse during a pullback in a trending market. Our guide teaches you how to draw Fibonacci levels correctly, combine them with other indicators, and use them for precise entry and exit points on the GIO4X Raptor platform.",
      "The mathematics behind Fibonacci are rooted in the golden ratio (1.618), a proportion found throughout nature, architecture, and financial markets. When a trending market pulls back, traders watch these key ratios to identify where the pullback might end and the original trend resume. The 38.2% and 61.8% levels are considered the most significant — a pullback to the 38.2% level suggests a strong trend, while a deeper retracement to 61.8% may indicate weakening momentum.",
      "Fibonacci extensions (127.2%, 161.8%, 261.8%) project potential profit targets beyond the original swing. After entering a trade at a Fibonacci retracement level, traders use extension levels to set take-profit orders. On GIO4X Raptor, the Fibonacci tool automatically calculates both retracement and extension levels when you draw from swing low to swing high (or vice versa). Combining Fibonacci with candlestick confirmation patterns and volume analysis creates some of the highest-probability trade setups in technical analysis.",
    ],
    link: "Read the full Fibonacci Guide",
  },
  {
    title: "Support & Resistance",
    content: [
      "Support and resistance levels are the backbone of technical analysis. Support is a price level where buying pressure is strong enough to prevent further decline, while resistance is where selling pressure caps upward movement. Mastering these concepts — including horizontal levels, trendlines, and dynamic support/resistance using moving averages — is essential for timing entries, setting stop-losses, and identifying breakout opportunities.",
      "There are multiple types of support and resistance. Horizontal S/R levels are fixed price zones where price has historically reversed. Trendlines act as diagonal support or resistance in trending markets. Dynamic S/R uses moving averages — the 50-period and 200-period moving averages are watched by institutional traders worldwide, making them self-fulfilling levels. Round numbers (1.2000, 1.3000) also act as psychological support and resistance.",
      "The concept of polarity states that when a support level is broken, it often becomes resistance on the next rally — and vice versa. This is one of the most reliable principles in technical analysis. Breakout traders watch for price to close convincingly beyond a key level, then wait for a retest of that level (now acting in its new role) before entering. This approach significantly reduces false breakout entries and improves risk-reward ratios on every trade.",
    ],
    link: "Read the full Support & Resistance Guide",
  },
  {
    title: "Top 10 Traders of All Time",
    content: [
      "Study the strategies and philosophies of the greatest traders in history. George Soros broke the Bank of England shorting GBP. Stanley Druckenmiller mastered macro trading under Soros. Bill Lipschutz turned $12,000 into millions trading forex at Salomon Brothers. Paul Tudor Jones predicted the 1987 crash. Learn from their risk management, conviction, and adaptability — and apply their timeless principles to your own trading on GIO4X.",
      "What separates legendary traders from the rest is not just their strategies but their mindset and risk discipline. George Soros famously said, \"It's not whether you're right or wrong, but how much money you make when you're right and how much you lose when you're wrong.\" Every top trader has experienced devastating losses — what defines them is their ability to manage risk, cut losses quickly, and let winners run. Bill Lipschutz reportedly lost his entire early trading fortune before rebuilding it with strict risk controls.",
      "The common thread among all great traders is continuous learning and adaptation. Markets evolve, and strategies that worked a decade ago may not work today. Paul Tudor Jones constantly evolves his approach while maintaining core risk management principles. Jesse Livermore, the original \"Boy Plunger\" of Wall Street, demonstrated that reading market psychology and controlling emotions are timeless skills. At GIO4X Academy, we distill these lessons into actionable principles you can apply to your own trading journey — regardless of your account size or experience level.",
    ],
    link: "Read the full Top 10 Traders Guide",
  },
];

/* ───────────────────── Level Badge Colors ───────────────────── */
function levelVariant(level: string) {
  switch (level) {
    case "Beginner": return "success" as const;
    case "Intermediate": return "sky" as const;
    case "Advanced": return "warning" as const;
    default: return "default" as const;
  }
}

/* ═══════════════════════ PAGE ═══════════════════════ */
/* ───────────────────── Article Title → Data Lookup ───────────────────── */
const articleLookup: Record<string, EducationArticle> = {};
EDUCATION_ARTICLES.forEach((a) => { articleLookup[a.title] = a; });

/* ═══════════════════════ PAGE ═══════════════════════ */
export default function EducationPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activePath, setActivePath] = useState("trade-management");
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<EducationArticle | null>(null);
  const filtered = activeCategory === "all" ? articles : articles.filter((a) => a.category === activeCategory);

  const toggleCourse = (id: number) => {
    setExpandedCourse((prev) => (prev === id ? null : id));
  };

  /* ── Article modal: Escape key handler ── */
  const handleEscape = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedArticle(null); },
    []
  );

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedArticle, handleEscape]);

  return (
    <>
      {/* ─── Hero with animated gradient orbs ─── */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 -left-32 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #29ABE2 0%, transparent 70%)" }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #1B3A6B 0%, transparent 70%)" }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)" }}
          animate={{ x: [0, 20, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-site text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">GIO4X Academy</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[var(--text-h1)] font-bold mt-4 mb-6">
            Master the Markets with <span className="gradient-text">Confidence</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[var(--color-text-secondary)] text-lg max-w-3xl mx-auto mb-8">
            Welcome to GIO4X Academy — the most comprehensive forex education platform. 10 full courses,
            150+ lessons, live webinars, in-person seminars, and interactive Zoom classes. From your first pip
            to automated trading mastery — all free for GIO4X clients.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-3">
            <Button href="/accounts">Start Learning Free</Button>
            <Button variant="secondary" href="#courses">Browse Courses</Button>
          </motion.div>
        </div>
      </section>

      {/* ─── Quick Stats ─── */}
      <section className="pb-12">
        <div className="max-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FileText, value: "150+", label: "Lessons & Guides" },
              { icon: PlayCircle, value: "50+", label: "Video Lessons" },
              { icon: GraduationCap, value: "10", label: "Full Courses" },
              { icon: BookOpen, value: "Free", label: "For All Clients" },
            ].map((s, i) => (
              <AnimateOnScroll key={s.label} delay={i * 0.1}>
                <div className="glass-panel p-5 text-center">
                  <s.icon className="w-7 h-7 text-[#29ABE2] mx-auto mb-2" />
                  <p className="text-2xl font-bold font-mono">{s.value}</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">{s.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Learning Paths ─── */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading
            eyebrow="Choose Your Path"
            title="3 Learning Tracks"
            subtitle="Whether you're a beginner, active trader, or investor — we have a structured path for you."
          />

          {/* Path Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {learningPaths.map((path) => (
              <button
                key={path.id}
                onClick={() => setActivePath(path.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  activePath === path.id
                    ? `bg-gradient-to-r ${path.color} text-white shadow-lg`
                    : "bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                }`}
              >
                <path.icon className="w-4 h-4" />
                {path.title}
              </button>
            ))}
          </div>

          {/* Active Path Detail */}
          {learningPaths.filter((p) => p.id === activePath).map((path) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${path.color}`}>
                  <path.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{path.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{path.desc}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-wider uppercase text-[var(--color-text-secondary)] mb-3">Recommended Courses</p>
                {path.courses.map((course, ci) => (
                  <div key={course} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-glass-bg)] hover:bg-[var(--color-glass-bg-hover)] transition-colors">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1B3A6B] to-[#29ABE2] text-white text-xs font-bold">{ci + 1}</span>
                    <span className="text-sm font-medium flex-1">{course}</span>
                    <ChevronRight className="w-4 h-4 text-[var(--color-text-secondary)]" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Course Modules Grid ─── */}
      <section id="courses" className="section-padding">
        <div className="max-site">
          <SectionHeading
            eyebrow="Curriculum"
            title="10 Comprehensive Courses"
            subtitle="From forex fundamentals to automated trading — a complete curriculum designed for traders at every level."
          />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {courseModules.map((course, i) => (
              <AnimateOnScroll key={course.id} delay={i * 0.05}>
                <Card className="h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-[#1B3A6B]/20 to-[#29ABE2]/20 shrink-0">
                      <course.icon className="w-5 h-5 text-[#29ABE2]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <Badge variant={levelVariant(course.level)}>{course.level}</Badge>
                        <span className="text-xs text-[var(--color-text-secondary)]">{course.lessons} lessons</span>
                        <span className="text-xs text-[var(--color-text-secondary)]">{course.duration}</span>
                      </div>
                      <h3 className="font-semibold leading-snug">{course.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">{course.topics}</p>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {expandedCourse === course.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[var(--color-border)] pt-4 mb-4 space-y-3">
                          {course.content.map((paragraph, pi) => (
                            <p key={pi} className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => toggleCourse(course.id)}
                    className="self-start mt-auto flex items-center gap-1.5 text-sm font-semibold text-[#29ABE2] hover:text-[#29ABE2]/80 transition-colors"
                  >
                    {expandedCourse === course.id ? (
                      <>
                        Show Less <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Learning Formats ─── */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="How You Learn" title="Multiple Learning Formats" subtitle="Choose the format that fits your learning style. All formats are free for GIO4X account holders." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {learningFormats.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 0.1}>
                <Card className="h-full text-center">
                  <f.icon className="w-10 h-10 text-[#29ABE2] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{f.desc}</p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Filter + Articles ─── */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading eyebrow="Library" title="Articles & Guides" subtitle="Comprehensive articles covering candlestick patterns, Fibonacci retracement, support and resistance, risk management, and more." />
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#1B3A6B] to-[#29ABE2] text-white"
                    : "bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((article, i) => (
              <AnimateOnScroll key={article.title} delay={i * 0.05}>
                <Card className="h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="sky">
                      {categories.find((c) => c.id === article.category)?.label}
                    </Badge>
                    <span className="text-xs text-[var(--color-text-secondary)]">{article.readTime} read</span>
                  </div>
                  <h3 className="font-semibold mb-2 leading-snug">{article.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] flex-1 mb-4">{article.desc}</p>
                  <Button variant="ghost" size="sm" onClick={() => { const match = articleLookup[article.title]; if (match) setSelectedArticle(match); }}>Read Article</Button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Topics Deep Dive ─── */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-4xl">
          <SectionHeading eyebrow="Featured" title="Essential Trading Concepts" subtitle="Key topics every forex trader should master." />
          <div className="space-y-5">
            {featuredTopics.map((topic, i) => (
              <AnimateOnScroll key={topic.title} delay={i * 0.1}>
                <div className="glass-panel p-8">
                  <h3 className="text-lg font-bold mb-3">{topic.title}</h3>
                  <div className="space-y-3 mb-4">
                    {topic.content.map((paragraph, pi) => (
                      <p key={pi} className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <Link href="/education" className="text-sm text-[#29ABE2] font-semibold hover:underline inline-flex items-center gap-1">
                    {topic.link} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA for Education ─── */}
      <section className="section-padding">
        <div className="max-site max-w-3xl text-center">
          <AnimateOnScroll>
            <GraduationCap className="w-12 h-12 text-[#29ABE2] mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Start Learning Today — It&apos;s Free</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              All GIO4X Academy resources — 10 courses, 150+ lessons, webinars, seminars, Zoom classes, and research reports — are completely free
              for GIO4X clients. Open an account today and gain access to everything you need to trade with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/accounts">Open Free Account</Button>
              <Button variant="secondary" href="/platforms">Explore Raptor Platform</Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── Article Popup Modal ─── */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={selectedArticle.title}
          >
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedArticle(null)} />

            {/* Modal card */}
            <motion.article
              className="relative z-10 w-full max-w-[720px] mx-4 my-8 sm:my-16 glass-panel rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[var(--color-glass-bg)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="p-6 sm:p-8 pb-0">
                <Badge variant="sky" className="mb-4">
                  {selectedArticle.category}
                </Badge>

                <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-4 pr-8">
                  {selectedArticle.title}
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-secondary)] mb-6">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {selectedArticle.author}
                    <span className="hidden sm:inline">&middot; {selectedArticle.authorRole}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {selectedArticle.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {selectedArticle.readTime}
                  </span>
                </div>

                <div className="h-px bg-[var(--color-border)]" />
              </div>

              {/* Article Content */}
              <div
                className="p-6 sm:p-8 prose-blog"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />

              {/* Footer */}
              <div className="p-6 sm:p-8 pt-0">
                <div className="h-px bg-[var(--color-border)] mb-6" />

                {/* Tags / Keywords */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedArticle.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Share row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </div>
                  <Button variant="secondary" size="sm" onClick={() => setSelectedArticle(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABand />
    </>
  );
}
