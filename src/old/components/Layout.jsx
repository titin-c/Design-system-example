import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  const menus = {
    "/diseno": [
      { name: "Colores", path: "/diseno", subcategories: [{ name: "Paleta", id: "paleta" }, { name: "Ejemplos", id: "ejemplos" }] },
      { name: "Colores", path: "/diseno/colores", subcategories: [{ name: "Paleta", id: "paleta" }, { name: "Ejemplos", id: "ejemplos" }] },
      { name: "Fuentes", path: "/diseno/fuentes", subcategories: [{ name: "Títulos", id: "titulos" }, { name: "Párrafos", id: "parrafos" }] },
      { name: "Bordes", path: "/diseno/bordes", subcategories: [{ name: "Redondeados", id: "redondeados" }, { name: "Sombreados", id: "sombreados" }] },
    ],
    "/componentes": [
      { name: "Botones", path: "/componentes/botones", subcategories: [{ name: "Primarios", id: "primarios" }, { name: "Secundarios", id: "secundarios" }] },
      { name: "Navbars", path: "/componentes/navbars", subcategories: [{ name: "Fijos", id: "fijos" }, { name: "Flotantes", id: "flotantes" }] },
    ],
    "/desarrollo": [
      { name: "Inputs", path: "/desarrollo/inputs", subcategories: [{ name: "Texto", id: "texto" }, { name: "Checkbox", id: "checkbox" }] },
      { name: "Selects", path: "/desarrollo/selects", subcategories: [{ name: "Sencillo", id: "sencillo" }, { name: "Múltiple", id: "multiple" }] },
    ],
  };

  // Buscar la clave del menú que coincide con la URL
  const currentPath = Object.keys(menus).find((path) => location.pathname.startsWith(path));

  // Si no coincide ninguna ruta, pasamos un array vacío
  const menuItems = currentPath ? menus[currentPath] : [];

  return (
    <div className="layout">
      <Header />
      <div className="main-container">
        <Sidebar menuItems={menuItems} />
        <main className="content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
