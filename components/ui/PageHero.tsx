"use client";

import { motion } from "framer-motion";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { Button } from "@/components/ui/Button";

/* ------------------------------------------------------------------ */
/*  PageHero — shared inner-page hero.                                  */
/*                                                                     */
/*  Mirrors the home <Hero /> layout: left-aligned copy, a vertical    */
/*  gold eyebrow caption running perpendicular to the logo on the      */
/*  left edge, navy left-weighted readability scrim over the brand     */
/*  photo, and a row of mapped CTA buttons. Keeps each page's own      */
/*  eyebrow / title / caption so identity is preserved while the       */
/*  framing matches the landing hero.                                  */
/* ------------------------------------------------------------------ */

export type PageHeroCTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export function PageHero({
  eyebrow,
  title,
  caption,
  image,
  imagePosition = "center",
  ctas = [],
  paddingClass = "pt-72 pb-60",
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  caption: React.ReactNode;
  image: string;
  imagePosition?: string;
  ctas?: PageHeroCTA[];
  paddingClass?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={`relative overflow-hidden bg-[#0A1A33] ${paddingClass}`}>
      {/* ---- Brand photo ---- */}
      <HeroBackdrop image={image} position={imagePosition} />

      {/* ---- Readability scrims (navy, left-weighted for left-aligned copy) ---- */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,21,43,0.96) 0%, rgba(8,21,43,0.90) 32%, rgba(8,21,43,0.66) 56%, rgba(8,21,43,0.38) 78%, rgba(8,21,43,0.58) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,26,51,0.4) 0%, transparent 30%, transparent 65%, rgba(10,26,51,0.6) 100%)",
        }}
      />
      {/* Soft gold bloom (bottom-left) for brand warmth */}
      <div
        className="pointer-events-none absolute -left-40 -bottom-40 h-[440px] w-[440px] rounded-full"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.07) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ---- Vertical caption — perpendicular to the logo ---- */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 hidden w-14 items-center justify-center md:flex">
        <span
          className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.4em] text-[#E2BE5A] drop-shadow"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {eyebrow}
        </span>
      </div>
      <div className="absolute left-14 top-1/4 bottom-1/4 z-20 hidden w-px bg-gradient-to-b from-transparent via-[#E2BE5A]/50 to-transparent md:block" />

      {/* ---- Content (left-aligned) ---- */}
      <div className="max-site relative z-20 w-full md:pl-16">
        <div className="max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span
              className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]"
              style={{
                background: "var(--gradient-gold)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {eyebrow}
            </span>

            <h1 className="mt-4 text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.08] mb-5 text-balance text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.6)]">
              {title}
            </h1>

            <p className="text-white/90 text-base md:text-lg max-w-2xl mb-8 leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]">
              {caption}
            </p>
          </motion.div>

          {ctas.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              {ctas.map((cta) =>
                cta.variant === "secondary" ? (
                  <Button
                    key={cta.label}
                    size="lg"
                    variant="secondary"
                    href={cta.href}
                    className="!border-white/40 !text-white hover:!bg-white/10"
                  >
                    {cta.label}
                  </Button>
                ) : (
                  <Button key={cta.label} size="lg" href={cta.href}>
                    {cta.label}
                  </Button>
                )
              )}
            </motion.div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
