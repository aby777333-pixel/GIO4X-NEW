"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import Link from "next/link";
import { FileText, Shield, AlertTriangle, Scale } from "lucide-react";

const documents = [
  { icon: FileText, title: "Terms of Service", desc: "General terms and conditions governing your use of GIO4X services.", href: "/legal/terms" },
  { icon: Shield, title: "Privacy Policy", desc: "How we collect, use, and protect your personal information.", href: "/legal/privacy" },
  { icon: AlertTriangle, title: "Risk Disclosure", desc: "Important information about the risks involved in trading CFDs and forex.", href: "/legal/risk" },
  { icon: Scale, title: "AML Policy", desc: "Our Anti-Money Laundering and Know Your Customer policies.", href: "/legal/aml" },
];

export default function LegalPage() {
  return (
    <section className="pt-32 section-padding relative overflow-hidden">
      {/* Hero Visual Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
      </div>
      <div className="max-site max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">Legal</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[var(--text-h1)] font-bold mt-4 mb-6">
            Legal Documents
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[var(--color-text-secondary)] text-lg">
            Transparency is at the core of GIO4X. Review our legal documents below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {documents.map((doc, i) => (
            <AnimateOnScroll key={doc.title} delay={i * 0.1}>
              <Link href={doc.href}>
                <Card className="h-full cursor-pointer">
                  <doc.icon className="w-8 h-8 text-[#29ABE2] mb-4" />
                  <h3 className="font-semibold mb-2">{doc.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{doc.desc}</p>
                </Card>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
