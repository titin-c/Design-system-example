import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";

const getBackgroundImage = (section) => {
  const backgrounds = {
    diseno: "/bg/diseno-bg.png",
    componentes: "/bg/componentes-bg.png",
    desarrollo: "/bg/desarrollo-bg.png"
  };
  return backgrounds[section] || "/bg/default-bg.png";
};


export default function PageLayout({ section, title }) {
  const location = useLocation();

  // Extraer la categoría actual de la URL
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentCategory = pathSegments.length > 1 ? pathSegments[1] : "";

  const decodedCategory = currentCategory
  ? decodeURIComponent(currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1))
  : "";


  return (
    <div className="flex">
      <Sidebar section={section} />
      <main className={`main-${section} main`} >
        <div className="main-header">
          <div className="main-header-content" style={{
            backgroundImage: `url(${getBackgroundImage(section)})`
          }}>
            <h1 className="h1">
              {title}
              {decodedCategory && ` / ${decodedCategory}`}
            </h1>
          </div>
        </div>

        <div className="main-body">
          <Outlet /> {/* Aquí se renderizan las subpáginas */}
        </div>
      </main>
    </div>
  );
}
