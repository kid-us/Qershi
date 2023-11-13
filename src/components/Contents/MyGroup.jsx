import React from "react";
import canal from "../../assets/canal.jpg";
import sewasew from "../../assets/sewasew.jpg";
import Row from "./Row";

const MyGroup = () => {
  return (
    <>
      <div className="bg p-3">
        <p className="label">My Groups</p>
        <p className="small label">Payment groups you created</p>
        <Row
          img={canal}
          col="col-7"
          col2="col-4"
          link="Ekub"
          info="6 members"
        ></Row>
        <Row
          img={sewasew}
          col="col-8"
          col2="col-4"
          link="Edir"
          info="16 members"
        ></Row>
      </div>
    </>
  );
};

export default MyGroup;
