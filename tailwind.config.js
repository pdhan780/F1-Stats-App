/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {colors: {
      'candy-apple': '#FF1801',
    },
    fontFamily: {
      'f1': ['F1Font', 'sans-serif'], // Add default fallbacks as necessary
    },},
  },
  plugins: [],
}

