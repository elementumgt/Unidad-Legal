import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import MenuRounded from "@mui/icons-material/MenuRounded";
import { AppBar, Box, IconButton, Link, Toolbar, Tooltip, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import unidadLogo from "../../assets/media/unidad.png";
import { usePreferences } from "../hooks/usePreferences.js";
import { legalPaths } from "../lib/paths.js";
import PreferenceControls from "./PreferenceControls.jsx";

export default function SiteHeader({ collapsed, onOpenMobile, onToggleCollapsed, page }) {
  const { language } = usePreferences();
  const paths = legalPaths();
  const navItems = [
    { href: paths.docs, label: language === "es" ? "Documentación" : "Documentation", page: "docs" },
    { href: paths.privacy, label: language === "es" ? "Privacidad" : "Privacy", page: "privacy" },
    { href: paths.terms, label: language === "es" ? "Condiciones" : "Terms", page: "terms" },
  ];

  return (
    <AppBar className="glass-nav shrink-0" color="transparent" elevation={0} position="static">
      <Toolbar className="!min-h-[68px] !px-3 sm:!px-5">
        <Tooltip title={language === "es" ? "Abrir menú" : "Open menu"}>
          <IconButton className="!mr-1 md:!hidden" onClick={onOpenMobile} aria-label={language === "es" ? "Abrir menú" : "Open menu"}><MenuRounded /></IconButton>
        </Tooltip>
        <Tooltip title={collapsed ? (language === "es" ? "Expandir menú" : "Expand menu") : (language === "es" ? "Minimizar menú" : "Collapse menu")}>
          <IconButton className="!mr-2 !hidden md:!inline-flex" onClick={onToggleCollapsed} aria-label={collapsed ? "Expandir menú" : "Minimizar menú"}>
            {collapsed ? <ChevronRightRounded /> : <ChevronLeftRounded />}
          </IconButton>
        </Tooltip>

        <Link component={RouterLink} to={paths.home} underline="none" color="inherit" className="flex min-w-0 items-center gap-3 rounded-xl">
          <Box component="img" src={unidadLogo} alt="" aria-hidden="true" className="h-10 w-10 shrink-0 rounded-xl object-cover shadow-lg" />
          <Box className="hidden min-w-0 sm:block">
            <Typography component="span" className="block !text-sm !font-extrabold !leading-tight">Unidad</Typography>
            <Typography component="span" color="text.secondary" className="block !text-xs">{language === "es" ? "Centro de ayuda" : "Help center"}</Typography>
          </Box>
        </Link>

        <nav className="ml-8 hidden items-center gap-1 lg:flex" aria-label={language === "es" ? "Navegación superior" : "Top navigation"}>
          {navItems.map((item) => (
            <Link
              component={RouterLink}
              to={item.href}
              underline="none"
              color={page === item.page ? "primary" : "text.secondary"}
              className="rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-black/5"
              key={item.page}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto"><PreferenceControls /></div>
      </Toolbar>
    </AppBar>
  );
}
