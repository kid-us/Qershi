import React from "react";
import { Link } from "react-router-dom";
import dstv from "../../assets/dstv.jpg";
import canal from "../../assets/canal.jpg";
import watersupply from "../../assets/watersupply.jpg";
import sewasew from "../../assets/sewasew.jpg";
import bg from "../../assets/bg.jpg";
import Row from "./Row";

const TopGroup = () => {
  return (
    <>
      <div className="bg right-border-radius p-3 label dash-contents">
        <div className="float-start">
          <p className="label">Top Groups</p>
          <p className="small label">Payment groups you might interested in</p>
        </div>
        <div className="float-end small">
          <Link to="/groups" className="text-decoration-none text-info">
            View all
          </Link>
        </div>

        <div className="mt-5 pt-3">
          <Row
            img={dstv}
            col="col-lg- col-md-7 col-9"
            icon="bi-patch-check-fill"
            link="@canal-plus-ethiopia"
            info="10k subscribers"
          ></Row>
          <Row
            img={sewasew}
            col="col-lg- col-md-7 col-9"
            icon="bi-patch-check-fill"
            link="@dstv_ethiopia"
            info="100k subscribers"
          ></Row>
          <Row
            img={watersupply}
            col="col-lg- col-md-7 col-9"
            icon="bi-patch-check-fill"
            link="@sewasew-multimedia"
            info="1k subscribers"
          ></Row>
          <Row
            img={canal}
            col="col-lg- col-md-7 col-9"
            icon="bi-patch-check-fill"
            link="@sewasew-multimedia"
            info="1k subscribers"
          ></Row>
        </div>
      </div>
    </>
  );
};

export default TopGroup;
