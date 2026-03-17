import { Metadata } from "next";

export const metadata: Metadata = { title: "AML Policy" };

export default function AMLPage() {
  return (
    <section className="pt-40 section-padding relative overflow-hidden">
      {/* Hero Visual Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
      </div>
      <div className="max-site max-w-3xl relative z-10">
        <h1 className="text-[var(--text-h1)] font-bold mb-8">Anti-Money Laundering Policy</h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: March 2026</p>

        <div className="space-y-8 text-[var(--color-text-secondary)] leading-relaxed text-sm">
          <Section title="1. Purpose">
            GIO4X is committed to preventing money laundering and terrorist financing. This policy outlines the procedures and controls in place to detect, prevent, and report suspicious activities.
          </Section>
          <Section title="2. Know Your Customer (KYC)">
            All clients must complete identity verification before accessing trading services. Required documents include government-issued photo ID and proof of address dated within the last 3 months.
          </Section>
          <Section title="3. Transaction Monitoring">
            We monitor all transactions for unusual patterns including large deposits, rapid withdrawals, deposits from multiple sources, and trading patterns inconsistent with the client&apos;s profile.
          </Section>
          <Section title="4. Reporting">
            Suspicious activities are reported to the relevant financial intelligence units. GIO4X employees are trained to identify red flags and escalate concerns through the proper channels.
          </Section>
          <Section title="5. Record Keeping">
            All client identification documents and transaction records are retained for a minimum of 5 years in compliance with regulatory requirements.
          </Section>
          <Section title="6. Staff Training">
            All employees receive regular AML training to ensure awareness of current regulations, typologies, and reporting obligations.
          </Section>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
