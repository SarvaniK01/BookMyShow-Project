module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'black': '#000',
      'movie-grey': '#333333',
      'movie-white': '#EEEEEE',
      'movie-text':'#CCCCCC',
      'blue-bms':'#2B3148',
      'red-ticket':'#c4242d',
      'pink':'#F84464',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
