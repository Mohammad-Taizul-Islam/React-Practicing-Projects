import React, { useState } from "react";

const PreserveAndResetingState = () => {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);
  let className = "counter";
  if (hover) {
    className += " hover";
  }
  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>add one</button>
    </div>
  );
};

export default PreserveAndResetingState;
