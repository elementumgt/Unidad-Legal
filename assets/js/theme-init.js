(() => {
  const allowed = new Set(["system", "light", "dark"]);
  const saved = localStorage.getItem("unidad-legal-theme");
  const preference = allowed.has(saved) ? saved : "system";
  const dark = preference === "dark"
    || (preference === "system" && matchMedia("(prefers-color-scheme: dark)").matches);

  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.dataset.theme = preference;
})();
