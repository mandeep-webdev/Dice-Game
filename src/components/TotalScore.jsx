import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const TotalScore = ({ totalScore }) => {
  // useEffect(() => {
  //   if (selectedNumber !== null && selectedNumber === currentDice) {
  //     setTotalScore((prev) => prev + currentDice);
  //   } else {
  //     setTotalScore((prev) => (prev !== 0 ? currentDice - prev : 0));
  //   }
  // }, [totalScore]);
  return (
    <ScoreContainer>
      <h1>{totalScore}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 100px;
  }

  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
