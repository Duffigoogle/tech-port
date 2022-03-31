const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'Handlee','Courgette', ...defaultTheme.fontFamily.sans],
      'handlee': ['Handlee'],
      'courgette': ['Courgette']
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b1e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",  
        },
        'love-green': '#3cff00',
        'greeny': "#ffff00",
        'sad-green': '#27db17',
        'orange': '#ffaf00',
        'red': '#ffaf00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
