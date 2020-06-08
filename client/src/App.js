import React from "react";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Footer from "./shared/Footer/Footer";
import Auth from "./user/Auth";
import Movies from "./movies/Movies";
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
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
