/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#e5e7eb",
        slate: {
          925: "#0f172a",
          950: "#020617"
        }
      },
      boxShadow: {
        panel: "0 16px 40px rgba(2, 6, 23, 0.35)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      }
    },
  },
  plugins: [],
};
