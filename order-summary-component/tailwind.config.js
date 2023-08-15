/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // Primary
      "pale-blue": "hsl(225, 100%, 94%)",
      "light-pale-blue": "hsl(225, 100%, 94%,0.3)",
      "bright-blue": "hsl(245, 75%, 52%)",

      // Secondary
      "very-pale-blue": "hsl(225, 100%, 98%)",
      "desaturated-blue": "hsl(224, 23%, 55%)",
      "dark-blue": "hsl(223, 47%, 23%)",
    },
    fontFamily: {
      "red-hat": ["Red Hat Display", "sans-serif"],
    },
    fontWeight: {
      "fw-500": 500,
      "fw-700": 700,
      "fw-900": 900,
    },

    extend: {
      maxWidth: {
        "25ch": "25ch",
      },
      dropShadow: {
        "btn-shadow": "0px 27px 11px 0px rgba(114,128,167,0.37)",
      },
    },
  },
  plugins: [],
};
