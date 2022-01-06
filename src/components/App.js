import "../App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router";
import Main from "./Main";
import AirBnb from "./AirBnb";
import { Meme } from "./Meme";
import Tenzies from "./Tenzies";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/activity2" element={<AirBnb />} />
        <Route exact path="/meme" element={<Meme />} />
        <Route exact path="/tenzies" element={<Tenzies />} />
      </Routes>
    </div>
  );
}

export default App;
