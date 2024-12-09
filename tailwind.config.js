/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#21A29E',
        borderGray: '#DDDDDD',
        accentGray: '#666666',
      },
      fontFamily: {
        sans: ['verdana', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}