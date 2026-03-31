"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Mail, CheckCircle, BookOpen, BarChart3, Lightbulb } from "lucide-react";

const perks = [
  { icon: BarChart3, text: "Daily market analysis & trade ideas" },
  { icon: BookOpen, text: "Exclusive trading education content" },
  { icon: Lightbulb, text: "First access to new platform features" },
];

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to Supabase or email API
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="max-site">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0A0E1A 60%, #1B3A6B 100%)" }} />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #29ABE2 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

          <div className="relative z-10 px-6 py-16 md:px-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left — Copy */}
              <AnimateOnScroll>
                <div>
                  <span className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase">Stay Ahead</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 leading-tight">
                    Get the <span className="text-[#29ABE2]">GIO4X Edge</span> in Your Inbox
                  </h2>
                  <p className="text-white/60 text-lg mb-8">
                    Join thousands of forex traders receiving our free daily market briefing, strategy tips, and exclusive insights.
                  </p>
                  <div className="space-y-4">
                    {perks.map((p) => (
                      <div key={p.text} className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#29ABE2]/15 flex items-center justify-center flex-shrink-0">
                          <p.icon className="w-4.5 h-4.5 text-[#29ABE2]" />
                        </div>
                        <span className="text-white/80 text-sm">{p.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Right — Form */}
              <AnimateOnScroll delay={0.15}>
                <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
                  {submitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                      <h3 className="text-white text-xl font-bold mb-2">You&apos;re In!</h3>
                      <p className="text-white/60">Check your inbox for a welcome email with your first market briefing.</p>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#29ABE2] to-[#1B3A6B] flex items-center justify-center">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold">Free Daily Briefing</h3>
                          <p className="text-white/50 text-xs">No spam. Unsubscribe anytime.</p>
                        </div>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          required
                          className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:border-[#29ABE2]/50 transition-colors"
                        />
                        <motion.button
                          type="submit"
                          className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1B3A6B] to-[#29ABE2] text-white font-semibold hover:opacity-90 transition-opacity"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          Subscribe — It&apos;s Free
                        </motion.button>
                      </form>
                      <p className="text-white/30 text-xs mt-4 text-center">
                        By subscribing you agree to receive marketing emails. Privacy-first — we never share your data.
                      </p>
                    </>
                  )}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
