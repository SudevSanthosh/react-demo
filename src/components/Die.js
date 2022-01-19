import React from "react";

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#EA2027" : "white",
    color: props.isHeld ? "white" : "black",
  };
  return (
    <div className="die-face" onClick={props.holdDice} style={styles}>
      <h2>{props.value}</h2>
    </div>
  );
};

export default Die;
