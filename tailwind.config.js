/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        Pink: "hsl(322, 100%, 66%)",
        lightpink: "hsl(321, 100%, 78%)",
        lightred: "hsl(0, 100%, 63%)",
        darkcyan: "hsl(192, 100%, 9%)",
        paleblue: "hsl(207, 100%, 98%)"
      },
      fontFamily: {
        poppins: ['Poppins', "sans-serif"],
        opensans: ['Open Sans', "sans-serif"]
      }
    },
  },
  plugins: [],
}
