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
          "xsm" : "750px",
          "md" : "825px",
          "xmd" : "900px",
          "lg" : "1024px",
          "xl" : "1150px",
          "1xl" : "1200px",
          "2xl" : "1436px"
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

        "peyda" : "peyda",
        "peydaBold" : "peydaBold",
    },
    extend: {
      maxWidth:{
          maxWidth: "1600px",
          95 :"380"
      },
      colors: {
        primaryDark: "#2e073f",
        primaryLight: "#7a1cac",
        secondaryDark: "#ad49e1",
        secondaryLight: "#ebd3f8",
      },
      dropShadow:{
        "black" : '0 2px 5px rgba(0, 0, 0, 0.85)',
      }
    },
  },
  plugins: [],
}