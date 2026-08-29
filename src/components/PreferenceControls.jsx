import ComputerRounded from "@mui/icons-material/ComputerRounded";
import DarkModeRounded from "@mui/icons-material/DarkModeRounded";
import LightModeRounded from "@mui/icons-material/LightModeRounded";
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import { usePreferences } from "../hooks/usePreferences.js";

export default function PreferenceControls() {
  const { language, setLanguage, setTheme, theme } = usePreferences();
  const labels = language === "es"
    ? { language: "Idioma", system: "Tema del sistema", light: "Tema claro", dark: "Tema oscuro" }
    : { language: "Language", system: "System theme", light: "Light theme", dark: "Dark theme" };

  return (
    <div className="flex items-center gap-2">
      <ToggleButtonGroup
        className="glass-control"
        exclusive
        size="small"
        value={language}
        onChange={(_, value) => value && setLanguage(value)}
        aria-label={labels.language}
      >
        <ToggleButton value="es" aria-label="Español">ES</ToggleButton>
        <ToggleButton value="en" aria-label="English">EN</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        className="glass-control"
        exclusive
        size="small"
        value={theme}
        onChange={(_, value) => value && setTheme(value)}
        aria-label={language === "es" ? "Tema visual" : "Visual theme"}
      >
        <ToggleButton value="system" aria-label={labels.system}><Tooltip title={labels.system}><span className="flex"><ComputerRounded fontSize="small" /></span></Tooltip></ToggleButton>
        <ToggleButton value="light" aria-label={labels.light}><Tooltip title={labels.light}><span className="flex"><LightModeRounded fontSize="small" /></span></Tooltip></ToggleButton>
        <ToggleButton value="dark" aria-label={labels.dark}><Tooltip title={labels.dark}><span className="flex"><DarkModeRounded fontSize="small" /></span></Tooltip></ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
