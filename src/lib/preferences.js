export const THEMES = Object.freeze(["system", "light", "dark"]);
export const LANGUAGES = Object.freeze(["es", "en"]);

export function normalizeTheme(value) {
  return THEMES.includes(value) ? value : "system";
}

export function normalizeLanguage(value) {
  return LANGUAGES.includes(value) ? value : "es";
}

export function resolveTheme(theme, prefersDark) {
  const normalized = normalizeTheme(theme);
  return normalized === "system" ? (prefersDark ? "dark" : "light") : normalized;
}
