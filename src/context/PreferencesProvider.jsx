import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { createBrandTheme } from "../theme.js";
import { normalizeLanguage, normalizeTheme, resolveTheme } from "../lib/preferences.js";
import { PreferencesContext } from "./PreferencesContext.js";

export default function PreferencesProvider({ children }) {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)", { noSsr: true });
  const [theme, setTheme] = useState(() => normalizeTheme(localStorage.getItem("unidad-legal-theme")));
  const [language, setLanguage] = useState(() => normalizeLanguage(localStorage.getItem("unidad-legal-language")));
  const resolvedTheme = resolveTheme(theme, prefersDark);
  const muiTheme = useMemo(() => createBrandTheme(resolvedTheme), [resolvedTheme]);

  useEffect(() => {
    localStorage.setItem("unidad-legal-theme", theme);
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.resolvedTheme = resolvedTheme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      resolvedTheme === "dark" ? "#282058" : "#F8F5FB",
    );
  }, [resolvedTheme, theme]);

  useEffect(() => {
    localStorage.setItem("unidad-legal-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({
    language,
    resolvedTheme,
    setLanguage: (next) => setLanguage(normalizeLanguage(next)),
    setTheme: (next) => setTheme(normalizeTheme(next)),
    theme,
  }), [language, resolvedTheme, theme]);

  return (
    <PreferencesContext.Provider value={value}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </PreferencesContext.Provider>
  );
}
