/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    
    extend: {
      backgroundImage: {
        page: "url('./img/background.png')",
      },
      fontFamily: {
  sans: ['dmserif', 'DM Serif', 'serif'],
  com: ['conforta', 'Conforta', 'sans-serif']
},

    },
  },
  plugins: [],
};
