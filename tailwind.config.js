/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#a6bbc3",
        tertiary: "#212d40",
        "black-100": "#375266",
        "black-200": "#032436",
        "white-100": "#cfcfcf",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #3a495c",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
    },
  },
  plugins: [],
};
