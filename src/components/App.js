import "../App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router";
import Activity2 from "./AirBnb";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/activity2" element={<Activity2 />} />
      </Routes>
    </div>
  );
}

export default App;
