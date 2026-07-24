"use client";

import { createContext, useContext, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import type { Theme } from "@/lib/theme";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

// Light mode only. The provider still wraps the tree so existing
// useTheme() callers keep working, but the value is constant and the
// toggle is a no-op.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "light", toggleTheme: () => {} }}>
      {/* Honour the OS "reduce motion" setting across every framer animation. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  );
}
