/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#5e69ee',
        'secondary': '#F4F4FB',
        'accent': '#39AFEA'
      }
    },
  },
  plugins: [],
};

