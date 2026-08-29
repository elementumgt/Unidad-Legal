import LegalDocumentPage from "../../shared/legal/components/LegalDocumentPage.jsx";
import { privacyDocument } from "../content/privacyDocument.js";

export default function PrivacyDocument() {
  return <LegalDocumentPage document={privacyDocument} page="privacy" />;
}
