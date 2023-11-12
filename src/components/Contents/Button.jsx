import React from "react";

const Button = ({ name, style }) => {
  return (
    <>
      <button className={`${style} me-5`}>{name}</button>
    </>
  );
};

export default Button;
