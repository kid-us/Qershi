import React, { useState } from "react";
import Img from "./Img";
import SmallDevice from "../Sidebar/SmallDevice";
import logo from "../../assets/logo.png";
import SearchInput from "./SearchInput";
// import { useAuth } from "../utils/Auth";
import "../Pages/dashboard.css";

const Searchbar = () => {
  const [modal, setModal] = useState(0);
  // const auth = useAuth();

  // const handleLogout = () => {
  //   auth.logout();
  // };

  const handleModal = () => {
    if (modal === 0) {
      setModal(1);
      const sl = document.getElementById("fd");
      sl.addEventListener
    } else {
      setModal(0);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-5 pt-3 d-block d-md-none">
          <Img src={logo} style={"img-fluid"}></Img>
        </div>

        <div className="col-lg-6 col-md-6 p-1 d-none d-md-block">
          <SearchInput></SearchInput>
        </div>

        <div className="col-lg-1 col-md-1 col-2 offset-lg-2 offset-md-2 offset-2">
          <p className="btn bi-bell-fill text-white position-relative mt-2 fs-5">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-1">
              10
            </span>
          </p>
        </div>

        <div className="col-lg-2 col-md-2 offset-md-1 p-1 d-none d-md-block">
          <div className="bg rounded border border-black">
            <div className="row">
              <div className="col-6 text-center">
                <p
                  // onClick={handleLogout}
                  className="ms-3 plus-badge bg-primary fs-5 mt-3"
                >
                  P
                </p>
              </div>
              <div className="col-6">
                <p className="btn text-white bi-caret-down-fill mt-2"></p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1 offset-1 d-block d-md-none text-center mt-2">
          <p onClick={handleModal} className="bi-list fs-1"></p>
        </div>
      </div>

      {/* Small Device MenuBar*/}
      {modal === 1 && <SmallDevice onClick={handleModal}></SmallDevice>}
    </>
  );
};

export default Searchbar;

