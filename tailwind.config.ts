import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xs: "375px",
      tablet: "744px",
      laptop: "1100px",
      desktop: "1440px",
      maxmobile: { max: "743px" },
      maxtablet: { max: "1100px" },
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        xxs: "10px",
      },
      fontFamily: {
        sans: ["var(--font-causten-regular)", "sans-serif"],
        heading: ["var(--font-causten-bold)", "sans-serif"],
      },
      colors: {
        // Your brand colors
        brand: {
          charcoal: "#293132",
          gold: "#FFAA21",
          rust: "#933C1F",
          mint: "#8FF7A7",
          pink: "#DC719B",
          white: "#F5F5F5",
          black: "#0B0B0B",
          gradientStart: "#FFAA21",
          gradientEnd: "#293132",
          gray: "#293132",
        },
        success: "#8FF7A7",
        error: "#DC719B",
        primary: {
          DEFAULT: "#0f0f0f",
          dark: "#111111",
          light: "#2D160E",
        },
        gray: "#293132",
      },
      boxShadow: {
        1: "0px 2px 20px 0px rgba(0, 0, 0, 0.02)",
        2: "0px 4px 12px 0px rgba(0, 0, 0, 0.02)",
        3: "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-theme": "linear-gradient(90deg, #05121E 0%, #0E1F30 100%)",
        "gradient-theme-2": "linear-gradient(90deg, #FFAA21 0%, #00A3FF 100%)",
        "gradient-pattern": "linear-gradient(90deg, #FFAA21 0%, #00A3FF 100%)",
        "gradient-gold": "linear-gradient(90deg, #FFAA21 0%, #933C1F 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
} satisfies Config;
