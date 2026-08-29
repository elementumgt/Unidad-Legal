import { useContext } from "react";
import { PreferencesContext } from "../context/PreferencesContext.js";

export function usePreferences() {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error("usePreferences debe utilizarse dentro de PreferencesProvider");
  return value;
}
