import React from "react";
import MainNavigation from "./components/shared/Navigation/MainNavigation";
import Footer from "./components/shared/Footer/Footer";
import Auth from "./components/userClass/Auth";
import Movies from "./components/Movies/Movies";
import UnknowPassword from "./components/user/forgotPassword/UnknowPassword";
import ResetPassword from "./components/user/forgotPassword/ResetPassword";
import UpdateProfile from "./components/user/profil/UpdateProfile";
// import Lector from "./components/movies/components/Lector";
import MovieDetails from "./components/movieDetails/movieDetails";
import AuthRoute from "./components/midlleware/RouteAuth";
import Logout from "./components/Logout/Logout";
import Members from './components/Members/Members';

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

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
          <Route exact path="/" component={Auth} />
          <AuthRoute exact path="/movies" component={Movies} />
          <Route exact path="/unknowPassword" component={UnknowPassword} />
          <Route exact path="/resetPassword" component={ResetPassword} />
          <AuthRoute exact path="/videodetails" component={MovieDetails} />
          <AuthRoute exact path="/members" component={Members} />
          <AuthRoute exact path="/profil" component={UpdateProfile} />
          <AuthRoute exact path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
