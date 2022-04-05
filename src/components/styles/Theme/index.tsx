export type ThemeType = typeof lightTheme;

export const lightTheme = {
  pallette: {
    primary: "#ffffff",
    secondary: "#F7AB1B",
    background: "#FFFFFF",
    text: "#28293E",
  },
  breakPoints: {
    xs: "0px",
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1536px",
    none: "99999px",
  },
  Typography: {
    h1: {
      size: "6rem",
      weight: 300,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      size: "3.75rem",
      weight: 300,
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      size: "3rem",
      weight: 400,
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      size: "2.125rem",
      weight: 400,
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      size: "1.5rem",
      weight: 400,
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      size: "1.25rem",
      weight: 500,
      lineHeight: 1.6,
      letterSpacing: "0.00938em",
    },
    body1: {
      size: "1rem",
      weight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
  },
};

export const darkTheme: ThemeType = {
  pallette: {
    primary: "#28293E",
    secondary: "#F7AB1B",
    background: "#28293E",
    text: "#FFFFFF",
  },
  breakPoints: {
    xs: "0px",
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1536px",
    none: "99999px",
  },
  Typography: {
    h1: {
      size: "6rem",
      weight: 300,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      size: "3.75rem",
      weight: 300,
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      size: "3rem",
      weight: 400,
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      size: "2.125rem",
      weight: 400,
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      size: "1.5rem",
      weight: 400,
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      size: "1.25rem",
      weight: 500,
      lineHeight: 1.6,
      letterSpacing: "0.00938em",
    },
    body1: {
      size: "1rem",
      weight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
  },
};
