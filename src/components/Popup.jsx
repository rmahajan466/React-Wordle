import React from "react";

const Popup = ({ message, onReplay }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <p className="popup-message">{message}</p>
        <button className="popup-button" onClick={onReplay}>
          Replay
        </button>
      </div>
    </div>
  );
};

export default Popup;