import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Light mode only — dark theme support intentionally removed.
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B3A6B",
          dark: "#0F2347",
        },
        sky: {
          DEFAULT: "#29ABE2",
          light: "#5BCBF5",
          glow: "rgba(41,171,226,0.15)",
        },
        steel: {
          DEFAULT: "#6D6E71",
          light: "#A0A2A5",
        },
        surface: {
          dark: "#111827",
          light: "#FFFFFF",
        },
        background: "var(--color-bg)",
        foreground: "var(--color-text)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
      },
      spacing: {
        xs: "8px",
        sm: "13px",
        md: "21px",
        lg: "34px",
        xl: "55px",
        "2xl": "89px",
        "3xl": "144px",
      },
      maxWidth: {
        site: "1280px",
      },
      borderRadius: {
        glass: "16px",
      },
      animation: {
        "ticker-scroll": "ticker-scroll 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "ken-burns": "ken-burns 26s ease-in-out infinite alternate",
        "beam-sweep": "beam-sweep 7s ease-in-out infinite",
      },
      keyframes: {
        "ticker-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        // Slow cinematic zoom/pan for hero photography.
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        // Thin gradient beam sweeping a hero's bottom edge.
        "beam-sweep": {
          "0%, 100%": { transform: "translateX(-30%)", opacity: "0.2" },
          "50%": { transform: "translateX(30%)", opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
