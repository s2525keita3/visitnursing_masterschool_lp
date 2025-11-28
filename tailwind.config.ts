import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F9F8F6",
        foreground: "#333333",
        brand: {
          dark: "#4A4238",
          gold: "#C5A059",
          orange: "#D66B4D",
          light: "#EFECE6",
          muted: "#9CA3AF",
        },
        text: {
          primary: "#333333",
          secondary: "#4F4B46",
          tertiary: "#6B645C",
          light: "#9CA3AF",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F7F4EF",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', "sans-serif"],
        serif: ['"Noto Serif JP"', "serif"],
      },
      boxShadow: {
        card: "0 20px 45px rgba(74, 66, 56, 0.12)",
        "card-soft": "0 12px 30px rgba(74, 66, 56, 0.08)",
        "card-subtle": "0 8px 24px rgba(74, 66, 56, 0.04)",
        cta: "0 18px 35px rgba(214, 107, 77, 0.35)",
        divider: "0 1px 0 rgba(74, 66, 56, 0.1)",
      },
      borderRadius: {
        soft: "18px",
        pill: "999px",
      },
    },
  },
  plugins: [],
};

export default config;

