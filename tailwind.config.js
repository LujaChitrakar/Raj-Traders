/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkblue: "#181eb8",
        goldenrod: "#c2bc31",
        darkslateblue: {
          "100": "#2c2e5b",
          "200": "#2b2d5a",
          "300": "#1a1c4c",
        },
        teal: "#2a899d",
        black: "#000",
        steelblue: {
          "100": "#4d8caf",
          "200": "#4386a3",
        },
        lightsteelblue: "#adc2e1",
        gray: {
          "100": "#36280d",
          "200": "#050505",
        },
        whitesmoke: "#f3ecec",
        firebrick: {
          "100": "#ac1d1d",
          "200": "#ac1c1c",
        },
        gainsboro: "#d9d9d9",
        darkslategray: "#3b4649",
        silver: {
          "100": "#c4c4c4",
          "200": "#c8bbbb",
        },
        lightgray: "#d2d2d2",
        indianred: "#c75f59",
      },
      spacing: {},
      fontFamily: {
        "roboto-condensed": "'Roboto Condensed'",
        "times-new-roman": "'Times New Roman'",
        inherit: "inherit",
      },
      borderRadius: {
        mini: "15px",
        "11xl": "30px",
        xl: "20px",
        "41xl": "60px",
        "21xl": "40px",
      },
    },
    fontSize: {
      "45xl": "64px",
      "13xl": "32px",
      "29xl": "48px",
      "5xl": "24px",
      xl: "20px",
      "17xl": "36px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
