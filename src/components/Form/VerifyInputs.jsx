import React from "react";

const VerifyInputs = ({ onChange, value, name, error }) => {
  return (
    <>
      <input
        type="text"
        name={name}
        maxLength={1}
        value={value}
        onChange={onChange}
        className={`form-control text-center fs-5 fw-semibold me-2 rounded py-4 ${
          error ? `border border-danger border-3` : ``
        }`}
      />
    </>
  );
};

export default VerifyInputs;
