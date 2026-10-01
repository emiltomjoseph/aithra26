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
        background: "#10051C",
        foreground: "#F7F3F7",
        gta: {
          night: "#10051C",
          surface: "#1C0A2E",
          surfaceHover: "#281042",
          electric: "#7A20C8",
          magenta: "#D92BFF",
          pink: "#FF4FA3",
          orange: "#FF7448",
          yellow: "#E8FF4F",
          white: "#F7F3F7",
          black: "#050307",
          border: "rgba(217, 43, 255, 0.25)",
          borderGlow: "rgba(232, 255, 79, 0.4)",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        neonPink: "0 0 25px rgba(255, 79, 163, 0.5), 0 0 50px rgba(217, 43, 255, 0.3)",
        neonYellow: "0 0 25px rgba(232, 255, 79, 0.6), 0 0 60px rgba(232, 255, 79, 0.3)",
        neonElectric: "0 0 30px rgba(122, 32, 200, 0.6), 0 0 60px rgba(122, 32, 200, 0.3)",
        hudCard: "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 20px 40px -15px rgba(5, 3, 7, 0.8)",
      },
      animation: {
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
        radarScan: "radarScan 4s linear infinite",
        flicker: "flicker 0.15s ease infinite alternate",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.03)" },
        },
        radarScan: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
