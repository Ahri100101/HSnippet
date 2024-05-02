/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "code": "Fira Code",
      },
      colors: {
        "light": "#B6B7BB",
        "dark": "#535355",
        "darker": "#212121",
        "lightb": "#61A7FF",
        "darkb": "#121A2C",
      },
    },
  },
  plugins: [],
}