/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      racing: ["Racing Sans One", "sans-serif"],
    },
    colors: {
      yellow: "#ffa500",
      white: "#fff",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
