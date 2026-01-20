/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6d28d9", // Example primary color
        secondary: "#1e1b4b", // Example secondary color
      },
    },
  },
  plugins: [],
}
