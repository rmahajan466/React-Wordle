import React, { useEffect, useCallback } from "react";
import AppHeader from "./components/AppHeader";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { useWordleGame } from "./hooks/useWordleGame";
import Popup from "./components/Popup";

const App = () => {
  const {
    solution,
    hint,
    guesses,
    currentRow,
    message,
    gameOver,
    handleKeyPress,
    resetGame, // Add resetGame function from the hook
  } = useWordleGame();

  // Wrap the physical keyboard handler with useCallback
  const handleKeyDown = useCallback(
    (event) => {
      const key = event.key.toLowerCase(); // Normalize to lowercase for consistency

      // Allow only valid keys: alphabets, Enter, and Backspace
      if ((/^[a-z]$/.test(key) || key === "enter" || key === "backspace")) {
        handleKeyPress(key);
      }
    },
    [handleKeyPress] // Stable dependency
  );

  // Add event listener for physical keyboard input
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]); // Dependency on the stable callback

  return (
    <div className="app">
      <div className="game-area">
        <AppHeader />
        <Board guesses={guesses} solution={solution} currentRow={currentRow} />
        <div className="hint">
          <strong>Hint:</strong> {hint}
        </div>
      </div>
      <Keyboard onKeyPress={handleKeyPress} />
      {gameOver && (
        <Popup
          message={message}
          onReplay={resetGame}
        />
      )}
    </div>
  );
};

export default App;