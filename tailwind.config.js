const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './public/404.html'],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      primary: colors.green[900],
      secondary: colors.green[600],
      gray: colors.coolGray,
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};