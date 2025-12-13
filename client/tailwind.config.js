/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        card: "repeat(auto-fit, minmax(150px, 1fr))",
      },
    },
  },
  plugins: [],
}

