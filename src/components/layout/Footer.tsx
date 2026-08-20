import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <p>
        ©2026 - <Link to="/">PM</Link> -{" "}
        <Link to="/mentions-legales">Mentions légales</Link> - Tous droits
        réservés.
      </p>

      <div>
        <Link to="https://github.com/pmezouar" target="_blank">
          <i className="bi bi-github"></i>
        </Link>
        <Link to="https://linkedin.com/in/pmezouar" target="_blank">
          <i className="bi bi-linkedin"></i>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
