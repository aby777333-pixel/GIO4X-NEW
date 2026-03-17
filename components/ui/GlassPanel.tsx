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
      className={`glass-panel p-6 ${glow ? "shadow-[0_0_30px_rgba(41,171,226,0.15)]" : ""} ${className}`}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: "0 12px 40px var(--color-card-hover-shadow)",
            }
          : {}
      }
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
