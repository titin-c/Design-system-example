import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SmoothAnchorLink({ to, className = "", children }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Separamos la parte de la ruta y la parte del hash
  const [pathname, hash] = to.split("#");
  const targetHash = hash ? `#${hash}` : "";

  // Componemos la URL destino y la URL actual (sin barra final extra)
  const normalize = (s) => s.replace(/\/$/, "");
  const currentUrl = normalize(location.pathname + location.hash);
  const targetUrl = normalize(pathname + targetHash);

  const isActive = currentUrl === targetUrl;

  const handleClick = (e) => {
    e.preventDefault();

    const isSamePath = location.pathname === pathname;

    if (isSamePath && targetHash) {
      // Buscamos el elemento anclado
      const el = document.getElementById(hash);
      if (el) {
        // Hacemos scroll suave al elemento
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Actualizamos la URL (esto actualiza location.hash y fuerza el rerender)
        navigate(`${pathname}${targetHash}`, { replace: true });
      }
    } else {
      navigate(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={`${className} ${isActive ? "active" : ""}`}>
      {children}
    </a>
  );
}
