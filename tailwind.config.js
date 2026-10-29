const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./js/script.js"],
  theme: {
    screens: {
      smdesk: { max: "84em" },
      laptop: { max: "75em" },
      tablet: { max: "59em" },
      smtablet: { max: "44em" },
      phone: { max: "34em" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e67e22",
          light: "#eb984e",
          dark: "#cf711f",
        },
        peach: {
          DEFAULT: "#fdf2e9",
          dark: "#fae5d3",
        },
        brown: "#45260a",
        grey: {
          200: "#bab9b9",
          300: "#888",
          400: "#767676",
          500: "#6f6f6f",
          600: "#555",
          700: "#333",
        },
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
      maxWidth: {
        container: "75rem",
        hero: "81.25rem",
      },
      boxShadow: {
        meal: "0 1.5rem 3rem rgba(0, 0, 0, 0.075)",
        "meal-hover": "0 2rem 4rem rgba(0, 0, 0, 0.06)",
        cta: "0 1.5rem 3rem rgba(0, 0, 0, 0.15)",
        stuck: "0 0.75rem 2rem rgba(0, 0, 0, 0.03)",
      },
      backgroundImage: {
        cta: "linear-gradient(to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)), url('../img/eating.jpg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("stuck", ".stuck &");
      addVariant("nav-open", ".nav-open &");
    }),
  ],
};
