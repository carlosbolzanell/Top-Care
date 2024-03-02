/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        'cinza-letras': '#5C5C5C'
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'averia': ['Averia-Sans-Libre', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

