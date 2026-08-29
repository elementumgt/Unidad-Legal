import { CircularProgress } from "@mui/material";
import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { usePreferences } from "./hooks/usePreferences.js";
import { pageFromPath } from "./lib/paths.js";

const HomePage = lazy(() => import("./inicio/pages/HomePage.jsx"));
const DocsPage = lazy(() => import("./docs/pages/DocsPage.jsx"));
const PrivacyPage = lazy(() => import("./privacidad/pages/PrivacyPage.jsx"));
const TermsPage = lazy(() => import("./terminos/pages/TermsPage.jsx"));

const titles = {
  home: { es: "Centro legal · Unidad", en: "Legal center · Unidad" },
  docs: { es: "Documentación · Unidad", en: "Documentation · Unidad" },
  privacy: { es: "Política de Privacidad · Unidad", en: "Privacy Policy · Unidad" },
  terms: { es: "Condiciones del Servicio · Unidad", en: "Terms of Service · Unidad" },
};

export default function App() {
  const { language } = usePreferences();
  const { pathname } = useLocation();
  const page = pageFromPath(pathname);

  useEffect(() => {
    document.title = (titles[page] ?? titles.home)[language];
  }, [language, page]);

  useEffect(() => {
    document.getElementById("main-content")?.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><CircularProgress aria-label={language === "es" ? "Cargando" : "Loading"} /></div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs/" element={<DocsPage />} />
        <Route path="/privacidad/" element={<PrivacyPage />} />
        <Route path="/terminos/" element={<TermsPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Suspense>
  );
}
