"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { Calculator, Calendar, Newspaper, TrendingUp, Bot, Cpu } from "lucide-react";
import Link from "next/link";

type CalcTab = "pip" | "margin" | "position" | "profit";

export default function ToolsPage() {
  const [calcTab, setCalcTab] = useState<CalcTab>("pip");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        {/* Hero Visual Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
          <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
        </div>
        <div className="max-site text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">Trading Tools</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[var(--text-h1)] font-bold mt-4 mb-6">
            Professional <span className="gradient-text">Trading Tools</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Calculators, calendars, and market intelligence to sharpen your trading edge.
          </motion.p>
        </div>
      </section>

      {/* Forex Calculator */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site max-w-3xl">
          <SectionHeading eyebrow="Calculator" title="Forex Calculator" />
          <AnimateOnScroll>
            <div className="glass-panel overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-[var(--color-border)]">
                {(["pip", "margin", "position", "profit"] as CalcTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setCalcTab(tab)}
                    className={`flex-1 py-3 text-sm font-medium transition-colors ${
                      calcTab === tab
                        ? "text-[#29ABE2] border-b-2 border-[#29ABE2]"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                    }`}
                  >
                    {tab === "pip" ? "Pip Value" : tab === "margin" ? "Margin" : tab === "position" ? "Position Size" : "Profit/Loss"}
                  </button>
                ))}
              </div>

              {/* Calculator Content */}
              <div className="p-6">
                {calcTab === "pip" && <PipCalculator />}
                {calcTab === "margin" && <MarginCalculator />}
                {calcTab === "position" && <PositionSizeCalculator />}
                {calcTab === "profit" && <ProfitCalculator />}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Economic Calendar */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading eyebrow="Calendar" title="Economic Calendar" subtitle="Stay ahead of market-moving events." />
          <AnimateOnScroll>
            <div className="glass-panel p-6">
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-[#29ABE2]" />
                <p className="text-[var(--color-text-secondary)] mb-4">Real-time economic calendar integrated into your trading experience.</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Track NFP, CPI, interest rate decisions, and 500+ economic events globally.</p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {[
                    { time: "14:30 GMT", event: "US Non-Farm Payrolls", impact: "high" },
                    { time: "12:00 GMT", event: "ECB Interest Rate Decision", impact: "high" },
                    { time: "09:30 GMT", event: "UK GDP (MoM)", impact: "medium" },
                  ].map((e) => (
                    <div key={e.event} className="glass-panel p-4 text-left">
                      <p className="font-mono text-xs text-[#29ABE2] mb-1">{e.time}</p>
                      <p className="text-sm font-medium mb-1">{e.event}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${e.impact === "high" ? "bg-red-500/20 text-red-400" : "bg-amber-500/20 text-amber-400"}`}>
                        {e.impact} impact
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Market News */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="News" title="Market News Feed" subtitle="Latest headlines from global financial markets." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { source: "FXStreet", title: "EUR/USD Retreats Below 1.0900 Ahead of Fed Decision", time: "2 hours ago", category: "Forex" },
              { source: "DailyFX", title: "Gold Surges Past $3,000 as Geopolitical Tensions Rise", time: "3 hours ago", category: "Commodities" },
              { source: "Reuters", title: "US Jobless Claims Fall to Lowest Level in 6 Months", time: "4 hours ago", category: "Economy" },
              { source: "Bloomberg", title: "Bitcoin Tests Resistance at $85,000 Key Level", time: "5 hours ago", category: "Crypto" },
              { source: "FXStreet", title: "Bank of England Holds Rates, Signals Caution", time: "6 hours ago", category: "Central Banks" },
              { source: "DailyFX", title: "Oil Prices Climb on OPEC+ Supply Cut Extension", time: "7 hours ago", category: "Commodities" },
            ].map((news, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <Card className="h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#29ABE2]">{news.source}</span>
                    <span className="text-xs text-[var(--color-text-secondary)]">{news.time}</span>
                  </div>
                  <h3 className="font-semibold text-sm leading-snug mb-3">{news.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)]">
                    {news.category}
                  </span>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* More Tools */}
      <section className="section-padding">
        <div className="max-site">
          <SectionHeading eyebrow="More Tools" title="Trading Essentials" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: "Algorator", desc: "Build, backtest, and deploy automated trading strategies with no coding required.", href: "/tools/algorator" },
              { icon: Bot, title: "GIO Bots", desc: "AI-powered trading bots engineered with golden-ratio algorithms. Coming soon.", href: "/tools/gio-bots" },
              { icon: Calculator, title: "Currency Converter", desc: "Convert between 180+ currencies with real-time rates.", href: undefined },
              { icon: TrendingUp, title: "Trading Signals", desc: "AI-powered trading signals across major pairs and timeframes.", href: undefined },
              { icon: Calendar, title: "Earnings Calendar", desc: "Track corporate earnings reports for stock CFD traders.", href: undefined },
              { icon: Newspaper, title: "Market Analysis", desc: "Daily technical and fundamental analysis from our team.", href: undefined },
            ].map((tool, i) => (
              <AnimateOnScroll key={tool.title} delay={i * 0.1}>
                {tool.href ? (
                  <Link href={tool.href} className="block h-full">
                    <Card className="h-full text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[rgba(41,171,226,0.1)] flex items-center justify-center">
                        <tool.icon className="w-6 h-6 text-[#29ABE2]" />
                      </div>
                      <h3 className="font-semibold mb-2">{tool.title}</h3>
                      <p className="text-sm text-[var(--color-text-secondary)]">{tool.desc}</p>
                    </Card>
                  </Link>
                ) : (
                  <Card className="h-full text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[rgba(41,171,226,0.1)] flex items-center justify-center">
                      <tool.icon className="w-6 h-6 text-[#29ABE2]" />
                    </div>
                    <h3 className="font-semibold mb-2">{tool.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">{tool.desc}</p>
                  </Card>
                )}
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

/* ========== Calculator Components ========== */

function CalcInput({ label, value, onChange, type = "number", options }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  options?: { value: string; label: string }[];
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">{label}</label>
      {options ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:border-[#29ABE2] focus:outline-none transition-colors"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:border-[#29ABE2] focus:outline-none transition-colors font-mono"
        />
      )}
    </div>
  );
}

function CalcResult({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-t border-[var(--color-border)]">
      <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>
      <span className="text-lg font-bold text-[#29ABE2] font-mono">{value}</span>
    </div>
  );
}

function PipCalculator() {
  const [instrument, setInstrument] = useState("EURUSD");
  const [lotSize, setLotSize] = useState("1.00");
  const [accountCurrency, setAccountCurrency] = useState("USD");

  const pipValue = useMemo(() => {
    const lots = parseFloat(lotSize) || 0;
    const pipMap: Record<string, number> = { EURUSD: 10, GBPUSD: 10, USDJPY: 6.67, XAUUSD: 10 };
    return ((pipMap[instrument] || 10) * lots).toFixed(2);
  }, [instrument, lotSize]);

  return (
    <>
      <CalcInput label="Instrument" value={instrument} onChange={setInstrument} options={[
        { value: "EURUSD", label: "EUR/USD" }, { value: "GBPUSD", label: "GBP/USD" },
        { value: "USDJPY", label: "USD/JPY" }, { value: "XAUUSD", label: "XAU/USD" },
      ]} />
      <CalcInput label="Lot Size" value={lotSize} onChange={setLotSize} />
      <CalcInput label="Account Currency" value={accountCurrency} onChange={setAccountCurrency} options={[
        { value: "USD", label: "USD" }, { value: "EUR", label: "EUR" }, { value: "GBP", label: "GBP" },
      ]} />
      <CalcResult label="Pip Value" value={`$${pipValue}`} />
    </>
  );
}

function MarginCalculator() {
  const [instrument, setInstrument] = useState("EURUSD");
  const [lotSize, setLotSize] = useState("1.00");
  const [leverage, setLeverage] = useState("100");

  const margin = useMemo(() => {
    const lots = parseFloat(lotSize) || 0;
    const lev = parseInt(leverage) || 100;
    const contractSize = instrument === "XAUUSD" ? 100 : 100000;
    const price = instrument === "XAUUSD" ? 2987 : instrument === "USDJPY" ? 149.85 : 1.085;
    return ((lots * contractSize * price) / lev).toFixed(2);
  }, [instrument, lotSize, leverage]);

  return (
    <>
      <CalcInput label="Instrument" value={instrument} onChange={setInstrument} options={[
        { value: "EURUSD", label: "EUR/USD" }, { value: "GBPUSD", label: "GBP/USD" },
        { value: "USDJPY", label: "USD/JPY" }, { value: "XAUUSD", label: "XAU/USD" },
      ]} />
      <CalcInput label="Lot Size" value={lotSize} onChange={setLotSize} />
      <CalcInput label="Leverage" value={leverage} onChange={setLeverage} options={[
        { value: "50", label: "1:50" }, { value: "100", label: "1:100" },
        { value: "200", label: "1:200" }, { value: "500", label: "1:500" },
      ]} />
      <CalcResult label="Required Margin" value={`$${parseFloat(margin).toLocaleString()}`} />
    </>
  );
}

function PositionSizeCalculator() {
  const [balance, setBalance] = useState("10000");
  const [riskPercent, setRiskPercent] = useState("2");
  const [stopLoss, setStopLoss] = useState("50");

  const result = useMemo(() => {
    const bal = parseFloat(balance) || 0;
    const risk = parseFloat(riskPercent) || 0;
    const sl = parseFloat(stopLoss) || 1;
    const riskAmount = bal * (risk / 100);
    const pipValue = 10;
    const lots = riskAmount / (sl * pipValue);
    return { lots: lots.toFixed(2), units: (lots * 100000).toFixed(0), riskAmount: riskAmount.toFixed(2) };
  }, [balance, riskPercent, stopLoss]);

  return (
    <>
      <CalcInput label="Account Balance ($)" value={balance} onChange={setBalance} />
      <CalcInput label="Risk (%)" value={riskPercent} onChange={setRiskPercent} />
      <CalcInput label="Stop Loss (pips)" value={stopLoss} onChange={setStopLoss} />
      <CalcResult label="Lot Size" value={result.lots} />
      <CalcResult label="Units" value={parseInt(result.units).toLocaleString()} />
      <CalcResult label="Risk Amount" value={`$${result.riskAmount}`} />
    </>
  );
}

function ProfitCalculator() {
  const [direction, setDirection] = useState("buy");
  const [openPrice, setOpenPrice] = useState("1.08500");
  const [closePrice, setClosePrice] = useState("1.09000");
  const [lotSize, setLotSize] = useState("1.00");

  const profit = useMemo(() => {
    const open = parseFloat(openPrice) || 0;
    const close = parseFloat(closePrice) || 0;
    const lots = parseFloat(lotSize) || 0;
    const pips = direction === "buy" ? (close - open) * 10000 : (open - close) * 10000;
    return { pips: pips.toFixed(1), profit: (pips * lots * 10).toFixed(2) };
  }, [direction, openPrice, closePrice, lotSize]);

  const isProfit = parseFloat(profit.profit) >= 0;

  return (
    <>
      <CalcInput label="Direction" value={direction} onChange={setDirection} options={[
        { value: "buy", label: "Buy (Long)" }, { value: "sell", label: "Sell (Short)" },
      ]} />
      <CalcInput label="Open Price" value={openPrice} onChange={setOpenPrice} />
      <CalcInput label="Close Price" value={closePrice} onChange={setClosePrice} />
      <CalcInput label="Lot Size" value={lotSize} onChange={setLotSize} />
      <CalcResult label="Pips" value={profit.pips} />
      <div className="flex items-center justify-between py-3 border-t border-[var(--color-border)]">
        <span className="text-sm text-[var(--color-text-secondary)]">Profit / Loss</span>
        <span className={`text-lg font-bold font-mono ${isProfit ? "text-emerald-400" : "text-red-400"}`}>
          {isProfit ? "+" : ""}${profit.profit}
        </span>
      </div>
    </>
  );
}
