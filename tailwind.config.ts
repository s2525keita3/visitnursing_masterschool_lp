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
        baum: {
          50: "#FFF8F0",
          100: "#FFF5EB",
          200: "#FFE6CC",
          300: "#FFD6AD",
          400: "#FFB570",
          500: "#FF6B00",
          550: "#FF8533",
          600: "#E55A00",
          700: "#CC5000",
          800: "#A33F00",
          900: "#6B2A00",
        },
        text: {
          primary: "#000000",
          secondary: "#333333",
          tertiary: "#666666",
          light: "#999999",
        },
        bg: {
          white: "#FFFFFF",
          cream: "#FFF8F0",
          "orange-light": "#FFF5EB",
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
        card: "0 4px 24px rgba(0, 0, 0, 0.08)",
        "card-soft": "0 12px 30px rgba(74, 66, 56, 0.08)",
        "card-subtle": "0 8px 24px rgba(74, 66, 56, 0.04)",
        "card-hover": "0 12px 40px rgba(0, 0, 0, 0.12)",
        cta: "0 8px 24px rgba(255, 107, 0, 0.3)",
        "cta-hover": "0 12px 32px rgba(255, 107, 0, 0.4)",
        divider: "0 1px 0 rgba(74, 66, 56, 0.1)",
      },
      borderRadius: {
        soft: "18px",
        pill: "999px",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

