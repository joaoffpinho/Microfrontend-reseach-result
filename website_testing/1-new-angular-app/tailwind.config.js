/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors:{
        'goodBlack': '#333333',
        'goodWhite': '#f2f2f2'
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

