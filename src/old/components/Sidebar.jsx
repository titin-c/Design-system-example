import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Sidebar({ menuItems = [] }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 200) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {menuItems.length > 0 ? (
            menuItems.map((category) => (
              <li key={category.path}>
                <NavLink
                  to={category.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {category.name}
                </NavLink>
                {category.subcategories && category.subcategories.length > 0 && (
                  <ul>
                    {category.subcategories.map((sub) => (
                      <li key={sub.id}>
                        <a
                          href={`#${sub.id}`}
                          className={activeSection === sub.id ? "active" : ""}
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))
          ) : (
            <p>No hay elementos en el menú</p>
          )}
        </ul>
      </nav>
    </aside>
  );
}
