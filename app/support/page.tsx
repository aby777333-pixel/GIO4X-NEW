"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/constants";
import Link from "next/link";
import {
  MessageCircle, Mail, Phone, BookOpen, Download, Settings,
  CreditCard, Shield, User, HelpCircle, Clock, Send
} from "lucide-react";

const supportCategories = [
  { icon: User, title: "Account Management", desc: "Account opening, verification, settings, and profile updates.", href: "/faq" },
  { icon: CreditCard, title: "Deposits & Withdrawals", desc: "Payment methods, processing times, and transaction issues.", href: "/funding" },
  { icon: Download, title: "Platform Downloads", desc: "Download and install Raptor Desktop, WebTrader, and mobile apps.", href: "/platforms" },
  { icon: Settings, title: "Technical Support", desc: "Platform issues, connectivity, and trading errors.", href: "/contact" },
  { icon: Shield, title: "Security", desc: "Two-factor authentication, password resets, and account security.", href: "/about/online-security" },
  { icon: BookOpen, title: "Education", desc: "Trading guides, tutorials, and learning resources.", href: "/education" },
];

const hours = [
  { day: "Monday - Friday", time: "24 Hours", status: "open" },
  { day: "Saturday", time: "Email & Tickets Only", status: "limited" },
  { day: "Sunday", time: "Email & Tickets Only", status: "limited" },
];

export default function SupportPage() {
  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTicketForm({ name: "", email: "", subject: "", category: "general", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHero
        eyebrow="Help Center"
        image="raptor29.png"
        title={<>How Can We <span className="gradient-text">Help?</span></>}
        caption="Find answers, get support, and resolve issues quickly."
        ctas={[
          { label: "Contact Support", href: "/contact" },
          { label: "Browse FAQ", href: "/faq", variant: "secondary" },
        ]}
      />

      {/* Quick Contact */}
      <section className="pb-12">
        <div className="max-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MessageCircle, title: "Live Chat", desc: "Get instant help from our team during business hours.", action: "Start Chat", color: "text-emerald-400" },
              { icon: Mail, title: "Email Support", desc: SITE.email, action: "Send Email", color: "text-[#29ABE2]" },
              { icon: Phone, title: "Phone Support", desc: SITE.phone, action: "Call Now", color: "text-purple-400" },
            ].map((c, i) => (
              <AnimateOnScroll key={c.title} delay={i * 0.1}>
                <div className="glass-panel p-6 text-center">
                  <c.icon className={`w-10 h-10 ${c.color} mx-auto mb-3`} />
                  <h3 className="font-semibold mb-1">{c.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">{c.desc}</p>
                  <Button variant="secondary" size="sm">{c.action}</Button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="pb-12">
        <div className="max-site max-w-2xl">
          <AnimateOnScroll>
            <div className="glass-panel p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#29ABE2]" />
                <h3 className="font-bold">Operating Hours</h3>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-text-secondary)]">{h.day}</span>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${h.status === "open" ? "bg-emerald-400" : "bg-amber-400"}`} />
                      <span className="font-medium">{h.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] mt-4">
                All times are GMT. Live chat and phone support are available during market hours (Monday-Friday). Email and ticket support is monitored 7 days a week.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <SectionHeading eyebrow="Browse" title="Knowledge Base" subtitle="Find answers organized by topic." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCategories.map((cat, i) => (
              <AnimateOnScroll key={cat.title} delay={i * 0.08}>
                <Link href={cat.href}>
                  <Card className="h-full cursor-pointer">
                    <cat.icon className="w-8 h-8 text-[#29ABE2] mb-3" />
                    <h3 className="font-semibold mb-2">{cat.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">{cat.desc}</p>
                  </Card>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Submit a Ticket */}
      <section className="section-padding">
        <div className="max-site max-w-2xl">
          <SectionHeading eyebrow="Get Help" title="Submit a Support Ticket" subtitle="Describe your issue and our team will get back to you within 24 hours." />
          <AnimateOnScroll>
            <div className="glass-panel p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Send className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Ticket Submitted</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">We&apos;ve received your request and will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        value={ticketForm.name}
                        onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-glass-bg)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[#29ABE2] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        value={ticketForm.email}
                        onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-glass-bg)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[#29ABE2] transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Subject</label>
                      <input
                        type="text"
                        required
                        value={ticketForm.subject}
                        onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-glass-bg)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[#29ABE2] transition-colors"
                        placeholder="Brief description"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Category</label>
                      <select
                        value={ticketForm.category}
                        onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-glass-bg)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[#29ABE2] transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="account">Account Issue</option>
                        <option value="funding">Deposits & Withdrawals</option>
                        <option value="platform">Platform / Technical</option>
                        <option value="trading">Trading Issue</option>
                        <option value="security">Security Concern</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={ticketForm.message}
                      onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-glass-bg)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[#29ABE2] transition-colors resize-none"
                      placeholder="Describe your issue in detail..."
                    />
                  </div>
                  <Button type="submit" className="w-full">Submit Ticket</Button>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="pb-16 text-center">
        <div className="max-site">
          <HelpCircle className="w-10 h-10 text-[#29ABE2] mx-auto mb-3" />
          <h2 className="text-[var(--text-h2)] font-bold mb-3">Check Our FAQ</h2>
          <p className="text-[var(--color-text-secondary)] text-sm mb-6">Most common questions are already answered.</p>
          <div className="flex items-center justify-center gap-4">
            <Button href="/faq">View FAQ</Button>
            <Button variant="secondary" href="/contact">Contact Us</Button>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
