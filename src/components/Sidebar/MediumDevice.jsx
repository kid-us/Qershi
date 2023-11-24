import React, { useState } from "react";
import Img from "../Contents/Img";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const MediumDevice = ({ tab }) => {
  return (
    <>
      <div
        className="sidebar shadow-lg p-3 fw-semibold d-none d-md-block d-lg-none"
        style={{
          width: "95px",
        }}
      >
        <p className="pb-4">
          <Link to="/dashboard">
            <Img src={logo} style={"img-fluid"}></Img>
          </Link>
        </p>

        {/* Username and Phone */}
        <p className="plus-badge text-center pt-1 bg-primary border-0 ms-3">
          P
        </p>

        {/* Sidebar Links */}
        <div className="pt-5 text-center">
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
                  title={`${tabs.title}`}
                >
                  <span
                    className={`text-info me-2 fs-4 bi-${tabs.icon}`}
                  ></span>
                </p>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default MediumDevice;
