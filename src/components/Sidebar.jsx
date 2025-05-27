import { Link, useLocation } from "react-router-dom";
import { useActiveLink } from "../hooks/useActiveLink";
import { useAccordion } from "../hooks/useAccordion";
import sidebarMenu from "../data/sidebarMenu";
import SmoothAnchorLink from "../components/SmoothAnchorLink";

export default function Sidebar({ section }) {
  const location = useLocation();

  const sectionData = sidebarMenu[section];
  if (!sectionData) return null; // Manejo simple si la sección no existe

  const { label, items } = sectionData;

  const currentPath = location.pathname.split("/").filter(Boolean);
  const defaultOpenKey = currentPath[1] || Object.keys(items)[0] || null;
  const { openSection, toggleSection } = useAccordion(defaultOpenKey);

  return (
    <aside className="sidebar">
      <div className="sidebar-fix">
        <h2>{label}</h2>
        <ul className="sidebar-menu">
          {Object.keys(items).map((subSection) => {
            const fullPath = `/${section}/${subSection}`;
            const isActive = useActiveLink(fullPath);
            const isOpen = openSection === subSection;
            const hasSubmenu = items[subSection].length > 0;

            return (
              <li
                key={subSection}
                className={`${isActive} ${isOpen ? "open" : ""} ${hasSubmenu ? "has-submenu" : ""}`}
              >
                <Link
                  to={fullPath}
                  className="sidebar-link"
                  onClick={() => toggleSection(subSection)}
                >
                  {subSection.charAt(0).toUpperCase() + subSection.slice(1)}
                </Link>

                {isOpen && hasSubmenu && (
                  <ul className="submenu">
                  {items[subSection].map((anchor) => {
                    const anchorPath = `${fullPath}#${anchor.slug}`;
                    const activeClass = useActiveLink(anchorPath);
                    return (
                      <li key={anchor.slug} className={activeClass}>
                        <SmoothAnchorLink to={anchorPath} className="submenu-link">
                          {anchor.label}
                        </SmoothAnchorLink>
                      </li>
                    );
                  })}
                </ul>
                
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}