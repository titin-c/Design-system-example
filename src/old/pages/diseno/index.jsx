import { Routes, Route } from "react-router-dom";
import ColoresDesignContent from "./ColoresContent";
import FuentesDesignContent from "./FuentesContent";
import BordesDesignContent from "./BordesContent";

export default function DisenoPage() {
  return (
    <Routes>
      <Route path="/" element={<ColoresDesignContent />} />
      <Route path="/colores" element={<ColoresDesignContent />} />
      <Route path="/fuentes" element={<FuentesDesignContent />} />
      <Route path="/bordes" element={<BordesDesignContent />} />
    </Routes>
  );
}
