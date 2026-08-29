import { describe, expect, it } from "vitest";
import { validateDocument } from "../../shared/legal/validateDocument.js";
import { privacyDocument } from "./privacyDocument.js";

describe("documento de privacidad", () => {
  it("tiene identificadores únicos y contenido completo en ambos idiomas", () => {
    expect(validateDocument(privacyDocument)).toBe(true);
  });
});
