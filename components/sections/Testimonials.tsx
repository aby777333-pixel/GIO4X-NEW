"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="max-site">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Traders Worldwide"
          subtitle="Hear from traders who made the switch to GIO4X."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.15}>
              <Card elevated className="h-full flex flex-col">
                {/* Gold quote mark + stars */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-7 h-7 text-[var(--color-gold)] opacity-50" />
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                {/* Quote */}
                <p className="font-display text-[var(--color-text)] text-lg leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center text-white text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">{t.country}</p>
                  </div>
                </div>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
