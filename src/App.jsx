import React, { useState } from "react";
import styled from "styled-components";
import GameScreen from "./components/GameScreen";
import StartGame from "./components/StartGame";
const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(true);
  const toggleScreen = () => {
    setIsGameStarted(true);
  };
  return (
    <div>
      {isGameStarted ? (
        <GameScreen />
      ) : (
        <StartGame toggleScreen={toggleScreen} />
      )}
    </div>
  );
};

export default App;
