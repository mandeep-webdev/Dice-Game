import React from "react";
import styled from "styled-components";
const StartGame = ({ toggleScreen }) => {
  return (
    <Container>
      <div>
        <img src="../../images/dice.png" alt="dice-img" />
      </div>

      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggleScreen}>Play now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
const Container = styled.div`
  display: flex;
  max-width: 1182px;
  height: 100vh;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  .content {
    h1 {
      font-size: 96px;
    }
  }
`;
const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 5px;
  min-width: 220px;
  text-align: center;
  padding: 10px 18px;
  border: 1px solid transparent;
  font-size: 16px;
  transition: 0.5s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
