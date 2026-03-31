"use client";

import { useEffect, useState } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
// Icons unused but kept for future use

interface Session {
  name: string;
  city: string;
  openUTC: number;
  closeUTC: number;
  color: string;
  pairs: string;
  volume: string;
}

const sessions: Session[] = [
  { name: "Sydney", city: "Australia", openUTC: 22, closeUTC: 7, color: "#8B5CF6", pairs: "AUD/USD, NZD/USD, AUD/JPY", volume: "~5%" },
  { name: "Tokyo", city: "Japan", openUTC: 0, closeUTC: 9, color: "#EF4444", pairs: "USD/JPY, EUR/JPY, GBP/JPY", volume: "~15%" },
  { name: "London", city: "United Kingdom", openUTC: 8, closeUTC: 17, color: "#29ABE2", pairs: "EUR/USD, GBP/USD, EUR/GBP", volume: "~35%" },
  { name: "New York", city: "United States", openUTC: 13, closeUTC: 22, color: "#10B981", pairs: "EUR/USD, USD/CAD, GBP/USD", volume: "~25%" },
];

function isOpen(s: Session, hour: number): boolean {
  if (s.openUTC < s.closeUTC) return hour >= s.openUTC && hour < s.closeUTC;
  return hour >= s.openUTC || hour < s.closeUTC; // wraps midnight
}

function hoursUntilOpen(s: Session, hour: number): number {
  if (isOpen(s, hour)) return 0;
  if (hour < s.openUTC) return s.openUTC - hour;
  return 24 - hour + s.openUTC;
}

export function SessionClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const utcHour = now.getUTCHours();
  const utcMin = now.getUTCMinutes();
  const utcTime = `${String(utcHour).padStart(2, "0")}:${String(utcMin).padStart(2, "0")}:${String(now.getUTCSeconds()).padStart(2, "0")}`;
  const openSessions = sessions.filter((s) => isOpen(s, utcHour));
  const isOverlap = openSessions.length >= 2;

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0A0E1A 0%, #1B3A6B 50%, #0A0E1A 100%)" }} />
      <div className="max-site relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase">Live Clock</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3">
              Market Session <span className="text-[#29ABE2]">Clock</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              See which forex market sessions are currently open. Overlap periods offer the highest liquidity and tightest spreads.
            </p>
          </div>
        </AnimateOnScroll>

        {/* UTC Clock */}
        <AnimateOnScroll delay={0.1}>
          <div className="text-center mb-8">
            <span className="text-5xl md:text-6xl font-bold font-mono text-white tracking-wider">{utcTime}</span>
            <p className="text-white/30 text-sm mt-1">UTC / GMT</p>
            {isOverlap && (
              <div className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs text-emerald-400 font-semibold">SESSION OVERLAP — Peak Liquidity</span>
              </div>
            )}
          </div>
        </AnimateOnScroll>

        {/* Session Timeline Bar */}
        <AnimateOnScroll delay={0.15}>
          <div className="mb-8 rounded-xl bg-white/5 border border-white/10 p-4">
            <div className="flex items-center mb-2">
              <span className="text-xs text-white/30 w-12">00:00</span>
              <div className="flex-1 h-8 rounded-lg bg-white/5 relative overflow-hidden">
                {sessions.map((s) => {
                  const start = s.openUTC;
                  const dur = s.openUTC < s.closeUTC ? s.closeUTC - s.openUTC : 24 - s.openUTC + s.closeUTC;
                  const left = (start / 24) * 100;
                  const width = (dur / 24) * 100;
                  const active = isOpen(s, utcHour);
                  return (
                    <div
                      key={s.name}
                      className={`absolute top-0 h-full rounded transition-opacity ${active ? "opacity-80" : "opacity-25"}`}
                      style={{ left: `${left}%`, width: `${Math.min(width, 100 - left)}%`, background: s.color }}
                      title={`${s.name}: ${s.openUTC}:00 - ${s.closeUTC}:00 UTC`}
                    />
                  );
                })}
                {/* Current time marker */}
                <div
                  className="absolute top-0 h-full w-0.5 bg-white z-10"
                  style={{ left: `${((utcHour + utcMin / 60) / 24) * 100}%` }}
                />
              </div>
              <span className="text-xs text-white/30 w-12 text-right">24:00</span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Session Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sessions.map((s, i) => {
            const open = isOpen(s, utcHour);
            const hUntil = hoursUntilOpen(s, utcHour);
            return (
              <AnimateOnScroll key={s.name} delay={i * 0.08}>
                <div className={`rounded-2xl border p-5 transition-all ${
                  open ? "border-white/20 bg-white/5" : "border-white/5 bg-white/[0.02] opacity-60"
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: s.color, boxShadow: open ? `0 0 8px ${s.color}` : "none" }} />
                      <h3 className="text-white font-bold">{s.name}</h3>
                    </div>
                    {open ? (
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400">Open</span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-white/5 text-white/30">
                        In {hUntil}h
                      </span>
                    )}
                  </div>
                  <p className="text-white/30 text-xs mb-2">{s.city}</p>
                  <div className="flex justify-between text-xs text-white/50 mb-2">
                    <span>{String(s.openUTC).padStart(2, "0")}:00 UTC</span>
                    <span>{String(s.closeUTC).padStart(2, "0")}:00 UTC</span>
                  </div>
                  <p className="text-[10px] text-white/25">Top pairs: {s.pairs}</p>
                  <p className="text-[10px] text-white/25">Volume: {s.volume}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
