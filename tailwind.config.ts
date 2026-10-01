import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#F5F3F7",
        luxury: {
          obsidian: "#050505",
          carbon: "#0A0710",
          surface: "#0F0C16",
          surfaceHover: "#161120",
          dusk: "#1A1224",
          border: "rgba(245, 243, 247, 0.08)",
          borderHover: "rgba(245, 243, 247, 0.22)",
          amber: "#FF7A45",
          sunset: "#E65C38",
          violet: "#9A4BFF",
          white: "#F5F3F7",
          muted: "rgba(245, 243, 247, 0.55)",
          dim: "rgba(245, 243, 247, 0.28)",
          circuitYellow: "#E8FF4F",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.22em",
        extreme: "0.35em",
      },
      boxShadow: {
        subtleCard: "0 20px 40px -15px rgba(0, 0, 0, 0.8)",
        headlightBeam: "0 0 80px rgba(255, 245, 220, 0.15)",
        ambientDusk: "0 0 100px rgba(154, 75, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
