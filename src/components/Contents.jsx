import React from "react";
import SearchBar from "./Contents/Searchbar";
import Welcome from "./Contents/Welcome";
import Transfer from "./Contents/Transfer";
import Recent from "./Contents/Recent";
import Subscription from "./Contents/Subscription";
import TopGroup from "./Contents/TopGroup";
import MyGroup from "./Contents/MyGroup";
const Contents = () => {
  return (
    <>
      <div className="row mt-4 fw-semibold">
        <div className="col-lg-8 col-12 p-1">
          <Welcome></Welcome>
        </div>
        <div className="col-lg-4 col-12 p-1">
          <Transfer></Transfer>
        </div>

        <div className="col-lg-4 col-md-6 col-12 p-1 mt-3">
          <Recent></Recent>
        </div>

        <div className="col-lg-3 col-md-6 col-12 p-1 mt-3">
          <div className="row">
            <div className="col-12 bg p-1">
              <Subscription></Subscription>
            </div>
            <div className="col-12 bg p-1 mt-4">
              <MyGroup></MyGroup>
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-12 p-1 mt-3">
          <TopGroup></TopGroup>
        </div>
      </div>
    </>
  );
};

export default Contents;

