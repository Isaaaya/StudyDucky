/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#011f4b",
        secondary: '#EAB308',
      },
      rotate: {
        '130': '130deg',
        '140': '140deg',
      }
    },
  },
  plugins: [],
}

