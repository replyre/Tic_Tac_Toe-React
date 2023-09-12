import React from "react";
import Tiles from "./Tiles";
import Score from "./Score";
import Strike from "./Strike";

const Board = ({ tile, onTileClick, playerTurn, strikeClass }) => {
  return (
    <div className="board">
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(0)}
        value={tile[0]}
        className="right-border bottom-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(1)}
        value={tile[1]}
        className="right-border bottom-border left-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(2)}
        value={tile[2]}
        className="left-border bottom-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(3)}
        value={tile[3]}
        className="right-border bottom-border top-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(4)}
        value={tile[4]}
        className="right-border top-border bottom-border left-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(5)}
        value={tile[5]}
        className=" top-border bottom-border left-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(6)}
        value={tile[6]}
        className="right-border top-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(7)}
        value={tile[7]}
        className="right-border top-border  left-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onClick={() => onTileClick(8)}
        value={tile[8]}
        className=" top-border  left-border"
      />
      <Strike strikeClass={strikeClass} />
    </div>
  );
};

export default Board;
