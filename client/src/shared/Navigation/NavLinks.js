import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import Icon from "@material-ui/core/Icon";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/movies" exact>
          <h2>Movies</h2>
        </NavLink>
      </li>
      <li>
        <NavLink to="/serie">
          <h2>Series</h2>
        </NavLink>
      </li>
      <li>
        <NavLink to="/favorite">
          <h2>favorite</h2>
        </NavLink>
      </li>
      <li>
        <Icon className="navBouton" >
          power_settings_new
        </Icon>
      </li>
    </ul>
  );
};

export default NavLinks;
