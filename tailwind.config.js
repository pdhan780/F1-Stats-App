/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {colors: {
      'candy-apple': '#FF1801',
      'f1-black': '#15151e',
      'f1-black2': '#1f1f27',
      'f1-gray': '#999999',
      'f1-dark-gray': '#303037',
    },
    fontFamily: {
      'f1': ['F1Font', 'sans-serif'], // Add default fallbacks as necessary
    },},
  },
  plugins: [],
}

