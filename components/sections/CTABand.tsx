"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SITE } from "@/lib/constants";

export function CTABand() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* Soft overhead light for depth */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-2/3"
        style={{ background: "radial-gradient(60% 100% at 50% 0%, rgba(255,255,255,0.16), transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Gold hairline at the top edge */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(226,190,90,0.7), transparent)" }}
        aria-hidden="true"
      />
      <div className="max-site relative z-10 text-center">
        <AnimateOnScroll>
          <h2 className="font-display text-[var(--text-h1)] font-medium text-white mb-4">
            Ready to Trade Smarter?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Join thousands of traders who chose GIO4X for institutional-grade execution
            and a premium trading experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={SITE.signUpUrl}
              className="inline-flex items-center justify-center gap-2 font-medium px-8 py-4 text-lg rounded-xl bg-white text-[#1B3A6B] hover:bg-white/90 transition-all duration-300 cursor-pointer shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Open Account
            </motion.a>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-medium px-8 py-4 text-lg rounded-xl bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Sales
            </motion.a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
