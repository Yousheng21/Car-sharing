import React from "react";

const Input = ({ value, name, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      id={name}
      autoComplete="off"
    />
  );
};

export default Input;
