import React from "react";

const Additional = ({ arr }) => {
  return arr.length
    ? arr.map((item) => (
        <section key={item.text} className="sideBar-info-content">
          <span className="place">{item.text}</span>
          <span className="dots">......................</span>
          <div className="address">
            <span>{item.value}</span>
          </div>
        </section>
      ))
    : "";
};

export default Additional;
