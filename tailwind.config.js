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
        xxl: "1499px",
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
        appPink: "#FEF5F6",
        primary: "#90050F",
        appAsh: "#676767",
        appAsh2: "#C4C4C4",
        appBlack: "#0F172A",
        appGreen: "#29CC7A",
        app_dark_green: "#135F38",
        appGold: "#DBBB00",
        appYellow: "#DBB632",
        appBlue: "#262D76",
      },
    },
  },
  plugins: [],
};
