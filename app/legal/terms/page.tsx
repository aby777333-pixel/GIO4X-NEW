import { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <section className="pt-40 section-padding relative overflow-hidden">
      {/* Hero Visual Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
      </div>
      <div className="max-site max-w-3xl prose-wrapper relative z-10">
        <h1 className="text-[var(--text-h1)] font-bold mb-8">Terms of Service</h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: March 2026</p>

        <div className="space-y-8 text-[var(--color-text-secondary)] leading-relaxed text-sm">
          <Section title="1. Introduction">
            These Terms of Service govern your use of GIO4X trading services, platforms, and website. By opening an account or using our services, you agree to be bound by these terms.
          </Section>
          <Section title="2. Eligibility">
            You must be at least 18 years old and a resident of a jurisdiction where trading forex and CFDs is permitted. GIO4X does not offer services to residents of restricted jurisdictions.
          </Section>
          <Section title="3. Account Opening">
            To open a trading account, you must provide accurate identification and complete our KYC verification process. GIO4X reserves the right to refuse account opening at its sole discretion.
          </Section>
          <Section title="4. Trading Conditions">
            Spreads, leverage, commissions, and other trading conditions are specified on our website and may change. GIO4X provides execution on a best-effort basis and does not guarantee specific prices or fill rates.
          </Section>
          <Section title="5. Deposits & Withdrawals">
            All deposits must originate from accounts in the client&apos;s name. Withdrawal requests are processed within 1-3 business days. GIO4X may request additional documentation for compliance purposes.
          </Section>
          <Section title="6. Risk Acknowledgement">
            Trading forex and CFDs involves significant risk of loss. You may lose more than your initial deposit. You should not trade with funds you cannot afford to lose.
          </Section>
          <Section title="7. Limitation of Liability">
            GIO4X shall not be liable for losses resulting from market movements, technical failures beyond our control, or any indirect, incidental, or consequential damages.
          </Section>
          <Section title="8. Governing Law">
            These terms shall be governed by and construed in accordance with applicable laws. Disputes shall be resolved through arbitration or in the courts of the relevant jurisdiction.
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
