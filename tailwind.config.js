/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'xs': '480px',  // Custom breakpoint for extra small screens
      },
      colors: {
        'gray-900': '#1a202c',
      },
    },
  },
  plugins: [],
}

