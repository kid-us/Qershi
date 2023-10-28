import React from "react";
import "../Pages/dashboard.css";
import Button from "../Form/Button";

const Welcome = () => {
  return (
    <div className="welcome-wrapper bg p-3">
      <div className="mx-3 mb-5">
        <p className="float-start">
          Welcome <span className="text-info">@pac42</span>
        </p>
        <p className="float-end bi-plus-lg"></p>
      </div>

      <div className="text-center">
        <p className="label small">Current Balance</p>
        <h2>42,290 ETB</h2>

        <Button name="Deposit"></Button>
        <Button name="Withdraw"></Button>
      </div>
    </div>
  );
};

export default Welcome;
