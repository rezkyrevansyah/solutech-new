import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "7xl": "1440px",
      },
      colors: {
        brand: {
          dark: "#0a0a0a",
          "dark-2": "#111827",
          "card-dark": "#1f2937",
          accent: "#01c986",
          blue: "#2563eb",
          white: "#ffffff",
          gray: "#f9fafb",
          text: "#111827",
          muted: "#6b7280",
          border: "#e5e7eb",
        },
      },
    },
  },
  plugins: [],
};
export default config;
