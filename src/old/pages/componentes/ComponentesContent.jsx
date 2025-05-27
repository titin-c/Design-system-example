import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function Componentes() {
  return (
    <div className="flex flex-1">
      <Sidebar section="componentes" />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Componentes</h1>
        <Outlet /> {/* Aquí se renderizan las subpáginas */}
      </main>
    </div>
  );
}

