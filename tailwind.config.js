/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#F4EEE4",
        cream: "#FBF8F3",
        clay: "#8A4B3C",
        "clay-dark": "#6E3A2E",
        ink: "#2B2420",
        stone: "#7A6F66",
        line: "#E3D9CB",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
