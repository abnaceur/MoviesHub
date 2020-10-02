import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/Backdrop";
import Switch from "@material-ui/core/Switch";
import hyperLogo from '../../../assets/logo/LogoHyper.png';
import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const OpenDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const CloseDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && <BackDrop onClick={CloseDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={CloseDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <h1 className="main-navigation__title">
          <Link to="/">
            <img className="logo" src={hyperLogo} alt="Hyper logo" />
          </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav> 
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
