/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12172B",
        navy: {
          DEFAULT: "#132A4C",
          dark: "#0B1B33",
          light: "#1F3E68",
        },
        amber: {
          DEFAULT: "#F5A524",
          dark: "#D6890F",
        },
        sand: "#F6F5F1",
        line: "#E4E1D8",
        leaf: "#2E7D5B",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        wrap: "1280px",
      },
    },
  },
  plugins: [],
};
