import React from "react";
import av1 from "../../assets/av1.jpg";
import av2 from "../../assets/av2.jpg";
import av3 from "../../assets/av3.jpg";
import dstv from "../../assets/dstv.jpg";
import canal from "../../assets/canal.jpg";
import watersupply from "../../assets/watersupply.jpg";
import Img from "./Img";

const Subscription = () => {
  return (
    <>
      <div className="p-3 small">
        <p className="label">Your Subscription</p>
        <p className="small label">Subscribed and joined groups</p>
        <div className="pt-3 d-flex">
          <Img src={av1} style={"img-fluid contact-badge me-3"}></Img>
          <Img src={canal} style={"img-fluid contact-badge me-3"}></Img>
          <Img src={av2} style={"img-fluid contact-badge me-3"}></Img>
          <Img src={dstv} style={"img-fluid contact-badge me-3"}></Img>
          <Img src={av3} style={"img-fluid contact-badge me-3"}></Img>
        </div>
      </div>
    </>
  );
};

export default Subscription;
