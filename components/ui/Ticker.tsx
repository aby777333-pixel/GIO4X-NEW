"use client";

import { TICKER_DATA } from "@/lib/constants";
import { TrendingUp, TrendingDown } from "lucide-react";

export function Ticker() {
  const items = [...TICKER_DATA, ...TICKER_DATA];

  return (
    <div className="w-full overflow-hidden bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="flex animate-ticker-scroll whitespace-nowrap py-3">
        {items.map((item, i) => (
          <div
            key={`${item.symbol}-${i}`}
            className="flex items-center gap-3 px-6 border-r border-[var(--color-border)] last:border-r-0"
          >
            <span className="font-mono text-[var(--text-ticker)] font-semibold text-[var(--color-text)]">
              {item.symbol}
            </span>
            <span className="font-mono text-[var(--text-ticker)] text-[var(--color-text-secondary)]">
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
        ))}
      </div>
    </div>
  );
}
