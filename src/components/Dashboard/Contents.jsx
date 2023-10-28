import React from "react";
import SearchBar from "./Searchbar";
import Welcome from "./Welcome";
import Transfer from "./Transfer";
const Contents = () => {
  return (
    <>
      <SearchBar></SearchBar>
      <div className="row mt-2 fw-semibold">
        <div className="col-8 p-1">
          <Welcome></Welcome>
        </div>
        <div className="col-4 p-1">
          <Transfer></Transfer>
        </div>
      </div>
    </>
  );
};

export default Contents;
