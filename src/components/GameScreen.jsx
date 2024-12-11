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

  const generateRandomNumber = () => {
    if (!selectedNumber) {
      alert("select the number");
      return;
    }
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);

    if (selectedNumber !== null && selectedNumber === randomNumber) {
      setTotalScore((prev) => prev + randomNumber);
    } else {
      setTotalScore((prev) => (prev > 0 ? prev - 2 : 0));
    }
  };
  const handleReset = () => {
    setTotalScore(0);
    setSelectedNumber(null);
    setCurrentDice(1);
  };
  return (
    <>
      <MainContainer>
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
          Reset Score
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
