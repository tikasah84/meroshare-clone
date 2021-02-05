import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navbar">
      <div className="menu">
        <MenuIcon />
      </div>
      <div className="exit">
        <ExitToAppIcon />
        <PersonIcon />
      </div>
    </div>
  );
}

export default NavBar;
