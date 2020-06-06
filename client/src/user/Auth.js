import React, { useState } from "react";
import LogoFacebook from "../logo/Logo-Facebook-rond.png";
import Logo42 from "../logo/logo_42.jpg";
import LeftArrow from "../logo/left-arrow.png";
import RightArrow from "../logo/right-arrow.png";
import "./Auth.css";
import "../App.css";

const Auth = () => {
  const [loginMode, setLoginMode] = useState("left-panel-active");
  const switchModeHandler = () => {
    if (loginMode === "right-panel-active") {
      setLoginMode("left-panel-active");
    } else {
      setLoginMode("right-panel-active");
    }
  };

  return (
    <React.Fragment>
      <div className={"container " + loginMode} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="./" className="social">
                <img
                  src={LogoFacebook}
                  className="icon"
                  alt="login with facebook"
                ></img>
              </a>
              <a href="./" className="social">
                <img
                  src={Logo42}
                  className="icon"
                  alt="login with facebook"
                ></img>
              </a>
            </div>
            <input type="text" placeholder="Username" />
            <input
              className="input_same_line"
              type="text"
              placeholder="Firstname"
            />
            <input
              className="input_same_line"
              type="text"
              placeholder="Lastname"
            />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Retape Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="./" className="social">
                <img
                  src={LogoFacebook}
                  className="icon"
                  alt="login with facebook"
                ></img>
              </a>
              <a href="./" className="social">
                <img
                  src={Logo42}
                  className="icon"
                  alt="login with facebook"
                ></img>
              </a>
            </div>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <a href="./">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              Switch to Sign In
              <br />
              <br />
              <img
                src={RightArrow}
                alt="switchArrow"
                width="150px"
                onClick={switchModeHandler}
              />
            </div>
            <div className="overlay-panel overlay-right">
              Switch to Sign Up
              <br />
              <br />
              <img
                src={LeftArrow}
                alt="switchArrow"
                width="150px"
                onClick={switchModeHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Auth;
