import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";

const sideDrawer = (props) => {
  return (
    <div className="SideDrawer">
      <Logo height="10%" />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};
export default sideDrawer;
