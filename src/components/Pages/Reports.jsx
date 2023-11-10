import React from "react";
import Sidebar from "../Sidebar";
import Searchbar from "../Contents/Searchbar";
const Reports = () => {
  return (
    <>
      <Sidebar></Sidebar>

      <div className="main-contents">
        <div className="row">
          <div className="col-12">
            <Searchbar></Searchbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
