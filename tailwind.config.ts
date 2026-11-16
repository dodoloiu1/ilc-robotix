import type { Config } from "tailwindcss";

/**
 * Palette derived from the ILC ROBOTIX logo:
 * deep maroon surfaces (#4A2B2E) with periwinkle-lavender line work (#A8A7D8),
 * plus a restrained brass accent for awards.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#120a0c",
          900: "#1a0f12",
          800: "#251519",
          700: "#332026",
        },
        maroon: {
          DEFAULT: "#4A2B2E",
          soft: "#6B3D42",
          deep: "#332026",
        },
        accent: {
          DEFAULT: "#A8A7D8",
          soft: "#CBCBE9",
          deep: "#7B79B5",
        },
        amber: {
          glow: "#D4A24A",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(168, 167, 216, 0.45)",
        card: "0 20px 60px -30px rgba(0, 0, 0, 0.9)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-slow": "pulse-slow 5s ease-in-out infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
