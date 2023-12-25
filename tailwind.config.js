/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('./header.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
