export function legalPaths() {
  return {
    docs: "/docs/",
    home: "/",
    privacy: "/privacidad/",
    terms: "/terminos/",
  };
}

export function pageFromPath(pathname) {
  const segments = String(pathname).toLowerCase().split("/").filter(Boolean);
  if (segments.includes("docs")) return "docs";
  if (segments.includes("privacidad")) return "privacy";
  if (segments.includes("terminos")) return "terms";
  return "home";
}
