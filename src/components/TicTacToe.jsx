import React, { useEffect, useState } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import Reset from "./Reset";

const Player_X = "X";
const Player_O = "O";

const winningCombinations = [
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

const GameState = {
  PlayerXWins: 0,
  PlayerOWins: 1,
  draw: 2,
  inProgress: 3,
};
const TicTacToe = () => {
  const [tile, setTile] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(Player_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);
  const handleTileClick = (index) => {
    if (gameState !== GameState.inProgress) return;

    if (tile[index] !== null) return;
    const newTiles = [...tile];
    newTiles[index] = playerTurn;
    console.log(index);
    setTile(newTiles);
    if (playerTurn === Player_X) {
      setPlayerTurn(Player_O);
    } else setPlayerTurn(Player_X);
  };

  function checkWinner() {
    for (const { combo, strikeClass } of winningCombinations) {
      const tileValue1 = tile[combo[0]];
      const tileValue2 = tile[combo[1]];
      const tileValue3 = tile[combo[2]];

      if (
        tileValue1 != null &&
        tileValue1 === tileValue2 &&
        tileValue2 === tileValue3
      ) {
        setStrikeClass(strikeClass);
        if (tileValue1 === Player_X) {
          setGameState(GameState.PlayerXWins);
        } else setGameState(GameState.PlayerOWins);
        return;
      }
    }
    // let temp = tile;

    if (tile.every((tile) => tile != null)) {
      setGameState(GameState.draw);
    }
  }
  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTile(Array(9).fill(null));
    setPlayerTurn(Player_X);
    setStrikeClass(null);
  };
  useEffect(() => {
    checkWinner(tile);
  }, [tile]);
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        playerTurn={playerTurn}
        tile={tile}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset={handleReset} />
    </div>
  );
};

export default TicTacToe;
