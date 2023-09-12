import React from "react";

const Reset = ({ gameState, onReset }) => {
  //   console.log(gameState);
  if (gameState === 3) return;
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {" "}
      <button className="reset-button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default Reset;
