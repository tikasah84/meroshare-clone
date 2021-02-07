import React, { useState, useEffect } from "react";
import { Router, Route } from "react-router-dom";
import "./SideBar.css";
import logo from "../image/brand-login.png";
import logomin from "../image/favicon.png";
import SidebarOption from "./SidebarOption";

import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import TransformIcon from "@material-ui/icons/Transform";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CommentIcon from "@material-ui/icons/Comment";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import EventNoteIcon from "@material-ui/icons/EventNote";
import LanguageIcon from "@material-ui/icons/Language";
import StorageIcon from "@material-ui/icons/Storage";
import { useStateValue } from "../StateProvider";
function SideBar() {
  const [{ active }, dispatch] = useStateValue();
  let d = new Date();
  return (
    <>
      {active && (
        <div className="sidebar">
          <img src={logo} alt="logo" />
          <SidebarOption Icon={HomeIcon} text="Dashboard" />
          <SidebarOption Icon={AccountBoxIcon} text="My Details" />
          <SidebarOption Icon={StorageIcon} text="My Shares" />
          <SidebarOption Icon={TransformIcon} text="My Transaction History" />
          <SidebarOption Icon={AccountCircleIcon} text="My Portfolio" />
          <SidebarOption Icon={EventNoteIcon} text="My Pledge Share Detail" />
          <SidebarOption Icon={CommentIcon} text="My Bank Request" />
          <SidebarOption Icon={LanguageIcon} text="My ASBA" />
          <SidebarOption Icon={ShoppingBasketIcon} text="My Purchase Source" />
          <SidebarOption Icon={SettingsEthernetIcon} text="My EDIS" />
          <p className="text">
            {d.getFullYear()} &copy; CDS and Clearing Limited.
            <br /> All Rights Reserved
          </p>
        </div>
      )}
      {!active && (
        <div className="sidebar-min">
          <img src={logomin} alt="logo" />
          <SidebarOption Icon={StorageIcon} />
          <SidebarOption Icon={TransformIcon} />
          <SidebarOption Icon={AccountCircleIcon} />
          <SidebarOption Icon={EventNoteIcon} />
          <SidebarOption Icon={CommentIcon} />
          <SidebarOption Icon={LanguageIcon} />
          <SidebarOption Icon={ShoppingBasketIcon} />
          <SidebarOption Icon={SettingsEthernetIcon} />
        </div>
      )}
    </>
  );
}

export default SideBar;
