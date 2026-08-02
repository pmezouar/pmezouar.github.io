import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./button.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button for open responsive nav */}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="btn-responsive-nav">
          <i className="bi bi-list"></i>
        </button>
      )}

      <nav className={isOpen ? "open" : ""}>
        {/* Button for close responsive nav */}
        <button onClick={() => setIsOpen(false)} className="btn-responsive-nav">
          <i className="bi bi-x-circle"></i>
        </button>

        {/* Nav */}
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>

        {/* <NavLink
          to="/portfolio"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Portfolio
        </NavLink> */}

        <NavLink
          to="/experiences"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Expériences
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `btn btn-primary ${isActive ? "active" : ""}`
          }
        >
          Contact
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
