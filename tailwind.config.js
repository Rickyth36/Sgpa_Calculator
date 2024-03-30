/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark':'#212121'
      },
      fontFamily: {
        sora:[ "Sora", "sans-serif"]
      }
    },
  },
  plugins: [],
}

