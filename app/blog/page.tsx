"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, User, Calendar } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BlogModal } from "@/components/ui/BlogModal";
import { CTABand } from "@/components/sections/CTABand";
import { DancingRobotsBg } from "@/components/ui/DancingRobotsBg";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";
import type { BlogPost } from "@/lib/blog-data";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filtered =
    activeCategory === "all"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-72 pb-60 relative overflow-hidden">
        {/* Dancing Robots Background Animation */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #06060C 0%, #0A0E1A 40%, #0F1628 70%, #06060C 100%)" }} />
        <DancingRobotsBg />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(6,6,12,0.4) 0%, rgba(6,6,12,0.6) 100%)" }} />
        {/* Hero Visual Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#29ABE2]/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#1B3A6B]/10 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
          <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_4s]" />
        </div>
        <div className="max-site text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#29ABE2] text-sm font-semibold tracking-[0.25em] uppercase">
              Insights &amp; Analysis
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold mt-4 mb-6 leading-[1.05]"
          >
            Markets May Dance, <span className="gradient-text">We Won&apos;t.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto"
          >
            Expert forex market analysis, trading strategies, golden ratio
            insights, and company updates. Stay ahead of the markets with GIO4X.
          </motion.p>
        </div>
      </section>

      {/* ── Filter + Post Grid ───────────────────────────── */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="max-site">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#1B3A6B] to-[#29ABE2] text-white"
                    : "bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <AnimateOnScroll key={post.id} delay={i * 0.04}>
                <Card className="h-full flex flex-col">
                  <Badge variant="sky" className="self-start mb-3">
                    {BLOG_CATEGORIES.find((c) => c.id === post.category)?.label}
                  </Badge>

                  <h3 className="font-semibold leading-snug mb-2 text-base">
                    {post.title}
                  </h3>

                  <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3 flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--color-text-secondary)] mb-4">
                    <span className="inline-flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read More &rarr;
                  </Button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <p className="text-center text-[var(--color-text-secondary)] py-16">
              No articles found in this category.
            </p>
          )}
        </div>
      </section>

      <CTABand />

      {/* ── Blog Modal ───────────────────────────────────── */}
      <BlogModal
        post={selectedPost}
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </>
  );
}
