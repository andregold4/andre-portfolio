import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "vivid-foreground": "var(--vivid-foreground)",
        "muted-foreground": "var(--muted-foreground)",
        "tertiary-foreground": "var(--tertiary-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        card: "var(--card)",
        border: "var(--border)",
        "border-bright": "var(--border-bright)",
        positive: "var(--positive)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease both",
        "fade-in": "fade-in 1s ease both",
        "pulse-glow": "pulse-glow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
