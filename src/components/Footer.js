import React from "react";

const Footer = (props) => {
  return (
    <footer className={props.darkMode ? "footer" : "footer-light"}>
      <small>© 2021 Footer goes here. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
