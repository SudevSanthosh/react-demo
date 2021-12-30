import React from "react";
import Header from "./Header";
import officer from "../assets/officer.jpg";
import star from "../assets/star.png";
import Footer from "./Footer";

const Activity2 = () => {
  return (
    <div>
      <Header />
      <div className="card">
        <img src={officer} className="officer-photo" alt="police" />
        <div className="card--stats">
          <img src={star} alt="star" className="card-star" />
          <span> 5.0</span>
          <span>(6) • </span>
          <span>USA</span>
        </div>
        <h3>Life Lessons with Katie Zaferes</h3>
        <p>From $136 / person</p>
      </div>
      <Footer />
    </div>
  );
};

export default Activity2;
