import React from "react";

const Tile = ({ letter, status }) => {
  return <div className={`tile ${status}`}>{letter}</div>;
};

export default Tile;