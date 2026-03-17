"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABand } from "@/components/sections/CTABand";
import { BookOpen, X, ChevronRight, Scroll, Filter } from "lucide-react";

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

const books = [
  {
    title: "Technical Analysis of the Financial Markets",
    author: "John J. Murphy",
    category: "Technical Analysis",
    description:
      "Widely regarded as the bible of technical analysis, this comprehensive guide covers chart patterns, indicators, intermarket relationships, and trading systems used by professionals worldwide. GIO4X Academy recommends this as the first technical analysis book every forex trader should read, as its teachings on trend identification, support and resistance, and moving averages directly complement the charting tools available on the GIO4X Raptor platform. Whether you are trading currency pairs or analyzing cross-market correlations, Murphy's framework provides the foundational lens through which all technical analysis on GIO4X's platform becomes more intuitive and powerful.",
  },
  {
    title: "Trading in the Zone",
    author: "Mark Douglas",
    category: "Market Psychology",
    description:
      "Mark Douglas masterfully reveals how mental discipline and probabilistic thinking separate consistently profitable traders from those who struggle. This book dismantles the psychological barriers — fear, greed, overconfidence, and revenge trading — that sabotage even well-researched trading plans. GIO4X Academy considers this essential reading because it aligns perfectly with our trading philosophy: that risk management and emotional control matter more than finding the perfect entry. Traders using the GIO4X Raptor platform will find that Douglas's framework for thinking in probabilities transforms how they interact with every chart, every indicator, and every trade setup.",
  },
  {
    title: "The New Market Wizards",
    author: "Jack D. Schwager",
    category: "Market Psychology",
    description:
      "In this celebrated follow-up to Market Wizards, Jack Schwager interviews a new generation of exceptional traders, uncovering the strategies, mindsets, and daily habits that led to extraordinary market success. The interviews span multiple asset classes including forex trading and currency markets, offering GIO4X traders invaluable insights into how elite professionals approach risk management and position sizing. GIO4X Academy highlights this book because every interview reinforces a core truth we teach: there is no single path to trading success, but discipline, adaptability, and rigorous self-analysis are universal requirements across all profitable approaches.",
  },
  {
    title: "Algorithmic Trading",
    author: "Ernest P. Chan",
    category: "Algorithmic Trading",
    description:
      "A practical, no-nonsense guide to building automated trading systems, covering backtesting methodology, execution algorithms, mean reversion strategies, and momentum-based approaches. Ernest Chan demystifies quantitative forex trading for independent traders, making this an ideal companion for GIO4X users exploring systematic strategies on the GIO4X Raptor platform. GIO4X Academy recommends this book because it teaches traders to validate their ideas with data before risking real capital — a philosophy that perfectly aligns with GIO4X's emphasis on disciplined, evidence-based currency trading rather than gut-feeling speculation.",
  },
  {
    title: "The Disciplined Trader",
    author: "Mark Douglas",
    category: "Risk Management",
    description:
      "Mark Douglas's first masterpiece lays the psychological groundwork for developing the mental edge needed for consistent profitability in forex trading and all financial markets. The book focuses specifically on how risk management psychology and disciplined trade execution interact to create — or destroy — trading careers. GIO4X Academy lists this as essential reading because it directly addresses the number one reason traders fail: not a lack of strategy, but a lack of discipline. The principles taught here are foundational to the risk management frameworks GIO4X builds into every aspect of its platform and educational curriculum.",
  },
  {
    title: "Japanese Candlestick Charting Techniques",
    author: "Steve Nison",
    category: "Technical Analysis",
    description:
      "Steve Nison introduced Western traders to the ancient Japanese art of candlestick charting, and this foundational text remains the definitive reference on the subject. Learn to read and interpret patterns such as doji, hammer, engulfing, morning star, and evening star formations for precise entry and exit signals in currency trading. GIO4X Academy recommends this book because candlestick analysis is a core component of the charting suite on the GIO4X Raptor platform, and understanding these patterns dramatically improves a trader's ability to read price action across all forex pairs and timeframes.",
  },
  {
    title: "Fibonacci Trading",
    author: "Carolyn Boroden",
    category: "Technical Analysis",
    description:
      "Carolyn Boroden delivers a deep, practical exploration of using Fibonacci ratios and the golden ratio in forex trading and financial market analysis. The book covers retracements, extensions, time projections, and cluster analysis — showing how to identify high-probability confluence zones where multiple Fibonacci levels align. GIO4X Academy features this book because the GIO4X Raptor platform includes advanced Fibonacci tools, and Boroden's methodology teaches traders exactly how to deploy these tools for optimal trade entries, stop placement, and profit targets in currency trading scenarios.",
  },
  {
    title: "Quantitative Trading",
    author: "Ernest P. Chan",
    category: "Algorithmic Trading",
    description:
      "This pragmatic guide teaches aspiring quantitative traders how to build their own trading business from scratch, covering strategy identification, backtesting pitfalls, risk management frameworks, and practical execution considerations for live markets. Chan shares real-world examples from forex trading and other asset classes, making this directly applicable to GIO4X platform users. GIO4X Academy recommends this alongside Chan's other work because it emphasizes the critical importance of understanding your strategy's statistical edge — a principle that resonates deeply with GIO4X's data-driven approach to currency trading.",
  },
  {
    title: "Market Wizards",
    author: "Jack D. Schwager",
    category: "Market Psychology",
    description:
      "The original classic that started it all — Jack Schwager's groundbreaking interviews with the greatest traders of the 1980s and 1990s, including legends like Paul Tudor Jones, Ed Seykota, and Bruce Kovner, many of whom built their fortunes in currency trading and forex markets. Each interview reveals unique approaches to technical analysis, risk management, and trading psychology that remain relevant decades later. GIO4X Academy considers this mandatory reading because the timeless principles shared by these market wizards — cut losses quickly, let winners run, and never risk more than you can afford to lose — form the bedrock of GIO4X's trading philosophy and educational framework.",
  },
  {
    title: "Reminiscences of a Stock Operator",
    author: "Edwin Lefèvre",
    category: "Market Psychology",
    description:
      "First published in 1923, this thinly veiled biography of legendary speculator Jesse Livermore remains one of the most insightful books ever written about trading psychology, market timing, and the emotional pitfalls that destroy traders across all eras. The lessons about patience, conviction, and the dangers of overtrading are as applicable to modern forex trading on the GIO4X Raptor platform as they were a century ago. GIO4X Academy includes this in its recommended reading list because Livermore's hard-won wisdom about risk management, position sizing, and the psychology of crowds transcends any specific market or time period, making it perpetually relevant for currency traders seeking lasting success.",
  },
  {
    title: "A Random Walk Down Wall Street",
    author: "Burton Malkiel",
    category: "Fundamental Analysis",
    description:
      "Burton Malkiel's enduring classic challenges traders and investors to think critically about market efficiency, the limitations of technical analysis, and the role of diversification in wealth building. While the book argues for passive investing, GIO4X Academy recommends it precisely because it forces forex traders to question their assumptions and develop more rigorous, evidence-based approaches to currency trading. Understanding the efficient market hypothesis helps GIO4X platform users appreciate why disciplined risk management and a genuine statistical edge are essential — and why most trading strategies fail without them.",
  },
  {
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    category: "Wealth Management",
    description:
      "Benjamin Graham's masterwork on value investing and disciplined capital allocation has guided generations of investors, including Warren Buffett, who calls it the best investing book ever written. While focused on equities, the core principles of margin of safety, emotional discipline, and fundamental analysis translate powerfully to forex trading and portfolio management. GIO4X Academy recommends this book because its teachings on patience, risk aversion, and long-term thinking perfectly complement the wealth management philosophy that underpins GIO4X's managed account programs and helps currency traders develop a sustainable, long-term mindset.",
  },
  {
    title: "Flash Boys",
    author: "Michael Lewis",
    category: "Algorithmic Trading",
    description:
      "Michael Lewis's explosive investigation into high-frequency trading reveals how technological advantages and market microstructure create hidden costs for retail traders across all financial markets, including forex and currency trading. This page-turner exposes the mechanics of front-running, dark pools, and the arms race for speed that shapes modern market structure. GIO4X Academy recommends this book because understanding these dynamics helps GIO4X Raptor platform users appreciate the importance of choosing transparent brokers, understanding execution quality, and recognizing how their orders interact with the broader market ecosystem.",
  },
  {
    title: "Currency Trading for Dummies",
    author: "Kathleen Brooks & Brian Dolan",
    category: "Fundamental Analysis",
    description:
      "Do not let the title fool you — this comprehensive guide provides an excellent foundation in forex trading fundamentals, covering everything from how the global currency market operates to specific strategies for trading major, minor, and exotic pairs. The book explains macroeconomic drivers, central bank policies, and geopolitical factors that move forex markets, making it an ideal starting point for new GIO4X traders. GIO4X Academy recommends this as a first book for beginners because its clear, jargon-free explanations of currency trading mechanics provide the foundational knowledge needed to effectively use the GIO4X Raptor platform's analytical tools and make informed trading decisions.",
  },
  {
    title: "Day Trading and Swing Trading the Currency Market",
    author: "Kathy Lien",
    category: "Technical Analysis",
    description:
      "Kathy Lien, one of the most respected names in forex education, delivers a comprehensive guide that blends technical analysis with fundamental analysis for currency trading across multiple timeframes. The book covers specific strategies for day trading and swing trading major currency pairs, including detailed setups using indicators and price patterns available on platforms like the GIO4X Raptor. GIO4X Academy recommends this book because Lien's practical, trade-by-trade approach to forex trading gives readers immediately actionable frameworks they can implement on the GIO4X platform, while her emphasis on understanding the macroeconomic context behind price movements develops well-rounded traders.",
  },
  {
    title: "The Little Book of Currency Trading",
    author: "Kathy Lien",
    category: "Fundamental Analysis",
    description:
      "In this concise yet powerful guide, veteran forex strategist Kathy Lien distills decades of currency trading experience into accessible lessons covering market drivers, risk management principles, and proven trading strategies. The book is particularly strong on explaining how economic indicators, interest rate differentials, and geopolitical events drive currency pair movements. GIO4X Academy recommends this as an excellent bridge between beginner and intermediate forex trading, and its compact format makes it ideal for GIO4X traders who want to quickly strengthen their fundamental analysis skills before diving into more advanced technical work on the GIO4X Raptor platform.",
  },
  {
    title: "Forex Price Action Scalping",
    author: "Bob Volman",
    category: "Price Action",
    description:
      "Bob Volman's meticulously detailed guide to scalping the forex markets using pure price action — no indicators, no oscillators, just raw price movement on the chart. The book presents a complete trading methodology with hundreds of chart examples showing exact entries, exits, and the reasoning behind each decision in real-time currency trading scenarios. GIO4X Academy recommends this for intermediate to advanced forex traders who want to develop a deep understanding of how price moves and why, skills that translate directly to reading the clean, responsive charts on the GIO4X Raptor platform and developing an intuitive feel for market microstructure across all forex pairs.",
  },
  {
    title: "The Art and Science of Technical Analysis",
    author: "Adam Grimes",
    category: "Technical Analysis",
    description:
      "Adam Grimes combines rigorous statistical analysis with practical trading wisdom to separate what actually works in technical analysis from what is merely market folklore. The book uses quantitative evidence to evaluate chart patterns, indicators, and trading strategies, helping forex traders build systems grounded in statistical reality rather than wishful thinking. GIO4X Academy considers this a must-read for serious traders because its evidence-based approach mirrors GIO4X's own philosophy of disciplined, data-driven currency trading, and its frameworks for evaluating trading edges help GIO4X Raptor platform users develop robust strategies that withstand the test of time.",
  },
  {
    title: "Naked Forex",
    author: "Alex Nekritin & Walter Peters",
    category: "Price Action",
    description:
      "This refreshingly practical book strips forex trading down to its essence — reading raw price action without relying on lagging indicators. Nekritin and Peters present specific, repeatable trading setups based on candlestick patterns, support and resistance zones, and market structure that can be applied directly to currency pairs on any platform. GIO4X Academy recommends this book because its \"naked\" approach to chart reading develops the core skill every forex trader needs: the ability to read what price is telling you right now, a skill that becomes even more powerful when combined with the clean charting environment and advanced tools available on the GIO4X Raptor platform.",
  },
  {
    title: "Come Into My Trading Room",
    author: "Alexander Elder",
    category: "Risk Management",
    description:
      "Dr. Alexander Elder's comprehensive guide goes beyond strategy to cover the complete trading ecosystem: market analysis, trading psychology, risk management, and practical record-keeping. The book introduces Elder's famous Triple Screen trading system and provides detailed frameworks for managing risk across multiple timeframes in forex and other financial markets. GIO4X Academy recommends this book because its holistic approach to trading aligns with GIO4X's philosophy that sustainable success in currency trading requires mastery of self, strategy, and risk management in equal measure — exactly the triad emphasized throughout GIO4X Academy's educational curriculum.",
  },
  {
    title: "Trading for a Living",
    author: "Alexander Elder",
    category: "Market Psychology",
    description:
      "Dr. Alexander Elder's classic integrates trading psychology, technical analysis, and risk management into a unified framework for professional forex trading and market participation. The book is structured around three pillars — Mind, Method, and Money — each of which must be mastered before a trader can achieve consistent profitability in currency trading. GIO4X Academy considers this essential reading because Elder's three-pillar framework mirrors the educational structure of GIO4X's own training programs, and his emphasis on the psychological dimension of trading helps GIO4X Raptor platform users understand why emotional discipline is the most important skill a forex trader can develop.",
  },
  {
    title: "The Black Swan",
    author: "Nassim Nicholas Taleb",
    category: "Risk Management",
    description:
      "Nassim Taleb's groundbreaking exploration of rare, unpredictable events that have outsized impacts on financial markets, economies, and human history fundamentally changed how sophisticated traders think about risk. The book demonstrates why traditional risk models catastrophically underestimate tail risk — the very risk that destroys trading accounts in forex and currency markets during extreme events. GIO4X Academy recommends this book because understanding Black Swan events is critical for forex traders using the GIO4X Raptor platform: it teaches why position sizing and risk management must account for scenarios far worse than historical data suggests, a principle baked into GIO4X's approach to capital preservation.",
  },
  {
    title: "Fooled by Randomness",
    author: "Nassim Nicholas Taleb",
    category: "Market Psychology",
    description:
      "In this provocative and deeply insightful work, Nassim Taleb examines how humans systematically confuse luck with skill, particularly in trading and investing, and how this confusion leads to catastrophic financial decisions. The book challenges forex traders to honestly evaluate whether their profits come from genuine edge or merely from favorable market conditions and survivorship bias. GIO4X Academy recommends this as essential reading because it develops the critical thinking skills that separate long-term profitable currency traders from those riding temporary luck, and it reinforces GIO4X's emphasis on verifiable, auditable track records and statistically validated trading approaches on the GIO4X Raptor platform.",
  },
  {
    title: "Options, Futures, and Other Derivatives",
    author: "John C. Hull",
    category: "Options & Derivatives",
    description:
      "The definitive academic and professional reference on derivatives markets, covering options pricing theory, futures contracts, swaps, and exotic instruments with mathematical rigor and practical clarity. While comprehensive in scope, the sections on currency options, forward contracts, and interest rate derivatives are directly relevant to forex traders seeking to hedge risk or enhance returns. GIO4X Academy recommends this book for advanced traders and those interested in understanding the derivative instruments that interact with and influence the spot forex market, providing deeper insight into the forces that drive the currency pairs traded on the GIO4X Raptor platform.",
  },
  {
    title: "The Man Who Solved the Market",
    author: "Gregory Zuckerman",
    category: "Algorithmic Trading",
    description:
      "Gregory Zuckerman's riveting account of Jim Simons and Renaissance Technologies — the most successful quantitative trading operation in history — reveals how mathematical models, data science, and systematic approaches generated unprecedented returns across all financial markets including forex and currency trading. The book illustrates the power of removing human emotion from trading decisions and relying instead on rigorously tested algorithms. GIO4X Academy recommends this inspiring read because it demonstrates the ultimate potential of the systematic, disciplined approach to trading that GIO4X champions, and it motivates traders to think more scientifically about their strategies on the GIO4X Raptor platform.",
  },
  {
    title: "Principles",
    author: "Ray Dalio",
    category: "Wealth Management",
    description:
      "Ray Dalio, founder of the world's largest hedge fund Bridgewater Associates, shares the life and work principles that guided his extraordinary career in global macro trading and investment management, including extensive experience in currency markets and forex trading. The book's frameworks for radical transparency, systematic decision-making, and learning from mistakes apply directly to every aspect of a trader's development. GIO4X Academy recommends this book because Dalio's principles of meritocratic idea evaluation and pain-plus-reflection-equals-progress mirror the disciplined self-improvement philosophy that GIO4X Academy instills in its students, making it invaluable for traders seeking both personal and professional growth.",
  },
];

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
   Page Component
   ──────────────────────────────────────────────────────────── */

export default function BooksPage() {
  const [activeStory, setActiveStory] = useState<FeaturedStory | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBooks =
    activeCategory === "All"
      ? books
      : books.filter((b) => b.category === activeCategory);

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
              {filteredBooks.map((book, i) => (
                <AnimateOnScroll key={book.title} delay={i * 0.06}>
                  <Card className="h-full flex flex-col">
                    <div className="w-12 h-12 mb-4 rounded-xl bg-[rgba(41,171,226,0.1)] flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-[#29ABE2]" />
                    </div>
                    <Badge
                      variant={categoryColor[book.category] || "sky"}
                      className="self-start mb-3"
                    >
                      {book.category}
                    </Badge>
                    <h3 className="font-semibold leading-snug mb-1">{book.title}</h3>
                    <p className="text-xs text-[#29ABE2] mb-3">by {book.author}</p>
                    <p className="text-sm text-[var(--color-text-secondary)] flex-1">
                      {book.description}
                    </p>
                  </Card>
                </AnimateOnScroll>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredBooks.length === 0 && (
            <div className="text-center py-12 text-[var(--color-text-secondary)]">
              No books found in this category.
            </div>
          )}
        </div>
      </section>

      <CTABand />

      {/* ── Story Modal ────────────────────────────────────── */}
      <StoryModal
        story={activeStory}
        isOpen={activeStory !== null}
        onClose={() => setActiveStory(null)}
      />
    </>
  );
}
