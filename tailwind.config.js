/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryTxtColor': '#FF9641',
        'secondary': '#F7912C',
        'btnColor': '#372B42',
        'btnShadow': '#372B42',
        'partner': '#2C5EB0',
      }
    },
  },
  typography: {
    allVariants: {
      fontFamily: "'Montserrat', sans-serif",
      textTransform: "none",
    }
  },
  plugins: [],
});