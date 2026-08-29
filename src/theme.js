import { alpha, createTheme } from "@mui/material/styles";

export const brand = Object.freeze({
  cyan: "#90D8F0",
  deepViolet: "#282058",
  magenta: "#A83060",
  plum: "#481040",
  burgundy: "#581838",
  yellow: "#F0D000",
  pearl: "#F0D0C0",
});

export function createBrandTheme(mode) {
  const dark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: dark ? brand.cyan : "#7B1F4B",
        light: dark ? "#B8ECFA" : brand.magenta,
        dark: dark ? "#59BCD8" : brand.burgundy,
        contrastText: dark ? "#17122F" : "#FFFFFF",
      },
      secondary: {
        main: dark ? "#D54A7D" : brand.magenta,
        light: "#ED7DA6",
        dark: brand.burgundy,
      },
      warning: { main: brand.yellow },
      background: {
        default: dark ? "#17122F" : "#F8F5FB",
        paper: dark ? brand.deepViolet : "#FFFFFF",
      },
      text: {
        primary: dark ? "#F7F2FA" : "#2F2340",
        secondary: dark ? "#C8BFD3" : "#655A70",
      },
      divider: dark ? alpha(brand.cyan, 0.14) : alpha(brand.plum, 0.1),
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: { fontWeight: 850, letterSpacing: "-0.04em" },
      h2: { fontWeight: 800, letterSpacing: "-0.025em" },
      h3: { fontWeight: 750, letterSpacing: "-0.015em" },
      button: { fontWeight: 700, textTransform: "none" },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 10, paddingInline: 18 },
          containedPrimary: {
            background: dark
              ? `linear-gradient(135deg, ${brand.cyan}, #59BCD8)`
              : `linear-gradient(135deg, ${brand.magenta}, ${brand.burgundy})`,
            boxShadow: `0 8px 26px ${alpha(dark ? brand.cyan : brand.magenta, 0.24)}`,
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            border: 0,
            borderRadius: "8px !important",
            color: dark ? "#C8BFD3" : "#655A70",
            padding: "7px 9px",
            "&.Mui-selected": {
              backgroundColor: alpha(dark ? brand.cyan : brand.magenta, 0.16),
              color: dark ? brand.cyan : brand.magenta,
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: { tooltip: { borderRadius: 8, fontSize: 12 } },
      },
    },
  });
}
