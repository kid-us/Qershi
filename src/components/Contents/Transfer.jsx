import React from "react";
import "../Pages/dashboard.css";
import av1 from "../../assets/av1.jpg";
import av2 from "../../assets/av2.jpg";
import av3 from "../../assets/av3.jpg";
import sewasew from "../../assets/sewasew.jpg";

import Button from "./Button";
import Img from "./Img";

const Transfer = () => {
  return (
    <>
      <div className="transfer-wrapper right-border-radius bg p-4">
        <p className="label small">Quick Transfer</p>
        <div className="mt-5 d-flex">
          <Img
            src={av1}
            style="cursor-pointer img-fluid contact-badge me-3"
          ></Img>
          <Img
            src={av2}
            style="cursor-pointer img-fluid contact-badge me-3"
          ></Img>
          <Img
            src={av3}
            style="cursor-pointer img-fluid contact-badge me-3"
          ></Img>
          <Img
            src={sewasew}
            style="cursor-pointer img-fluid contact-badge me-3"
          ></Img>

          <span className="plus-badge text-center bi-plus-lg fs-5 bg-dark mt-2 cursor-pointer"></span>
        </div>

        <div className="row justify-content-center mt-4 pt-2">
          <div className="col-6">
            <Button
              name={"Send"}
              style={"transfer-btn bg-purple rounded-pill w-100"}
            ></Button>
          </div>
          <div className="col-6">
            <Button
              name={"Receive"}
              style={"transfer-btn bg-blue rounded-pill w-100"}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfer;
