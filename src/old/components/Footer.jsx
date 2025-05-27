import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </footer>
  );
}
