module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#374151",
        },
        secondary: {
          4: "#F7C59F",
        },
        grey: {
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          4: "#BDBDBD",
          5: "#E0E0E0",
          6: "#FAFAFA",
          7: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Maven Pro", "sans-serif"],
      },
      spacing: {
        nav: "86px",
      },
    },
  },
  plugins: [],
};
