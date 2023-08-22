const mainTheme = {
  colors: {
    primary: "#325a47",
    primaryStrong: "#2d3a36",
    background: "#f0f0f0",
    navigationText: "#61DAFB",
    navHighlightedText: "#fff",
    text: "#696969",
    imagePlaceholderBg: "#e7e7e7",
    scrollbar: "#2d3a36",
  },
  fonts: {
    family: "Poppins,Arial,sans-serif;",
    baseFontSize: 16,
  },
  sizes: {
    appWidth: 700,
    basePadding: 10,
  },
  baseTransitionTime: 300,
};

const breakpoints = {
  md: "550px",
  lg: "800px",
}

export const devices = {
  min: {
    md: `(min-width: ${breakpoints.md})`,
    lg: `(min-width: ${breakpoints.lg})`,
  },
  max: {
    md: `(max-width: ${breakpoints.md})`,
    lg: `(max-width: ${breakpoints.lg})`,
  },
}

export default mainTheme;