import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import GavelRounded from "@mui/icons-material/GavelRounded";
import PrivacyTipRounded from "@mui/icons-material/PrivacyTipRounded";
import { Alert, Button, Chip, Container, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DocumentBody from "./DocumentBody.jsx";
import SiteLayout from "../../../components/SiteLayout.jsx";
import { usePreferences } from "../../../hooks/usePreferences.js";
import { legalPaths } from "../../../lib/paths.js";

export default function LegalPage({ document, page }) {
  const { language } = usePreferences();
  const paths = legalPaths();
  const isPrivacy = document.kind === "privacy";
  const navigationGroups = [{
    id: document.kind,
    label: { es: "Contenido", en: "Contents" },
    items: document.sections.map((section) => ({ id: section.id, label: section.title })),
  }];

  return (
    <SiteLayout navigationGroups={navigationGroups} page={page}>
      <Container maxWidth="lg" className="py-10 md:py-14">
        <header className="mb-9">
          <Button component={RouterLink} to={paths.home} startIcon={<ArrowBackRounded />} className="!-ml-2">
            {language === "es" ? "Volver al Centro legal" : "Back to Legal center"}
          </Button>
          <div className="mt-5">
            <Chip
              color={isPrivacy ? "primary" : "secondary"}
              icon={isPrivacy ? <PrivacyTipRounded /> : <GavelRounded />}
              label={document.eyebrow[language]}
              variant="outlined"
            />
            <Typography component="h1" variant="h1" className="!mt-5 !text-4xl md:!text-5xl">{document.title[language]}</Typography>
            <Typography color="text.secondary" className="!mt-3 !text-sm">
              {language === "es" ? "Última actualización" : "Last updated"}: {document.updated[language]} · {language === "es" ? "Versión" : "Version"} 2.0
            </Typography>
          </div>
          <Alert className="single-line-alert glass-hero !mt-6 !rounded-xl md:!w-fit" icon={isPrivacy ? <PrivacyTipRounded /> : <GavelRounded />} severity={isPrivacy ? "info" : "warning"} variant="outlined">
            {document.summary[language]}
          </Alert>
        </header>

        <Paper className="glass-card !rounded-2xl !px-6 !py-8 md:!px-10 md:!py-10" elevation={0}>
          <DocumentBody language={language} sections={document.sections} />
        </Paper>
      </Container>
    </SiteLayout>
  );
}
