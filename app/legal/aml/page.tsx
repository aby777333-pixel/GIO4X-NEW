import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "AML Policy" };

export default function AMLPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        image="raptor34.png"
        title="Anti-Money Laundering Policy"
        caption="Our AML and Know-Your-Customer commitments that keep client funds and the platform secure."
      />
      <section className="section-padding relative overflow-hidden">
      <div className="max-site max-w-3xl relative z-10">
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
    </>
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
