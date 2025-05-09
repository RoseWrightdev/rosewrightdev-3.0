/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FBFBFC',
      'red': '#FF6884',
      'blue': '#6C63FF',

      'black': {
        900: '#2F2E41',
        800: '#2F2E41BF',
        700: '#2F2E412f',
        600: '#434351',
        500: '#595867',
        400: '#343346'
      },
      
      'gray': {
        900: '#a0a0a0',
        800: '#f9f9f9',
        700: '#f4f4f4'
      },
    },
  },
  plugins: [],
}