import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { usePreferences } from "../hooks/usePreferences.js";
import { legalPaths } from "../lib/paths.js";

export default function SiteFooter() {
  const { language } = usePreferences();
  const paths = legalPaths();

  return (
    <footer className="glass-nav z-10 flex min-h-12 shrink-0 items-center justify-between gap-4 border-b-0 border-t px-4 py-2 sm:px-6">
      <Typography color="text.secondary" className="truncate !text-xs">© {new Date().getFullYear()} Unidad</Typography>
      <nav className="flex gap-4" aria-label={language === "es" ? "Enlaces del pie" : "Footer links"}>
        <Link component={RouterLink} to={paths.docs} underline="hover" className="!text-xs">Docs</Link>
        <Link component={RouterLink} to={paths.privacy} underline="hover" className="!text-xs">{language === "es" ? "Privacidad" : "Privacy"}</Link>
        <Link component={RouterLink} to={paths.terms} underline="hover" className="!text-xs">{language === "es" ? "Condiciones" : "Terms"}</Link>
      </nav>
    </footer>
  );
}
