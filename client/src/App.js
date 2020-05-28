import React from "react";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Auth from "./user/Auth";
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
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
