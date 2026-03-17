"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { supabase } from "@/lib/supabase";
import { SITE } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error: dbError } = await supabase.from("contact_leads").insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        subject: form.subject,
        message: form.message,
      });

      if (dbError) throw dbError;
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setError("Failed to send message. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-56 pb-44 relative overflow-hidden">
        {/* Hero Visual Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
          <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
        </div>
        <div className="max-site text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">Contact Us</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[var(--text-h1)] font-bold mt-4 mb-6">
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Have a question or need assistance? Our team is ready to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimateOnScroll className="lg:col-span-3">
              <div className="glass-panel p-8">
                {success ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-[var(--color-text-secondary)]">We&apos;ll get back to you within 24 hours.</p>
                    <Button className="mt-6" onClick={() => setSuccess(false)}>Send Another Message</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input label="Full Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                      <Input label="Email Address" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input label="Phone (optional)" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                      <Input label="Subject" required value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} options={[
                        { value: "", label: "Select a subject..." },
                        { value: "General Inquiry", label: "General Inquiry" },
                        { value: "Account Opening", label: "Account Opening" },
                        { value: "Technical Support", label: "Technical Support" },
                        { value: "Deposits & Withdrawals", label: "Deposits & Withdrawals" },
                        { value: "Partnership", label: "Partnership" },
                        { value: "Complaint", label: "Complaint" },
                      ]} />
                    </div>
                    <div>
                      <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:border-[#29ABE2] focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    {error && <p className="text-red-400 text-sm">{error}</p>}
                    <Button type="submit" loading={loading} className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </AnimateOnScroll>

            {/* Contact Info */}
            <AnimateOnScroll delay={0.2} className="lg:col-span-2">
              <div className="space-y-6">
                <ContactCard icon={Mail} title="Email" value={SITE.email} link={`mailto:${SITE.email}`} />
                <ContactCard icon={Phone} title="Phone" value={SITE.phone} link={`tel:${SITE.phone}`} />
                <ContactCard icon={MapPin} title="Office" value={SITE.hq} />
                <ContactCard icon={Clock} title="Operating Hours" value={SITE.hours} />
                <div className="glass-panel p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="w-5 h-5 text-[#29ABE2]" />
                    <h3 className="font-semibold">Live Chat</h3>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                    Get instant answers from our support team.
                  </p>
                  <Button variant="secondary" size="sm" className="w-full">
                    Start Live Chat
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

function Input({ label, value, onChange, type = "text", required = false, options }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
}) {
  return (
    <div>
      <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">{label}</label>
      {options ? (
        <select
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:border-[#29ABE2] focus:outline-none transition-colors"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:border-[#29ABE2] focus:outline-none transition-colors"
        />
      )}
    </div>
  );
}

function ContactCard({ icon: Icon, title, value, link }: { icon: React.ElementType; title: string; value: string; link?: string }) {
  return (
    <div className="glass-panel p-6">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-5 h-5 text-[#29ABE2]" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      {link ? (
        <a href={link} className="text-sm text-[var(--color-text-secondary)] hover:text-[#29ABE2] transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-sm text-[var(--color-text-secondary)]">{value}</p>
      )}
    </div>
  );
}
