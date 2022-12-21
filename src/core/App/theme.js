const colorNames = {
  white: "#FFFFFF",
  whisper: "F5F5FA",
  mystic: "#E4E6F0",
  silver: "#C4C4C4",
  waterloo: "#7E839A",
  scienceBlue: "#0044CC",
  woodSmoke: "#18181B",
};

const common = {
  breakpoints: {
    tiny: "467px",
    small: "540px",
    mobile: "767px",
    medium: "991px",
    large: "1023px",
    smallDesktop: "1279px",
    mediumDesktop: "1440px"
  },
  boxShadow: "0px 4px 12px rgba(186, 199, 213, 0.5)",
};

export const theme = {
  ...common,
  colors: {
    primaryText: colorNames.woodSmoke,
    site: {
      background: colorNames.whisper,
    },
    header: {
      primary: colorNames.white,
      background: colorNames.woodSmoke,
      inputBorder: colorNames.mystic,
      placeholder: colorNames.waterloo,
    },
    tile: {
      secondaryText: colorNames.waterloo,
      background: colorNames.white,
      tagBackground: colorNames.mystic,
      imageBackground: colorNames.silver,
    },
    states: {
      buttonBackground: colorNames.scienceBlue,
      buttonText: colorNames.white,
    },
  },
};
