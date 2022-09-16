/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/components/**/*.{js,ts,jsx,tsx}",
    "./public/components/**/**/*.{js,ts,jsx,tsx}",
    "./public/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      'rise_fall': 'rise_fall 1s ease infinite',
    },
    keyframes: {
      rise_fall: {
        '0%, 100%': { 
          borderRadius: '5px',
          height: '15px'
        },
        '50%': { 
          borderRadius: '5px',
          height: '30px'
        },
      }
    },
    fontFamily: {
      'inter': ['Inter']
    },
  },
  plugins: [],
}
