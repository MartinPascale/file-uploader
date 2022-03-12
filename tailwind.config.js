module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "1/5-gap": "calc(20% - 12px)",
        "1/3-gap": "calc(33% - 8px)",
      },
    },
  },
  plugins: [],
};
