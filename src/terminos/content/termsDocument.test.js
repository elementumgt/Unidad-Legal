import { describe, expect, it } from "vitest";
import { validateDocument } from "../../shared/legal/validateDocument.js";
import { termsDocument } from "./termsDocument.js";

describe("documento de términos", () => {
  it("tiene identificadores únicos y contenido completo en ambos idiomas", () => {
    expect(validateDocument(termsDocument)).toBe(true);
  });
});
