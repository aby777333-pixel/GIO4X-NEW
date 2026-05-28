"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Shield, Zap, Award } from "lucide-react";
import { SITE } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Golden Spiral SVG (Fibonacci) — subtle gold accent on light bg     */
/* ------------------------------------------------------------------ */

function GoldenSpiral() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.08]" aria-hidden="true">
      <motion.svg
        viewBox="0 0 1000 618"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-1/2 w-[80%] max-w-[900px] -translate-x-1/2 -translate-y-1/2"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d="M1000 0 L1000 618 L0 618 L0 236
             C0 106, 106 0, 236 0 L1000 0 Z
             M618 618 L618 236
             C618 342, 528 432, 418 432
             C308 432 236 360 236 250
             C236 178 290 118 358 118
             C408 118 448 158 448 200
             C448 230 424 254 396 254
             C376 254 360 238 360 220
             C360 206 370 196 382 196"
          stroke="#C9A84C"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="2400"
          initial={{ strokeDashoffset: 2400 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 6, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Floating Trading Card                                               */
/* ------------------------------------------------------------------ */

function TradingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="absolute right-[6%] bottom-[18%] hidden lg:block"
    >
      <div className="glass-panel p-4 w-[220px] animate-float" style={{ animationDelay: "1s" }}>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono font-semibold text-xs">EUR/USD</span>
          <span className="text-emerald-500 text-[10px] font-mono">+0.12%</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-[var(--color-text-secondary)]">Bid</p>
            <p className="font-mono text-sm font-bold text-red-500">1.08<span className="text-base">54</span><span className="text-[10px]">2</span></p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-[var(--color-text-secondary)]">Spread</p>
            <p className="font-mono text-xs text-[#29ABE2]">0.1</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-[var(--color-text-secondary)]">Ask</p>
            <p className="font-mono text-sm font-bold text-emerald-500">1.08<span className="text-base">55</span><span className="text-[10px]">2</span></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                        */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ---- Background Layer 0: Light gradient base ---- */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F4F7FB 45%, #E9F1FA 75%, #F4F5F7 100%)",
        }}
      />

      {/* ---- Background Layer 1: Soft sky bloom (top-right) ---- */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(41,171,226,0.22) 0%, rgba(41,171,226,0.08) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      {/* ---- Background Layer 2: Soft gold bloom (bottom-left) ---- */}
      <div
        className="pointer-events-none absolute -left-40 -bottom-40 h-[440px] w-[440px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.16) 0%, rgba(201,168,76,0.05) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      {/* ---- Background Layer 3: Golden Spiral (subtle gold on white) ---- */}
      <GoldenSpiral />

      {/* ---- Background Layer 4: Radial brand glow ---- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(41,171,226,0.06) 0%, rgba(201,168,76,0.03) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ---- Floating Trading Card ---- */}
      <TradingCard />

      {/* ---- Content ---- */}
      <div className="max-site relative z-10 text-center pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase"
            style={{
              background: "var(--gradient-gold)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Regulated &middot; Trusted &middot; Premier
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] mb-5 text-balance text-[var(--color-text)]"
        >
          The Gentleman&apos;s{" "}
          <span className="gradient-text">Forex Broker.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--color-text-secondary)] text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Access global markets with institutional-grade execution, razor-thin
          spreads, and golden-ratio-designed tools built for serious traders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <Button size="lg" href={SITE.signUpUrl}>
            Open Live Account
          </Button>
          <Button size="lg" variant="secondary" href={SITE.demoUrl}>
            Try Demo Free
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2.5"
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

      {/* ---- Scroll Indicator ---- */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-9 rounded-full border-2 border-[var(--color-border)] flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-2.5 bg-[#29ABE2] rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
