/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      xl: '1170px',
    },
    extend: {
      spacing: {
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
}

