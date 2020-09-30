import React from "react";
import MainNavigation from "./components/shared/Navigation/MainNavigation";
import Footer from "./components/shared/Footer/Footer";
import Auth from "./components/user/Auth";
import Movies from "./components/movies/Movies";
import UnknowPassword from "./components/user/forgotPassword/UnknowPassword";
import ResetPassword from "./components/user/forgotPassword/ResetPassword";
import UpdateProfile from "./components/user/profil/UpdateProfile";
import Lector from "./components/movies/components/Lector";

import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <Auth />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/unknowPassword" exact>
            <UnknowPassword />
          </Route>
          <Route path="/resetPassword" exact>
            <ResetPassword />
          </Route>
          <Route path="/profil" exact>
            <UpdateProfile />
          </Route>
          <Route path="/lector" exact>
            <Lector />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
