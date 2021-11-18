// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        comforter: ["Comforter Brush", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        pacifico: ["Pacifico", "cursive"],
      },
      translate: {
        50: "50%",
        35: "35%",
      },
      inset: {
        50: "50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
