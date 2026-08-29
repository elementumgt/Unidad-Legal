import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import LibraryMusicRounded from "@mui/icons-material/LibraryMusicRounded";
import MenuBookRounded from "@mui/icons-material/MenuBookRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import SecurityRounded from "@mui/icons-material/SecurityRounded";
import TerminalRounded from "@mui/icons-material/TerminalRounded";
import {
  Alert,
  Chip,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import SiteLayout from "../../components/SiteLayout.jsx";
import {
  commandCount,
  commandGroups,
  commandNavigationGroups,
} from "../content/commandDocs.js";
import { usePreferences } from "../../hooks/usePreferences.js";
import CommandCard from "../components/CommandCard.jsx";
import GuideCard from "../components/GuideCard.jsx";
import StatCard from "../components/StatCard.jsx";

const copy = {
  es: {
    eyebrow: "Referencia oficial",
    title: "Documentación de comandos",
    intro: "Referencia completa de los comandos slash de Unidad, verificada contra el código del bot.",
    search: "Buscar comando, acción o función",
    noResults: "No hay comandos que coincidan con la búsqueda.",
    commands: "comandos",
    actions: "acciones documentadas",
    groups: "áreas funcionales",
    guide: "Guía esencial",
    quickTitle: "Cómo ejecutar un comando",
    quickBody: "Escribe / en Discord, selecciona Unidad y completa las opciones que Discord marque como obligatorias. Los valores entre corchetes en esta guía son opcionales.",
    permissionTitle: "Permisos y acceso",
    permissionBody: "Discord puede ocultar comandos si no tienes el permiso predeterminado. Algunas acciones también validan roles internos de Admin, Staff, DJ o Economía configurados por el servidor.",
    persistenceTitle: "Persistencia de música",
    persistenceBody: "La cola se guarda por servidor y se recupera al volver a usar /play. /queue puede consultar la cola guardada sin reproductor. /stop es una limpieza intencional y no se restaura.",
    limitsTitle: "Límites y seguridad",
    limitsBody: "La cola admite hasta 100 pistas, /history acepta de 1 a 25 registros y /volume de 1 a 100. /play solo acepta búsquedas o URLs HTTPS de proveedores autorizados.",
    access: "Acceso",
    syntax: "Sintaxis",
    example: "Ejemplo",
    note: "Importante",
    results: "Resultados",
  },
  en: {
    eyebrow: "Official reference",
    title: "Command documentation",
    intro: "Complete reference for Unidad slash commands, verified against the bot source code.",
    search: "Search commands, actions, or features",
    noResults: "No commands match your search.",
    commands: "commands",
    actions: "documented actions",
    groups: "functional areas",
    guide: "Essential guide",
    quickTitle: "How to run a command",
    quickBody: "Type / in Discord, select Unidad, and complete the options Discord marks as required. Values inside brackets in this guide are optional.",
    permissionTitle: "Permissions and access",
    permissionBody: "Discord may hide commands when you lack their default permission. Some actions also validate the server's configured Admin, Staff, DJ, or Economy roles.",
    persistenceTitle: "Music persistence",
    persistenceBody: "The queue is saved per server and restored when /play is used again. /queue can show a saved queue without an active player. /stop intentionally clears it and cannot be restored.",
    limitsTitle: "Limits and safety",
    limitsBody: "The queue supports up to 100 tracks, /history accepts 1 to 25 records, and /volume accepts 1 to 100. /play only accepts searches or HTTPS URLs from approved providers.",
    access: "Access",
    syntax: "Syntax",
    example: "Example",
    note: "Important",
    results: "Results",
  },
};

const guideNavigation = {
  id: "guide",
  label: { es: "Guía", en: "Guide" },
  items: [
    { id: "overview", label: { es: "Resumen", en: "Overview" } },
    { id: "quick-start", label: { es: "Primeros pasos", en: "Quick start" } },
    { id: "permissions", label: { es: "Permisos", en: "Permissions" } },
    { id: "music-persistence", label: { es: "Persistencia musical", en: "Music persistence" } },
    { id: "limits", label: { es: "Límites", en: "Limits" } },
  ],
};

export default function DocsPage() {
  const { language } = usePreferences();
  const labels = copy[language];
  const [query, setQuery] = useState("");
  const actionCount = commandGroups.flatMap((group) => group.commands).reduce((total, command) => total + command.usage.length, 0);
  const navigationGroups = [guideNavigation, ...commandNavigationGroups()];

  const filteredGroups = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase(language);
    if (!normalized) return commandGroups;
    return commandGroups
      .map((group) => ({
        ...group,
        commands: group.commands.filter((command) => [
          command.name,
          command.summary[language],
          command.access[language],
          ...command.usage.flatMap((usage) => [usage.syntax, usage.example, usage.description[language]]),
        ].join(" ").toLocaleLowerCase(language).includes(normalized)),
      }))
      .filter((group) => group.commands.length > 0);
  }, [language, query]);

  const visibleCount = filteredGroups.reduce((total, group) => total + group.commands.length, 0);

  return (
    <SiteLayout navigationGroups={navigationGroups} page="docs">
      <Container maxWidth="lg" className="py-10 md:py-14">
        <header id="overview" className="scroll-mt-5">
          <Chip color="primary" icon={<MenuBookRounded />} label={labels.eyebrow} variant="outlined" />
          <Typography component="h1" variant="h1" className="!mt-5 !text-4xl md:!text-5xl">{labels.title}</Typography>
          <Typography color="text.secondary" className="!mt-3 max-w-3xl !text-base !leading-7">{labels.intro}</Typography>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <StatCard value={commandCount} label={labels.commands} />
            <StatCard value={actionCount} label={labels.actions} />
            <StatCard value={commandGroups.length} label={labels.groups} />
          </div>
        </header>

        <section aria-labelledby="guide-heading" className="mt-10">
          <Typography id="guide-heading" component="h2" variant="h4" className="!mb-4 !font-black">{labels.guide}</Typography>
          <div className="grid gap-4 md:grid-cols-2">
            <GuideCard id="quick-start" icon={<TerminalRounded />} title={labels.quickTitle} body={labels.quickBody} />
            <GuideCard id="permissions" icon={<SecurityRounded />} title={labels.permissionTitle} body={labels.permissionBody} />
            <GuideCard id="music-persistence" icon={<LibraryMusicRounded />} title={labels.persistenceTitle} body={labels.persistenceBody} />
            <GuideCard id="limits" icon={<CheckCircleRounded />} title={labels.limitsTitle} body={labels.limitsBody} />
          </div>
        </section>

        <section className="mt-10" aria-label={labels.search}>
          <TextField
            fullWidth
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={labels.search}
            inputProps={{ "aria-label": labels.search }}
            InputProps={{ startAdornment: <InputAdornment position="start"><SearchRounded /></InputAdornment> }}
            className="glass-control rounded-xl [&_.MuiOutlinedInput-root]:!rounded-xl"
          />
          <Typography color="text.secondary" className="!mt-2 !text-xs">{labels.results}: {visibleCount}/{commandCount}</Typography>
        </section>

        <div className="mt-10 space-y-12">
          {filteredGroups.map((group) => (
            <section aria-labelledby={`group-${group.id}`} key={group.id}>
              <Typography id={`group-${group.id}`} component="h2" variant="h4" className="!font-black">{group.title[language]}</Typography>
              <Typography color="text.secondary" className="!mt-2 !mb-5">{group.description[language]}</Typography>
              <div className="space-y-5">
                {group.commands.map((command) => <CommandCard command={command} language={language} labels={labels} key={command.name} />)}
              </div>
            </section>
          ))}
          {filteredGroups.length === 0 && <Alert severity="info" className="!rounded-xl">{labels.noResults}</Alert>}
        </div>
      </Container>
    </SiteLayout>
  );
}
