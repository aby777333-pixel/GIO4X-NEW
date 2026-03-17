"use client";

import { GlassPanel } from "./GlassPanel";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function Card({ children, className = "", glow = false }: CardProps) {
  return (
    <GlassPanel hover glow={glow} className={className}>
      {children}
    </GlassPanel>
  );
}
