module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-img":
          "url('https://github.com/AryByt/Are-Ya-Da-Leagues/blob/main/are-ya-da-leagues/src/components/soccer.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
