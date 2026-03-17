import { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="pt-32 section-padding relative overflow-hidden">
      {/* Hero Visual Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
      </div>
      <div className="max-site max-w-3xl relative z-10">
        <h1 className="text-[var(--text-h1)] font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: March 2026</p>

        <div className="space-y-8 text-[var(--color-text-secondary)] leading-relaxed text-sm">
          <Section title="1. Information We Collect">
            We collect personal information including name, email, phone number, date of birth, address, and identification documents during account registration. We also collect trading activity data and technical data such as IP addresses and browser information.
          </Section>
          <Section title="2. How We Use Your Information">
            Your information is used to verify your identity, manage your account, process transactions, comply with regulatory requirements, and improve our services. We may also use it to send relevant communications about our products and services.
          </Section>
          <Section title="3. Data Protection">
            We implement industry-standard security measures including encryption, secure servers, and access controls. Your personal data is stored in compliance with applicable data protection regulations.
          </Section>
          <Section title="4. Third-Party Sharing">
            We do not sell your personal information. We may share data with regulatory authorities, payment processors, and service providers who assist in operating our business, all under strict confidentiality agreements.
          </Section>
          <Section title="5. Cookies">
            We use cookies and similar technologies to enhance your experience, analyze traffic, and personalize content. You can manage cookie preferences through your browser settings.
          </Section>
          <Section title="6. Your Rights">
            You have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact our Data Protection Officer at privacy@gio4x.com.
          </Section>
          <Section title="7. Data Retention">
            We retain personal data for as long as necessary to provide our services and comply with legal obligations. Trading records are retained for a minimum of 5 years as required by financial regulations.
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
