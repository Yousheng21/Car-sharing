import React from "react";

const SideBarSection = ({ text, value }) => {
  return (
    <section className="sideBar-info-content">
      <span className="place">{text}</span>
      <span className="dots">......................</span>
      <div className="address">
        <span>{value}</span>
      </div>
    </section>
  );
};

export default SideBarSection;
