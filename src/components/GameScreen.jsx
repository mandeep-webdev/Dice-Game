import React, { useState } from "react";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import SelectNumbers from "./SelectNumbers";
import RollDice from "./RollDice";
import GameRules from "./GameRules";
const GameScreen = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const [message, setMessage] = useState(null);
  const generateRandomNumber = () => {
    if (!selectedNumber) {
      alert("select the number");
      return;
    }
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);

    if (selectedNumber !== null && selectedNumber === randomNumber) {
      setMessage("🎉🎊 Congrats! Numbers are matched! 🎉✨");
      setTotalScore((prev) => prev + randomNumber);
    } else {
      setMessage("");
      setTotalScore((prev) => (prev > 1 ? prev - 2 : 0));
    }
    setSelectedNumber(null);
  };
  const handleReset = () => {
    setTotalScore(0);
    setMessage("");
    setSelectedNumber(null);
    setCurrentDice(1);
  };
  return (
    <>
      <MainContainer>
        <h3>{message}</h3>
        <div className="choose-numbers">
          <TotalScore totalScore={totalScore} />
          <SelectNumbers
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
        <RollDice
          currentDice={currentDice}
          generateRandomNumber={generateRandomNumber}
        />
      </MainContainer>
      <ButtonsContainer>
        <button className="reset" onClick={handleReset}>
          Reset Game
        </button>
        <button onClick={() => setShowRules(!showRules)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </button>
      </ButtonsContainer>
      {showRules && (
        <RulesContainer>
          <GameRules />
        </RulesContainer>
      )}
    </>
  );
};

export default GameScreen;

const MainContainer = styled.div`
  .choose-numbers {
    display: flex;
    justify-content: space-around;
    padding: 70px;
  }
  h3 {
    text-align: center;
    margin-top: 20px;
    color: green;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    background-color: black;
    color: white;
    border-radius: 5px;
    width: 220px;
    text-align: center;
    padding: 10px 18px;
    border: 1px solid black;
    font-size: 16px;
    transition: 0.5s background ease-in;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
      transition: 0.3s background ease-in;
    }
  }
  .reset {
    background-color: white;
    color: black;
    &:hover {
      background-color: #797474;
      color: white;
      border: 1px solid transparent;
      transition: 0.3s background ease-in;
    }
  }
`;
const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
