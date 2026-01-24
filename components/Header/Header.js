import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header>
        <img className="header__logo" alt="logo" src="/images/header/logo.png" />
        <img alt="tree" src="/images/header/tree_up.png" />
      </header>
      <nav className="main-nav">
        <input
          type="checkbox"
          id="menu-toggle"
          className="menu-toggle"
          checked={menuOpen}
          onChange={(e) => setMenuOpen(e.target.checked)}
        />
        <label htmlFor="menu-toggle" className="menu-label">
          <span className="hamburger"></span>
        </label>
        <ul>
          <li><a href="#omnie" onClick={handleLinkClick}><h2>O mnie</h2></a></li>
          <li><a href="#biblioteka" onClick={handleLinkClick}><h2>Tłumaczenia</h2></a></li>
          <li><a href="#kontakt" onClick={handleLinkClick}><h2>Kontakt</h2></a></li>
        </ul>
      </nav>
    </>
  );
}
