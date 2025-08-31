/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"], // 👈 add all paths where you use classes
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#93c5fd",
          DEFAULT: "#3b82f6",
          dark: "#1e3a8a",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
