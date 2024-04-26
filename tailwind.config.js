/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: 'Roboto, ui-sans-serif, system-ui, sans-serif', // Adds a new `font-Roboto` class
      },
      backgroundImage: {
        "Banner": "url(/src/pages/Sellers/HelpPage_Banner.svg)",
        "HomePage-Banner": "url(/src/pages/Sellers/HomePage_Banner.svg)"
      }
    },
  },
  plugins: [],
}