import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import Icon from "@material-ui/core/Icon";

const NavLinks = (props) => {
  let token = localStorage.getItem("token");
  let imgProfil = localStorage.getItem('imageUrl');

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
            <NavLink to="/members">
              <Icon className="navBouton">person</Icon>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profil">
              {/* <Icon className="navBouton">account_circle</Icon> */}
              <img
              className="image_profil"
              src={typeof imgProfil.name !== "string" ?
                  imgProfil.indexOf("https") === -1 && imgProfil !== "" && imgProfil !== undefined && imgProfil !== "undefined" ?
                  process.env.REACT_APP_URL + "/" + imgProfil : imgProfil.indexOf("https") > -1 ?
                      imgProfil :
                      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png"
                  : null}
              alt="Profile"
            />
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout">
              <Icon className="navBouton">power_settings_new</Icon>
            </NavLink>
          </li>
          <li>
          <div id="google_translate_element"></div> 
          </li>
        </ul> : null}
    </>
  );
};

export default NavLinks;
