import React from "react";
import styled from "styled-components";
const GameRules = () => {
  return (
    <Container>
      <h3>How to play dice game</h3>
      <div className="rules">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </Container>
  );
};

export default GameRules;

const Container = styled.div`
  max-width: 794px;
  background-color: #fbf1f1;
  padding: 20px;
  gap: 24px;
  margin: 24px;
  h3 {
    font-size: 24px;
    weight: 700;
    line-height: 36px;
    margin-bottom: 24px;
  }
  p {
    gap: 24px;
  }
`;
