import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      colors: {
        ink: "#17211b",
        cream: "#f7f4ed",
        forge: { 50: "#edf8f1", 500: "#2f7d4c", 600: "#24643c", 700: "#1e5133" }
      },
      boxShadow: { soft: "0 16px 50px rgba(23,33,27,.09)" }
    }
  },
  plugins: []
} satisfies Config;
