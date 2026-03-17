"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqCategories = [
  { id: "all", label: "All" },
  { id: "popular", label: "Popular" },
  { id: "margin", label: "Margin & Leverage" },
  { id: "accounts", label: "Accounts & Platform" },
  { id: "trading", label: "Trading" },
  { id: "ib", label: "IB & Affiliates" },
  { id: "copy", label: "Copy Trading" },
  { id: "security", label: "Security & Funding" },
  { id: "basics", label: "Forex Basics" },
  { id: "cfds", label: "CFDs" },
];

const faqs = [
  // Popular (10)
  { cat: "popular", q: "How long does a withdrawal take?", a: "Withdrawal requests are processed within 1\u20132 business days. If you submit your withdrawal form before 7:00 AM IST, it will be processed the same day. E-wallet and crypto withdrawals are typically faster than bank wire transfers." },
  { cat: "popular", q: "Are there deposit or withdrawal fees?", a: "GIO4X does not charge any internal deposit fees. For withdrawals, bank wire transfers carry a $25 processing fee. E-wallet withdrawals (Skrill, Neteller) and cryptocurrency withdrawals are completely free of charge." },
  { cat: "popular", q: "How do I update my account details?", a: "To update your personal or account details, submit a request through the GIO4X client portal. You will need to provide a valid government-issued ID for verification purposes. Changes are typically processed within 1\u20132 business days." },
  { cat: "popular", q: "How do I change my password?", a: "You can change your password directly through the client portal under Settings > Security. Alternatively, you can contact our support team for assistance with password resets. We recommend using a strong, unique password and enabling two-factor authentication." },
  { cat: "popular", q: "Is GIO4X regulated?", a: "GIO4X operates under Icareforex Ltd, Registration Number: 15807, registered in the Union of Comoros. We maintain strict compliance with KYC/AML regulations and hold all client funds in segregated accounts at reliable banking institutions." },
  { cat: "popular", q: "How long does it take for funds to clear?", a: "Credit/debit card and e-wallet deposits are processed instantly and reflected in your trading account right away. Bank wire transfers typically take 1\u20133 business days to clear depending on your bank and jurisdiction." },
  { cat: "popular", q: "Why do FX swaps triple on Wednesdays?", a: "FX swaps triple on Wednesdays to account for the weekend rollover period. Since forex markets are closed on Saturday and Sunday, the Wednesday swap charge covers three days of financing \u2014 Wednesday night, Saturday, and Sunday. This is an industry-standard practice across all forex brokers." },
  { cat: "popular", q: "Can I use Expert Advisors and robots?", a: "Yes, all Expert Advisors (EAs) and automated trading robots are fully supported on the GIO4X Raptor platform. You can run custom algorithms, use third-party EAs, or develop your own strategies using our built-in Algo Trading IDE." },
  { cat: "popular", q: "What leverage does GIO4X offer?", a: "GIO4X offers leverage up to 500:1 depending on your account type and the instrument being traded. Classic accounts offer up to 200:1, Premium up to 400:1, and ECN accounts up to 500:1. Leverage may vary for different asset classes." },
  { cat: "popular", q: "What is the minimum deposit?", a: "The minimum deposit varies by account type: Classic account requires $150, Premium account requires $500, and ECN account requires $2,000. All accounts can be funded via cards, bank wire, e-wallets, or cryptocurrency." },

  { cat: "popular", q: "Does GIO4X offer negative balance protection?", a: "Yes, GIO4X provides negative balance protection on all account types. This means your account balance can never go below zero, even in extreme market conditions. If a position moves against you beyond your available funds, we absorb the loss." },
  { cat: "popular", q: "Can I open an Islamic (swap-free) account?", a: "Yes, GIO4X offers swap-free Islamic accounts that comply with Sharia principles. No overnight interest is charged or credited on these accounts. To activate this feature, contact our support team after opening your live account." },

  // Margin & Leverage (6)
  { cat: "margin", q: "What is margin in forex trading?", a: "Margin is the amount of capital required to open and maintain a leveraged trading position. It acts as a good-faith deposit or collateral held by the broker. Margin is not a fee or cost \u2014 it is simply a portion of your account equity set aside to keep your trade open." },
  { cat: "margin", q: "How is margin calculated?", a: "Margin is calculated using the formula: Trade Size \u00f7 Leverage = Required Margin. For example, if you open a $100,000 position with 500:1 leverage, your required margin is $100,000 \u00f7 500 = $200. The margin requirement varies depending on the instrument and your account leverage settings." },
  { cat: "margin", q: "What happens during a margin call?", a: "A margin call is triggered when your margin level drops to 100%. This means your equity equals or falls below your used margin. At this point, you will need to either deposit additional funds or close some open positions to bring your margin level back above the threshold. You will receive a notification when a margin call occurs." },
  { cat: "margin", q: "What is leverage?", a: "Leverage is essentially borrowed capital that allows you to increase the size of your trading position beyond what your own funds would permit. With 500:1 leverage, every $1 in your account controls $500 in the market. While leverage amplifies potential profits, it equally amplifies potential losses." },
  { cat: "margin", q: "Can I change my leverage?", a: "Yes, you can change your leverage settings through the GIO4X client portal under Account Settings. Leverage adjustments take effect immediately on new positions. You can also contact our support team for assistance. Note that changing leverage affects your margin requirements on open positions." },
  { cat: "margin", q: "What is the stop out level?", a: "The stop out level at GIO4X is set at 30%. When your margin level falls to 30%, the system will automatically begin closing your most unprofitable positions to protect your account from a negative balance. This is a safeguard mechanism to prevent losses from exceeding your deposited funds." },

  { cat: "margin", q: "What is free margin?", a: "Free margin is the difference between your account equity and used margin. It represents the funds available to open new positions or absorb losses on existing positions. If your free margin reaches zero, you cannot open new trades and may face a margin call." },
  { cat: "margin", q: "What is margin level percentage?", a: "Margin level is calculated as (Equity / Used Margin) x 100%. It indicates the health of your account. Above 100% is safe, at 100% a margin call is triggered, and at 30% the stop out level activates. Monitoring your margin level is essential for effective risk management." },

  // Accounts & Platform (8)
  { cat: "accounts", q: "Does GIO4X withhold taxes on trading profits?", a: "No, GIO4X does not withhold taxes on your trading profits. As a trader, you are solely responsible for reporting and paying taxes on your trading income in accordance with the tax laws of your country of residence. We recommend consulting a tax professional for guidance." },
  { cat: "accounts", q: "How long is a demo account valid?", a: "Demo accounts are valid for 30 days from the date of creation. They come preloaded with virtual funds so you can practice trading in real market conditions without any risk. If your demo account expires, you can request a renewal by contacting our support team." },
  { cat: "accounts", q: "How do I get my trading statement?", a: "Trading statements can be generated directly from the GIO4X client portal under the Reports section. You can also export your trading history from the Raptor platform. Statements are available in PDF and CSV formats and can be filtered by date range, instrument, or account." },
  { cat: "accounts", q: "What platforms are available?", a: "GIO4X offers the proprietary Raptor platform across multiple devices: Raptor Desktop (Windows and macOS), Raptor WebTrader (accessible from any modern browser), and Raptor Mobile (available on both iOS and Android). All platforms sync seamlessly with your trading account." },
  { cat: "accounts", q: "What account types are available?", a: "GIO4X offers three account types tailored to different trading needs: Classic (min $150, spreads from 1.2 pips, up to 200:1 leverage), Premium (min $500, spreads from 0.5 pips, up to 400:1 leverage), and ECN (min $2,000, raw spreads from 0.0 pips, up to 500:1 leverage)." },
  { cat: "accounts", q: "Can I have multiple trading accounts?", a: "Yes, you can open and manage multiple trading accounts from a single GIO4X client portal. This allows you to separate strategies, test different approaches, or use different account types simultaneously. There is no limit to the number of accounts you can hold." },
  { cat: "accounts", q: "What instruments can I trade?", a: "GIO4X offers a wide range of tradable instruments including Forex (60+ currency pairs), Metals (gold, silver, platinum), Commodities (oil, natural gas), Indices (S&P 500, NASDAQ, DAX, and more), Cryptocurrencies (BTC, ETH, and others), and global Stocks as CFDs." },
  { cat: "accounts", q: "How do I open a live trading account?", a: "Opening a live account is straightforward: register on the GIO4X website, complete the KYC verification process by submitting your government-issued ID and proof of address, then fund your account using any of our accepted payment methods. The entire process can be completed in under 15 minutes." },

  { cat: "accounts", q: "Is there an API for algorithmic trading?", a: "Yes, GIO4X offers FIX 4.4 API access for institutional clients and advanced algorithmic traders. The API provides direct market access, real-time streaming prices, and programmatic order management. Contact our team for API documentation and access credentials." },
  { cat: "accounts", q: "Can I open a swap-free (Islamic) account type?", a: "Yes, swap-free accounts are available on all account types (Classic, Premium, ECN). These accounts comply with Islamic finance principles by not charging or crediting overnight swap fees. Contact support to enable this feature on your account." },

  // Trading (10)
  { cat: "trading", q: "What are the trading hours?", a: "Forex markets are open 24 hours a day, 5 days a week \u2014 from Sunday 5:00 PM EST to Friday 5:00 PM EST. Specific instruments may have different trading hours. Cryptocurrency CFDs are available for trading 24/7. Detailed trading hours for each instrument are listed on our Markets page." },
  { cat: "trading", q: "What is a pip?", a: "A pip (percentage in point) is the smallest standard price movement in a currency pair. For most forex pairs, one pip equals 0.0001 (the fourth decimal place). For JPY pairs, one pip equals 0.01 (the second decimal place). Pips are used to measure price changes and calculate profit or loss." },
  { cat: "trading", q: "What is a spread?", a: "The spread is the difference between the bid (sell) price and the ask (buy) price of an instrument. It represents the primary cost of trading. GIO4X offers competitive spreads starting from 0.0 pips on ECN accounts. Spreads vary by instrument and market conditions, and tend to widen during high-volatility events." },
  { cat: "trading", q: "What order types are available?", a: "GIO4X supports a comprehensive range of order types: Market Orders (instant execution), Limit Orders (buy/sell at a specified price), Stop Orders (triggered when price reaches a set level), Stop-Limit Orders, Trailing Stop Orders (dynamic stop-loss that follows price), and OCO (One-Cancels-Other) orders for advanced risk management." },
  { cat: "trading", q: "What is slippage?", a: "Slippage occurs when the price at which your order is executed differs from the price at which it was requested. This typically happens during periods of high volatility or low liquidity. Slippage can be positive (better price) or negative (worse price). GIO4X minimizes slippage through our Equinix LD4/NY4 infrastructure and deep liquidity pools." },
  { cat: "trading", q: "What is a swap or rollover fee?", a: "A swap (also called rollover) is a fee charged or credited for holding a trading position overnight past the daily rollover time. The swap rate depends on the interest rate differential between the two currencies in the pair. Swaps triple on Wednesdays to account for the weekend when markets are closed." },
  { cat: "trading", q: "How fast is order execution?", a: "GIO4X delivers sub-10 millisecond order execution speeds, powered by our infrastructure hosted at Equinix LD4 (London) and NY4 (New York) data centers. This ultra-low latency ensures your orders are filled at the best available prices with minimal slippage." },
  { cat: "trading", q: "What is hedging?", a: "Hedging is a risk management strategy that involves opening opposite positions on the same instrument. For example, holding both a buy and a sell position on EUR/USD simultaneously. This allows traders to manage risk and protect against adverse price movements without closing their original position." },
  { cat: "trading", q: "Can I trade on mobile?", a: "Yes, GIO4X offers full-featured trading on both iOS and Android devices through the Raptor Mobile app. You get access to real-time charts, all order types, account management, push notifications for price alerts, and one-tap trading \u2014 all synced with your desktop and web accounts." },
  { cat: "trading", q: "What is copy trading?", a: "Copy trading allows you to automatically replicate the trades of experienced, successful traders in real time. You browse the leaderboard, select a strategy provider based on their performance statistics and risk profile, allocate funds, and their trades are mirrored in your account proportionally. It is ideal for beginners or those who prefer a hands-off approach." },

  { cat: "trading", q: "What is a lot size?", a: "A lot is the standard unit of measurement in forex trading. A standard lot equals 100,000 units of the base currency, a mini lot equals 10,000 units, and a micro lot equals 1,000 units. GIO4X supports all lot sizes with a minimum trade size of 0.01 lots (micro lot)." },
  { cat: "trading", q: "Do you allow scalping?", a: "Yes, scalping is fully permitted on all GIO4X account types. Our sub-10ms execution speeds and deep liquidity pools make GIO4X an ideal environment for scalping strategies. There are no restrictions on minimum holding times or trade frequency." },

  // IB & Affiliates (8)
  { cat: "ib", q: "What is the IB program?", a: "The GIO4X Introducing Broker (IB) program allows you to earn rebates on every trade your referred clients make. As an IB, you receive a unique referral link, access to a real-time tracking dashboard, and dedicated partnership support. It is a powerful way to build a recurring income stream." },
  { cat: "ib", q: "How do I become an IB?", a: "To become an IB, apply through our partner portal by completing the application form. Once your application is reviewed and approved, you will be onboarded with a personal partnership manager, receive your unique referral links, and gain access to your IB dashboard for tracking referrals and commissions." },
  { cat: "ib", q: "What are the IB rebate rates?", a: "IB rebate rates are customizable and industry-leading, tailored to your specific partnership during the onboarding process. Rates are agreed upon based on expected volume and referral quality. Contact our partnerships team to discuss the best rates for your business." },
  { cat: "ib", q: "When do IBs get paid?", a: "IB commissions are calculated daily and payouts are available on a daily basis with instant withdrawal. You can track your earnings in real time through the IB dashboard and withdraw your commissions at any time without any minimum threshold." },
  { cat: "ib", q: "Can I have sub-IBs?", a: "Yes, GIO4X supports a multi-tier sub-IB structure with unlimited depth. You can recruit other IBs under your network and earn additional commissions from their referrals. This allows you to build a scalable partnership network and maximize your earnings potential." },
  { cat: "ib", q: "What is the affiliate program?", a: "The GIO4X affiliate program allows you to earn a CPA (Cost Per Acquisition) of up to $800 or a revenue share model per qualified lead. The program is designed for marketers, content creators, and financial influencers who can drive quality traffic to GIO4X." },
  { cat: "ib", q: "What marketing materials are provided?", a: "GIO4X provides a comprehensive suite of marketing materials including professionally designed banners in multiple sizes, customizable landing pages, email templates, branded content, promotional videos, and widgets. All materials are available in multiple languages and are regularly updated." },
  { cat: "ib", q: "Is there a minimum referral requirement?", a: "No, there is no minimum referral requirement to participate in our IB or affiliate program. You start earning from your very first referral. There are no monthly quotas or minimum volume requirements to maintain your partnership status." },

  // Copy Trading (8)
  { cat: "copy", q: "How does copy trading work?", a: "Copy trading is simple: browse the leaderboard of strategy providers, select a trader based on their performance metrics, allocate funds from your account, and their trades are automatically copied to your account in proportion to your allocation. You maintain full control and can adjust or stop at any time." },
  { cat: "copy", q: "What is the minimum for copy trading?", a: "The minimum allocation for copy trading is $100. This amount is dedicated to copying a specific trader\u2019s strategy. You can allocate different amounts to different traders and adjust your allocations as you see fit." },
  { cat: "copy", q: "How are profits shared in copy trading?", a: "Profits are shared through a performance fee set by the strategy provider, typically ranging from 10% to 30% of the profits generated. The fee is only charged on profitable periods \u2014 if the trader does not generate profits, you do not pay a performance fee." },
  { cat: "copy", q: "Can I stop copying at any time?", a: "Yes, you can pause or stop copying a trader at any time with no penalties or lock-in periods. When you stop copying, any open positions that were copied can be closed manually or left to run based on your preference. Your allocated funds are returned to your available balance." },
  { cat: "copy", q: "How do I choose a trader to copy?", a: "Use the copy trading leaderboard to evaluate strategy providers. Review key metrics including historical performance, risk score, maximum drawdown, trading history, number of copiers, and trading style. We recommend diversifying across multiple traders and starting with conservative allocations." },
  { cat: "copy", q: "Is copy trading suitable for beginners?", a: "Yes, copy trading is an ideal entry point for beginners. It allows you to participate in the markets and potentially earn returns by leveraging the experience and expertise of seasoned traders. It is also an excellent learning tool \u2014 you can study the strategies of successful traders while your capital is at work." },
  { cat: "copy", q: "What happens if the trader I copy loses?", a: "Losses are proportionally shared just like profits. If the trader you copy incurs a loss, your account will reflect a proportional loss based on your allocation. To manage risk, you can set a maximum drawdown or stop-loss on your copy trading allocation to limit potential losses." },
  { cat: "copy", q: "Can I copy multiple traders?", a: "Yes, you can copy multiple traders simultaneously to diversify your portfolio and spread risk across different trading styles and strategies. Each trader receives a separate allocation from your account, and you can manage each copy independently." },

  // Security & Funding (6)
  { cat: "security", q: "Is my data secure with GIO4X?", a: "Absolutely. GIO4X employs industry-leading security measures including SSL encryption for all data transmission, two-factor authentication (2FA) for account access, and regular security audits. Your personal and financial data is protected according to the highest standards." },
  { cat: "security", q: "Are client funds segregated?", a: "Yes, all client funds are held in segregated accounts at reliable banking institutions, completely separate from GIO4X\u2019s operational funds. This ensures that your capital is protected and cannot be used for any company expenses or obligations." },
  { cat: "security", q: "What deposit methods are accepted?", a: "GIO4X accepts a variety of deposit methods including Visa and Mastercard, bank wire transfers, Skrill, Neteller, and cryptocurrency (BTC, ETH, USDT). Available methods may vary depending on your country of residence." },
  { cat: "security", q: "Are there third-party transfer restrictions?", a: "Yes, for security and compliance purposes, all deposits and withdrawals must be made in the name of the trading account holder. Third-party transfers are not accepted. This policy helps prevent fraud and ensures the safety of your funds." },
  { cat: "security", q: "What currencies are accepted for deposits?", a: "GIO4X accepts deposits in the following currencies: AUD, USD, GBP, EUR, AED, SGD, CAD, CHF, HKD, INR, and NZD. If you deposit in a currency different from your account base currency, conversion will be applied at the prevailing market rate." },
  { cat: "security", q: "How is my identity verified?", a: "GIO4X follows a KYC (Know Your Customer) verification process. You will need to submit a valid government-issued photo ID (passport, national ID, or driver\u2019s license) and a proof of address document (utility bill or bank statement dated within the last 3 months). Verification is typically completed within 1\u20132 business days." },

  { cat: "security", q: "What is negative balance protection?", a: "Negative balance protection ensures your trading account balance never falls below zero. In the event of extreme market volatility where losses exceed your account balance, GIO4X absorbs the negative amount. This protects you from owing more than you deposited." },
  { cat: "security", q: "How do I enable two-factor authentication?", a: "You can enable two-factor authentication (2FA) through the client portal under Settings > Security. We support authenticator apps like Google Authenticator and Authy. Once enabled, you will need to enter a verification code each time you log in, adding an extra layer of protection to your account." },

  // Forex Basics (10)
  { cat: "basics", q: "What is forex trading?", a: "Forex (foreign exchange) trading is the buying and selling of currencies on the global market to profit from changes in exchange rates. It is the largest and most liquid financial market in the world, with over $7 trillion traded daily. Traders speculate on whether a currency will rise or fall relative to another." },
  { cat: "basics", q: "What are major currency pairs?", a: "Major currency pairs are the most traded forex pairs, all involving the US Dollar: EUR/USD (Euro), GBP/USD (British Pound), USD/JPY (Japanese Yen), USD/CHF (Swiss Franc), AUD/USD (Australian Dollar), NZD/USD (New Zealand Dollar), and USD/CAD (Canadian Dollar). These pairs offer the tightest spreads and highest liquidity." },
  { cat: "basics", q: "What is fundamental analysis?", a: "Fundamental analysis involves analyzing macroeconomic data, interest rates, geopolitical events, and central bank policies to predict future currency price movements. Key data points include GDP, inflation, employment figures, and trade balances. Fundamental traders focus on the underlying economic health of a country to make trading decisions." },
  { cat: "basics", q: "What is technical analysis?", a: "Technical analysis is the study of historical price charts, patterns, and mathematical indicators to predict future price movements. Common tools include moving averages, RSI, MACD, Bollinger Bands, and Fibonacci retracements. Technical analysts believe that all relevant information is already reflected in the price." },
  { cat: "basics", q: "What is a candlestick chart?", a: "A candlestick chart is a type of price chart that displays the open, high, low, and close prices for a specific time period in a candle-shaped format. The body shows the range between open and close, while the wicks (shadows) show the high and low. Green/white candles indicate price increases; red/black indicate decreases." },
  { cat: "basics", q: "What is support and resistance?", a: "Support and resistance are key price levels on a chart. Support is a price level where buying pressure is strong enough to prevent the price from falling further. Resistance is a level where selling pressure prevents the price from rising further. These levels are used by traders to identify potential entry and exit points." },
  { cat: "basics", q: "What is NFP?", a: "NFP (Non-Farm Payrolls) is a key US economic indicator that reports the number of jobs added or lost in the economy, excluding the farming sector. It is released on the first Friday of every month by the Bureau of Labor Statistics. NFP releases often cause significant volatility in forex markets, particularly in USD pairs." },
  { cat: "basics", q: "What is the FOMC?", a: "The FOMC (Federal Open Market Committee) is the branch of the US Federal Reserve that sets monetary policy, including interest rate decisions. FOMC meetings occur eight times per year, and their decisions directly impact the US Dollar and global financial markets. Traders closely watch FOMC statements for clues about future rate changes." },
  { cat: "basics", q: "What is a risk-reward ratio?", a: "The risk-reward ratio compares the potential loss (risk) of a trade to the potential profit (reward). For example, a 1:2 risk-reward ratio means you risk $1 to potentially gain $2. Successful traders typically aim for a minimum ratio of 1:2, ensuring that profitable trades outweigh losses over time even with a moderate win rate." },
  { cat: "basics", q: "What trading styles exist?", a: "There are four main trading styles: Scalping (very short-term trades lasting seconds to minutes), Day Trading (positions opened and closed within the same day), Swing Trading (positions held for several days to weeks), and Position Trading (long-term positions held for weeks to months). Each style suits different personalities, time commitments, and risk appetites." },

  // CFDs (6)
  { cat: "cfds", q: "What are CFDs?", a: "CFDs (Contracts for Difference) are financial derivatives that allow you to trade the price movements of an underlying asset without actually owning it. You profit or lose based on the difference between the opening and closing price of your trade. CFDs are available on forex, stocks, indices, commodities, and cryptocurrencies." },
  { cat: "cfds", q: "What are the costs of CFD trading?", a: "The primary costs of CFD trading include the spread (difference between bid and ask price), overnight swap fees for positions held past the daily rollover, and potential commission on ECN accounts. GIO4X offers competitive pricing with spreads from 0.0 pips on ECN accounts and transparent fee structures." },
  { cat: "cfds", q: "Do CFDs expire?", a: "Most CFDs, including forex and stock CFDs, do not have an expiry date and can be held indefinitely (subject to swap fees). However, some commodity CFDs (like oil and natural gas) are based on futures contracts and have specific expiry dates. Expiry details for each instrument are listed on our contract specifications page." },
  { cat: "cfds", q: "What is the difference between CFDs and futures?", a: "Key differences include: CFDs have no fixed expiry date (most types), require lower capital due to higher leverage, and are traded directly with the broker. Futures have standardized expiry dates, are traded on regulated exchanges, and typically require larger capital. CFDs offer greater flexibility and accessibility for retail traders." },
  { cat: "cfds", q: "Can I trade crypto CFDs?", a: "Yes, GIO4X offers cryptocurrency CFDs including Bitcoin (BTC), Ethereum (ETH), and other popular digital currencies. Trading crypto CFDs allows you to speculate on price movements without the complexity of owning, storing, or securing the actual cryptocurrency. Crypto CFDs are available for trading 24/7." },
  { cat: "cfds", q: "What are the risks of CFD trading?", a: "CFDs are leveraged products, which means both profits and losses are amplified. You can lose more than your initial deposit if adequate risk management is not applied. Approximately 75% of retail trader accounts lose money when trading CFDs. Always use stop-loss orders, manage your leverage responsibly, and never trade with funds you cannot afford to lose." },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = activeCategory === "all" ? faqs : faqs.filter((f) => f.cat === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-48 pb-28 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-[#29ABE2]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-[#1B3A6B]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-site text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">Support</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[var(--text-h1)] font-bold mt-4 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Everything you need to know about trading with GIO4X. Browse by category or search through {faqs.length}+ answers below.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenFaq(null); }}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#1B3A6B] to-[#29ABE2] text-white"
                    : "bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                }`}
              >
                {cat.label}
                <span className="ml-1.5 text-xs opacity-70">
                  ({cat.id === "all" ? faqs.length : faqs.filter(f => f.cat === cat.id).length})
                </span>
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {filtered.map((faq, i) => (
              <AnimateOnScroll key={`${faq.cat}-${faq.q}`} delay={i * 0.03}>
                <div className="glass-panel overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium pr-4 text-sm">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 shrink-0 text-[#29ABE2]" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="px-5 pb-5">
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-[var(--color-text-secondary)] text-sm mb-4">Can&apos;t find what you&apos;re looking for?</p>
            <Button href="/support">Contact Support</Button>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
