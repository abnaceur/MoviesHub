import React from "react";
import decode from 'jwt-decode';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
const createHistory = require("history").createBrowserHistory;

 const checkAuth = () => { 
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    try {
      // { exp: 12903819203 }
      const { exp } = decode(token);

      if (exp < new Date().getTime() / 1000) {
        alert("Token expired !")
        localStorage.setItem('token', "");
        localStorage.setItem('userId', "");
        localStorage.setItem('familyName', "");
        localStorage.setItem('givenName', "");
        localStorage.setItem('imageUrl', "");
        let history = createHistory();
        history.push("/");
        let pathUrl = window.location.href;
        window.location.href = pathUrl;   
        return false;
      }

    } catch (e) {
      alert("dccc")
      return false;
    }

    return true;
  }

  const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      checkAuth() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
    )} />
  )

  export default AuthRoute;