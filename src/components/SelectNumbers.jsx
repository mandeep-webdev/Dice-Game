import React from "react";
// import { useState } from "react";
import styled from "styled-components";
const SelectNumbers = ({ selectedNumber, setSelectedNumber }) => {
  // const [selectedNumber, setSelectedNumber] = useState(null);
  // console.log(selectedNumber);
  const arrNumbers = [1, 2, 3, 4, 5, 6];
  return (
    <NumbersContainer>
      <div>
        {arrNumbers.map((number, id) => (
          <Box
            isSelected={number === selectedNumber}
            onClick={() => setSelectedNumber(number)}
            key={id}
          >
            {number}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumbersContainer>
  );
};

export default SelectNumbers;
const NumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  div {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    margin-top: 12px;
  }
`;
const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => (props.isSelected ? "white" : "black")};
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  cursor: pointer;
`;
