import { useState } from "react";
import { Words as WORDS } from "../data/wordList";

export const useWordleGame = () => {
  const [wordObject, setWordObject] = useState(
    WORDS[Math.floor(Math.random() * WORDS.length)]
  );
  const [solution, setSolution] = useState(wordObject.word); // Word to guess
  const [hint, setHint] = useState(wordObject.hint); // Hint for the word
  const [guesses, setGuesses] = useState(["", "", "", "", "", ""]); // 6 attempts
  const [currentRow, setCurrentRow] = useState(0);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const handleKeyPress = (key) => {
    if (gameOver) return; // Ignore input if the game is over

    const normalizedKey = key.toLowerCase();

    // Handle "Enter" key
    if (normalizedKey === "enter") {
      if (guesses[currentRow].length !== 5) {
        setMessage("Not enough letters!");
        return;
      }

      if (guesses[currentRow] === solution) {
        setMessage("You guessed it! 🎉");
        setGameOver(true);
        return;
      }

      if (currentRow === 5) {
        setMessage(`Game over! The word was ${solution.toUpperCase()}.`);
        setGameOver(true);
        return;
      }

      setCurrentRow((prev) => prev + 1);
      setMessage("");
      return;
    }

    // Handle "Backspace" key
    if (normalizedKey === "backspace") {
      setGuesses((prevGuesses) => {
        const newGuesses = [...prevGuesses];
        newGuesses[currentRow] = newGuesses[currentRow].slice(0, -1);
        return newGuesses;
      });
      return;
    }

    // Handle alphabet keys
    if (/^[a-z]$/.test(normalizedKey)) {
      setGuesses((prevGuesses) => {
        const newGuesses = [...prevGuesses];
        if (newGuesses[currentRow].length < 5) {
          newGuesses[currentRow] += normalizedKey;
        }
        return newGuesses;
      });
    }
  };

  // Reset the game state
  const resetGame = () => {
    const newWordObject = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWordObject(newWordObject);
    setSolution(newWordObject.word);
    setHint(newWordObject.hint);
    setGuesses(["", "", "", "", "", ""]);
    setCurrentRow(0);
    setMessage("");
    setGameOver(false);
  };

  return {
    solution,
    hint,
    guesses,
    currentRow,
    message,
    gameOver,
    handleKeyPress,
    resetGame,
  };
};