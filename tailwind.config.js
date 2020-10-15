module.exports = {
  purge: ["**/*.html"],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
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
  variants: {},
  plugins: [],
};
