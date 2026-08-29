import LegalDocumentPage from "../../shared/legal/components/LegalDocumentPage.jsx";
import { termsDocument } from "../content/termsDocument.js";

export default function TermsDocument() {
  return <LegalDocumentPage document={termsDocument} page="terms" />;
}
