import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo.png";

const Header = (props) => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  function changeMode() {
    setIsDarkMode((prevState) => !prevState);
  }

  return (
    <header>
      <nav className={props.darkMode ? "light" : "nav"}>
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
          <li>
            <button
              className="theme-button"
              onClick={() => {
                changeMode();
                props.toggleDarkMode();
              }}
            >
              Switch to {isDarkMode ? " Dark" : " Light"} mode{" "}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
