/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: { max: "1024px" },
    },
    fontFamily: {
      proximaNova: "Proxima Nova",
    },
    content: {
      smallLocationIcon: "url('./icons/small-location.png')",
      locationIcon: "url('./icons/location.png')",
      largeLocationIcon: "url('./icons/location-large.png')",
      bookmarkIcon: "url('./icons/bookmark.png')",
      arrowRightIcon: "url('./icons/arrow-left.png')",
      separatorIcon: "url('./icons/separator.png')",
      ratingIcon: "url('./icons/rating.png')",
      shareIcon: "url('./icons/share.png')",
      bigArrowIcon: "url('./icons/arrow-big.png')",
      mapImage: "url('./icons/map.png')",
    },
    colors: {
      lightgray: "#E8EBF3",
      gray: "#bcc6d6",
      dark: "#3A4562",
      secondary: "#878D9D",
      lightBg: "#e6e9f2",
      paginationMobile: "#F9FAFD",
      white: "#FFFFFF",
      bright: "#5876C5",
      listItemBg: "#a1b1db51",
      listItemBorderClr: "#55699e4d",
      listItemYellowBg: "#ffcf0026",
      listItemYellowBorderClr: "#ffcf00",
      listItemYellowTextClr: "#988b49",
    },
    boxShadow: {
      "job-shadow":
        "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);",
    },
  },
  plugins: [],
};
