/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
 
 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Heebo':["'Heebo'", 'sans-serif'],
        'DMSans':["'DM Sans'", 'sans-serif']

      },
      colors:{
        "offWhite":"#FDFDFD",
        "frogGreen":"#51AA3C",
        "darkBlue":"#193D77",
      },
      spacing:{
        '128':'32rem',
        '140':'40rem'
      }
    },

  },
  plugins: [],
}