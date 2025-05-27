import { Routes, Route } from "react-router-dom";
import BotonesDevContent from "./BotonesContent";
import InputsDevContent from "./InputsContent";
import NavbarsDevContent from "./NavbarsContent";
import SelectsDevContent from "./SelectsContent";

export default function DesarrolloPage() {
  return (
    
    <Routes>
      <Route path="/" element={<BotonesDevContent />} />
      <Route path="/botones" element={<BotonesDevContent />} />
      <Route path="/inputs" element={<InputsDevContent />} />
      <Route path="/navbars" element={<NavbarsDevContent />} />
      <Route path="/selects" element={<SelectsDevContent />} />
    </Routes>
   
  );
}
