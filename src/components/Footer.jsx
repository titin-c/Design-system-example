import { Link } from "react-router-dom";
import { useActiveLink } from "../hooks/useActiveLink";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-menu flex justify-center gap-4">
        <Link to="/" className={useActiveLink("/")}>
          Inicio
        </Link>
        <Link to="/diseno" className={useActiveLink("/diseno")}>
          Diseño
        </Link>
        <Link to="/componentes" className={useActiveLink("/componentes")}>
          Components
        </Link>
        <Link to="/desarrollo" className={useActiveLink("/desarrollo")}>
          Desarrollo
        </Link>
        <Link to="/contacto" className={useActiveLink("/contacto")}>
          Contacto
        </Link>
      </nav>
    </footer>
  );
}
