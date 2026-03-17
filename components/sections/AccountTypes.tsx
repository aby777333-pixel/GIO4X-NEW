"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ACCOUNT_TYPES } from "@/lib/constants";
import { Check, X } from "lucide-react";

export function AccountTypes() {
  return (
    <section className="section-padding">
      <div className="max-site">
        <SectionHeading
          eyebrow="Accounts"
          title="Choose Your Account"
          subtitle="Three tiers designed for every level of trader — from beginner to institutional."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ACCOUNT_TYPES.map((account, i) => (
            <AnimateOnScroll key={account.name} delay={i * 0.15}>
              <Card
                glow={account.highlighted}
                className={`h-full flex flex-col ${
                  account.highlighted ? "border-[#29ABE2]/50 ring-1 ring-[#29ABE2]/20" : ""
                }`}
              >
                {account.highlighted && (
                  <div className="text-center -mt-3 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-[#29ABE2] text-white rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-1">{account.name}</h3>
                <p className="text-[#29ABE2] font-mono text-sm mb-6">From {account.minDeposit}</p>

                <div className="space-y-4 flex-1 mb-6">
                  <Row label="Spread from" value={account.spreadFrom} />
                  <Row label="Leverage" value={account.leverage} />
                  <Row label="Commission" value={account.commission} />
                  <Row
                    label="Account Manager"
                    value={
                      account.accountManager ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <X className="w-4 h-4 text-[var(--color-text-secondary)]" />
                      )
                    }
                  />
                  <Row
                    label="Priority Support"
                    value={
                      account.prioritySupport ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <X className="w-4 h-4 text-[var(--color-text-secondary)]" />
                      )
                    }
                  />
                </div>

                <Button
                  variant={account.highlighted ? "primary" : "secondary"}
                  className="w-full"
                  href="/accounts"
                >
                  Open {account.name} Account
                </Button>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[var(--color-border)]">
      <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}
