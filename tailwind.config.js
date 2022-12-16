module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredokaOne: ['Fredoka One', 'cursive'],
        lexend: ['Lexend Deca', 'sans-serif']
      },
      colors: {
        'primary': '#00A6FB',
        'secondary': '#69747C',
        'thirdly': '#0582CA',
        'darkBackground': '#020300',
        'cardDark': '#27233A',
        'darkPrimary': '#505168',
        'darkSecondary': '#A2A3BB',
        'darkThirdly': '',
      },
      backgroundImage: {
        'hero-background': "url('./images/second.png')"
      } 
    },
  },
  plugins: [],
}