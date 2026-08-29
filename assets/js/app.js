(() => {
  const root = document.documentElement;
  const themeQuery = matchMedia("(prefers-color-scheme: dark)");
  const allowedThemes = new Set(["system", "light", "dark"]);
  const allowedLanguages = new Set(["es", "en"]);

  function applyTheme(preference, persist = true) {
    const value = allowedThemes.has(preference) ? preference : "system";
    const dark = value === "dark" || (value === "system" && themeQuery.matches);
    root.classList.toggle("dark", dark);
    root.dataset.theme = value;
    document.querySelectorAll("[data-theme-value]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.themeValue === value));
    });
    if (persist) localStorage.setItem("unidad-legal-theme", value);
  }

  function applyLanguage(language, persist = true) {
    const value = allowedLanguages.has(language) ? language : "es";
    root.lang = value;
    document.querySelectorAll("[data-language-value]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.languageValue === value));
    });
    document.querySelectorAll("[data-lang]").forEach((element) => {
      element.hidden = element.dataset.lang !== value;
    });
    const title = document.body.dataset[`title${value === "es" ? "Es" : "En"}`];
    if (title) document.title = title;
    if (persist) localStorage.setItem("unidad-legal-language", value);
  }

  document.querySelectorAll("[data-theme-value]").forEach((button) => {
    button.addEventListener("click", () => applyTheme(button.dataset.themeValue));
  });
  document.querySelectorAll("[data-language-value]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.languageValue));
  });

  themeQuery.addEventListener("change", () => {
    if (root.dataset.theme === "system") applyTheme("system", false);
  });

  const savedLanguage = localStorage.getItem("unidad-legal-language");
  applyTheme(root.dataset.theme, false);
  applyLanguage(allowedLanguages.has(savedLanguage) ? savedLanguage : "es", false);

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
