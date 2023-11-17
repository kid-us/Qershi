import React from "react";
import Img from "../Contents/Img";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const LargeDevice = ({ tab }) => {
  return (
    <>
      <div className="sidebar shadow-lg p-4 fw-semibold d-none d-lg-block">
        <p className="pb-4">
          <Link to="/dashboard">
            <Img src={logo} style={"img-fluid logo"}></Img>
          </Link>
        </p>

        {/* Username and Phone */}
        <div className="row border bg-info rounded ms-1 me-4 mt-5 mb-3">
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

        {/* Sidebar Links */}
        <div className="pt-5">
          {tab.map((tabs) => (
            <NavLink
              key={tabs.index}
              to={`/${tabs.title}`}
              className="text-decoration-none"
            >
              {({ isActive }) => (
                <p
                  className={
                    isActive ? `bg2  mb-4 p-2 rounded` : `mb-4 p-2 rounded`
                  }
                >
                  <span
                    className={`text-info me-2 fs-4 bi-${tabs.icon}`}
                  ></span>
                  <span
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {tabs.title}
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

export default LargeDevice;
