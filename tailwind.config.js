module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "white",
      shade: "#F4F4F4",
      primary: "#0078D7",
      gray: "#737373",
    },
    extend: {
      width: {
        "1/5-gap": "calc(20% - 12px)",
        "1/3-gap": "calc(33% - 8px)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
