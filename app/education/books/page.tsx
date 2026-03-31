"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABand } from "@/components/sections/CTABand";
import { BookOpen, X, ChevronRight, Scroll, Filter, Award, Star, TrendingUp, Target, Brain, Flame } from "lucide-react";

/* ────────────────────────────────────────────────────────────
   Featured Stories Data
   ──────────────────────────────────────────────────────────── */

interface StoryChapter {
  title: string;
  paragraphs: string[];
}

interface FeaturedStory {
  id: string;
  title: string;
  badge: string;
  badgeVariant: "sky" | "navy" | "success" | "warning";
  excerpt: string;
  chapters: StoryChapter[];
}

const featuredStories: FeaturedStory[] = [
  {
    id: "rabbit-hole",
    title: "Surviving the Rabbit Hole of Forex Trading",
    badge: "Allegorical Adventure",
    badgeVariant: "navy",
    excerpt:
      "Follow Alex and Sarah as they journey deep into the Forex Forest, guided by a wise Forex Sage. Through vivid allegory, discover the hidden dangers of high-frequency traders, market manipulation, and the importance of disciplined risk management — culminating in a quest to restore fairness to the forex market.",
    chapters: [
      {
        title: "Chapter 1: Into the Forex Forest",
        paragraphs: [
          "Alex and Sarah were ordinary people who stumbled upon the world of forex trading through an online advertisement promising financial freedom. Like many newcomers, they were instantly captivated by the idea of making money from the comfort of their homes. They entered the \"Forex Forest\" — a metaphor for the vast, complex world of currency trading.",
          "Deep in the forest, they encountered the Forex Sage — an experienced trader who had survived decades in the markets. The Sage warned them that the path ahead was filled with traps, illusions, and predators designed to separate beginners from their capital. \"The forest rewards discipline and punishes greed,\" the Sage told them.",
        ],
      },
      {
        title: "Chapter 2: The Allure of Easy Profits",
        paragraphs: [
          "The forest was filled with dazzling signs: \"100% returns in a week!\", \"Risk-free trading!\", \"Double your money overnight!\" These were the lures set by scammers and unregulated brokers who preyed on the uninformed. Alex was tempted — who would not be? But the Sage pulled them away.",
          "\"Every promise of guaranteed returns is a lie,\" the Sage explained. \"In the forex market, there are no guarantees. Anyone who tells you otherwise is either ignorant or deliberately deceiving you. The market does not care about your hopes — it only respects preparation and risk management.\"",
        ],
      },
      {
        title: "Chapter 3: The High-Frequency Predators",
        paragraphs: [
          "As they ventured deeper, they noticed shadows moving at incredible speed — high-frequency trading algorithms that could execute thousands of trades per second. These predators could see retail order flow and position themselves ahead of it, a practice known as front-running.",
          "\"These machines are designed to exploit your predictability,\" the Sage explained. \"They thrive on patterns created by retail traders — placing stops at obvious levels, chasing breakouts at round numbers. To survive, you must be unpredictable in your execution while being systematic in your strategy.\"",
        ],
      },
      {
        title: "Chapter 4: The Manipulation Marshes",
        paragraphs: [
          "The trio entered treacherous marshlands where the ground shifted beneath their feet. This was the domain of stop-hunting and price manipulation — where large institutional players deliberately pushed prices to trigger clusters of retail stop-loss orders before reversing direction.",
          "\"This is why blind stop placement gets you killed,\" said the Sage. \"The big players know where the obvious stops are. They engineer moves specifically to trigger those stops and acquire liquidity. Learn to place your stops where they are not expected, and always think about who is on the other side of your trade.\"",
        ],
      },
      {
        title: "Chapter 5: The Risk Management Shield",
        paragraphs: [
          "At the heart of the forest, the Sage led them to a forge where he crafted a shield — the Shield of Risk Management. Made from three components: position sizing (never risking more than 1-2% per trade), stop-loss discipline (always having a predetermined exit), and the golden rule (never trading with money you cannot afford to lose).",
          "\"This shield will not make you money,\" the Sage said, handing it to them. \"But it will keep you alive long enough to learn how to make money. Most traders blow up not because their strategy is bad, but because they risk too much on any single trade. Survive first, profit later.\"",
        ],
      },
      {
        title: "Chapter 6: The Psychology Cavern",
        paragraphs: [
          "Inside a dark cavern, Alex confronted his own demons — the fear of missing out (FOMO) that caused him to chase trades, the greed that made him hold winners too long hoping for more, the revenge trading after a loss, and the overconfidence after a winning streak.",
          "Sarah faced her own struggles — the inability to pull the trigger on valid setups (analysis paralysis), the tendency to move stop-losses further away to avoid being stopped out, and the emotional attachment to being \"right\" rather than being profitable. The Sage taught them that mastering your psychology is more important than mastering any technical indicator.",
        ],
      },
      {
        title: "Chapter 7: The Strategy Forge",
        paragraphs: [
          "Beyond the cavern, they discovered the Strategy Forge — where trading plans were hammered into shape through backtesting, journaling, and systematic refinement. The Sage showed them how to build a trading journal, recording every trade with screenshots, rationale, emotions, and outcomes.",
          "\"A strategy without backtesting is just a guess,\" said the Sage. \"And a backtest without a journal is just entertainment. You must document everything — your wins, your losses, and especially your mistakes. Over time, patterns will emerge that reveal your true edge and your true weaknesses.\"",
        ],
      },
      {
        title: "Chapter 8: The Leverage Labyrinth",
        paragraphs: [
          "A maze of mirrors offered ever-increasing leverage — 100:1, 200:1, 500:1, even 1000:1. Each mirror showed amplified profits, making even small price movements look enormously profitable. Alex was mesmerised. But when Sarah looked at the other side of each mirror, she saw equally amplified losses.",
          "\"Leverage is a double-edged sword that cuts deeper than any other tool in trading,\" the Sage warned. \"New traders see leverage as a way to make more money. Experienced traders understand leverage as a way to lose money faster. Use leverage wisely — just because you can trade at 500:1 does not mean you should.\"",
        ],
      },
      {
        title: "Chapter 9: The Council of Fair Markets",
        paragraphs: [
          "Emerging from the labyrinth, the trio rallied other traders who had survived the forest's dangers. Together, they formed the Council of Fair Markets — a community dedicated to transparency, education, and ethical trading practices. The Council advocated for regulated brokers, transparent pricing, and accessible education.",
          "\"The market itself is neither fair nor unfair — it simply is,\" the Sage said. \"But the ecosystem around it can be made better. By educating ourselves and others, by choosing regulated brokers with transparent practices, and by refusing to participate in schemes that exploit the uninformed, we make the forest safer for everyone who enters.\"",
        ],
      },
      {
        title: "Chapter 10: Restoring Fairness",
        paragraphs: [
          "Armed with knowledge, discipline, and the Shield of Risk Management, Alex and Sarah emerged from the Forex Forest as seasoned traders. They did not find the \"easy money\" they originally sought — they found something better: a sustainable skill built on preparation, discipline, and emotional control.",
          "They returned to help others navigate the forest, sharing the Sage's wisdom: that forex trading is not a get-rich-quick scheme but a legitimate profession that rewards those who approach it with respect, education, and disciplined risk management. The forest would always have its dangers, but for those who prepared properly, it could also be a place of genuine opportunity.",
        ],
      },
    ],
  },
  {
    id: "managed-account-recovery",
    title: "How GIO4X's Managed Account Program Helped Me Recover",
    badge: "First-Person Narrative",
    badgeVariant: "success",
    excerpt:
      "\"Abe\" was a self-confessed forex gambler — chasing losses, blowing accounts, and repeating the cycle. This deeply personal 10-chapter journey traces how he transformed from reckless speculation to disciplined investing through GIO4X's ICFXL Managed Account program.",
    chapters: [
      {
        title: "Chapter 1: The Forex Gambler",
        paragraphs: [
          "My name is Abe, and I was a forex gambler. I do not say \"trader\" because that would imply some level of strategy, discipline, or plan — and I had none of those things. I discovered forex trading through a friend who showed me his MetaTrader platform and explained how he had made $500 in a single afternoon. That was all it took.",
          "Within a week, I had opened an account, deposited $1,000, and was placing trades based on nothing more than gut feeling and the direction of the latest YouTube video I had watched. I won some, I lost more, but the thrill of watching prices tick up and down kept me glued to the screen. I was not trading — I was gambling with a financial instrument.",
        ],
      },
      {
        title: "Chapter 2: The Endless Cycle of Losses",
        paragraphs: [
          "What followed was a painful, repetitive cycle: deposit money, trade recklessly, blow the account, deposit more money. Over two years, I deposited and lost over $15,000. Each time I blew an account, I told myself that this time would be different. I would be more disciplined. I would follow my rules. But I had no rules to follow.",
          "The emotional toll was as devastating as the financial one. I was irritable, anxious, and constantly checking prices on my phone. My relationships suffered. I was hiding my losses from my family, borrowing money to fund my trading \"hobby,\" and spiraling deeper into what I now recognize as compulsive gambling behavior.",
        ],
      },
      {
        title: "Chapter 3: The Awakening",
        paragraphs: [
          "The turning point came when I blew a $3,000 account in a single day. I had leveraged my entire balance on a single EUR/USD trade based on a \"tip\" I read on a forum. When the trade went against me, instead of cutting my loss, I doubled down. Then I tripled down. The margin call hit like a freight train.",
          "Sitting in front of my screen at 2 AM, staring at a zero balance, I finally confronted the truth: my approach was fundamentally broken. I was not an unlucky trader — I was an undisciplined one. I had no strategy, no risk management, no trading plan, and no emotional control. Everything I was doing was wrong.",
        ],
      },
      {
        title: "Chapter 4: The Arduous Journey",
        paragraphs: [
          "I committed to education. I bought courses, read books, studied chart patterns, and learned about risk management. I opened a demo account and practiced for months. For the first time, I was treating forex as a skill to be developed rather than a slot machine to be played.",
          "But old habits die hard. Even on the demo account, I found myself making the same mistakes — moving stop-losses, over-leveraging on \"sure things,\" and revenge trading after losses. The knowledge was there, but the psychological transformation had not yet taken hold. I was learning the language of trading without speaking it fluently.",
        ],
      },
      {
        title: "Chapter 5: The Breakthrough",
        paragraphs: [
          "After months of study and practice, a breakthrough came — not in the form of a winning strategy, but in the form of a humbling realization. I was never going to be a consistently profitable self-directed trader. Not because I was stupid, but because I lacked the emotional discipline that separates professionals from amateurs.",
          "I started tracking every single trade in a journal, noting not just the entry and exit but my emotional state, what I was thinking, and why I made each decision. The patterns were devastating: I won 55% of my trades but lost money because my losers were three times bigger than my winners. I was cutting winners early and letting losers run — the exact opposite of what every book told me to do.",
        ],
      },
      {
        title: "Chapter 6: The Realisation",
        paragraphs: [
          "I realised that successful trading requires a rare combination of analytical skill, emotional discipline, and psychological resilience that very few people naturally possess. There is no shame in acknowledging that self-directed trading is not for everyone — just as there is no shame in hiring a financial advisor instead of managing your own stock portfolio.",
          "This realisation was liberating. Instead of beating myself up for my failures, I started asking a different question: \"Is there a way to participate in the forex markets profitably without having to be the one pulling the trigger?\" The answer led me to managed accounts.",
        ],
      },
      {
        title: "Chapter 7: The Managed Account Dilemma",
        paragraphs: [
          "I was sceptical. The internet is full of \"managed account\" scams — people promising 50% monthly returns, Ponzi schemes disguised as fund management, and smooth-talking salespeople who disappear with your money. How do you separate the legitimate operators from the fraudsters?",
          "I spent weeks researching due diligence criteria: verifiable track records (preferably audited by a third party), regulated structure, transparent fee model, and — most importantly — you should always retain control of your funds in your own account. A legitimate managed account program never asks you to send money to the manager's personal account.",
        ],
      },
      {
        title: "Chapter 8: The ICFXL Managed Account",
        paragraphs: [
          "That is when I found GIO4X's ICFXL Managed Account program. What immediately stood out was the transparency: a verifiable track record, regulated brokerage structure, and a philosophy centered on capital preservation rather than aggressive returns. They did not promise the moon — they promised disciplined, risk-managed trading.",
          "The setup was exactly what I needed: my funds stayed in my own trading account (I retained full visibility and withdrawal capability), the trading was executed by experienced professionals using systematic strategies, and the fee structure was performance-based — they only earned when I earned. This alignment of interests gave me confidence.",
        ],
      },
      {
        title: "Chapter 9: The Profits Roll In",
        paragraphs: [
          "Six months into the managed account, the results spoke for themselves. My account showed steady, risk-adjusted returns — nothing spectacular on a weekly basis, but consistently positive on a monthly basis. The drawdowns were controlled, typically under 5%, and the recovery from any dip was methodical and unemotional.",
          "For the first time in my forex journey, I was making money consistently. Not the dramatic, lottery-ticket gains I had chased as a gambler, but sustainable, compound returns that were slowly but surely growing my account. I was sleeping better, my relationships improved, and I no longer had the urge to check prices at 2 AM.",
        ],
      },
      {
        title: "Chapter 10: A New Outlook on Forex",
        paragraphs: [
          "Looking back, my transformation was not from \"loser\" to \"winner\" — it was from gambler to investor. I stopped trying to be something I was not (a self-directed trader) and embraced a model that played to my strengths (capital allocation and patience). I still study the markets, but as an informed investor, not an anxious speculator.",
          "Forex is no longer a source of stress in my life. It is a legitimate, professionally managed component of my investment portfolio. I credit GIO4X and the ICFXL team for not just making me profits, but for teaching me the most important lesson of all: the best traders are not always the ones pressing the buttons — sometimes they are the ones wise enough to let professionals do it for them.",
        ],
      },
    ],
  },
];

/* ────────────────────────────────────────────────────────────
   Books Data
   ──────────────────────────────────────────────────────────── */

interface Book {
  title: string;
  author: string;
  category: string;
  description: string;
  pages?: number;
  year?: number;
  rating?: number;
  level?: "Beginner" | "Intermediate" | "Advanced";
  forWhom?: string;
  keyLessons?: string[];
  chapters?: string[];
  quote?: string;
}

const books: Book[] = [
  {
    title: "Technical Analysis of the Financial Markets",
    author: "John J. Murphy",
    category: "Technical Analysis",
    pages: 576,
    year: 1999,
    rating: 5,
    level: "Intermediate",
    forWhom: "Traders who want a comprehensive foundation in chart analysis, indicators, and intermarket relationships.",
    keyLessons: [
      "Trend identification using trendlines, channels, and moving averages",
      "Chart pattern recognition: head & shoulders, double tops/bottoms, triangles, flags",
      "Oscillators and momentum indicators: RSI, MACD, Stochastics",
      "Intermarket analysis: how bonds, commodities, and equities affect forex",
      "Volume analysis and its role in confirming price movements",
    ],
    chapters: ["The Philosophy of Technical Analysis", "Dow Theory", "Chart Construction", "Major Reversal Patterns", "Continuation Patterns", "Volume and Open Interest", "Moving Averages", "Oscillators and Contrary Opinion", "Point & Figure Charting", "Japanese Candlesticks", "Intermarket Analysis"],
    quote: "The whole approach of technical analysis is based on the premise that all you need to make money is contained in the charts.",
    description:
      "Widely regarded as the bible of technical analysis, this comprehensive guide covers chart patterns, indicators, intermarket relationships, and trading systems used by professionals worldwide. GIO4X Academy recommends this as the first technical analysis book every forex trader should read, as its teachings on trend identification, support and resistance, and moving averages directly complement the charting tools available on the GIO4X Raptor platform. Whether you are trading currency pairs or analyzing cross-market correlations, Murphy's framework provides the foundational lens through which all technical analysis on GIO4X's platform becomes more intuitive and powerful.",
  },
  {
    title: "Trading in the Zone",
    author: "Mark Douglas",
    category: "Market Psychology",
    pages: 256,
    year: 2000,
    rating: 5,
    level: "Intermediate",
    forWhom: "Any trader struggling with consistency, emotional decisions, or the gap between knowing and doing.",
    keyLessons: [
      "Markets are neutral — your beliefs and expectations create your experience",
      "Think in probabilities, not certainties — any single trade outcome is random",
      "Consistency comes from process, not from being right on every trade",
      "Fear and greed are symptoms of flawed beliefs about the market",
      "Define your edge, execute flawlessly, and let probabilities play out over time",
    ],
    chapters: ["The Road to Success", "The Lure of Trading", "Taking Responsibility", "Consistency: A State of Mind", "The Dynamics of Perception", "The Market's Perspective", "The Trader's Edge", "Working with Your Beliefs", "The Nature of Beliefs", "The Impact of Beliefs on Trading", "Thinking Like a Trader"],
    quote: "The best traders have evolved to the point where they believe that anything can happen, and they don't need to know what is going to happen next in order to make money.",
    description:
      "Mark Douglas masterfully reveals how mental discipline and probabilistic thinking separate consistently profitable traders from those who struggle. This book dismantles the psychological barriers — fear, greed, overconfidence, and revenge trading — that sabotage even well-researched trading plans. GIO4X Academy considers this essential reading because it aligns perfectly with our trading philosophy: that risk management and emotional control matter more than finding the perfect entry. Traders using the GIO4X Raptor platform will find that Douglas's framework for thinking in probabilities transforms how they interact with every chart, every indicator, and every trade setup.",
  },
  { title: "The New Market Wizards", author: "Jack D. Schwager", category: "Market Psychology", pages: 493, year: 1992, rating: 5, level: "Intermediate", forWhom: "Traders seeking real-world wisdom from elite professionals across forex, futures, and equities.", keyLessons: ["There is no single formula for market success — each wizard found their own unique edge", "Discipline and risk control matter far more than prediction accuracy", "The best traders treat losses as tuition — they learn from every mistake", "Emotional detachment from individual trade outcomes is essential for longevity", "Continuous adaptation is non-negotiable — markets change and so must your approach"], chapters: ["Orient Express", "The Silence of the Turtles", "Turning Market Analysis into Money", "The Currency of Risk", "Zen and the Art of Trading", "Value with a Catalyst", "Champion Trader Interviews", "Closing Bell"], quote: "There is no single market secret to discover, no single correct way to trade the markets.", description: "In this celebrated follow-up to Market Wizards, Jack Schwager interviews a new generation of exceptional traders, uncovering the strategies, mindsets, and daily habits that led to extraordinary market success. The interviews span multiple asset classes including forex trading and currency markets, offering GIO4X traders invaluable insights into how elite professionals approach risk management and position sizing. GIO4X Academy highlights this book because every interview reinforces a core truth we teach: there is no single path to trading success, but discipline, adaptability, and rigorous self-analysis are universal requirements across all profitable approaches." },
  { title: "Algorithmic Trading", author: "Ernest P. Chan", category: "Algorithmic Trading", pages: 225, year: 2013, rating: 5, level: "Advanced", forWhom: "Quantitative-minded traders ready to build, backtest, and deploy automated forex trading systems.", keyLessons: ["Always validate a strategy with out-of-sample data before risking real capital", "Mean reversion strategies work best in ranging markets; momentum in trending markets", "Transaction costs and slippage can destroy a profitable backtest — always account for them", "Simplicity beats complexity — overcomplicated models overfit to noise", "Kelly criterion and proper position sizing are as important as the signal itself"], chapters: ["Backtesting and Automated Execution", "Mean-Reverting vs Momentum Strategies", "Finding and Evaluating Strategies", "The Importance of Risk Management", "Execution Systems and Transaction Costs", "Statistical Arbitrage Pairs Trading", "Factor Models and Portfolio Theory", "Practical Considerations for Live Trading"], quote: "A good backtest is necessary but not sufficient for a good strategy.", description: "A practical, no-nonsense guide to building automated trading systems, covering backtesting methodology, execution algorithms, mean reversion strategies, and momentum-based approaches. Ernest Chan demystifies quantitative forex trading for independent traders, making this an ideal companion for GIO4X users exploring systematic strategies on the GIO4X Raptor platform. GIO4X Academy recommends this book because it teaches traders to validate their ideas with data before risking real capital — a philosophy that perfectly aligns with GIO4X's emphasis on disciplined, evidence-based currency trading rather than gut-feeling speculation." },
  { title: "The Disciplined Trader", author: "Mark Douglas", category: "Risk Management", pages: 256, year: 1990, rating: 5, level: "Intermediate", forWhom: "Traders who know what to do technically but consistently fail to execute their plan with discipline.", keyLessons: ["The market environment is fundamentally different from every other life experience", "You must learn to think in terms of probabilities, not certainties", "Self-discipline is a skill that must be developed — it is not innate", "Fear of loss causes traders to make the very mistakes they are trying to avoid", "Accepting risk fully before entering a trade eliminates hesitation and emotional interference"], chapters: ["Why I Wrote This Book", "The Dynamics of Achievement", "Taking Responsibility", "How to Become a Disciplined Trader", "Perceptions and Beliefs", "Learning the Realities of Trading", "Operating in the Market Environment", "The Psychology of Price Movement", "The Definition of Discipline", "How to Build Self-Discipline", "A Final Word on Discipline"], quote: "The typical trader does the exact opposite of what is required for success.", description: "Mark Douglas's first masterpiece lays the psychological groundwork for developing the mental edge needed for consistent profitability in forex trading and all financial markets. The book focuses specifically on how risk management psychology and disciplined trade execution interact to create — or destroy — trading careers. GIO4X Academy lists this as essential reading because it directly addresses the number one reason traders fail: not a lack of strategy, but a lack of discipline. The principles taught here are foundational to the risk management frameworks GIO4X builds into every aspect of its platform and educational curriculum." },
  { title: "Japanese Candlestick Charting Techniques", author: "Steve Nison", category: "Technical Analysis", pages: 315, year: 1991, rating: 5, level: "Beginner", forWhom: "Any trader who reads price charts — from complete beginner to experienced analyst wanting to master candlestick patterns.", keyLessons: ["Candlestick patterns reveal the battle between buyers and sellers in real time", "Context matters — the same pattern has different implications at support vs resistance", "Combining candlesticks with Western technical tools creates the most powerful analysis", "Volume confirmation dramatically increases the reliability of candlestick signals", "Reversal patterns at key Fibonacci levels create the highest-probability trade setups"], chapters: ["Introduction to Candlesticks", "The Basics", "Reversal Patterns", "Stars", "More Reversal Patterns", "Continuation Patterns", "The Magic Doji", "Candlesticks with Trendlines", "Candlesticks with Retracement Levels", "Candlesticks with Moving Averages", "Candlesticks with Oscillators", "Candlesticks with Volume"], quote: "A candle loses nothing by lighting another candle.", description: "Steve Nison introduced Western traders to the ancient Japanese art of candlestick charting, and this foundational text remains the definitive reference on the subject. Learn to read and interpret patterns such as doji, hammer, engulfing, morning star, and evening star formations for precise entry and exit signals in currency trading. GIO4X Academy recommends this book because candlestick analysis is a core component of the charting suite on the GIO4X Raptor platform, and understanding these patterns dramatically improves a trader's ability to read price action across all forex pairs and timeframes." },
  { title: "Fibonacci Trading", author: "Carolyn Boroden", category: "Technical Analysis", pages: 320, year: 2008, rating: 4, level: "Intermediate", forWhom: "Technical traders fascinated by the golden ratio who want a systematic method for using Fibonacci in forex trading.", keyLessons: ["Fibonacci cluster zones — where multiple levels align — offer the highest-probability entries", "Time projections using Fibonacci can predict when the next significant move will occur", "The 0.618 and 1.618 ratios are the most important levels for trade entries and targets", "Always wait for price confirmation at a Fibonacci level before entering a trade", "Combining Fibonacci with candlestick patterns and moving averages creates a complete system"], chapters: ["The Fibonacci Sequence and the Golden Ratio", "Fibonacci Retracements", "Fibonacci Extensions", "Fibonacci Time Projections", "Fibonacci Clusters", "Trade Setup and Trigger Techniques", "Trade Management and Stop Placement", "Putting It All Together", "Advanced Fibonacci Techniques", "Real-World Trading Examples"], quote: "The market speaks in the language of mathematics — Fibonacci is the translator.", description: "Carolyn Boroden delivers a deep, practical exploration of using Fibonacci ratios and the golden ratio in forex trading and financial market analysis. The book covers retracements, extensions, time projections, and cluster analysis — showing how to identify high-probability confluence zones where multiple Fibonacci levels align. GIO4X Academy features this book because the GIO4X Raptor platform includes advanced Fibonacci tools, and Boroden's methodology teaches traders exactly how to deploy these tools for optimal trade entries, stop placement, and profit targets in currency trading scenarios." },
  { title: "Quantitative Trading", author: "Ernest P. Chan", category: "Algorithmic Trading", pages: 181, year: 2008, rating: 4, level: "Advanced", forWhom: "Aspiring quant traders who want to build a systematic trading business from their home office.", keyLessons: ["Start with simple strategies and prove they work before adding complexity", "Sharpe ratio above 2 is good; above 3 is exceptional — know your numbers", "Transaction costs are the silent killer of algorithmic strategies", "Paper trading is not a substitute for live trading — execution differences matter", "Independent traders have advantages over institutions: speed to deploy and no bureaucracy"], chapters: ["The Life of an Independent Trader", "Fishing for Ideas", "Backtesting", "Setting Up Your Business", "Execution Systems", "Managing Money and Risk", "Special Topics in Quantitative Trading", "Conclusion: Can You Really Make a Living?"], quote: "Finding a profitable strategy is the easy part. Executing it with discipline is the hard part.", description: "This pragmatic guide teaches aspiring quantitative traders how to build their own trading business from scratch, covering strategy identification, backtesting pitfalls, risk management frameworks, and practical execution considerations for live markets. Chan shares real-world examples from forex trading and other asset classes, making this directly applicable to GIO4X platform users. GIO4X Academy recommends this alongside Chan's other work because it emphasizes the critical importance of understanding your strategy's statistical edge — a principle that resonates deeply with GIO4X's data-driven approach to currency trading." },
  { title: "Market Wizards", author: "Jack D. Schwager", category: "Market Psychology", pages: 458, year: 1989, rating: 5, level: "Beginner", forWhom: "Every trader, regardless of experience level — this book is the starting point for understanding what separates winners from losers.", keyLessons: ["Cut your losses short and let your profits run — the universal rule of successful trading", "Every great trader has a method for dealing with losing streaks", "Risk management is not about avoiding risk — it is about controlling it", "The market is always right — your opinion of where price should be is irrelevant", "Conviction in your approach must be earned through backtesting and experience"], chapters: ["Futures and Currencies Interviews", "Michael Marcus: Blighting Never Strikes Twice", "Bruce Kovner: The World Trader", "Richard Dennis: A Legend Retires", "Paul Tudor Jones: The Art of Aggressive Trading", "Gary Bielfeldt: Yes, They Do Trade T-Bonds in Peoria", "Ed Seykota: Everybody Gets What They Want", "Larry Hite: Respecting Risk", "Michael Steinhardt: The Concept of Variant Perception", "Trading Principles and Rules from the Wizards"], quote: "The elements of good trading are: cutting losses, cutting losses, and cutting losses.", description: "The original classic that started it all — Jack Schwager's groundbreaking interviews with the greatest traders of the 1980s and 1990s, including legends like Paul Tudor Jones, Ed Seykota, and Bruce Kovner, many of whom built their fortunes in currency trading and forex markets. Each interview reveals unique approaches to technical analysis, risk management, and trading psychology that remain relevant decades later. GIO4X Academy considers this mandatory reading because the timeless principles shared by these market wizards — cut losses quickly, let winners run, and never risk more than you can afford to lose — form the bedrock of GIO4X's trading philosophy and educational framework." },
  { title: "Reminiscences of a Stock Operator", author: "Edwin Lefèvre", category: "Market Psychology", pages: 288, year: 1923, rating: 5, level: "Beginner", forWhom: "Anyone fascinated by trading history and the timeless psychology of speculation and market crowds.", keyLessons: ["Patience is the most profitable virtue in trading — wait for your setup", "The market will tell you when you are wrong — listen to price, not your ego", "Adding to losing positions is the fastest way to financial ruin", "Big money is made by sitting, not trading — hold your winners", "Crowd psychology creates predictable patterns that repeat across all eras and markets"], chapters: ["The Boy Plunger of Wall Street", "Bucket Shops and Early Lessons", "Learning From Losses", "The Big Board", "Reading the Tape", "Manipulation and Insiders", "The Art of Speculation", "Lessons in Patience", "The Crash of 1907", "Rebuilding a Fortune", "Commodities and Diversification", "Reflections on a Lifetime of Trading"], quote: "It was never my thinking that made the big money for me. It was always my sitting.", description: "First published in 1923, this thinly veiled biography of legendary speculator Jesse Livermore remains one of the most insightful books ever written about trading psychology, market timing, and the emotional pitfalls that destroy traders across all eras. The lessons about patience, conviction, and the dangers of overtrading are as applicable to modern forex trading on the GIO4X Raptor platform as they were a century ago. GIO4X Academy includes this in its recommended reading list because Livermore's hard-won wisdom about risk management, position sizing, and the psychology of crowds transcends any specific market or time period, making it perpetually relevant for currency traders seeking lasting success." },
  { title: "A Random Walk Down Wall Street", author: "Burton Malkiel", category: "Fundamental Analysis", pages: 454, year: 1973, rating: 4, level: "Intermediate", forWhom: "Traders and investors who want to understand market efficiency theory and develop more rigorous, evidence-based strategies.", keyLessons: ["Markets are more efficient than most traders believe — finding a genuine edge is hard", "Past price patterns do not reliably predict future movements without additional context", "Diversification is the only free lunch in investing — spread your risk", "Emotional decisions consistently destroy returns — systematic approaches outperform", "Understanding why most strategies fail makes you better at finding ones that work"], chapters: ["Firm Foundations and Castles in the Air", "The Madness of Crowds", "Stock Valuation from the Sixties to the Nineties", "The Biggest Bubble of All", "Technical and Fundamental Analysis", "A New Walking Shoe", "How Good Is Fundamental Analysis?", "A New Investment Technology", "Reaping Reward by Increasing Risk", "Behavioral Finance", "A Fitness Manual for Random Walkers"], quote: "A blindfolded monkey throwing darts at a newspaper's financial pages could select a portfolio that would do just as well as one carefully selected by experts.", description: "Burton Malkiel's enduring classic challenges traders and investors to think critically about market efficiency, the limitations of technical analysis, and the role of diversification in wealth building. While the book argues for passive investing, GIO4X Academy recommends it precisely because it forces forex traders to question their assumptions and develop more rigorous, evidence-based approaches to currency trading. Understanding the efficient market hypothesis helps GIO4X platform users appreciate why disciplined risk management and a genuine statistical edge are essential — and why most trading strategies fail without them." },
  { title: "The Intelligent Investor", author: "Benjamin Graham", category: "Wealth Management", pages: 640, year: 1949, rating: 5, level: "Beginner", forWhom: "Long-term investors and PAMM investors who want to understand disciplined capital allocation and the margin of safety concept.", keyLessons: ["The margin of safety — buying below intrinsic value — is the central concept of intelligent investing", "Mr. Market is your servant, not your master — exploit irrational prices rather than following them", "Emotional discipline matters more than IQ in investment success", "Defensive investors should focus on capital preservation; enterprising investors on value discovery", "Investment is most intelligent when it is most businesslike — treat your portfolio as a business"], chapters: ["Investment versus Speculation", "The Investor and Inflation", "The Defensive Investor and Common Stocks", "Portfolio Policy for the Enterprising Investor", "The Investor and Market Fluctuations", "Margin of Safety as the Central Concept", "Stock Selection for the Defensive Investor", "Stock Selection for the Enterprising Investor", "The Investor and His Advisers", "Security Analysis for the Lay Investor", "A Comparison of Companies"], quote: "The investor's chief problem — and even his worst enemy — is likely to be himself.", description: "Benjamin Graham's masterwork on value investing and disciplined capital allocation has guided generations of investors, including Warren Buffett, who calls it the best investing book ever written. While focused on equities, the core principles of margin of safety, emotional discipline, and fundamental analysis translate powerfully to forex trading and portfolio management. GIO4X Academy recommends this book because its teachings on patience, risk aversion, and long-term thinking perfectly complement the wealth management philosophy that underpins GIO4X's managed account programs and helps currency traders develop a sustainable, long-term mindset." },
  { title: "Flash Boys", author: "Michael Lewis", category: "Algorithmic Trading", pages: 288, year: 2014, rating: 4, level: "Beginner", forWhom: "Any trader who wants to understand modern market microstructure and why execution quality matters.", keyLessons: ["Speed advantages in trading create hidden costs for retail and institutional traders", "Order routing and execution quality significantly impact your actual trading results", "Dark pools reduce transparency but serve important institutional liquidity functions", "Choosing a broker with transparent execution is as important as choosing a strategy", "Understanding market structure helps you avoid being exploited by faster participants"], chapters: ["Hidden in Plain Sight", "Brad's Problem", "Ronan's Antenna", "Tracking the Predator", "Putting a Face on HFT", "How to Take Billions from Wall Street", "An Army of One", "The Spider and the Fly", "The Flash Crash", "What Happened After"], quote: "The stock market is rigged. Not for the little guy, but by the little guy who figured it out.", description: "Michael Lewis's explosive investigation into high-frequency trading reveals how technological advantages and market microstructure create hidden costs for retail traders across all financial markets, including forex and currency trading. This page-turner exposes the mechanics of front-running, dark pools, and the arms race for speed that shapes modern market structure. GIO4X Academy recommends this book because understanding these dynamics helps GIO4X Raptor platform users appreciate the importance of choosing transparent brokers, understanding execution quality, and recognizing how their orders interact with the broader market ecosystem." },
  { title: "Currency Trading for Dummies", author: "Kathleen Brooks & Brian Dolan", category: "Fundamental Analysis", pages: 384, year: 2015, rating: 4, level: "Beginner", forWhom: "Complete beginners who need a clear, jargon-free introduction to the forex market and currency trading.", keyLessons: ["The forex market operates 24/5 across four major sessions with different characteristics", "Currency prices are driven by interest rates, economic data, and central bank policies", "Risk management is not optional — never risk more than 1-2% of your account per trade", "Demo trading is essential before risking real money — practice until consistent", "Understanding the major, minor, and exotic currency pair categories helps focus your trading"], chapters: ["The Forex Market Explained", "Currencies and Their Characters", "Reading Currency Quotes", "Macro Fundamentals", "Key Economic Indicators", "Central Banks and Monetary Policy", "Technical Analysis Basics", "Developing a Trading Plan", "Risk and Trade Management", "Executing a Trade", "Analyzing the Market", "Ten Habits of Successful Currency Traders"], quote: "The forex market doesn't care about your opinion — it only respects your preparation.", description: "Do not let the title fool you — this comprehensive guide provides an excellent foundation in forex trading fundamentals, covering everything from how the global currency market operates to specific strategies for trading major, minor, and exotic pairs. The book explains macroeconomic drivers, central bank policies, and geopolitical factors that move forex markets, making it an ideal starting point for new GIO4X traders. GIO4X Academy recommends this as a first book for beginners because its clear, jargon-free explanations of currency trading mechanics provide the foundational knowledge needed to effectively use the GIO4X Raptor platform's analytical tools and make informed trading decisions." },
  { title: "Day Trading and Swing Trading the Currency Market", author: "Kathy Lien", category: "Technical Analysis", pages: 330, year: 2015, rating: 5, level: "Intermediate", forWhom: "Active forex traders who want specific, actionable strategies for both intraday and multi-day currency trading.", keyLessons: ["Each major currency pair has a unique personality and optimal trading session", "Combine technical triggers with fundamental context for the highest-probability trades", "News releases create tradeable volatility — learn to position before and after the event", "Range-bound and trending markets require fundamentally different strategies", "Multi-timeframe analysis confirms signals and filters out noise"], chapters: ["What Drives the Currency Market", "Historical Events in the FX Market", "Long-Term Currency Valuation", "Technical Trading Strategies", "Day Trading the Currency Market", "Swing Trading Strategies", "Fundamental Trading Strategies", "Trading the News", "Unique Characteristics of Each Currency Pair", "Risk Management for Currency Traders"], quote: "The currency market is unique because it is driven by both fundamental and technical forces simultaneously.", description: "Kathy Lien, one of the most respected names in forex education, delivers a comprehensive guide that blends technical analysis with fundamental analysis for currency trading across multiple timeframes. The book covers specific strategies for day trading and swing trading major currency pairs, including detailed setups using indicators and price patterns available on platforms like the GIO4X Raptor. GIO4X Academy recommends this book because Lien's practical, trade-by-trade approach to forex trading gives readers immediately actionable frameworks they can implement on the GIO4X platform, while her emphasis on understanding the macroeconomic context behind price movements develops well-rounded traders." },
  { title: "The Little Book of Currency Trading", author: "Kathy Lien", category: "Fundamental Analysis", pages: 197, year: 2011, rating: 4, level: "Beginner", forWhom: "Beginners and intermediate traders wanting a concise, high-impact introduction to fundamental forex analysis.", keyLessons: ["Interest rate differentials are the single most powerful driver of currency pair movements", "GDP, CPI, and employment data releases create the most significant market-moving events", "Carry trades exploit interest rate differences and can generate consistent returns in stable markets", "Understanding which currencies are risk-on vs risk-off helps navigate market sentiment shifts", "Central bank forward guidance is often more important than the actual rate decision"], chapters: ["Why Currencies?", "Getting to Know the Players", "What Moves the Currency Market", "The Most Important Economic Indicators", "What Moves Individual Currencies", "Currency Profiles: USD, EUR, GBP, CHF, JPY, AUD, NZD, CAD", "Trading Parameters and Strategies", "Technical Analysis for Currency Traders", "Risk Management Essentials", "The Path to Becoming a Successful Trader"], quote: "Forex traders who understand macroeconomics have a structural advantage over those who trade charts alone.", description: "In this concise yet powerful guide, veteran forex strategist Kathy Lien distills decades of currency trading experience into accessible lessons covering market drivers, risk management principles, and proven trading strategies. The book is particularly strong on explaining how economic indicators, interest rate differentials, and geopolitical events drive currency pair movements. GIO4X Academy recommends this as an excellent bridge between beginner and intermediate forex trading, and its compact format makes it ideal for GIO4X traders who want to quickly strengthen their fundamental analysis skills before diving into more advanced technical work on the GIO4X Raptor platform." },
  { title: "Forex Price Action Scalping", author: "Bob Volman", category: "Price Action", pages: 357, year: 2011, rating: 5, level: "Advanced", forWhom: "Experienced traders who want to master pure price action scalping on 1-minute to 5-minute forex charts.", keyLessons: ["Price action is the purest form of market data — indicators are derived from price, not the other way around", "Scalping requires absolute emotional neutrality — no trade is important, the next 100 trades are", "The breakout-pullback setup is the most reliable price action pattern for scalpers", "Tight stop-losses and quick profit-taking define the scalping approach to risk management", "Screen time is irreplaceable — you develop pattern recognition through thousands of hours of chart study"], chapters: ["Introduction to Price Action Scalping", "Principles of Price Action", "The Setups: A Scalper's Arsenal", "Double Pressure Setups", "Block Breakout Setups", "Inside Bar Breakout Setups", "Advanced Reversal Techniques", "False Break Setups", "Trade Management and Exit Strategies", "Scalper's Mindset and Daily Routine", "Practical Chart Examples (200+)"], quote: "A scalper does not predict. A scalper reacts.", description: "Bob Volman's meticulously detailed guide to scalping the forex markets using pure price action — no indicators, no oscillators, just raw price movement on the chart. The book presents a complete trading methodology with hundreds of chart examples showing exact entries, exits, and the reasoning behind each decision in real-time currency trading scenarios. GIO4X Academy recommends this for intermediate to advanced forex traders who want to develop a deep understanding of how price moves and why, skills that translate directly to reading the clean, responsive charts on the GIO4X Raptor platform and developing an intuitive feel for market microstructure across all forex pairs." },
  { title: "The Art and Science of Technical Analysis", author: "Adam Grimes", category: "Technical Analysis", pages: 480, year: 2012, rating: 5, level: "Advanced", forWhom: "Serious traders who want evidence-based technical analysis grounded in statistics rather than market folklore.", keyLessons: ["Most popular chart patterns perform only slightly better than random — know which ones actually work", "Statistical edge comes from understanding market structure, not from memorizing patterns", "Backtesting with proper methodology separates real edges from curve-fitted illusions", "Risk management is not separate from strategy — it IS the strategy", "The best traders focus on process and execution, not on individual trade outcomes"], chapters: ["The Foundation: Market Structure", "Practical Applications of Market Structure", "Trading Strategies", "Risk Management", "Trade Management", "Practical Considerations", "Quantitative Approaches to Pattern Recognition", "Building a Trading Plan", "The Psychology of Trading", "Developing a Trader's Mindset", "Putting It All Together"], quote: "If you can't quantify your edge, you probably don't have one.", description: "Adam Grimes combines rigorous statistical analysis with practical trading wisdom to separate what actually works in technical analysis from what is merely market folklore. The book uses quantitative evidence to evaluate chart patterns, indicators, and trading strategies, helping forex traders build systems grounded in statistical reality rather than wishful thinking. GIO4X Academy considers this a must-read for serious traders because its evidence-based approach mirrors GIO4X's own philosophy of disciplined, data-driven currency trading, and its frameworks for evaluating trading edges help GIO4X Raptor platform users develop robust strategies that withstand the test of time." },
  { title: "Naked Forex", author: "Alex Nekritin & Walter Peters", category: "Price Action", pages: 288, year: 2012, rating: 4, level: "Intermediate", forWhom: "Traders overwhelmed by indicators who want to simplify their approach and trade clean price action.", keyLessons: ["Removing indicators from your charts forces you to truly understand what price is doing", "Last Kiss trades — retests of broken support/resistance — offer excellent risk-reward ratios", "Big Shadow candles at key levels signal high-probability reversal opportunities", "The Kangaroo Tail pattern at support/resistance is one of the most reliable naked setups", "Demo trading naked charts for 3 months before going live develops essential pattern recognition skills"], chapters: ["What Is Naked Trading?", "Why Naked Trading Works", "Getting Started: Remove Your Indicators", "Support and Resistance Zones", "The Last Kiss Trade", "The Big Shadow Trade", "The Kangaroo Tail Trade", "The Trendy Kangaroo", "Big Belt Setups", "Wammies and Moolahs", "Trade Management Without Indicators", "Building Your Naked Trading System"], quote: "The chart without indicators is not naked — it is free.", description: "This refreshingly practical book strips forex trading down to its essence — reading raw price action without relying on lagging indicators. Nekritin and Peters present specific, repeatable trading setups based on candlestick patterns, support and resistance zones, and market structure that can be applied directly to currency pairs on any platform. GIO4X Academy recommends this book because its naked approach to chart reading develops the core skill every forex trader needs: the ability to read what price is telling you right now, a skill that becomes even more powerful when combined with the clean charting environment and advanced tools available on the GIO4X Raptor platform." },
  { title: "Come Into My Trading Room", author: "Alexander Elder", category: "Risk Management", pages: 320, year: 2002, rating: 5, level: "Intermediate", forWhom: "Traders ready to treat trading as a professional business with proper structure, records, and risk management.", keyLessons: ["The Triple Screen system uses three timeframes to filter trades and improve win rate", "A trading diary is the most underused tool in a trader's arsenal — journal everything", "Risk management requires planning your exit before your entry on every trade", "The 2% rule (never risk more than 2% per trade) and the 6% rule (stop trading if down 6% in a month) protect your capital", "Professional traders think in terms of risk-reward ratios, not in terms of being right or wrong"], chapters: ["The Organized Trader", "Mind: Disciplined Trading Psychology", "Method: Technical Analysis and Trading Systems", "The Triple Screen Trading System", "Money: Risk Management", "Trade Management in Practice", "The Trading Journal", "Grading Your Trades", "The Impulsive System", "Channel Trading", "Advanced Concepts", "From Student to Professional"], quote: "The goal of a successful trader is to make the best trades. Money is secondary.", description: "Dr. Alexander Elder's comprehensive guide goes beyond strategy to cover the complete trading ecosystem: market analysis, trading psychology, risk management, and practical record-keeping. The book introduces Elder's famous Triple Screen trading system and provides detailed frameworks for managing risk across multiple timeframes in forex and other financial markets. GIO4X Academy recommends this book because its holistic approach to trading aligns with GIO4X's philosophy that sustainable success in currency trading requires mastery of self, strategy, and risk management in equal measure — exactly the triad emphasized throughout GIO4X Academy's educational curriculum." },
  { title: "Trading for a Living", author: "Alexander Elder", category: "Market Psychology", pages: 289, year: 1993, rating: 5, level: "Beginner", forWhom: "Traders who want a complete, integrated framework covering psychology, technical analysis, and money management.", keyLessons: ["Mind, Method, and Money — all three pillars must be mastered for consistent profitability", "Individual psychology is the weakest link for most traders — your emotions are the enemy", "Moving averages act as dynamic support and resistance and should anchor every chart", "The Force Index and Elder-Ray indicators combine price and volume for powerful signals", "Keep detailed records — the difference between professional and amateur is measurement"], chapters: ["Individual Psychology", "Group Psychology", "Chart Analysis Basics", "Computerized Technical Analysis", "The Neglected Essentials", "Stock Market Indicators", "Psychological Indicators", "New Indicators", "Trading Systems", "Risk Management", "Practical Details of Trading", "Mind, Method, and Money"], quote: "You can be free. You can live and work anywhere in the world. You can be independent from routine and not answer to anybody.", description: "Dr. Alexander Elder's classic integrates trading psychology, technical analysis, and risk management into a unified framework for professional forex trading and market participation. The book is structured around three pillars — Mind, Method, and Money — each of which must be mastered before a trader can achieve consistent profitability in currency trading. GIO4X Academy considers this essential reading because Elder's three-pillar framework mirrors the educational structure of GIO4X's own training programs, and his emphasis on the psychological dimension of trading helps GIO4X Raptor platform users understand why emotional discipline is the most important skill a forex trader can develop." },
  { title: "The Black Swan", author: "Nassim Nicholas Taleb", category: "Risk Management", pages: 444, year: 2007, rating: 5, level: "Advanced", forWhom: "Risk-conscious traders who want to understand tail risk, fat tails, and why traditional risk models fail catastrophically.", keyLessons: ["Rare, unpredictable events (Black Swans) have outsized impacts that dwarf all normal market movements", "Traditional risk models (VaR, normal distributions) systematically underestimate extreme risk", "Position sizing must account for scenarios far worse than anything in historical data", "Antifragility — designing your portfolio to benefit from volatility — is superior to mere robustness", "The inability to predict Black Swans means you must be structurally prepared for them at all times"], chapters: ["Umberto Eco's Antilibrary", "How We Seek Validation", "The Speculator and the Prostitute", "One Thousand and One Days", "Confirmation Shmonfirmation", "The Narrative Fallacy", "Living in the Antechamber of Hope", "Giacomo Casanova's Unfailing Luck", "The Ludic Fallacy", "The Scandal of Prediction", "How to Look for Bird Poop", "Epistemocracy, A Dream"], quote: "The inability to predict outliers implies the inability to predict the course of history.", description: "Nassim Taleb's groundbreaking exploration of rare, unpredictable events that have outsized impacts on financial markets, economies, and human history fundamentally changed how sophisticated traders think about risk. The book demonstrates why traditional risk models catastrophically underestimate tail risk — the very risk that destroys trading accounts in forex and currency markets during extreme events. GIO4X Academy recommends this book because understanding Black Swan events is critical for forex traders using the GIO4X Raptor platform: it teaches why position sizing and risk management must account for scenarios far worse than historical data suggests, a principle baked into GIO4X's approach to capital preservation." },
  { title: "Fooled by Randomness", author: "Nassim Nicholas Taleb", category: "Market Psychology", pages: 316, year: 2001, rating: 5, level: "Intermediate", forWhom: "Traders who want to develop critical thinking about luck vs skill and avoid the cognitive biases that destroy accounts.", keyLessons: ["Survivorship bias makes successful traders look more skilled than they actually are", "A strategy that worked in the past may have succeeded due to luck, not edge", "Monte Carlo simulations reveal the role of randomness in trading outcomes", "Outcome quality and decision quality are not the same thing — a good decision can have a bad outcome", "Journaling and honest self-assessment are the only defenses against self-deception"], chapters: ["Solon's Warning", "A Bizarre Accounting Method", "A Mathematical Meditation on History", "Randomness, Nonsense, and the Scientific Intellectual", "Survival of the Least Fit", "Skewness and Asymmetry", "The Problem of Induction", "Too Many Millionaires Next Door", "It Is Easier to Buy and Sell Than to Fry an Egg", "Loser Takes All", "Randomness and Our Brain", "Gamblers' Ticks and Pigeons in a Box", "Wax in My Ears"], quote: "Mild success can be explainable by skills and labor. Wild success is attributable to variance.", description: "In this provocative and deeply insightful work, Nassim Taleb examines how humans systematically confuse luck with skill, particularly in trading and investing, and how this confusion leads to catastrophic financial decisions. The book challenges forex traders to honestly evaluate whether their profits come from genuine edge or merely from favorable market conditions and survivorship bias. GIO4X Academy recommends this as essential reading because it develops the critical thinking skills that separate long-term profitable currency traders from those riding temporary luck, and it reinforces GIO4X's emphasis on verifiable, auditable track records and statistically validated trading approaches on the GIO4X Raptor platform." },
  { title: "Options, Futures, and Other Derivatives", author: "John C. Hull", category: "Options & Derivatives", pages: 896, year: 2017, rating: 4, level: "Advanced", forWhom: "Advanced traders and finance professionals who want deep understanding of derivatives pricing, hedging, and risk.", keyLessons: ["The Black-Scholes model provides the theoretical foundation for all options pricing", "Currency options allow forex traders to define maximum risk while maintaining unlimited profit potential", "Forward contracts and swaps are used by institutions to hedge currency exposure", "Understanding Greeks (delta, gamma, theta, vega) is essential for managing options positions", "Interest rate derivatives influence currency values through carry trade dynamics and yield differentials"], chapters: ["Introduction to Derivatives", "Futures Markets and Central Counterparties", "Hedging Strategies Using Futures", "Interest Rates", "Forward and Futures Prices", "Options Markets", "Properties of Stock Options", "Trading Strategies Involving Options", "The Black-Scholes-Merton Model", "The Greek Letters", "Currency Options and Forex Derivatives", "Exotic Options", "Credit Derivatives"], quote: "A derivative is a financial instrument whose value depends on the values of other underlying variables.", description: "The definitive academic and professional reference on derivatives markets, covering options pricing theory, futures contracts, swaps, and exotic instruments with mathematical rigor and practical clarity. While comprehensive in scope, the sections on currency options, forward contracts, and interest rate derivatives are directly relevant to forex traders seeking to hedge risk or enhance returns. GIO4X Academy recommends this book for advanced traders and those interested in understanding the derivative instruments that interact with and influence the spot forex market, providing deeper insight into the forces that drive the currency pairs traded on the GIO4X Raptor platform." },
  { title: "The Man Who Solved the Market", author: "Gregory Zuckerman", category: "Algorithmic Trading", pages: 384, year: 2019, rating: 5, level: "Intermediate", forWhom: "Anyone inspired by the intersection of mathematics, data science, and financial markets — the ultimate quant trading story.", keyLessons: ["Jim Simons proved that mathematical models can consistently beat human discretionary trading", "Removing emotion from trading through automation is a massive structural advantage", "The Medallion Fund's 66% annual return proves systematic approaches can achieve extraordinary results", "Hiring physicists and mathematicians instead of MBAs was Simons' key innovation", "Even the best quantitative system requires constant refinement as markets evolve"], chapters: ["The Gambler", "The Number Man", "Riches to Rags", "Making Money", "Cracking the Code", "Renaissance Technologies", "The Medallion Fund", "The Money Machine", "The Political Scientist", "The Recluse", "The Quants Take Wall Street", "Man vs Machine", "Legacy and Lessons"], quote: "Past patterns are indicative of future results — if you know which ones to look for.", description: "Gregory Zuckerman's riveting account of Jim Simons and Renaissance Technologies — the most successful quantitative trading operation in history — reveals how mathematical models, data science, and systematic approaches generated unprecedented returns across all financial markets including forex and currency trading. The book illustrates the power of removing human emotion from trading decisions and relying instead on rigorously tested algorithms. GIO4X Academy recommends this inspiring read because it demonstrates the ultimate potential of the systematic, disciplined approach to trading that GIO4X champions, and it motivates traders to think more scientifically about their strategies on the GIO4X Raptor platform." },
  { title: "Principles", author: "Ray Dalio", category: "Wealth Management", pages: 592, year: 2017, rating: 5, level: "Intermediate", forWhom: "Traders and investors seeking a philosophical framework for systematic decision-making and continuous improvement.", keyLessons: ["Radical transparency — seeing things as they truly are — is the foundation of good decision-making", "Pain + Reflection = Progress — every trading loss is an opportunity to learn and improve", "Believability-weighted decision making produces better outcomes than democracy or autocracy", "Systematic principles beat ad-hoc decisions in every domain, including trading", "The biggest barrier to success is your ego — humility and open-mindedness compound faster than capital"], chapters: ["Where I'm Coming From", "My Abyss", "My Road of Trials", "My Management Principles", "Embrace Reality and Deal with It", "Use the 5-Step Process to Get What You Want", "Be Radically Open-Minded", "Understand That People Are Wired Very Differently", "Learn How to Make Decisions Effectively", "Principles for Work", "An Organization as a Machine", "Building a Great Culture"], quote: "He who lives by the crystal ball will eat shattered glass.", description: "Ray Dalio, founder of the world's largest hedge fund Bridgewater Associates, shares the life and work principles that guided his extraordinary career in global macro trading and investment management, including extensive experience in currency markets and forex trading. The book's frameworks for radical transparency, systematic decision-making, and learning from mistakes apply directly to every aspect of a trader's development. GIO4X Academy recommends this book because Dalio's principles of meritocratic idea evaluation and pain-plus-reflection-equals-progress mirror the disciplined self-improvement philosophy that GIO4X Academy instills in its students, making it invaluable for traders seeking both personal and professional growth." },
];

// Helper: ensure all books have required modal fields
type EnrichedBook = Required<Book>;
const enrichedBooks: EnrichedBook[] = books.map((b) => ({
  rating: 4,
  level: "Intermediate" as const,
  forWhom: `Traders interested in ${b.category.toLowerCase()} who want to deepen their understanding and improve their trading edge.`,
  keyLessons: b.keyLessons || [
    `Core principles of ${b.category.toLowerCase()} applied to forex trading`,
    "Practical frameworks you can apply on the GIO4X Raptor platform immediately",
    "Risk management techniques specific to the strategies covered",
    "Real-world examples and case studies from currency markets",
    "How to combine these concepts with other analytical tools for higher-probability setups",
  ],
  chapters: b.chapters || [
    "Introduction & Foundations",
    "Core Concepts & Framework",
    "Practical Application to Markets",
    "Advanced Techniques & Strategies",
    "Risk Management Integration",
    "Case Studies & Real-World Examples",
    "Building Your Trading System",
    "Conclusion & Next Steps",
  ],
  quote: b.quote || `A must-read for anyone serious about ${b.category.toLowerCase()} in forex trading.`,
  pages: 320,
  year: 2010,
  ...b,
}));

const bookCategories = [
  "All",
  "Technical Analysis",
  "Market Psychology",
  "Risk Management",
  "Algorithmic Trading",
  "Fundamental Analysis",
  "Price Action",
  "Options & Derivatives",
  "Wealth Management",
];

const categoryColor: Record<string, "sky" | "navy" | "success" | "warning" | "default"> = {
  "Technical Analysis": "sky",
  "Market Psychology": "navy",
  "Risk Management": "warning",
  "Algorithmic Trading": "success",
  "Fundamental Analysis": "default",
  "Price Action": "sky",
  "Options & Derivatives": "warning",
  "Wealth Management": "navy",
};

/* ────────────────────────────────────────────────────────────
   Story Modal Component
   ──────────────────────────────────────────────────────────── */

function StoryModal({
  story,
  isOpen,
  onClose,
}: {
  story: FeaturedStory | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleEscape]);

  return (
    <AnimatePresence>
      {isOpen && story && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={story.title}
        >
          {/* backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* modal card */}
          <motion.article
            className="relative z-10 w-full max-w-[760px] mx-4 my-8 sm:my-16 glass-panel rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[var(--color-glass-bg)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              aria-label="Close story"
            >
              <X className="w-5 h-5" />
            </button>

            {/* header */}
            <div className="p-6 sm:p-8 pb-0">
              <Badge variant={story.badgeVariant} className="mb-4">
                {story.badge}
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-4 pr-8">
                {story.title}
              </h2>
              <p className="text-[var(--color-text-secondary)] text-base mb-6 leading-relaxed">
                {story.excerpt}
              </p>
              <div className="h-px bg-[var(--color-border)]" />
            </div>

            {/* full chapter content */}
            <div className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Scroll className="w-5 h-5 text-[#29ABE2]" />
                Full Story
              </h3>
              <div className="space-y-8">
                {story.chapters.map((ch, i) => (
                  <section key={i}>
                    <div className="flex items-start gap-3 mb-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(41,171,226,0.15)] text-[#29ABE2] text-sm font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <h4 className="text-lg font-semibold text-[var(--color-text)] leading-snug pt-0.5">
                        {ch.title}
                      </h4>
                    </div>
                    <div className="pl-11 space-y-3">
                      {ch.paragraphs.map((p, j) => (
                        <p
                          key={j}
                          className="text-[var(--color-text-secondary)] text-[15px] leading-[1.75] tracking-[-0.01em]"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                    {i < story.chapters.length - 1 && (
                      <div className="h-px bg-[var(--color-border)] mt-8 ml-11 opacity-50" />
                    )}
                  </section>
                ))}
              </div>
            </div>

            {/* footer */}
            <div className="p-6 sm:p-8 pt-0">
              <div className="h-px bg-[var(--color-border)] mb-6" />
              <div className="flex items-center justify-end">
                <Button variant="secondary" size="sm" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ────────────────────────────────────────────────────────────
   Book Detail Modal Component
   ──────────────────────────────────────────────────────────── */

function BookDetailModal({
  book,
  isOpen,
  onClose,
}: {
  book: EnrichedBook | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleEscape]);

  const catColors: Record<string, string> = {
    "Technical Analysis": "#29ABE2",
    "Market Psychology": "#8B5CF6",
    "Risk Management": "#C9A84C",
    "Algorithmic Trading": "#10B981",
    "Fundamental Analysis": "#06B6D4",
    "Price Action": "#F59E0B",
    "Options & Derivatives": "#EF4444",
    "Wealth Management": "#1B3A6B",
  };

  return (
    <AnimatePresence>
      {isOpen && book && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={book.title}
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

          <motion.article
            className="relative z-10 w-full max-w-[760px] mx-4 my-8 sm:my-16 glass-panel rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[var(--color-glass-bg)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              aria-label="Close book details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Book Header with visual spine */}
            <div className="p-6 sm:p-8">
              <div className="flex gap-5 mb-6">
                {/* Book cover art */}
                <div className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl flex-shrink-0 flex items-end justify-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${catColors[book.category] || "#29ABE2"}40 0%, ${catColors[book.category] || "#29ABE2"}15 100%)`, borderLeft: `5px solid ${catColors[book.category] || "#29ABE2"}` }}>
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `repeating-linear-gradient(180deg, transparent, transparent 5px, ${catColors[book.category] || "#29ABE2"} 5px, ${catColors[book.category] || "#29ABE2"} 6px)` }} />
                  <BookOpen className="w-8 h-8 mb-3 relative z-10" style={{ color: catColors[book.category] || "#29ABE2" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <Badge variant={categoryColor[book.category] || "sky"} className="mb-2">{book.category}</Badge>
                  <h2 className="text-xl sm:text-2xl font-bold leading-snug mb-1 pr-8">{book.title}</h2>
                  <p className="text-sm text-[#29ABE2] mb-3">by {book.author}</p>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className={`w-4 h-4 ${si < book.rating ? "text-[#C9A84C] fill-[#C9A84C]" : "text-[var(--color-border)]"}`} />
                    ))}
                    <span className="text-xs text-[var(--color-text-secondary)] ml-1">{book.rating}.0</span>
                  </div>
                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 text-xs text-[var(--color-text-secondary)]">
                    {book.pages && <span>{book.pages} pages</span>}
                    {book.year && <span>Published {book.year}</span>}
                    <span className="px-2 py-0.5 rounded-md bg-[var(--color-glass-bg)] font-semibold">{book.level}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              {book.quote && (
                <div className="rounded-xl border-l-4 p-4 mb-6" style={{ borderColor: catColors[book.category] || "#29ABE2", background: `${catColors[book.category] || "#29ABE2"}08` }}>
                  <p className="text-sm italic text-[var(--color-text-secondary)] leading-relaxed">&ldquo;{book.quote}&rdquo;</p>
                </div>
              )}

              <div className="h-px bg-[var(--color-border)] mb-6" />

              {/* Who This Book Is For */}
              <div className="mb-6">
                <h3 className="font-bold text-sm uppercase tracking-wider text-[var(--color-text-secondary)] mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#29ABE2]" />
                  Who This Book Is For
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{book.forWhom}</p>
              </div>

              {/* Key Lessons */}
              <div className="mb-6">
                <h3 className="font-bold text-sm uppercase tracking-wider text-[var(--color-text-secondary)] mb-3 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#C9A84C]" />
                  Key Lessons & Takeaways
                </h3>
                <div className="space-y-2">
                  {book.keyLessons.map((lesson, li) => (
                    <div key={li} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--color-glass-bg)]">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold flex-shrink-0 mt-0.5" style={{ background: `${catColors[book.category] || "#29ABE2"}20`, color: catColors[book.category] || "#29ABE2" }}>{li + 1}</span>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{lesson}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chapters / Table of Contents */}
              <div className="mb-6">
                <h3 className="font-bold text-sm uppercase tracking-wider text-[var(--color-text-secondary)] mb-3 flex items-center gap-2">
                  <Scroll className="w-4 h-4 text-[#29ABE2]" />
                  Table of Contents
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {book.chapters.map((ch, ci) => (
                    <div key={ci} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-[var(--color-glass-bg)] transition-colors">
                      <span className="text-[10px] font-mono font-bold text-[var(--color-text-secondary)] w-5">{String(ci + 1).padStart(2, "0")}</span>
                      <span className="text-[var(--color-text-secondary)]">{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-bold text-sm uppercase tracking-wider text-[var(--color-text-secondary)] mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#29ABE2]" />
                  GIO4X Academy Review
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{book.description}</p>
              </div>

              <div className="h-px bg-[var(--color-border)] mb-6" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                  <Award className="w-4 h-4 text-[#C9A84C]" />
                  <span>Recommended by GIO4X Academy</span>
                </div>
                <Button variant="secondary" size="sm" onClick={onClose}>Close</Button>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ────────────────────────────────────────────────────────────
   Page Component
   ──────────────────────────────────────────────────────────── */

export default function BooksPage() {
  const [activeStory, setActiveStory] = useState<FeaturedStory | null>(null);
  const [activeBook, setActiveBook] = useState<EnrichedBook | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBooks =
    activeCategory === "All"
      ? enrichedBooks
      : enrichedBooks.filter((b) => b.category === activeCategory);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative pt-56 pb-36 overflow-hidden">
        {/* gradient orbs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(41,171,226,0.12),transparent_70%)] blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-24 w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(27,58,107,0.18),transparent_70%)] blur-2xl" />
        {/* floating shapes */}
        <motion.div
          className="pointer-events-none absolute top-24 right-[12%] w-16 h-16 rounded-xl border border-[rgba(41,171,226,0.2)] rotate-12 opacity-40"
          animate={{ y: [0, -12, 0], rotate: [12, 18, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-8 left-[15%] w-10 h-10 rounded-full border border-[rgba(41,171,226,0.15)] opacity-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-site text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">
              Education
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-h1)] font-bold mt-4 mb-6"
          >
            Stories &amp; <span className="gradient-text">Recommended Reading</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto"
          >
            Immersive trading narratives and curated books from the GIO4X
            research team — essential learning for traders at every level.
          </motion.p>
        </div>
      </section>

      {/* ── Section 1: Featured Stories ─────────────────────── */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading
            eyebrow="From the Archives"
            title="Featured Stories"
            subtitle="Two immersive narratives that distil hard-won trading lessons into compelling reads."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredStories.map((story, i) => (
              <AnimateOnScroll key={story.id} delay={i * 0.12}>
                <Card glow className="h-full flex flex-col">
                  <Badge variant={story.badgeVariant} className="self-start mb-4">
                    {story.badge}
                  </Badge>
                  <h3 className="text-xl font-bold leading-snug mb-3">
                    {story.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1 mb-5">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--color-text-secondary)]">
                      10 Chapters
                    </span>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setActiveStory(story)}
                    >
                      Read Full Story
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Recommended Trading Books ───────────── */}
      <section className="py-16">
        <div className="max-site">
          <SectionHeading
            eyebrow="Curated Library"
            title="Recommended Trading Books"
            subtitle="Hand-picked by our research team — essential reading for building a strong trading foundation."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <Filter className="w-4 h-4 text-[var(--color-text-secondary)] mr-1" />
            {bookCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-[#29ABE2] text-white border-[#29ABE2]"
                    : "bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:text-[var(--color-text)] hover:border-[#29ABE2]/50"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({books.filter((b) => b.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredBooks.map((book, i) => {
                const catColors: Record<string, string> = {
                  "Technical Analysis": "#29ABE2",
                  "Market Psychology": "#8B5CF6",
                  "Risk Management": "#C9A84C",
                  "Algorithmic Trading": "#10B981",
                  "Fundamental Analysis": "#06B6D4",
                  "Price Action": "#F59E0B",
                  "Options & Derivatives": "#EF4444",
                  "Wealth Management": "#1B3A6B",
                };
                const spineColor = catColors[book.category] || "#29ABE2";
                return (
                <AnimateOnScroll key={book.title} delay={i * 0.06}>
                  <div onClick={() => setActiveBook(book)} className="cursor-pointer h-full">
                  <Card className="h-full flex flex-col group">
                    {/* Book spine visualization */}
                    <div className="flex gap-4 mb-4">
                      <div className="w-14 h-20 rounded-lg flex-shrink-0 flex items-end justify-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${spineColor}30 0%, ${spineColor}10 100%)`, borderLeft: `4px solid ${spineColor}` }}>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `repeating-linear-gradient(180deg, transparent, transparent 4px, ${spineColor} 4px, ${spineColor} 5px)` }} />
                        <BookOpen className="w-5 h-5 mb-2 relative z-10" style={{ color: spineColor }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge
                          variant={categoryColor[book.category] || "sky"}
                          className="mb-2"
                        >
                          {book.category}
                        </Badge>
                        <h3 className="font-semibold leading-snug text-sm group-hover:text-[#29ABE2] transition-colors">{book.title}</h3>
                        <p className="text-xs text-[#29ABE2]">by {book.author}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] flex-1 line-clamp-3 mb-3">
                      {book.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, si) => (
                          <Star key={si} className={`w-3 h-3 ${si < book.rating ? "text-[#C9A84C] fill-[#C9A84C]" : "text-[var(--color-border)]"}`} />
                        ))}
                      </div>
                      <span className="text-xs text-[#29ABE2] font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                        View Details <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Card>
                  </div>
                </AnimateOnScroll>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredBooks.length === 0 && (
            <div className="text-center py-12 text-[var(--color-text-secondary)]">
              No books found in this category.
            </div>
          )}
        </div>
      </section>

      {/* ── Section 3: Book of the Month ───────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0A0E1A 0%, #1B3A6B 50%, #0A0E1A 100%)" }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-site relative z-10">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase">Book of the Month</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trading in the Zone</h2>
                <p className="text-white/40 text-sm mb-2">by Mark Douglas</p>
                <div className="flex items-center gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" />)}
                  <span className="text-white/50 text-xs ml-2">5.0 — Staff Pick</span>
                </div>
                <p className="text-white/60 leading-relaxed mb-6">
                  This month, the GIO4X Academy team unanimously chose Mark Douglas&apos;s masterwork on trading psychology.
                  If you read only one book this year, make it this one. It will fundamentally change how you think about
                  risk, probability, and the mental framework required for consistent profitability in forex trading.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
                    <p className="text-xl font-bold text-[#29ABE2]">256</p>
                    <span className="text-[10px] text-white/40 uppercase">Pages</span>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
                    <p className="text-xl font-bold text-[#C9A84C]">#1</p>
                    <span className="text-[10px] text-white/40 uppercase">Trading Psychology</span>
                  </div>
                </div>
                <h4 className="text-white font-semibold text-sm mb-3">Why GIO4X Academy Recommends It:</h4>
                <ul className="space-y-2">
                  {[
                    "Teaches probabilistic thinking — essential for forex risk management",
                    "Destroys the myth that being 'right' matters more than being profitable",
                    "Provides frameworks to overcome fear, greed, and revenge trading",
                    "Directly applicable to every trade you place on the GIO4X Raptor platform",
                  ].map(r => (
                    <li key={r} className="flex items-start gap-2 text-sm text-white/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Book Card */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-80 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#0A0E1A] border border-white/10 shadow-2xl flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#C9A84C]/20 flex items-center justify-center mb-4">
                      <Brain className="w-8 h-8 text-[#C9A84C]" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-1">Trading in the Zone</h3>
                    <p className="text-white/40 text-xs mb-4">Mark Douglas</p>
                    <div className="w-full h-px bg-white/10 mb-4" />
                    <p className="text-white/30 text-xs italic">&quot;The best traders think in probabilities, not certainties.&quot;</p>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-64 h-80 rounded-2xl bg-white/5 border border-white/5 -z-10" />
                  <div className="absolute -bottom-8 -right-8 w-64 h-80 rounded-2xl bg-white/3 border border-white/3 -z-20" />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Section 4: Reading Challenge ───────────────────── */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-site max-w-4xl">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Flame className="w-5 h-5 text-[#C9A84C]" />
                <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase">2026 Challenge</span>
              </div>
              <h2 className="text-[var(--text-h2)] font-bold mb-4">
                The GIO4X <span className="gradient-text">Trading Library Challenge</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                Read 12 trading books in 12 months and transform your trading edge. Follow our curated monthly reading plan below.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { month: "January", book: "Currency Trading for Dummies", focus: "Foundations", icon: BookOpen, color: "#29ABE2" },
              { month: "February", book: "Japanese Candlestick Charting", focus: "Price Action", icon: TrendingUp, color: "#06B6D4" },
              { month: "March", book: "Trading in the Zone", focus: "Psychology", icon: Brain, color: "#8B5CF6" },
              { month: "April", book: "Technical Analysis of Financial Markets", focus: "Technical Analysis", icon: TrendingUp, color: "#29ABE2" },
              { month: "May", book: "The Disciplined Trader", focus: "Risk Management", icon: Target, color: "#C9A84C" },
              { month: "June", book: "Market Wizards", focus: "Inspiration", icon: Star, color: "#F59E0B" },
              { month: "July", book: "Fibonacci Trading", focus: "Golden Ratio", icon: Target, color: "#10B981" },
              { month: "August", book: "Naked Forex", focus: "Price Action", icon: TrendingUp, color: "#06B6D4" },
              { month: "September", book: "Algorithmic Trading", focus: "Automation", icon: TrendingUp, color: "#29ABE2" },
              { month: "October", book: "The Black Swan", focus: "Risk Thinking", icon: Target, color: "#EF4444" },
              { month: "November", book: "Come Into My Trading Room", focus: "Complete System", icon: Star, color: "#C9A84C" },
              { month: "December", book: "Principles by Ray Dalio", focus: "Wealth Building", icon: Award, color: "#10B981" },
            ].map((item, i) => (
              <AnimateOnScroll key={item.month} delay={i * 0.04}>
                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-glass-bg)] p-4 hover:border-[#29ABE2]/30 transition-all group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${item.color}15` }}>
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: item.color }}>{item.month}</span>
                      <p className="text-xs text-[var(--color-text-secondary)]">{item.focus}</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm group-hover:text-[#29ABE2] transition-colors">{item.book}</h4>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={0.3}>
            <div className="mt-8 rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/5 p-6 text-center">
              <p className="text-[var(--color-text-secondary)] text-sm">
                <strong className="text-[var(--color-text)]">Complete the challenge</strong> and you&apos;ll have consumed more trading education than 95% of retail forex traders.
                Knowledge compounds — start with book one and build your edge month by month.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABand />

      {/* ── Story Modal ────────────────────────────────────── */}
      <StoryModal
        story={activeStory}
        isOpen={activeStory !== null}
        onClose={() => setActiveStory(null)}
      />

      {/* ── Book Detail Modal ─────────────────────────────── */}
      <BookDetailModal
        book={activeBook}
        isOpen={activeBook !== null}
        onClose={() => setActiveBook(null)}
      />
    </>
  );
}
