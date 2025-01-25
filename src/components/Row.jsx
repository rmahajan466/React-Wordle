import React from "react";
import Tile from "./Tile";
import { evaluateGuess } from "../utils/wordHelpers";

const Row = ({ guess, solution, isCurrentRow }) => {
  const evaluation = evaluateGuess(guess, solution);

  return (
    <div className={`row ${isCurrentRow ? "current" : ""}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Tile key={index} letter={guess[index]} status={evaluation[index]} />
      ))}
    </div>
  );
};

export default Row;