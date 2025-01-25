import React from "react";
import Row from "./Row";

const Board = ({ guesses, solution, currentRow }) => {
  return (
    <div className="board">
      {guesses.map((guess, rowIndex) => (
        <Row
          key={rowIndex}
          guess={guess}
          solution={solution}
          isCurrentRow={rowIndex === currentRow} // Highlight current row
        />
      ))}
    </div>
  );
};

export default Board;