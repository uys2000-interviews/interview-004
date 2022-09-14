// tailwind.config.js
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg1: "#EFDFEF",
        bg2: "#CBCBCB",
        tx1: "#232323",
        tx2: "#939393",
        wh: "#FEFFDE",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
