import React from "react";

const Button = ({ name }) => {
  return (
    <button type="submit" className="form-btn py-2 mt-3 fw-semibold">
      {name} &nbsp;
    </button>
  );
};

export default Button;
