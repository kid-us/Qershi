import React from "react";
import LargeDevice from "./Sidebar/LargeDevice";
import MediumDevice from "./Sidebar/MediumDevice";
import { tabs } from "./constant/tabs";
const Sidebar = () => {
  return (
    <>
      {/* Large Device Sidebar */}
      <LargeDevice tab={tabs}></LargeDevice>

      {/* Medium Device Sidebar*/}
      <MediumDevice tab={tabs}></MediumDevice>
    </>
  );
};

export default Sidebar;

