import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import "./NavBar.css";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../Reducer";

function NavBar() {
  const [state, dispatch] = useStateValue();
  const [active, setActive] = useState(false);
  function toggle() {
    if (state.active === true) {
      dispatch({
        active: false,
      });
    } else {
      dispatch({
        active: true,
      });
    }
  }
  return (
    <div className="navbar">
      <div className="menu">
        <MenuIcon onClick={toggle} />
      </div>
      <div className="exit">
        <ExitToAppIcon />
        <span className="exitIcon">Log out</span>

        <PersonIcon />
        <div className="profile-text">
          <h3>Tika sah</h3>
          <p>MERO SHARE PROFILE</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
