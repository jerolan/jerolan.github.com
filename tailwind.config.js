module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#282C35",
        blue: "#91C5D3",
        red: "#F1A5AB",
        white: "#fff",
        yellow: "#FFE3A9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
