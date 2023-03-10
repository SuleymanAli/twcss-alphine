/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '576px',
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1500px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '0',
      },
    },
    extend: {},
  },
  plugins: [],
}
