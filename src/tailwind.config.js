/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",              // for Vite (if used)
    "./src/**/*.{js,jsx,ts,tsx}" // for React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C54FF",
        secondary: "#1A1036",
        purple: {
          100: "#F8F7FF",
          200: "#E2DFFF",
          300: "#C7BEFF",
          400: "#AB9CFF",
          500: "#8F79FF",
          600: "#6C54FF",
          700: "#513AD8",
          800: "#3925B3",
          900: "#24148F",
        }
      }
    }
  },
  plugins: []
};