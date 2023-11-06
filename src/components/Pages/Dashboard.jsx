import React from "react";
import Sidebar from "../Sidebar";
import Contents from "../Contents";
import Searchbar from "../Contents/Searchbar";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="main-contents">
        <div className="row">
          <div className="col-12">
            <Searchbar></Searchbar>
            <Contents></Contents>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
