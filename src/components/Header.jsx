import { Link } from "react-router-dom";
import { useActiveLink } from "../hooks/useActiveLink";

export default function Header() {
  return (
    <header className="header">
      <nav className="flex justify-between">
        <span className="logo">Mi Web</span>
        <ul className="header-menu">
          <li>
            <Link to="/" className={useActiveLink("/")}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/diseno" className={useActiveLink("/diseno")}>
              Diseño
            </Link>
          </li>
          <li>
            <Link to="/componentes" className={useActiveLink("/componentes")}>
              Components
            </Link>
          </li>
          <li>
            <Link to="/desarrollo" className={useActiveLink("/desarrollo")}>
              Desarrollo
            </Link>
          </li>
          <li>
            <Link to="/contacto" className={useActiveLink("/contacto")}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

