"use client";

import { useLivePrices } from "@/lib/use-live-prices";
import { TrendingUp, TrendingDown, Wifi } from "lucide-react";

export function Ticker() {
  const { prices, isLive } = useLivePrices(30_000);
  const items = [...prices, ...prices]; // duplicate for seamless scroll

  return (
    <div className="w-full overflow-hidden bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="flex animate-ticker-scroll whitespace-nowrap py-3">
        {items.map((item, i) => {
          const flash = item.price !== item.prevPrice;
          return (
            <div
              key={`${item.symbol}-${i}`}
              className="flex items-center gap-3 px-6 border-r border-[var(--color-border)] last:border-r-0"
            >
              <span className="font-mono text-[var(--text-ticker)] font-semibold text-[var(--color-text)]">
                {item.symbol}
              </span>
              <span
                className={`font-mono text-[var(--text-ticker)] transition-colors duration-300 ${
                  flash
                    ? item.price > item.prevPrice ? "text-emerald-400" : "text-rose-400"
                    : "text-[var(--color-text-secondary)]"
                }`}
              >
                {item.price.toFixed(item.price > 1000 ? 1 : item.price > 100 ? 2 : 5)}
              </span>
              <span
                className={`flex items-center gap-1 font-mono text-[var(--text-ticker)] ${
                  item.change >= 0 ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {item.change >= 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {item.change >= 0 ? "+" : ""}
                {item.change.toFixed(2)}%
              </span>
            </div>
          );
        })}
        {/* Live indicator */}
        {isLive && (
          <div className="flex items-center gap-1.5 px-4">
            <Wifi className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] text-emerald-400 font-semibold uppercase">Live</span>
          </div>
        )}
      </div>
    </div>
  );
}
