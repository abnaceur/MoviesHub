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
      <div className="auth_page">
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
                  />
                </a>
                <a href="./" className="social">
                  <img
                    src={Logo42}
                    className="icon"
                    alt="login with facebook"
                  />
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
                  />
                </a>
                <a href="./" className="social">
                  <img
                    src={Logo42}
                    className="icon"
                    alt="login with facebook"
                  />
                </a>
              </div>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <a className="forgotLink" href="./">
                Forgot your password?
              </a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay" onClick={switchModeHandler}>
              <div className="overlay-panel overlay-left">
                <img
                  src={RightArrow}
                  alt="switchArrow"
                  width="150px"
                  height="900px"
                />
              </div>
              <div className="overlay-panel overlay-right">
                <img
                  src={LeftArrow}
                  alt="switchArrow"
                  width="150px"
                  height="900px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Auth;
