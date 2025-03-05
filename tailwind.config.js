/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowText: '#d4af37',
        yellowPrimary: '#C59B2D',
        grayBg: '#F6F6F6',
        black: '#292929',
      }
    },
  },
  plugins: [],
}
