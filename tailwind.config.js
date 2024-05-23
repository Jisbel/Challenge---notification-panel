/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // ### Primary
        redOrange: "hsl(1, 90%, 64%)",
        saintPatrickBLue: "hsl(219, 85%, 26%)",

        // ### Neutral

        ghostWhite: "hsl(210, 60%, 98%)",
        aliceBlue: "hsl(211, 68%, 94%)",
        gainsboro: "hsl(205, 33%, 90%)",
        manatee: "hsl(219, 14%, 63%)",
        payneGrey: "hsl(219, 12%, 42%)",
        darkJungleGreen: "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
