import React from "react";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Footer from "./shared/Footer/Footer";
import Auth from "./user/Auth";
import Movies from "./movies/Movies";
import UnknowPassword from "./user/forgotPassword/UnknowPassword";
import ResetPassword from "./user/forgotPassword/ResetPassword";
import UpdateProfile from "./user/profil/UpdateProfile";
import UserProfile from "./user/profil/UserProfile";
import Lector from "./movies/components/Lector";

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
          <Route path="/userProfile" exact>
            <UserProfile />
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
