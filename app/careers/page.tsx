"use client";

import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/constants";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { MapPin, Briefcase, Users, Rocket, Heart, GraduationCap } from "lucide-react";

const perks = [
  { icon: Rocket, title: "Growth", desc: "Fast-growing fintech with real career progression." },
  { icon: Heart, title: "Benefits", desc: "Comprehensive health, dental, and wellness programs." },
  { icon: GraduationCap, title: "Learning", desc: "Annual training budget and conference attendance." },
  { icon: Users, title: "Culture", desc: "Diverse, collaborative team across multiple countries." },
];

const openings = [
  { title: "Senior Full-Stack Engineer", dept: "Engineering", location: "London / Remote", type: "Full-time" },
  { title: "Quantitative Developer", dept: "Trading", location: "London", type: "Full-time" },
  { title: "UI/UX Designer", dept: "Product", location: "Remote", type: "Full-time" },
  { title: "Compliance Officer", dept: "Legal", location: "London", type: "Full-time" },
  { title: "Customer Success Manager", dept: "Support", location: "Dubai", type: "Full-time" },
  { title: "Marketing Manager", dept: "Marketing", location: "Remote", type: "Full-time" },
  { title: "DevOps Engineer", dept: "Engineering", location: "London / Remote", type: "Full-time" },
  { title: "Junior Trading Analyst", dept: "Trading", location: "London", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        image="gio4x23.png"
        title={<>Join the <span className="gradient-text">GIO4X Team</span></>}
        caption="Build the future of online trading. We're looking for talented people who share our passion for financial technology and exceptional user experiences."
        ctas={[
          { label: "View Open Roles", href: "#openings" },
          { label: "Email Careers", href: `mailto:${SITE.email}`, variant: "secondary" },
        ]}
      />

      {/* Perks */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="Why GIO4X" title="Why Work Here" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#29ABE2] flex items-center justify-center">
                    <p.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="section-padding scroll-mt-24">
        <div className="max-site max-w-4xl">
          <SectionHeading eyebrow="Open Positions" title="Current Openings" />
          <div className="space-y-4">
            {openings.map((job, i) => (
              <AnimateOnScroll key={job.title} delay={i * 0.05}>
                <Card className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold mb-1">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="sky">{job.dept}</Badge>
                      <span className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)]">
                        <MapPin className="w-3 h-3" />{job.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)]">
                        <Briefcase className="w-3 h-3" />{job.type}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    href={`mailto:careers@gio4x.com?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                  >
                    Apply
                  </Button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
