"use client";

// Route-transition wrapper. Next.js re-mounts template.tsx on every navigation,
// so each page gets a soft fade-in. Framer honours reduced-motion via the
// MotionConfig in ThemeProvider.

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
