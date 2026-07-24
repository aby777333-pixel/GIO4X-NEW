"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Shield, Zap, Award } from "lucide-react";
import { SITE } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Hero imagery — files live in /public/hero. Keep in sync with that  */
/*  folder. Shown in a RANDOM (client-shuffled) order as a crossfading */
/*  full-bleed background behind the hero copy.                        */
/* ------------------------------------------------------------------ */

// Curated subset for the home hero. The remaining photos are distributed
// across the inner-page heroes via <HeroBackdrop /> so imagery isn't all
// crammed onto the landing page.
const HERO_IMAGES = [
  "gio4x6.png",
  "gio4x8.png",
  "gio4x14.png",
  "gio4x19.png",
  "gio4x22.png",
];

/* Rotating hero copy. Slide 0 keeps the canonical brand line so the
   server-rendered HTML (and crawlers) always see it first. */
type Slide = { eyebrow: string; titlePre: string; titleAccent: string; caption: string };

const SLIDES: Slide[] = [
  {
    eyebrow: "Regulated · Trusted · Premier",
    titlePre: "The Gentleman's ",
    titleAccent: "Forex Broker.",
    caption:
      "Access global markets with institutional-grade execution, razor-thin spreads, and golden-ratio-designed tools built for serious traders.",
  },
  {
    eyebrow: "Precision Execution",
    titlePre: "Trade global markets with ",
    titleAccent: "institutional precision.",
    caption:
      "Razor-thin spreads, deep liquidity, and lightning-fast fills across 500+ instruments — the edge serious traders demand.",
  },
  {
    eyebrow: "Your Edge, Refined",
    titlePre: "Where strategy meets ",
    titleAccent: "serious performance.",
    caption:
      "Golden-ratio-designed tools, advanced charting, and 24/7 expert support — trading the way it should be.",
  },
  {
    eyebrow: "Built for Ambition",
    titlePre: "Markets never sleep. ",
    titleAccent: "Neither does your edge.",
    caption:
      "FX, metals, indices, crypto and CFDs — one refined account, endless opportunity, around the clock.",
  },
  {
    eyebrow: "Start in Minutes",
    titlePre: "Open. Fund. ",
    titleAccent: "Trade.",
    caption:
      "From sign-up to your first position in minutes. Your journey to the markets starts here.",
  },
];

const ROTATE_MS = 6500;

/* ------------------------------------------------------------------ */
/*  Floating Trading Card                                              */
/* ------------------------------------------------------------------ */

function TradingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="absolute right-[6%] bottom-[16%] z-10 hidden lg:block"
    >
      <div className="glass-panel p-4 w-[220px] animate-float" style={{ animationDelay: "1s" }}>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono font-semibold text-xs text-white">EUR/USD</span>
          <span className="text-emerald-400 text-[10px] font-mono">+0.12%</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-white/60">Bid</p>
            <p className="font-mono text-sm font-bold text-red-400">1.08<span className="text-base">54</span><span className="text-[10px]">2</span></p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-white/60">Spread</p>
            <p className="font-mono text-xs text-[#5BCBF5]">0.1</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-white/60">Ask</p>
            <p className="font-mono text-sm font-bold text-emerald-400">1.08<span className="text-base">55</span><span className="text-[10px]">2</span></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */

export function Hero() {
  // Deterministic defaults for SSR; shuffling/rotation start after hydration.
  const [order, setOrder] = useState<number[]>(() => HERO_IMAGES.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [mounted, setMounted] = useState<Set<number>>(() => new Set([0]));
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Fisher–Yates — client only, after hydration.
    const shuffled = HERO_IMAGES.map((_, i) => i);
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setOrder(shuffled);

    timer.current = setInterval(() => {
      setPos((p) => {
        const next = (p + 1) % shuffled.length;
        setMounted((seen) => {
          if (seen.has(next)) return seen;
          const copy = new Set(seen);
          copy.add(next);
          return copy;
        });
        return next;
      });
    }, ROTATE_MS);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const slide = SLIDES[pos % SLIDES.length];

  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0A1A33]">
      {/* ---- Rotating photography (crossfade) ---- */}
      {order.map((imgIdx, i) =>
        mounted.has(i) ? (
          <Image
            key={HERO_IMAGES[imgIdx]}
            src={`/hero/${HERO_IMAGES[imgIdx]}`}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover animate-ken-burns transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: i === pos ? 1 : 0 }}
          />
        ) : null
      )}

      {/* ---- Readability scrims (navy, left-weighted for left-aligned copy) ---- */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,21,43,0.96) 0%, rgba(8,21,43,0.90) 32%, rgba(8,21,43,0.66) 56%, rgba(8,21,43,0.38) 78%, rgba(8,21,43,0.58) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,26,51,0.4) 0%, transparent 30%, transparent 65%, rgba(10,26,51,0.6) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Soft gold bloom (bottom-left) for brand warmth */}
      <div
        className="pointer-events-none absolute -left-40 -bottom-40 h-[440px] w-[440px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.07) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />

      {/* ---- Vertical caption — perpendicular to the logo, contrasting gold ---- */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 hidden w-14 items-center justify-center md:flex">
        <span
          className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.4em] text-[#E2BE5A] drop-shadow"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {slide.eyebrow}
        </span>
      </div>
      <div className="absolute left-14 top-1/4 bottom-1/4 z-20 hidden w-px bg-gradient-to-b from-transparent via-[#E2BE5A]/50 to-transparent md:block" />

      {/* ---- Floating Trading Card ---- */}
      <TradingCard />

      {/* ---- Content (left-aligned) ---- */}
      <div className="max-site relative z-20 w-full pt-24 pb-14 md:pl-16">
        <div className="max-w-3xl text-left">
          <motion.div
            key={pos}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Magazine-cover kicker: a short gold rule + refined eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gradient-to-r from-[#E2BE5A] to-transparent" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.34em] uppercase text-[#E2BE5A] drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                {slide.eyebrow}
              </span>
            </div>

            {/* Hero title — Inter, tight editorial tracking, magazine weight */}
            <h1 className="font-sans mt-1 text-[clamp(2.3rem,5.4vw,4rem)] font-semibold tracking-[-0.022em] leading-[1.02] mb-5 text-balance text-white drop-shadow-[0_2px_22px_rgba(0,0,0,0.62)]">
              {slide.titlePre}
              <span className="gradient-text-gold font-bold">{slide.titleAccent}</span>
            </h1>

            {/* Hero caption — Inter, generous measure */}
            <p className="font-sans text-white/90 text-base md:text-lg max-w-2xl mb-6 leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]">
              {slide.caption}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-7"
          >
            <Button size="lg" href={SITE.signUpUrl}>
              Open Live Account
            </Button>
            <Button size="lg" variant="secondary" href={SITE.demoUrl} className="!border-white/40 !text-white hover:!bg-white/10">
              Try Demo Free
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-2.5"
          >
            <Badge variant="sky">
              <Shield className="w-3.5 h-3.5" />
              Segregated Funds
            </Badge>
            <Badge variant="sky">
              <Zap className="w-3.5 h-3.5" />
              0.0 Pip Spreads
            </Badge>
            <Badge variant="sky">
              <Award className="w-3.5 h-3.5" />
              Golden Ratio EA
            </Badge>
          </motion.div>
        </div>
      </div>

      {/* ---- Slide indicator ---- */}
      <div className="absolute bottom-7 right-8 z-20 flex items-center gap-1.5">
        {SLIDES.map((s, i) => (
          <span
            key={s.eyebrow}
            className="h-1 rounded-full transition-all duration-500"
            style={{
              width: i === pos % SLIDES.length ? 22 : 8,
              backgroundColor: i === pos % SLIDES.length ? "#E2BE5A" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* ---- Signature: thin gold beam sweeping the hero's bottom edge ---- */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px overflow-hidden" aria-hidden="true">
        <div
          className="h-px w-1/2 animate-beam-sweep"
          style={{ background: "linear-gradient(90deg, transparent, rgba(226,190,90,0.9), transparent)" }}
        />
      </div>

      {/* ---- Scroll Indicator ---- */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-9 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-2.5 bg-[#5BCBF5] rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
