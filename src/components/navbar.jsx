import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">

      {/* TOP BAR */}
      <div className="navbar-top">
        <div className="navbar-top-left">
          <span>☎ +91 93207 09951</span>
          <span>98206 64388</span>
          <span>darshan@dnclogisticsllp.com</span>
          <span>sales@dnclogisticsllp.com</span>
        </div>

        <div className="navbar-social">
          <a href="#">f</a>
          <a href="#">𝕏</a>
          <a href="#">in</a>
          <a href="#">◎</a>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="navbar-main">

        {/* LOGO */}
        <a href="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/images/logo1.png"
            alt="DNC Logistics"
            className="navbar-logo-image"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="navbar-links">

          <a
            href="/"
            className={currentPath === "/" ? "active" : ""}
          >
            Home
          </a>

          <a
            href="/about"
            className={currentPath === "/about" ? "active" : ""}
          >
            About
          </a>

          <a
            href="/services"
            className={currentPath === "/services" ? "active" : ""}
          >
            Services
          </a>

          <a
            href="/case-study"
            className={currentPath === "/case-study" ? "active" : ""}
          >
            Case Study
          </a>

          <a
            href="/contact"
            className={currentPath === "/contact" ? "active" : ""}
          >
            Contact
          </a>

          <a href="/contact" className="quote-btn">
            Get a Quote
            <span>→</span>
          </a>

        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <a
          href="/"
          className={currentPath === "/" ? "active" : ""}
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="/about"
          className={currentPath === "/about" ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="/services"
          className={currentPath === "/services" ? "active" : ""}
          onClick={closeMenu}
        >
          Services
        </a>

        <a
          href="/case-study"
          className={currentPath === "/case-study" ? "active" : ""}
          onClick={closeMenu}
        >
          Case Study
        </a>

        <a
          href="/contact"
          className={currentPath === "/contact" ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </a>

        <a
          href="/contact"
          className="mobile-quote"
          onClick={closeMenu}
        >
          Get a Quote
          <span>→</span>
        </a>

      </div>

    </header>
  );
}

export default Navbar;