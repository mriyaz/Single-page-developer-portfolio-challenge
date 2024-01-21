/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "SpaceGrotesk": "'Space Grotesk', sans-serif",
      },
      backgroundColor: {
        "bgcustom": "#141414",

      },
      colors: {
        "custom": "#d9d9d9",
        "greenLineColor": "#4ce19e",
      },
      height: {
        '0.25': '1px',
        '0.5': '2px',
      }
    },
  },
  plugins: [],
}

