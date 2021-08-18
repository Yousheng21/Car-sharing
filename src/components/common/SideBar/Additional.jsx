import React from "react";

const Additional = ({ arr }) => {
  return Object.keys(arr).map((item) =>
    arr[item].value ? (
      <section key={arr[item].text} className="sideBar-info-content">
        <span className="place">{arr[item].text}</span>
        <span className="dots">......................</span>
        <div className="address">
          <span>Да</span>
        </div>
      </section>
    ) : (
      ""
    )
  );
};

export default Additional;
