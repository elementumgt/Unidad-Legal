(() => {
  const savedTheme = localStorage.getItem("unidad-legal-theme");
  const theme = ["system", "light", "dark"].includes(savedTheme) ? savedTheme : "system";
  const resolved = theme === "system"
    ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : theme;

  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.resolvedTheme = resolved;
})();
