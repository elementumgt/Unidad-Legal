import GavelRounded from "@mui/icons-material/GavelRounded";
import MenuBookRounded from "@mui/icons-material/MenuBookRounded";
import PrivacyTipRounded from "@mui/icons-material/PrivacyTipRounded";
import VerifiedUserRounded from "@mui/icons-material/VerifiedUserRounded";
import { Box, Button, Chip, Container, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import unidadLogo from "../../../assets/media/unidad.png";
import SiteLayout from "../../components/SiteLayout.jsx";
import { usePreferences } from "../../hooks/usePreferences.js";
import { legalPaths } from "../../lib/paths.js";
import DocumentCard from "../components/DocumentCard.jsx";

const copy = {
  es: {
    badge: "Transparencia primero",
    title: "Reglas claras para una comunidad mejor.",
    description: "Conoce cómo Unidad protege los datos de tu comunidad y las reglas que mantienen el servicio seguro, útil y justo.",
    privacy: "Política de Privacidad",
    terms: "Condiciones del Servicio",
    docs: "Explorar documentación",
    docsTitle: "Todo sobre Unidad",
    docsDescription: "Guía completa de los 25 comandos, permisos, módulos, música persistente y flujos para miembros, Staff y administradores.",
    docsAction: "Abrir documentación",
    privacyTitle: "Privacidad por diseño",
    privacyDescription: "Qué datos procesa Unidad, por qué los necesita, cuánto tiempo se conservan y cómo solicitar su eliminación.",
    privacyAction: "Leer política",
    termsTitle: "Uso responsable",
    termsDescription: "Las reglas que aceptas al instalar o utilizar Unidad dentro de una comunidad de Discord.",
    termsAction: "Leer condiciones",
  },
  en: {
    badge: "Transparency first",
    title: "Clear rules for a better community.",
    description: "Learn how Unidad protects your community data and the rules that keep the service safe, useful, and fair.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    docs: "Explore documentation",
    docsTitle: "Everything about Unidad",
    docsDescription: "Complete guide to all 25 commands, permissions, modules, persistent music, and member, Staff, and administrator workflows.",
    docsAction: "Open documentation",
    privacyTitle: "Privacy by design",
    privacyDescription: "What data Unidad processes, why it is needed, how long it is kept, and how to request its deletion.",
    privacyAction: "Read policy",
    termsTitle: "Responsible use",
    termsDescription: "The rules you accept when installing or using Unidad within a Discord community.",
    termsAction: "Read terms",
  },
};

export default function HomePage() {
  const { language } = usePreferences();
  const text = copy[language];
  const paths = legalPaths();

  return (
    <SiteLayout page="home">
      <Container maxWidth="lg" className="py-7 sm:py-10 lg:py-14 xl:py-20">
        <Paper className="glass-hero relative flex min-w-0 flex-col items-center overflow-hidden !rounded-2xl !px-5 !py-9 text-center sm:!rounded-3xl sm:!px-8 sm:!py-12 lg:!px-12 lg:!py-14" elevation={0}>
          <Box aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#90D8F0]/10 blur-3xl" />
          <Box component="img" src={unidadLogo} alt="Unidad" className="relative !block h-20 w-20 shrink-0 rounded-2xl object-cover shadow-2xl sm:h-24 sm:w-24 sm:rounded-3xl" />
          <div className="relative mt-6 flex w-full justify-center">
            <Chip className="!font-bold" color="primary" icon={<VerifiedUserRounded />} label={text.badge} variant="outlined" />
          </div>
          <Typography align="center" component="h1" variant="h1" className="relative !mt-6 w-full max-w-4xl !text-3xl !leading-[1.08] sm:!text-4xl lg:!text-5xl xl:!text-6xl">{text.title}</Typography>
          <Typography align="center" color="text.secondary" className="relative !mt-5 w-full max-w-2xl !text-base !leading-7 md:!text-lg">{text.description}</Typography>
          <div className="relative mt-8 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
            <Button className="w-full sm:w-auto" component={RouterLink} to={paths.docs} size="large" variant="contained" startIcon={<MenuBookRounded />}>{text.docs}</Button>
            <Button className="w-full sm:w-auto" component={RouterLink} to={paths.privacy} size="large" variant="outlined" startIcon={<PrivacyTipRounded />}>{text.privacy}</Button>
            <Button className="w-full sm:w-auto" component={RouterLink} to={paths.terms} size="large" variant="outlined" startIcon={<GavelRounded />}>{text.terms}</Button>
          </div>
        </Paper>

        <section className="mt-6 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3" aria-label={language === "es" ? "Recursos de Unidad" : "Unidad resources"}>
          <DocumentCard accent="#F0D000" action={text.docsAction} description={text.docsDescription} href={paths.docs} icon={<MenuBookRounded />} title={text.docsTitle} />
          <DocumentCard accent="#90D8F0" action={text.privacyAction} description={text.privacyDescription} href={paths.privacy} icon={<PrivacyTipRounded />} title={text.privacyTitle} />
          <DocumentCard accent="#A83060" action={text.termsAction} description={text.termsDescription} href={paths.terms} icon={<GavelRounded />} title={text.termsTitle} />
        </section>
      </Container>
    </SiteLayout>
  );
}
