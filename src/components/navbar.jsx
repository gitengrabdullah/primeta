// import React from "react";
// import "./navbar.css";

// export default function Navbar() {
//   return (
//     <header className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="navbar-logo">
//           <span className="logo-mark">V</span>
//           <span className="logo-text">webster</span>
//         </div>

//         {/* Navigation Links */}
//         <nav className="navbar-menu">
//           <a href="#">Home</a>
//           <a href="#">Features</a>
//           <a href="#">Pages</a>
//           <a href="#">Blog</a>
//           <a href="#">Portfolio</a>
//           <a href="#">Shop</a>
//           <a href="#">Shortcodes</a>
//         </nav>

//         {/* Right Icons */}
//         <div className="navbar-actions">
//           <button className="icon-btn">🔍</button>
//         </div>
//       </div>
//     </header>
//   );
// }


import { useEffect, useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-mark">P</span>
          <span className="logo-text">Prime Trading Academy</span>
        </div>

        {/* Desktop Menu */}
        <nav className="navbar-menu">
          <a href="#">Home</a>

          <div className="dropdown">
            <span>Features</span>
            <div className="dropdown-menu">
              <a href="#">Headers</a>
              <a href="#">Sliders</a>
              <a href="#">Animations</a>
            </div>
          </div>

          <div className="dropdown">
            <span>Pages</span>
            <div className="dropdown-menu">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <a href="#">Blog</a>
          <a href="#">Portfolio</a>
          <a href="#">Shop</a>
          <a href="#">Shortcodes</a>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          {/* <button className="icon-btn">🔍</button> */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pages</a>
        <a href="#">Blog</a>
        <a href="#">Portfolio</a>
        <a href="#">Shop</a>
        <a href="#">Shortcodes</a>
      </div>
    </header>
  );
}

