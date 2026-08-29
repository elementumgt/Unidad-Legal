import GavelRounded from "@mui/icons-material/GavelRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
import MenuBookRounded from "@mui/icons-material/MenuBookRounded";
import PrivacyTipRounded from "@mui/icons-material/PrivacyTipRounded";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { usePreferences } from "../hooks/usePreferences.js";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { legalPaths } from "../lib/paths.js";

const primaryItems = [
  { key: "home", icon: HomeRounded, label: { es: "Inicio", en: "Home" } },
  { key: "docs", icon: MenuBookRounded, label: { es: "Documentación", en: "Documentation" } },
  { key: "privacy", icon: PrivacyTipRounded, label: { es: "Privacidad", en: "Privacy" } },
  { key: "terms", icon: GavelRounded, label: { es: "Condiciones", en: "Terms" } },
];

function SidebarContent({ collapsed, navigationGroups, onNavigate, page }) {
  const { language } = usePreferences();
  const paths = legalPaths();
  const internalItems = navigationGroups.flatMap((group) => group.items);
  const activeId = useActiveSection(internalItems.map((item) => item.id));

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="sidebar-scroll min-h-0 flex-1 overflow-y-auto px-2 py-3">
        <List disablePadding aria-label={language === "es" ? "Navegación principal" : "Primary navigation"}>
          {primaryItems.map((item) => {
            const Icon = item.icon;
            const button = (
              <ListItemButton
                component={NavLink}
                to={paths[item.key]}
                selected={page === item.key}
                onClick={onNavigate}
                className="!mb-1 !min-h-11 !rounded-lg !px-3"
              >
                <ListItemIcon className="!min-w-10"><Icon color={page === item.key ? "primary" : "inherit"} /></ListItemIcon>
                {!collapsed && <ListItemText primary={item.label[language]} primaryTypographyProps={{ fontSize: 14, fontWeight: page === item.key ? 750 : 550 }} />}
              </ListItemButton>
            );
            return collapsed ? <Tooltip key={item.key} placement="right" title={item.label[language]}>{button}</Tooltip> : <Box key={item.key}>{button}</Box>;
          })}
        </List>

        {!collapsed && navigationGroups.length > 0 && (
          <>
            <Divider className="!my-4" />
            <nav aria-label={language === "es" ? "Índice de la página" : "Page index"}>
              {navigationGroups.map((group) => (
                <div className="mb-5" key={group.id}>
                  <Typography color="primary" className="!mb-1 !px-3 !text-[11px] !font-black !uppercase !tracking-[0.14em]">
                    {group.label[language]}
                  </Typography>
                  <List dense disablePadding>
                    {group.items.map((item) => (
                      <ListItemButton
                        component="a"
                        href={`#${item.id}`}
                        selected={activeId === item.id}
                        aria-current={activeId === item.id ? "location" : undefined}
                        onClick={onNavigate}
                        className="!mb-0.5 !rounded-lg !px-3 !py-1.5"
                        key={item.id}
                        sx={{ "&.Mui-selected": { borderLeft: "3px solid", borderColor: "primary.main" } }}
                      >
                        <ListItemText primary={item.label[language]} primaryTypographyProps={{ fontSize: 12.5, lineHeight: 1.35, fontWeight: activeId === item.id ? 750 : 500 }} />
                      </ListItemButton>
                    ))}
                  </List>
                </div>
              ))}
            </nav>
          </>
        )}
      </div>
    </div>
  );
}

export default function AppSidebar({ collapsed, mobileOpen, navigationGroups, onCloseMobile, page }) {
  return (
    <>
      <aside className={`glass-card hidden h-full shrink-0 overflow-hidden !rounded-none border-y-0 border-l-0 transition-[width] duration-200 md:block ${collapsed ? "w-[72px]" : "w-[280px]"}`}>
        <SidebarContent collapsed={collapsed} navigationGroups={navigationGroups} page={page} />
      </aside>
      <Drawer
        open={mobileOpen}
        onClose={onCloseMobile}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: "block", md: "none" }, "& .MuiDrawer-paper": { width: 300, backgroundImage: "var(--glass-nav)", backdropFilter: "blur(16px)" } }}
      >
        <SidebarContent collapsed={false} navigationGroups={navigationGroups} onNavigate={onCloseMobile} page={page} />
      </Drawer>
    </>
  );
}
