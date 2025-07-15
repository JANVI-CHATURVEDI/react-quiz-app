/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // ✅ for Vite's main HTML
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ for all your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
