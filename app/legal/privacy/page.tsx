import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        image="raptor31.png"
        title="Privacy Policy"
        caption="How GIO4X collects, uses, and protects your personal information."
      />
      <section className="section-padding relative overflow-hidden">
      <div className="max-site max-w-3xl relative z-10">
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
