import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import data from "../assets/data";
import Card from "./Card";
import Hero from "./Hero";

const AirBnb = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <Header />
      <section className="cards-list">{cards}</section>
      <Hero/>
      <Footer />
    </div>
  );
};

export default AirBnb;
