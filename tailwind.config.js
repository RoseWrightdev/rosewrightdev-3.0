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
      'white': '#ffffff',
      'red': '#FF6884',
      'blue': '#6C63FF',

      'black': {
        900: '#2F2E41',
        800: '#2F2E41BF',
        700: '#2F2E412f',
        600: '#444354',
        500: '#595867',
      },
      //'black': '#2F2E41',
      //'black-off': '#444354',
      //'black-offlight': '#595867',
      //'black-mid': '#2F2E41BF',
      //'black-light': '#2F2E412f',
      'gray': {
        900: '#a0a0a0',
        800: '#f2f2f2',
      },
    },
  },
  plugins: [],
}