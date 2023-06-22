/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "#F50963",
        dark: "#525258"
      },
      fontFamily: {
        theme: ["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}

