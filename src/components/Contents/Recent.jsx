import React from "react";
import { Link } from "react-router-dom";
import Row from "./Row";
import av1 from "../../assets/av1.jpg";
import av2 from "../../assets/av2.jpg";
import av3 from "../../assets/av3.jpg";
import bg from "../../assets/bg.jpg";

const Recent = () => {
  return (
    <>
      <div className="bg left-border-radius p-3 dash-contents">
        <div className="mb-5 pb-5">
          <div className="float-start">
            <p className="label">Transaction</p>
            <p className="small label">All transactions will be here</p>
          </div>
          <div className="float-end small">
            <Link to="/transactions" className="text-decoration-none text-info">
              View all
            </Link>
          </div>
        </div>

        <Row
          col={5}
          col2={"col-3"}
          img={av1}
          link="@lorem"
          info="30 min"
          amount="120"
        ></Row>
        <Row
          col={5}
          col2={"col-3"}
          img={av2}
          link="@ipsun"
          info="1 hour"
          amount="90"
        ></Row>
        <Row
          col={5}
          col2={"col-3"}
          img={av3}
          link="@pac29"
          info="3 min"
          amount="20"
        ></Row>
        <Row
          col={5}
          col2={"col-3"}
          img={bg}
          link="@kid-us"
          info="39 min"
          amount="290"
        ></Row>
      </div>
    </>
  );
};

export default Recent;

