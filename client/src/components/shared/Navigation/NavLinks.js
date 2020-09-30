import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import Icon from "@material-ui/core/Icon";

const NavLinks = (props) => {
  let token = localStorage.getItem("token")
  return (
    <>
      {token ?
        <ul className="nav-links">
          <li>
            <NavLink to="/movies" exact>
              <Icon className="navBouton">movie</Icon>
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorite">
              <Icon className="navBouton">stars</Icon>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profil">
              <Icon className="navBouton">account_circle</Icon>
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout">
              <Icon className="navBouton">power_settings_new</Icon>
            </NavLink>
          </li>
        </ul> : null}
    </>
  );
};

export default NavLinks;
