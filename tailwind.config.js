/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {

      fontFamily: {
        outfit: ['Outfit', 'serif'],

    },

    colors:{
      'soft-blue' : "hsl(215, 51%, 70%)",
      'cyan' : "hsl(178, 100%, 50%)",
      'main-BG' : "hsl(217, 54%, 11%)",
      'card-BG' : "hsl(216, 50%, 16%)",
      'dark-line' : "hsl(215, 32%, 27%)",
      'white-col' : "hsl(0, 0%, 100%)",

    },

    screens: {
      'max-sm' : {max: '950px'},
      '2xl': '1500px',
    },

    maxWidth: {
      '30xl': '30%',
      '95xl': '85%',
    },

    
  },
},
  plugins: [],
}