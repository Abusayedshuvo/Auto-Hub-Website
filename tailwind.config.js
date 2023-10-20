/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        racing: ["Racing Sans One", "sans-serif"],
      },
      colors: {
        yellow: "#ffa500",
        white: "#fff",
      },
    },
  },
  plugins: [require("daisyui")],
};
