/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        error: 'rgb(var(--error-rgb))',
        border: "rgb(var(--border-rgb))",
        background: "rgb(var(--background-rgb))",
        foreground: "rgb(var(--foreground-rgb))",
        primary: {
          DEFAULT: "rgb(var(--primary-rgb))",
          foreground: "rgb(var(--primary-rgb))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary-rgb))",
          foreground: "rgb(var(--secondary-rgb))",
        },
      },
      borderRadius: {
        mine: "var(--radius)",
        10: "10px",
      },
    },
  },
}