/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sf-primary": "#557da0",
        "sf-secondary": "#000000",
      },
    },
  },
  plugins: [],
};
