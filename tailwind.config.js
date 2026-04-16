/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        terracotta: '#6B3A2A',
        'terracotta-light': '#9B6B5A',
        'terracotta-dark': '#4A2518',
        sand: '#FAF6F1',
        'sand-dark': '#F0E8DC',
        'amber-brew': '#D4853A',
        btc: '#F7931A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
