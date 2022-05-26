const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  // mode: "jit",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...fontFamily.sans],
        // segoe: ['"Segoe UI"', "Inter", ...fontFamily.sans],
        // merri: ["Merriweather", ...fontFamily.serif],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // color: theme("colors.gray.700"),
            color: "#000",
            a: {
              color: "#0070f3",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
            },
            h2: {
              fontWeight: "600",
              letterSpacing: theme("letterSpacing.tight"),
            },
            h3: {
              fontWeight: "600",
            },
            img: {
              border: "1px solid #dadee7 !important",
              borderRadius: "4px",
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[20],
              "margin-top": "1em",
              "margin-bottom": ".5em",
              color: "#000",
            },
            code: {
              color: "#111",
              backgroundColor: "#f0f0f0",
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "3px",
              paddingBottom: "3px",
              borderRadius: "0.25rem",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            "ul > li::marker": {
              color: "#000",
            },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
      }),
    },
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [require("@tailwindcss/typography")],
};
