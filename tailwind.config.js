/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",  // 👈 Ensures dark mode only activates when "dark" class is added
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
