import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <button onClick={onClick} type="submit" className="form-btn py-2 mt-3">
      {name} &nbsp;
    </button>
  );
};

export default Button;
