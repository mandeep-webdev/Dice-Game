import React from "react";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import SelectNumbers from "./SelectNumbers";
import RollDice from "./RollDice";
const GameScreen = () => {
  return (
    <MainContainer>
      <div className="choose-numbers">
        <TotalScore />
        <SelectNumbers />
      </div>
      <RollDice />
    </MainContainer>
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
