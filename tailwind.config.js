module.exports = {
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      colors: {
        light: "#F5F8FE",
        primary: "#487DD2",
        dark: "#04031D",
        transparent: "rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
