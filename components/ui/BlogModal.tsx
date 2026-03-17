"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, User, Calendar, Share2, Twitter, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { BlogPost } from "@/lib/blog-data";
import { BLOG_CATEGORIES } from "@/lib/blog-data";

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
  /* ── Escape key handler ─────────────────────────────────── */
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  /* ── Body scroll lock + escape listener ─────────────────── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleEscape]);

  const categoryLabel =
    BLOG_CATEGORIES.find((c) => c.id === post?.category)?.label ?? "";

  return (
    <AnimatePresence>
      {isOpen && post && (
        /* ── Backdrop ───────────────────────────────────────── */
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={post.title}
        >
          {/* click-away backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* ── Modal card ─────────────────────────────────── */}
          <motion.article
            className="relative z-10 w-full max-w-[720px] mx-4 my-8 sm:my-16 glass-panel rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* ── Close button ───────────────────────────── */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[var(--color-glass-bg)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* ── Header ─────────────────────────────────── */}
            <div className="p-6 sm:p-8 pb-0">
              <Badge variant="sky" className="mb-4">
                {categoryLabel}
              </Badge>

              <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-4 pr-8">
                {post.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-secondary)] mb-6">
                <span className="inline-flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {post.author}
                  <span className="hidden sm:inline">
                    &middot; {post.authorRole}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime} read
                </span>
              </div>

              <div className="h-px bg-[var(--color-border)]" />
            </div>

            {/* ── Article Content ────────────────────────── */}
            <div
              className="p-6 sm:p-8 prose-blog"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* ── Footer ─────────────────────────────────── */}
            <div className="p-6 sm:p-8 pt-0">
              <div className="h-px bg-[var(--color-border)] mb-6" />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Share row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                  <button
                    className="p-1.5 rounded-lg hover:bg-[var(--color-glass-bg)] transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button
                    className="p-1.5 rounded-lg hover:bg-[var(--color-glass-bg)] transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>

                <Button variant="secondary" size="sm" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
