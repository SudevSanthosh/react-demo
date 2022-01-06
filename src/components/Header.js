import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo.png";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <img src={Logo} className="nav-logo" alt="website-logo" />
        <h1 className="welcome">Company Name</h1>
        <ul className="nav-items">
          <li>
            <Link to="/" className="nav-links">
              Info
            </Link>
          </li>
          <li>
            <Link to="/Activity2" className="nav-links">
              AirBnb
            </Link>
          </li>
          <li>
            <Link to="/meme" className="nav-links">
              MemeGenerator
            </Link>
          </li>
          <li>
            <Link to="/tenzies" className="nav-links">
              Tenzies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
