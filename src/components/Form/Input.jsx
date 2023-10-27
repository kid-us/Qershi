import React from "react";

const Input = ({ name, type, value, onChange, error, title, icon }) => {
  return (
    <>
      <div className="input-group mb-3 fw-semibold mt-3">
        <span
          className={`input-group-text p-2 bg-secondary text-light ${
            icon && icon
          }`}
        >
          {icon ? "" : "+251"}
        </span>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          className={`form-control border ${
            error && `border-danger border-2 fs-4`
          }`}
          onChange={onChange}
        />
      </div>
      <div className="small fw-semibold"></div>
    </>
  );
};

export default Input;
