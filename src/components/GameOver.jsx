import React from "react";
import ConfettiExplosion from "react-confetti-explosion";

const GameOver = ({ gameState }) => {
  switch (gameState) {
    case 3:
      return <></>;
    case 1:
      return (
        <>
          <ConfettiExplosion
            particleCount={450}
            force={0.8}
            duration={3000}
            width={1600}
          />
          <div className="game-over orange ">O wins</div>
        </>
      );
    case 0:
      return (
        <div className="game-over blue">
          <ConfettiExplosion
            particleCount={450}
            force={0.8}
            duration={3000}
            width={1600}
          />
          X wins
        </div>
      );

    case 2:
      return <div className="game-over red"> Draw</div>;
  }
};

export default GameOver;
