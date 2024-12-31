/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sf-primary": "#397da2",
        "sf-secondary": "6a6d6f"
      }
    },
  },
  plugins: [],
}

