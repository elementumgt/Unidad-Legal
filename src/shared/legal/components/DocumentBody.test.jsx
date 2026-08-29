import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { privacyDocument } from "../../../privacidad/content/privacyDocument.js";
import DocumentBody from "./DocumentBody.jsx";

describe("DocumentBody", () => {
  it("renderiza exclusivamente el idioma seleccionado", () => {
    const spanish = renderToStaticMarkup(<DocumentBody language="es" sections={privacyDocument.sections} />);
    const english = renderToStaticMarkup(<DocumentBody language="en" sections={privacyDocument.sections} />);

    expect(spanish).toContain("Alcance y responsable");
    expect(spanish).not.toContain("Scope and controller");
    expect(english).toContain("Scope and controller");
    expect(english).not.toContain("Alcance y responsable");
  });
});
