/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                    // Main HTML file
    "./src/**/*.{js,ts,jsx,tsx}",      // All JS, TS, JSX, TSX files in src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),                 // DaisyUI plugin for Tailwind components
  ],
}
