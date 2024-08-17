/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
      screens: {
          "sm" : "640px",
          "md" : "825px",
          "lg" : "1024px",
          "xl" : "1150px",
          "2xl" : "1536px"
      },
      container:{
          center : true,
          padding: {
              DEFAULT: '1rem',
              sm: '2rem',
              lg: '4rem',
              xl: '5rem',
              '2xl': '6rem',
          },
      },
    fontFamily : {
        "sans" : "iran-sans",
        "sansLight" : "iran-sans-light",
        "sansBold" : "iran-sans-bold",

        "serif" : "serif",
        "serifBold" : "serif-bold",
    },
      maxWidth:{
          maxWidth: "1700px"
      },
    extend: {
      colors: {
        primaryDark: "#2e073f",
        primaryLight: "#7a1cac",
        secondaryDark: "#ad49e1",
        secondaryLight: "#ebd3f8",
      },
    },
  },
  plugins: [],
}