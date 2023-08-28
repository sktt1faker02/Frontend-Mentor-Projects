/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary
        tomato: "hsl(4, 100%, 67%)",
        // ### Neutral
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
      },
      fontFamily: {
        "ff-roboto": " 'Roboto', sans-serif",
      },
      fontWeight: {
        "fw-700": 700,
      },
      content: {
        bgDesktop: 'url("../assets/images/illustration-sign-up-desktop.svg")',
      },
      backgroundImage: {
        bgButtonHover: "linear-gradient(103deg, rgba(255,85,114,1) 25%, rgba(255,102,68,1) 90%)",
      },
      boxShadow: {
        "box-shadow-btn": "0px 37px 52px -18px rgba(255,98,87,0.84);",
      },
    },
  },
  plugins: [],
};
