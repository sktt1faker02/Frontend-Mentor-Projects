/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
        // Neutral
        "transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "very-light-gray": "hsl(0, 0%, 95%)",
      },
      fontFamily: {
        "ff-lexend-deca": "'Lexend Deca', sans-serif",
        "ff-big-shoulders": "'Big Shoulders Display', cursive",
      },
      fontWeight: {
        "fw-700": 700,
      },
    },
  },
  plugins: [],
};
