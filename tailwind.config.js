/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#93c5fd",
          DEFAULT: "#3b82f6",
          dark: "#1e3a8a",
        },
        primary: {
          light: "#005F5F",
          DEFAULT: "#2563eb",
          dark: "#1e40af",
        },
        secondary: {
          light: "#fcd34d", // yellowish
          DEFAULT: "#f59e0b",
          dark: "#b45309",
        },
        text: {
          primary: "#1C2623",
          secondary: "#e5e5e5",
          tertiary: "#d4d4d4",
        },
        accent: "#ec4899",
        success: "#22c55e",
        warning: "#facc15",
        danger: "#ef4444",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        bangla: ["Noto Sans Bengali", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: ".5rem",
          xl: "1rem",
          "2xl": "1rem",
        },
        screens: {
          sm: "600px",
          md: "728px",
          lg: "944px",
          xl: "1200px",

          "2xl": "1400px",
          "3xl": "1600px",
        },
      },
    },
  },
  plugins: [],
};
