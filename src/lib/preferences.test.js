import { describe, expect, it } from "vitest";
import { normalizeLanguage, normalizeTheme, resolveTheme } from "./preferences.js";
import { pageFromPath } from "./paths.js";

describe("preferencias", () => {
  it("usa sistema y español como valores predeterminados", () => {
    expect(normalizeTheme(null)).toBe("system");
    expect(normalizeLanguage(null)).toBe("es");
  });

  it("resuelve el tema del sistema sin modificar elecciones explícitas", () => {
    expect(resolveTheme("system", true)).toBe("dark");
    expect(resolveTheme("system", false)).toBe("light");
    expect(resolveTheme("light", true)).toBe("light");
  });

  it("resuelve las rutas limpias de GitHub Pages", () => {
    expect(pageFromPath("/Unidad-Legal/")).toBe("home");
    expect(pageFromPath("/Unidad-Legal/docs/")).toBe("docs");
    expect(pageFromPath("/Unidad-Legal/privacidad/")).toBe("privacy");
    expect(pageFromPath("/Unidad-Legal/terminos/")).toBe("terms");
  });
});
