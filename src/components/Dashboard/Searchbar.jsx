import React from "react";
import "../Pages/dashboard.css";
const Searchbar = () => {
  return (
    <>
      {/* Search Bar */}
      <div className="row">
        <div className="col-7 p-1">
          <div className="input-group bg rounded py-1">
            <input
              className="form-control"
              name="search"
              placeholder="Search for Users, Groups..."
            />
            <button className="input-group-text px-5 bi-search"></button>
          </div>
        </div>

        {/* Notification */}
        <div className="col-1 offset-2">
          <p class="btn bi-bell-fill text-white position-relative mt-2 fs-5">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-1">
              10
            </span>
          </p>
        </div>

        {/* Username */}
        <div className="col-2 p-1">
          <div className="bg rounded border border-black">
            <div className="row">
              <div className="col-6 text-center">
                <p className="ms-5 name-badge fs-5 mt-2">P</p>
              </div>
              <div className="col-6">
                <p className="btn text-white bi-caret-down-fill mt-1"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
