import animatePlugin from "tailwindcss-animate";
import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        background: "#F7F8F7",
        foreground: "#181B19",
        neutral: {
          50: "#f9faf9",
          100: "#f4f5f4",
          200: "#e5e6e5",
          300: "#d3d5d3",
          400: "#a1a3a1",
          500: "#717371",
          600: "#515452",
          700: "#3e413f",
          800: "#252826",
          900: "#161917",
        },
        brand: {
          50: "#f2f8ff",
          100: "#e2f0ff",
          200: "#bfe2ff",
          300: "#8acdff",
          400: "#54b5ff",
          500: "#1a9cff",
          600: "#247cd7",
          700: "#2263ac",
          800: "#1f548c",
          900: "#1e4772",
        },
        highlight: {
          50: "#f1f9ff",
          100: "#deeefc",
          200: "#b5dffc",
          300: "#72caff",
          400: "#14b1ff",
          500: "#009aef",
          600: "#0c7ccd",
          700: "#1263a5",
          800: "#145588",
          900: "#164770",
        },
      },
      borderRadius: {
        sm: "0.125rem",
        default: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1.25rem",
        "3xl": "1.875rem",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animatePlugin],
};
