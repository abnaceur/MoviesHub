import React from "react";
import decode from 'jwt-decode';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";


 const checkAuth = () => { 
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    try {
      // { exp: 12903819203 }
      const { exp } = decode(token);

      if (exp < new Date().getTime() / 1000) {
        return false;
      }

    } catch (e) {
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