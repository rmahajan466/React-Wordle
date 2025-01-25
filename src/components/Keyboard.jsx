import React, { useState } from "react";

const Keyboard = ({ onKeyPress }) => {
  const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const [activeKey, setActiveKey] = useState(null); // For optional key highlight

  const handleClick = (key) => {
    setActiveKey(key); // Temporarily highlight the pressed key
    onKeyPress(key);

    // Remove highlight after a short delay
    setTimeout(() => setActiveKey(null), 150);
  };

  return (
    <div className="keyboard">
      {rows.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.split("").map((key) => (
            <button
              key={key}
              className={`key ${activeKey === key ? "active" : ""}`}
              onClick={() => handleClick(key)}
            >
              {key}
            </button>
          ))}
          {index === 2 && (
            <>
              <button
                className={`key special-key ${
                  activeKey === "Enter" ? "active" : ""
                }`}
                onClick={() => handleClick("Enter")}
              >
                Enter
              </button>
              <button
                className={`key special-key ${
                  activeKey === "Backspace" ? "active" : ""
                }`}
                onClick={() => handleClick("Backspace")}
              >
                Backspace
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;