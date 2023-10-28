import React from "react";
import "../Pages/dashboard.css";
import bg from "../../assets/bg.jpg";

const Transfer = () => {
  return (
    <>
      <div className="transfer-wrapper bg p-3">
        <p className="label small">Quick Transfer</p>
        <div className="mt-4">
          <img
            src={bg}
            className="img-fluid contact-badge"
            width={"45px"}
            alt=""
          />
          <img
            src={bg}
            className="img-fluid contact-badge mx-4"
            width={"45px"}
            alt=""
          />
          <img
            src={bg}
            className="img-fluid contact-badge"
            width={"45px"}
            alt=""
          />
          <img
            src={bg}
            className="img-fluid contact-badge mx-4"
            width={"45px"}
            alt=""
          />
          <span className="bi-plus-lg"></span>
        </div>
      </div>
    </>
  );
};

export default Transfer;
