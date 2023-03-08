/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1440px",
        },
      },
      colors: {
        primary: {
          red: "hsl(0, 78%, 62%)",
          cyan: "hsl(180, 62%, 55%)",
          orange: "hsl(34, 97%, 64%)",
          blue: "hsl(212, 86%, 64%)",
        },
        neutral: {
          VeryDarkBlue: "hsl(234, 12%, 34%)",
          GrayishBlue: "hsl(229, 6%, 66%)",
          VeryLightGray: "hsl(0, 0%, 98%)",
        },
        textColor: "#4D4F62",
      },
      fontSize: {
        base: "15px",
      },
    },
  },
  plugins: [],
};
