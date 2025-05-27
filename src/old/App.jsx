import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";

// Importar páginas principales
import DisenoPage from "./pages/diseno";
import ComponentesPage from "./pages/componentes";
import DesarrolloPage from "./pages/desarrollo";

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <div className="main-container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacto" element={<Contacto />} />

              <Route path="/diseno/*" element={<DisenoPage />} />
              <Route path="/componentes/*" element={<ComponentesPage />} />
              <Route path="/desarrollo/*" element={<DesarrolloPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
