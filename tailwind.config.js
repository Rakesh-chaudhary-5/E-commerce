/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'h-2xl': { 'raw': '(min-height: 1300px)' }, // Custom breakpoint for min-height 800px
      },
      keyframes:{
        popup:{
          '0%':{transform: 'scale(0)'},
          '100%':{transform: 'scale(1)'}
        }
      },
      animation:{
       popup: 'popup 0.4s'
      } 
    },
  },
  plugins: [],
}

