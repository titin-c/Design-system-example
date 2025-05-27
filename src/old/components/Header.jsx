import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/diseno">Diseño</NavLink>
        <NavLink to="/componentes">Componentes</NavLink>
        <NavLink to="/desarrollo">Desarrollo</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  );
}
