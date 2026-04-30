import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sun: {
          50: "#fff9ed",
          100: "#fef0d0",
          200: "#fcd997",
          300: "#fbbf5c",
          400: "#f9a52a",
          500: "#f78b0e",
          600: "#e06a08",
          700: "#b94c0b",
          800: "#943c11",
          900: "#783211",
        },
        ocean: {
          50: "#eff8ff",
          100: "#dbeeff",
          200: "#b9ddff",
          300: "#7ac2fd",
          400: "#38a4f8",
          500: "#0e88ea",
          600: "#0268c8",
          700: "#0353a1",
          800: "#074785",
          900: "#0c3b6e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "summer-gradient": "linear-gradient(135deg, #f78b0e 0%, #f9a52a 40%, #fbbf5c 70%, #38a4f8 100%)",
        "hero-pattern": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(247,139,14,0.3), transparent)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        suncart: {
          "primary": "#f78b0e",
          "primary-content": "#ffffff",
          "secondary": "#0e88ea",
          "secondary-content": "#ffffff",
          "accent": "#fbbf5c",
          "neutral": "#1f2937",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#f3f4f6",
          "base-content": "#1f2937",
          "info": "#0e88ea",
          "success": "#22c55e",
          "warning": "#f9a52a",
          "error": "#ef4444",
        },
      },
      "light",
    ],
    defaultTheme: "suncart",
  },
};

export default config;
