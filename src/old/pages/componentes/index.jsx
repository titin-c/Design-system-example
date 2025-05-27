import { Routes, Route } from "react-router-dom";
import BotonesCompoContent from "./BotonesContent";
import InputsCompoContent from "./InputsContent";
import NavbarsCompoContent from "./NavbarsContent";
import SelectsCompoContent from "./SelectsContent";

export default function ComponentesPage() {
  return (
    <Routes>
      <Route path="/" element={<BotonesCompoContent />} />
      <Route path="/botones" element={<BotonesCompoContent />} />
      <Route path="/inputs" element={<InputsCompoContent />} />
      <Route path="/navbars" element={<NavbarsCompoContent />} />
      <Route path="/selects" element={<SelectsCompoContent />} />
    </Routes>
  );
}