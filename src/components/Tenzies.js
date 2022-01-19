import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Die from "./Die";
import { nanoid } from "nanoid";

import Confetti from "react-confetti";
const Tenzies = () => {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  console.log(tenzies);
  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      alert("You won!");
      return <Confetti />;
    }
  }, [dice]);

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  }
  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDice();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }
  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <div>
      <Header />

      <main className="tenzies-main">
        <h1 className="tenzies-heading">TENZIES</h1>
        {tenzies && <Confetti />}
        <div className="dice-container">{diceElements}</div>
        <button className="roll-dice-button" onClick={rollDice}>
          {tenzies ? "Reset Game" : "Roll Dice"}
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Tenzies;
