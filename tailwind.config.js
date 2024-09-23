/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter"
      },
      colors: {
        primary: "#0ea5e9",
        second: "#0369a1"
      }
    },
  },
  plugins: [],
}

