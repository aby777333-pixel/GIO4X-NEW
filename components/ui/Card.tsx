"use client";

import { GlassPanel } from "./GlassPanel";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  /** Two-tier glass: a brighter, more elevated surface for featured cards. */
  elevated?: boolean;
}

export function Card({ children, className = "", glow = false, elevated = false }: CardProps) {
  return (
    <GlassPanel hover glow={glow} elevated={elevated} className={className}>
      {children}
    </GlassPanel>
  );
}
