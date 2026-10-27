import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>

        <h2>EmmyTech</h2>

        <ul className={menuOpen ? "show" : ""}>

          <li><a href="#Hero">Home</a></li>

          <li><a href="#Features">Features</a></li>

          <li><a href="#Pricing">Pricing</a></li>

          <li><a href="#Contact">Contact</a></li>

        </ul>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </nav>
    </header>
  );
}

export default Navbar;
