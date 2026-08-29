import { useState } from "react";
import AppSidebar from "./AppSidebar.jsx";
import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";

export default function SiteLayout({ children, navigationGroups = [], page }) {
  const [collapsed, setCollapsed] = useState(() => localStorage.getItem("unidad-sidebar-collapsed") === "true");
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleCollapsed() {
    setCollapsed((current) => {
      const next = !current;
      localStorage.setItem("unidad-sidebar-collapsed", String(next));
      return next;
    });
  }

  return (
    <div className="flex h-screen min-h-[520px] flex-col overflow-hidden">
      <div className="page-background" aria-hidden="true" />
      <SiteHeader collapsed={collapsed} onOpenMobile={() => setMobileOpen(true)} onToggleCollapsed={toggleCollapsed} page={page} />
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <AppSidebar collapsed={collapsed} mobileOpen={mobileOpen} navigationGroups={navigationGroups} onCloseMobile={() => setMobileOpen(false)} page={page} />
        <main id="main-content" className="content-scroll min-w-0 flex-1 overflow-y-auto" tabIndex="-1">{children}</main>
      </div>
      <SiteFooter />
    </div>
  );
}
