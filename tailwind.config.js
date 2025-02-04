/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode:'selector',
  theme: {
    extend: {
      colors:{
        blue:{
          300:"#3fdfcf"
        },
      },
     screens:{
      lg:"1132px"
     }, 
    },
  },
  plugins: [],
}

