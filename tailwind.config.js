/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    colors:{
      'black':'#000000',
      'white':'#fffffe',
      'yellow':'#ffd803',
      'headline':'#272343',
      'secondary':'#e3f6f5',
      'tertiary':'#bae8e8'
    },

    extend: {
      fontFamily: {
       Noto: ["Noto Sans", "sans-serif"],
       Montserrat: ["Montserrat", "sans-serif"],
       DarkGrotesque: ["DarkGrotesque", "sans-serif"]
      },
    },
  },
  plugins: [],
}
