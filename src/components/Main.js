import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

const Main = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
    console.log("toggle dark mode");
  }
  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Main;
