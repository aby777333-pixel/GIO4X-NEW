"use client";

import { motion } from "framer-motion";
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
      <section className="pt-64 pb-52 relative overflow-hidden">
        {/* Hero Visual Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
          <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
        </div>
        <div className="max-site text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">Careers</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[var(--text-h1)] font-bold mt-4 mb-6">
            Join the <span className="gradient-text">GIO4X Team</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Build the future of online trading. We&apos;re looking for talented people who share our passion for financial technology and exceptional user experiences.
          </motion.p>
        </div>
      </section>

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
      <section className="section-padding">
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
                  <Button variant="secondary" size="sm">Apply</Button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
