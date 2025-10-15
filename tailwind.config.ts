import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0b0913",
        "surface-elevated": "#141022",
        "surface-muted": "#19132d",
        "surface-border": "#282249",
        "myth-purple": "#8b5cf6",
        "myth-purple-dark": "#6d28d9",
        "myth-rose": "#f472b6",
      },
      fontFamily: {
        heading: ["var(--font-russo)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at 1px 1px, #5d3ddf 1px, transparent 0)",
      },
      backgroundSize: {
        "hero-grid": "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
