const colorNames = {
  white: "#FFFFFF",
  whisper: "#F5F5FA",
  mystic: "#E4E6F0",
  silver: "#C4C4C4",
  waterloo: "#7E839A",
  dodgerBlue: "hsl(220, 100%, 60%)",
  blueRibbon: "hsl(220, 100%, 50%)",
  scienceBlue: "#0044CC",
  woodSmoke: "#18181B",
  stormGray: "#74788B",
  black: "#000000",
  lightBlue: "#D6E4FF",
};

const common = {
  breakpoints: {
    tiny: "467px",
    small: "524px",
    mobile: "767px",
    medium: "991px",
    large: "1081px",
    desktop: "1224px",
    mediumDesktop: "1440px",
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
      buttonHover: colorNames.blueRibbon,
      buttonActive: colorNames.dodgerBlue,
    },
    backdrop: {
      background: colorNames.black,
      text: colorNames.white,
    },
    detailsTile: {
      background: colorNames.white,
      primaryText: colorNames.black,
      secondaryText: colorNames.stormGray,
      backgroundImage: colorNames.silver,
    },
    credits: {
      fullName: colorNames.woodSmoke,
      role: colorNames.waterloo,
    },
    footer: {
      background: colorNames.lightBlue,
      disabled: colorNames.mystic,
      arrow: colorNames.scienceBlue,
      disabledArrow: colorNames.waterloo,
      text: colorNames.black,
      counter: colorNames.waterloo,
    },
  },
};
