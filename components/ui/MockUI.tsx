"use client";

// MockUI — elegant, on-brand REPRESENTATIVE product illustrations for the
// ecosystem showcase. These are stylised design representations of the GIO
// Raptor platform surfaces (terminal, dashboards, mobile), not literal
// screenshots or real account data. Swap in captured screenshots when ready.

const NAVY = "#0A1A33";
const SKY = "#29ABE2";
const SKY_D = "#1B3A6B";
const GOLD = "#C9A84C";
const UP = "#10B981";
const DOWN = "#E0524B";

/* Deterministic candles so SSR and client match (no Math.random). */
const CANDLES = [
  [30, 44, 26, 40], [40, 46, 34, 36], [36, 40, 22, 30], [30, 34, 24, 32],
  [32, 50, 30, 46], [46, 52, 40, 42], [42, 44, 30, 34], [34, 48, 32, 46],
  [46, 58, 44, 54], [54, 56, 46, 50], [50, 62, 48, 60], [60, 64, 52, 56],
  [56, 60, 44, 48], [48, 58, 46, 56], [56, 70, 54, 66], [66, 72, 60, 62],
];

export function TerminalMock() {
  const line = CANDLES.map((c, i) => `${18 + i * 15},${120 - c[3]}`).join(" ");
  return (
    <div className="grid grid-cols-[80px_1fr_88px] gap-px bg-white/5 text-[9px]" style={{ background: NAVY }}>
      {/* Watchlist */}
      <div className="flex flex-col gap-1.5 p-2" style={{ background: NAVY }}>
        {[["EURUSD", "+0.12", true], ["XAUUSD", "+0.64", true], ["GBPUSD", "-0.08", false], ["BTCUSD", "+1.42", true], ["US30", "-0.34", false], ["USDJPY", "+0.23", true]].map(
          ([s, c, up]) => (
            <div key={s as string} className="flex items-center justify-between">
              <span className="font-mono text-white/80">{s}</span>
              <span className="font-mono" style={{ color: up ? UP : DOWN }}>{c}</span>
            </div>
          )
        )}
      </div>
      {/* Chart */}
      <div className="relative p-2" style={{ background: "#08152B" }}>
        <svg viewBox="0 0 260 128" className="h-full w-full" preserveAspectRatio="none">
          {[26, 52, 78, 104].map((y) => (
            <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          ))}
          {CANDLES.map((c, i) => {
            const x = 18 + i * 15;
            const up = c[3] >= c[0];
            const col = up ? UP : DOWN;
            const bodyTop = 120 - Math.max(c[0], c[3]);
            const bodyH = Math.max(2, Math.abs(c[3] - c[0]));
            return (
              <g key={i}>
                <line x1={x} y1={120 - c[1]} x2={x} y2={120 - c[2]} stroke={col} strokeWidth="1" />
                <rect x={x - 4} y={bodyTop} width="8" height={bodyH} fill={col} rx="1" />
              </g>
            );
          })}
          <polyline points={line} fill="none" stroke={SKY} strokeWidth="1.5" opacity="0.85" />
        </svg>
        <span className="absolute right-2 top-2 rounded px-1.5 py-0.5 font-mono text-white/70" style={{ background: "rgba(41,171,226,0.15)" }}>
          EURUSD · M15
        </span>
      </div>
      {/* Order ticket */}
      <div className="flex flex-col gap-1.5 p-2" style={{ background: NAVY }}>
        <div className="rounded py-1 text-center font-semibold text-white" style={{ background: UP }}>BUY</div>
        <div className="rounded py-1 text-center font-semibold text-white" style={{ background: DOWN }}>SELL</div>
        <div className="mt-1 space-y-1">
          {["Lots 0.10", "SL 1.0842", "TP 1.0921"].map((t) => (
            <div key={t} className="rounded border px-1.5 py-1 font-mono text-white/60" style={{ borderColor: "rgba(255,255,255,0.08)" }}>{t}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Dashboard variants — reused for CRM / Analytics / Dealer / Risk. */
export function DashboardMock({ tone = SKY, kpis }: { tone?: string; kpis?: string[] }) {
  const cards = kpis ?? ["Equity", "Volume", "Clients", "P&L"];
  const bars = [40, 62, 48, 70, 55, 78, 66, 84];
  return (
    <div className="p-3 text-[9px]" style={{ background: NAVY }}>
      <div className="mb-2 grid grid-cols-4 gap-1.5">
        {cards.map((k, i) => (
          <div key={k} className="rounded-md p-1.5" style={{ background: "rgba(255,255,255,0.04)" }}>
            <div className="text-white/45">{k}</div>
            <div className="mt-0.5 font-mono font-semibold" style={{ color: i === 0 ? GOLD : tone }}>
              {["$2.4M", "18.3K", "1,204", "+7.8%"][i % 4]}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[1.4fr_1fr] gap-1.5">
        <div className="rounded-md p-2" style={{ background: "#08152B" }}>
          <svg viewBox="0 0 160 60" className="h-full w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="dg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={tone} stopOpacity="0.35" />
                <stop offset="100%" stopColor={tone} stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline points="0,46 22,40 44,44 66,30 88,34 110,20 132,26 160,10" fill="none" stroke={tone} strokeWidth="1.5" />
            <polygon points="0,46 22,40 44,44 66,30 88,34 110,20 132,26 160,10 160,60 0,60" fill="url(#dg)" />
          </svg>
        </div>
        <div className="flex items-end gap-1 rounded-md p-2" style={{ background: "#08152B" }}>
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i % 2 ? tone : SKY_D, opacity: 0.85 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileMock() {
  return (
    <div className="flex h-full flex-col p-3 text-[9px]" style={{ background: "linear-gradient(180deg,#0A1A33,#08152B)" }}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-white/50">Portfolio</span>
        <span className="h-5 w-5 rounded-full" style={{ background: "rgba(41,171,226,0.2)" }} />
      </div>
      <div className="rounded-xl p-3" style={{ background: "linear-gradient(135deg,#1B3A6B,#29ABE2)" }}>
        <div className="text-[8px] text-white/70">Total Balance</div>
        <div className="font-mono text-base font-bold text-white">$48,920.75</div>
        <div className="font-mono text-[8px]" style={{ color: "#BFF3DE" }}>+2.14% today</div>
      </div>
      <div className="mt-2 flex-1 space-y-1.5">
        {[["EURUSD", "+0.12", true], ["XAUUSD", "+0.64", true], ["BTCUSD", "-0.31", false]].map(([s, c, up]) => (
          <div key={s as string} className="flex items-center justify-between rounded-lg px-2 py-1.5" style={{ background: "rgba(255,255,255,0.04)" }}>
            <span className="font-mono text-white/80">{s}</span>
            <span className="font-mono" style={{ color: up ? UP : DOWN }}>{c}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        <div className="rounded-lg py-1.5 text-center font-semibold text-white" style={{ background: UP }}>Buy</div>
        <div className="rounded-lg py-1.5 text-center font-semibold text-white" style={{ background: DOWN }}>Sell</div>
      </div>
    </div>
  );
}

/* Compact thumbnail UI for the module grid. */
export function MiniMock({ variant }: { variant: "grid" | "chart" | "list" | "gauge" }) {
  if (variant === "gauge") {
    return (
      <div className="flex h-full items-center justify-center p-3" style={{ background: NAVY }}>
        <svg viewBox="0 0 100 60" className="w-2/3">
          <path d="M10 55 A40 40 0 0 1 90 55" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="7" strokeLinecap="round" />
          <path d="M10 55 A40 40 0 0 1 74 26" fill="none" stroke={UP} strokeWidth="7" strokeLinecap="round" />
          <circle cx="50" cy="55" r="3" fill={GOLD} />
        </svg>
      </div>
    );
  }
  if (variant === "chart") {
    return (
      <div className="h-full p-3" style={{ background: NAVY }}>
        <svg viewBox="0 0 120 60" className="h-full w-full" preserveAspectRatio="none">
          <polyline points="0,48 20,42 40,46 60,30 80,36 100,18 120,24" fill="none" stroke={SKY} strokeWidth="2" />
        </svg>
      </div>
    );
  }
  if (variant === "list") {
    return (
      <div className="flex h-full flex-col gap-1.5 p-3" style={{ background: NAVY }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full" style={{ background: i === 0 ? SKY : "rgba(255,255,255,0.08)" }} />
            <span className="h-2 flex-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="h-2 w-6 rounded-full" style={{ background: i % 2 ? UP : GOLD, opacity: 0.6 }} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="grid h-full grid-cols-3 gap-1.5 p-3" style={{ background: NAVY }}>
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="rounded" style={{ background: i % 4 === 0 ? "rgba(41,171,226,0.25)" : "rgba(255,255,255,0.05)" }} />
      ))}
    </div>
  );
}
