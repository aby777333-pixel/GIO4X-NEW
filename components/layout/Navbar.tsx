"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/lib/constants";
import type { NavLink } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Desktop Dropdown                                                    */
/* ------------------------------------------------------------------ */

function DesktopDropdown({
  link,
  isActive,
}: {
  link: NavLink;
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback(() => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  }, []);

  const handleLeave = useCallback(() => {
    timeout.current = setTimeout(() => setOpen(false), 120);
  }, []);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  const hasChildren = link.children && link.children.length > 0;

  return (
    <div
      className="relative"
      onMouseEnter={hasChildren ? handleEnter : undefined}
      onMouseLeave={hasChildren ? handleLeave : undefined}
    >
      <Link
        href={link.href}
        className={`flex items-center gap-0.5 px-2 py-1.5 text-[12px] font-medium rounded-lg transition-colors whitespace-nowrap ${
          isActive
            ? "text-[#29ABE2] bg-[rgba(41,171,226,0.08)]"
            : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-glass-bg)]"
        }`}
      >
        {link.label}
        {hasChildren && (
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>

      {/* Dropdown panel */}
      <AnimatePresence>
        {hasChildren && open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-0 pt-1.5 z-50 min-w-[200px]"
          >
            <div className="glass-panel rounded-xl py-1.5 shadow-lg shadow-black/20">
              {link.children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-2 text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-glass-bg)] transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Accordion Item                                               */
/* ------------------------------------------------------------------ */

function MobileAccordionItem({
  link,
  isActive,
}: {
  link: NavLink;
  isActive: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = link.children && link.children.length > 0;

  return (
    <div>
      <div className="flex items-center">
        <Link
          href={link.href}
          className={`flex-1 px-4 py-3 text-base font-medium rounded-xl transition-colors ${
            isActive
              ? "text-[#29ABE2] bg-[rgba(41,171,226,0.08)]"
              : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
          }`}
        >
          {link.label}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--color-glass-bg)] transition-colors"
            aria-label={`Expand ${link.label}`}
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      <AnimatePresence>
        {hasChildren && expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-6 pb-2">
              {link.children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Social Icons                                                        */
/* ------------------------------------------------------------------ */

const SOCIAL_LINKS = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "X / Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

/* ------------------------------------------------------------------ */
/*  Navbar                                                              */
/* ------------------------------------------------------------------ */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-panel rounded-none border-x-0 border-t-0"
            : "bg-transparent"
        }`}
      >
        <div className="max-site flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" aria-label="GIO4X Home" className="shrink-0">
            <Logo className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <DesktopDropdown
                key={link.href + link.label}
                link={link}
                isActive={
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                }
              />
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Sign In — ghost */}
            <a
              href={SITE.signInUrl}
              className="hidden sm:inline-flex px-3 py-1.5 text-[13px] font-medium text-[#29ABE2] hover:underline underline-offset-4 transition-colors"
            >
              Sign In
            </a>

            {/* Open Account — primary */}
            <Button size="sm" href={SITE.signUpUrl} className="hidden sm:inline-flex text-[13px]">
              Open Account
            </Button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--color-glass-bg)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — full-screen slide-down */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 pt-16 bg-[var(--color-bg)]/95 backdrop-blur-xl lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link) => (
                <MobileAccordionItem
                  key={link.href + link.label}
                  link={link}
                  isActive={
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href))
                  }
                />
              ))}

              <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex flex-col gap-3">
                <a
                  href={SITE.signInUrl}
                  className="block text-center px-4 py-3 text-base font-medium text-[#29ABE2] border border-[#29ABE2] rounded-xl hover:bg-[rgba(41,171,226,0.1)] transition-colors"
                >
                  Sign In
                </a>
                <Button className="w-full" href={SITE.signUpUrl}>
                  Open Account
                </Button>
              </div>

              {/* Mobile social */}
              <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-[var(--color-border)]">
                {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-sky)] hover:bg-[var(--color-glass-bg)] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
