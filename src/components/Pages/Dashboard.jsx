import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import Contents from "../Dashboard/Contents";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="row container-fluid">
        <div className="sidebar shadow-lg p-4">
          <Sidebar></Sidebar>
        </div>

        <div className="col-12">
          <div className="main-contents">
            <Contents></Contents>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
