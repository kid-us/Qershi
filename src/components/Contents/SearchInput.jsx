import React from "react";

const SearchInput = () => {
  return (
    <>
      <div className="input-group bg rounded py-1 ps-4">
        <input
          className="form-control text-white"
          name="search"
          placeholder="Search for Users, Groups.."
        />
        <button className="input-group-text px-5 bi-search"></button>
      </div>
    </>
  );
};

export default SearchInput;

