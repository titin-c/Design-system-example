import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./hooks/scrollToTop";
import Layout from "./layouts/Layout";
import Home from "./pages/HomePage";
import Contacto from "./pages/ContactoPage";

// Páginas de Diseño
import DisenoPage from "./pages/diseno/DisenoPage";
import LayoutPage from "./pages/diseno/LayoutPage";
import ColoresPage from "./pages/diseno/ColoresPage";
import IconsPage from "./pages/diseno/IconsPage";
import TipographyPage from "./pages/diseno/TipographyPage";
import SpacesPage from "./pages/diseno/SpacesPage";
import BordersPage from "./pages/diseno/BordersPage";
import ShadowsPage from "./pages/diseno/ShadowsPage";

// Páginas de Components
import ComponentsPage from "./pages/componentes/ComponentsPage";
import BotonesCompoPage from "./pages/componentes/BotonesCompoPage";
import NavigationCompoPage from "./pages/componentes/NavigationCompoPage";
import InputsCompoPage from "./pages/componentes/InputsCompoPage";
import SelectsCompoPage from "./pages/componentes/SelectsCompoPage";

// Páginas de Desarrollo
import DesarrolloPage from "./pages/desarrollo/DesarrolloPage";
import BotonesDevPage from "./pages/desarrollo/BotonesDevPage";
import NavbarsDevPage from "./pages/desarrollo/NavbarDevPage";
import InputsDevPage from "./pages/desarrollo/InputsDevPage";
import SelectsDevPage from "./pages/desarrollo/SelectsDevPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Sección Diseño */}
          <Route path="/diseno" element={<DisenoPage />}>
            <Route index element={<ColoresPage />} /> {/* Página por defecto */}
            <Route path="colores" element={<ColoresPage />} />
            <Route path="layouts" element={<LayoutPage />} />
            <Route path="iconos" element={<IconsPage />} />
            <Route path="tipografia" element={<TipographyPage />} />
            <Route path="espacios" element={<SpacesPage />} />
            <Route path="bordes" element={<BordersPage />} />
            <Route path="sombras" element={<ShadowsPage />} />
          </Route>

          {/* Sección Components */}
          <Route path="/componentes" element={<ComponentsPage />}>
            <Route index element={<BotonesCompoPage />} />
            <Route path="botones" element={<BotonesCompoPage />} />
            <Route path="Navegación" element={<NavigationCompoPage />} />
            <Route path="inputs" element={<InputsCompoPage />} />
            <Route path="selects" element={<SelectsCompoPage />} />
          </Route>

          {/* Sección Desarrollo */}
          <Route path="/desarrollo" element={<DesarrolloPage />}>
            <Route index element={<BotonesDevPage />} />
            <Route path="botones" element={<BotonesDevPage />} />
            <Route path="navbars" element={<NavbarsDevPage />} />
            <Route path="inputs" element={<InputsDevPage />} />
            <Route path="selects" element={<SelectsDevPage />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

