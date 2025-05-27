import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";

// Páginas de Diseño
import Diseño from "./pages/diseño/Diseño";
import Colores from "./pages/diseño/Colores";
import Fuentes from "./pages/diseño/Fuentes";
import Bordes from "./pages/diseño/Bordes";

// Páginas de Components
import Componentes from "./pages/componentes/Componentes";
import BotonesComponent from "./pages/componentes/Botones";
import NavbarsComponent from "./pages/componentes/Navbars";
import InputsComponent from "./pages/componentes/Inputs";
import SelectsComponent from "./pages/componentes/Selects"; 

// Páginas de Desarrollo
import Desarrollo from "./pages/desarrollo/Desarrollo";
import BotonesDev from "./pages/desarrollo/Botones";
import NavbarsDev from "./pages/desarrollo/Navbars";
import InputsDev from "./pages/desarrollo/Inputs";
import SelectsDev from "./pages/desarrollo/Selects";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Sección Diseño */}
          <Route path="/diseño" element={<Diseño />}>
            <Route index element={<Colores />} /> {/* Página por defecto */}
            <Route path="colores" element={<Colores />} />
            <Route path="fuentes" element={<Fuentes />} />
            <Route path="bordes" element={<Bordes />} />
          </Route>

          {/* Sección Components */}
          <Route path="/componentes" element={<Componentes />}>
            <Route index element={<BotonesComponent />} />
            <Route path="botones" element={<BotonesComponent />} />
            <Route path="navbars" element={<NavbarsComponent />} />
            <Route path="inputs" element={<InputsComponent />} />
            <Route path="selects" element={<SelectsComponent />} />
          </Route>

          {/* Sección Desarrollo */}
          <Route path="/desarrollo" element={<Desarrollo />}>
            <Route index element={<BotonesDev />} />
            <Route path="botones" element={<BotonesDev />} />
            <Route path="navbars" element={<NavbarsDev />} />
            <Route path="inputs" element={<InputsDev />} />
            <Route path="selects" element={<SelectsDev />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

