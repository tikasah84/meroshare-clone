import React from "react";
import { Router, Route } from "react-router-dom";
import "./SideBar.css";
import logo from "../image/brand-login.png";
import logomin from "../image/favicon.png";
import SidebarOption from "./SidebarOption";

import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import TransformIcon from "@material-ui/icons/Transform";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function SideBar() {
  let d = new Date();
  return (
    <>
      <div className="sidebar">
        <img src={logo} alt="logo" />
        <SidebarOption Icon={HomeIcon} text="Dashboard" />
        <SidebarOption
          active="active"
          Icon={AccountBoxIcon}
          text="My Details"
        />
        <SidebarOption Icon={TransformIcon} text="My Transaction History" />
        <SidebarOption Icon={AccountCircleIcon} text="My Portfolio" />
        <p className="text">
          {d.getFullYear()} &copy; CDS and Clearing Limited. All Rights Reserved
        </p>
      </div>
      {/* <div className="sidebar-min">
        <img src={logomin} alt="logo" />
        <SidebarOption Icon={HomeIcon} />
        <SidebarOption active="active" Icon={AccountBoxIcon} />
        <SidebarOption Icon={TransformIcon} />
        <SidebarOption Icon={AccountCircleIcon} />
      </div> */}
    </>
  );
}

export default SideBar;
