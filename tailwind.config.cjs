/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#050505",
        "black-100": "rgb(45, 45, 45)",
        "gray-200": "rgb(244, 244, 244)",
        "gray-300": "rgb(131, 131, 131)",
        "gray-400": "rgb(154, 145, 132)",
        primary: "rgb(167, 51, 255)",
      },
      screens: {
        md: { max: "767px" },
      },
    },
  },
  plugins: [],
}
