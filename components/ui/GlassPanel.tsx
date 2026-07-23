"use client";

import { motion } from "framer-motion";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassPanel({ children, className = "", hover = false, glow = false }: GlassPanelProps) {
  return (
    <motion.div
      className={`glass-panel card-elevated p-6 ${className}`}
      style={
        glow
          ? { boxShadow: "var(--shadow-md), var(--hairline-top), var(--shadow-glow-sky)" }
          : undefined
      }
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow:
                "0 6px 12px rgba(15,35,71,0.06), 0 22px 48px rgba(15,35,71,0.12), 0 10px 34px rgba(41,171,226,0.13)",
            }
          : {}
      }
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
