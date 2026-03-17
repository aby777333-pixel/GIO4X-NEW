/* ============================================================
   GIO4X Constants
   ============================================================ */

export interface NavChild {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavChild[];
}

export const SITE = {
  name: "GIO4X",
  slogan: "The Gentleman's Forex Broker.",
  description:
    "Access global markets with institutional-grade execution, razor-thin spreads, and a platform built for serious traders.",
  email: "support@gio4x.com",
  phone: "+91 1111 1111 11111",
  hq: "Reg.No: 15807, Hamchako, Mutsamudu, Autonomous Island of Anjouan, Union of Comoros",
  supportOffice:
    "No 48 Immanual Complex, Thirunagar Katpadi, Vellore - 632006, Tamilnadu, India",
  hours: "24/7 Support",
  signInUrl: "https://client.icareforex.com/login",
  signUpUrl:
    "https://client.icareforex.com/register/forex/live?parentRef=10019&agRef=10003",
  ibUrl: "https://client.icareforex.com/register/forex/ib?parentRef=10019",
  demoUrl:
    "https://client.icareforex.com/register/forex/demo?parentRef=10019&agRef=10003",
} as const;

export const NAV_LINKS: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Markets",
    href: "/markets",
    children: [
      { label: "Forex", href: "/markets?tab=forex" },
      { label: "Metals", href: "/markets?tab=metals" },
      { label: "CFDs", href: "/markets?tab=cfds" },
      { label: "Commodities", href: "/markets?tab=commodities" },
      { label: "Indices", href: "/markets?tab=indices" },
      { label: "Cryptos", href: "/markets?tab=crypto" },
    ],
  },
  {
    label: "Platforms",
    href: "/platforms",
  },
  {
    label: "Accounts",
    href: "/accounts",
    children: [
      { label: "Account Types", href: "/accounts" },
      { label: "Funding & Withdrawals", href: "/funding" },
      { label: "Copy Trading", href: "/copy-trading" },
      { label: "PAMM", href: "/pamm" },
    ],
  },
  {
    label: "Tools",
    href: "/tools",
    children: [
      { label: "Trading Calculators", href: "/tools" },
      { label: "Algorator", href: "/tools/algorator" },
      { label: "GIO Bots", href: "/tools/gio-bots" },
    ],
  },
  {
    label: "Education",
    href: "/education",
    children: [
      { label: "GIO4X Academy", href: "/education" },
      { label: "Glossary", href: "/education/glossary" },
      { label: "Books", href: "/education/books" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About GIO4X", href: "/about" },
      { label: "What We Are", href: "/about/what-we-are" },
      { label: "Client Fund Security", href: "/about/security" },
      { label: "Online Security", href: "/about/online-security" },
      { label: "FAQs", href: "/faq" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Partners",
    href: "/partners",
    children: [
      { label: "Introducing Brokers", href: "/partners" },
      { label: "Money Managers", href: "/partners/money-managers" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [
      { label: "Contact Us", href: "/contact" },
      { label: "Support", href: "/support" },
      { label: "Legal", href: "/legal" },
      { label: "Risk Disclosure", href: "/legal/risk" },
    ],
  },
];

export const ACCOUNT_TYPES = [
  {
    name: "Classic",
    minDeposit: "$150",
    spreadFrom: "2.5 pips",
    leverage: "1:500",
    commission: "None",
    accountManager: false,
    prioritySupport: false,
    highlighted: false,
    swap: true,
    minTrade: "0.01",
    marginCall: "100%",
    stopOut: "30%",
    bestFor: "Beginners",
  },
  {
    name: "Premium",
    minDeposit: "$500",
    spreadFrom: "1.5 pips",
    leverage: "1:500",
    commission: "None",
    accountManager: true,
    prioritySupport: true,
    highlighted: true,
    swap: true,
    minTrade: "0.01",
    marginCall: "100%",
    stopOut: "30%",
    bestFor: "Experts",
  },
  {
    name: "ECN",
    minDeposit: "$2,000",
    spreadFrom: "0.2 pips",
    leverage: "1:500",
    commission: "$3.50/lot",
    accountManager: true,
    prioritySupport: true,
    highlighted: false,
    dedicatedManager: true,
    swap: false,
    minTrade: "0.01",
    marginCall: "100%",
    stopOut: "30%",
    bestFor: "Professionals",
  },
] as const;

export const FOREX_PAIRS = [
  { symbol: "EURUSD", name: "Euro / US Dollar", spread: "0.1", leverage: "1:500", minLot: "0.01" },
  { symbol: "GBPUSD", name: "British Pound / US Dollar", spread: "0.3", leverage: "1:500", minLot: "0.01" },
  { symbol: "USDJPY", name: "US Dollar / Japanese Yen", spread: "0.2", leverage: "1:500", minLot: "0.01" },
  { symbol: "AUDUSD", name: "Australian Dollar / US Dollar", spread: "0.4", leverage: "1:400", minLot: "0.01" },
  { symbol: "USDCHF", name: "US Dollar / Swiss Franc", spread: "0.4", leverage: "1:400", minLot: "0.01" },
  { symbol: "USDCAD", name: "US Dollar / Canadian Dollar", spread: "0.5", leverage: "1:400", minLot: "0.01" },
  { symbol: "NZDUSD", name: "New Zealand Dollar / US Dollar", spread: "0.6", leverage: "1:400", minLot: "0.01" },
  { symbol: "EURGBP", name: "Euro / British Pound", spread: "0.5", leverage: "1:400", minLot: "0.01" },
  { symbol: "EURJPY", name: "Euro / Japanese Yen", spread: "0.6", leverage: "1:400", minLot: "0.01" },
  { symbol: "GBPJPY", name: "British Pound / Japanese Yen", spread: "0.8", leverage: "1:400", minLot: "0.01" },
] as const;

export const METALS = [
  { symbol: "XAUUSD", name: "Gold / US Dollar", spread: "0.05", leverage: "1:200", minLot: "0.01" },
  { symbol: "XAGUSD", name: "Silver / US Dollar", spread: "0.04", leverage: "1:100", minLot: "0.01" },
  { symbol: "XPTUSD", name: "Platinum / US Dollar", spread: "4.0", leverage: "1:50", minLot: "0.01" },
  { symbol: "XPDUSD", name: "Palladium / US Dollar", spread: "4.5", leverage: "1:50", minLot: "0.01" },
] as const;

export const CFDS = [
  { symbol: "AAPL", name: "Apple Inc.", spread: "0.10", leverage: "1:20", minLot: "1" },
  { symbol: "AMZN", name: "Amazon.com Inc.", spread: "0.30", leverage: "1:20", minLot: "1" },
  { symbol: "GOOGL", name: "Alphabet Inc.", spread: "0.50", leverage: "1:20", minLot: "1" },
  { symbol: "NFLX", name: "Netflix Inc.", spread: "0.40", leverage: "1:20", minLot: "1" },
  { symbol: "MSFT", name: "Microsoft Corp.", spread: "0.15", leverage: "1:20", minLot: "1" },
  { symbol: "TSLA", name: "Tesla Inc.", spread: "0.25", leverage: "1:10", minLot: "1" },
] as const;

export const COMMODITIES = [
  { symbol: "XBRUSD", name: "Brent Crude Oil", spread: "0.03", leverage: "1:100", minLot: "0.1" },
  { symbol: "XTIUSD", name: "WTI Crude Oil", spread: "0.03", leverage: "1:100", minLot: "0.1" },
  { symbol: "XNGUSD", name: "Natural Gas", spread: "0.005", leverage: "1:50", minLot: "0.1" },
] as const;

export const INDICES = [
  { symbol: "US30", name: "Dow Jones 30", spread: "1.5", leverage: "1:200", minLot: "0.1" },
  { symbol: "US500", name: "S&P 500", spread: "0.4", leverage: "1:200", minLot: "0.1" },
  { symbol: "US100", name: "Nasdaq 100", spread: "1.0", leverage: "1:200", minLot: "0.1" },
  { symbol: "UK100", name: "FTSE 100", spread: "1.2", leverage: "1:100", minLot: "0.1" },
  { symbol: "DE40", name: "DAX 40", spread: "1.5", leverage: "1:100", minLot: "0.1" },
  { symbol: "JP225", name: "Nikkei 225", spread: "8.0", leverage: "1:100", minLot: "0.1" },
] as const;

export const CRYPTO = [
  { symbol: "BTCUSD", name: "Bitcoin / US Dollar", spread: "25.0", leverage: "1:20", minLot: "0.01" },
  { symbol: "ETHUSD", name: "Ethereum / US Dollar", spread: "2.0", leverage: "1:20", minLot: "0.01" },
  { symbol: "LTCUSD", name: "Litecoin / US Dollar", spread: "0.5", leverage: "1:10", minLot: "0.01" },
  { symbol: "XRPUSD", name: "Ripple / US Dollar", spread: "0.003", leverage: "1:10", minLot: "1" },
  { symbol: "SOLUSD", name: "Solana / US Dollar", spread: "0.3", leverage: "1:10", minLot: "0.1" },
] as const;

export const TICKER_DATA = [
  { symbol: "EURUSD", price: 1.08542, change: 0.12 },
  { symbol: "GBPUSD", price: 1.26731, change: -0.08 },
  { symbol: "USDJPY", price: 149.852, change: 0.23 },
  { symbol: "XAUUSD", price: 2987.45, change: 0.67 },
  { symbol: "US30", price: 41823.5, change: -0.34 },
  { symbol: "BTCUSD", price: 84521.3, change: 1.42 },
  { symbol: "EURGBP", price: 0.85632, change: 0.05 },
  { symbol: "USDCHF", price: 0.88245, change: -0.11 },
] as const;

export const TESTIMONIALS = [
  {
    name: "James W.",
    country: "United Kingdom",
    initials: "JW",
    rating: 5,
    quote:
      "GIO4X delivers the tightest spreads I've ever experienced. Their Raptor platform is genuinely best-in-class.",
  },
  {
    name: "Sarah M.",
    country: "Australia",
    initials: "SM",
    rating: 5,
    quote:
      "Switched from my previous broker six months ago. The execution speed and customer support are on another level.",
  },
  {
    name: "Ahmed K.",
    country: "UAE",
    initials: "AK",
    rating: 5,
    quote:
      "The ECN account experience is exceptional. My dedicated account manager truly understands institutional trading.",
  },
] as const;
