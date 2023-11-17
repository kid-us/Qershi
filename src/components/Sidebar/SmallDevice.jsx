import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Img from "../Contents/Img";
import SearchInput from "../Contents/SearchInput";
import { tabs } from "../constant/tabs";
import "animate.css";

const SmallDevice = ({ onClick }) => {
  return (
    <>
      {/* Overlay */}
      <div onClick={onClick} className="overlay"></div>

      <div className="sm-sidebar shadow-lg p-4 fw-semibold animate__animated animate__bounceInLeft">
        <div className="mb-5 pb-5">
          <p className="pb-4 float-start">
            <Link to="/dashboard">
              <Img src={logo} style={"img-fluid logo"}></Img>
            </Link>
          </p>
          <p onClick={onClick} className="float-end bi-x-lg text-danger"></p>
        </div>

        <div className="row border bg-info rounded ms-1 me-4 mb-3">
          <div className="col-2 mt-3">
            <p className="plus-badge text-center pt-1 bg-primary border-0 ">
              P
            </p>
          </div>
          <div className="col-8 line-height-low mt-3">
            <p className="py-1 text-black">@pac42</p>
            <p className="small label text-black">+25190000000</p>
          </div>
        </div>

        <div className="mt-4">
          <SearchInput></SearchInput>
        </div>

        <div className="pt-4">
          {tabs.map((tab) => (
            <NavLink
              key={tab.index}
              to={`/${tab.title}`}
              className="text-decoration-none"
            >
              {({ isActive }) => (
                <p
                  className={
                    isActive ? `bg2  mb-4 p-2 rounded` : `mb-4 p-2 rounded`
                  }
                >
                  <span className={`text-info me-2 fs-4 bi-${tab.icon}`}></span>
                  <span
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {tab.title}
                  </span>
                </p>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default SmallDevice;
