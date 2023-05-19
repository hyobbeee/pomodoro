/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        toast: {
          from: { transform: 'translate(-50%, 100%)' },
          to: { transform: 'translate(-50%, 0)' },
        },
      },
      fontFamily: {
        "press-start": ["Edu NSW ACT Foundation", "cursive"],
      },
      colors: {
        dark: "#2F374A",
        green: "#4aec8c",
        darkgreen: "#395C36",
        pink: "#E0A6B3",
        red: "#f54e4e",
        grey: "#ffffff26",
      },
    },
  },

  variants: {},
  plugins: [],
}

