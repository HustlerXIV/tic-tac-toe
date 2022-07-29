import React, { useState } from "react";

import {
  Container,
  Td,
  BgPage,
  Text,
  Player,
  RestartButton,
  Alert,
  CoverBg,
} from "./style";
const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const checkForWwinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          // nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };
  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("Already Clicked");
      return;
    }
    let squares = [...cells];
    if (turn === "X") {
      squares[num] = "X";
      setTurn("O");
    } else {
      squares[num] = "O";
      setTurn("X");
    }

    checkForWwinner(squares);
    setCells(squares);
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };

  const Cell = ({ num }) => {
    return (
      <Td onClick={() => handleClick(num)}>
        <Player>{cells[num]}</Player>
      </Td>
    );
  };
  return (
    <BgPage>
      <Container>
        <Text style={{ marginBottom: "20px" }}>Turn: {turn}</Text>
        <table>
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>
            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>
            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
        <RestartButton
          style={{ marginTop: "20px" }}
          onClick={() => handleRestart()}
        >
          Restart
        </RestartButton>
        {winner && (
          <>
            <CoverBg />
            <Alert>
              <Text>{winner} is the winner !!</Text>
              <RestartButton
                style={{ marginTop: "20px" }}
                onClick={() => handleRestart()}
              >
                Play Again!!
              </RestartButton>
            </Alert>
          </>
        )}
      </Container>
    </BgPage>
  );
};

export default TicTacToe;
