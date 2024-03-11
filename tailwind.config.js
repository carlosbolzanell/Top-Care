/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaria': '#B5A6F3',
        'secundaria': '#C9E47B',
        'terciaria': '#DFEAFF',
        'preto': '#322828',
        'branco': '#F5F5F5',
        'cinza': '#BDBDBD',
        'cinza-escuro': '#4F4F4F',
        'verde-hover': '#9EBF40'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'averia': ['Averia Libre', 'system-ui'],
      },
    },
  },
  plugins: [],
})

