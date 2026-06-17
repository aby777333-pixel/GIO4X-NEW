"use client";

import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
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
    <>
      <PageHero
        eyebrow="Legal"
        image="raptor35.png"
        title="Legal Documents"
        caption="Transparency is at the core of GIO4X. Review our legal documents below."
      />
      <section className="section-padding relative overflow-hidden">
      <div className="max-site max-w-4xl relative z-10">
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
    </>
  );
}
