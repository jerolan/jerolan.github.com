module.exports = {
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: ["dark"],
    },
  },
  darkMode: "class",
  variants: {
    extend: {
      opacity: ["dark"],
    },
  },
  plugins: [],
};
