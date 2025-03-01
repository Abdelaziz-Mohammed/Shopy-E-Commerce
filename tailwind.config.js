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
        yellowForForms: '#C59B2D',
      }
    },
  },
  plugins: [],
}
