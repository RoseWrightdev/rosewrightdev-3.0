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
      'white-light': '#ffffff2f',
      'gray': '#f2f2f2',
      'red': '#FF6884',
      'red-light': '#FF68842f',
      'blue': '#6C63FF',
      'blue-light': '#6C63FF2f',
      'black': '#2F2E41',
      'black-off': '#444354',
      'black-offlight': '#595867',
      
      'black-mid': '#2F2E41BF',
      'black-light': '#2F2E412f',
      'gray-dark': '#a0a0a0',
    },
  },
  plugins: [],
}