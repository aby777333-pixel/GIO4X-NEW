"use client";

import Image from "next/image";

/**
 * GIO4X Logo — Uses the official pinwheel brand logo PNG.
 * Wrapper div accepts className for sizing (h-8, h-10, etc.)
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: "3 / 1" }}>
      <Image
        src="/logo.png"
        alt="GIO4X — The Gentleman's Forex Broker"
        fill
        priority
        sizes="180px"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
