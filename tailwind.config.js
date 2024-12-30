/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sf-primary": "#00668A",
        "sf-secondary": "004E71"
      }
    },
  },
  plugins: [],
}

