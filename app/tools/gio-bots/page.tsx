"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Bot, ArrowLeft } from "lucide-react";

export default function GioBotsPage() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-40 pb-28 relative overflow-hidden">
      {/* Hero Visual Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
      </div>
      <div className="max-site text-center relative z-10">
        {/* Animated Robot Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center shadow-lg shadow-[rgba(41,171,226,0.3)]"
          >
            <Bot className="w-12 h-12 text-white" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[var(--text-h1)] font-bold mb-4"
        >
          <span className="gradient-text">GIO Bots</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold text-[var(--color-text)] mb-4"
        >
          Coming Soon{dots}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[var(--color-text-secondary)] text-lg max-w-lg mx-auto mb-10"
        >
          Our AI-powered trading bots are being engineered with golden-ratio algorithms.
          Stay tuned for automated strategies built on the mathematics of the markets.
        </motion.p>

        {/* Notify Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-md mx-auto mb-10"
        >
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:border-[#29ABE2] focus:outline-none transition-colors placeholder:text-[var(--color-text-secondary)]"
            />
            <Button size="md">Notify Me</Button>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] mt-2">
            Be the first to know when GIO Bots launches.
          </p>
        </motion.div>

        {/* Animated Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-[#29ABE2]"
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>

        <Button variant="ghost" href="/tools" size="sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Tools
        </Button>
      </div>
    </section>
  );
}
