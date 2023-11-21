/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#147BF5", // for bg
        secondary: "#A7A9B7", // for text
        neural: {
          blue: "#F0F5FF"
        }
      }
    },
  },
}