/* fade animation reference: https://gist.github.com/aluissp/df3fb9bd5d67f08e18ff47e3bd512c26 */
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
      'f2-wide': ['F1Wide', 'sans-serif'], // Add default fallbacks as necessary
      'f1-bold': ['F1Bold', 'sans-serif'], // Add default fallbacks as necessary
    },},
    content: {
      'footer-container': 'footer-container',
    },			animation: {
      fade: 'fadeIn .5s ease-in-out', slidetop: 'slideInTop 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
    },

    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      }, slideInTop: {
        '0%': {
          transform: 'translateY(-1000px)',
          opacity: 0,
        },
        '100%': {
          transform: 'translateY(0)',
          opacity: 1,}},
  },},
  plugins: [],
}

