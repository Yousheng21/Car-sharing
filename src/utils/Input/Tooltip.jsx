import React from "react";

const Tooltip = ({ value, click, text }) => {
  return (
    <button type="button" onClick={click} value={value}>
      {text}
    </button>
  );
};

export default Tooltip;
