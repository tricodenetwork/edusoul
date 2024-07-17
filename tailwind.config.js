/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        s: "375px",
        xs: "799px",
      },
      colors: {
        primary: "#90050F",
        secondary: "#FED8DA",
        star: "#C71D32",
        lightyellow: "#fff47a",
        midorange: "#f69d3c",
        background: "#F1E5C4",
        ash: "#d7d7d7",
        ash2: "#aab2c8",
        ash3: "#6d71a",
        dark_blue: "#061A48",
        grayText: "#6D717A",
        appOrange: "#F2994A",
        appBlue: "#061a48",
      },
    },
  },
  plugins: [],
};
