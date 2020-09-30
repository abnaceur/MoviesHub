import React, { useState, Button } from "react";
import LogoFacebook from '../../assets/logo/Logo-Facebook-rond.png';
import Logo42 from "../../assets/logo/logo_42.jpg";
import LeftArrow from "../../assets/logo/left-arrow.png";
import RightArrow from "../../assets/logo/right-arrow.png";
import "./Auth.css";
import PasswordStrengthMeter from './PasswordStrengthMeter';
import zxcvbn from 'zxcvbn';
import { ToastContainer } from 'react-toastify';

// Import services
import { signUpNewUser } from '../shared/services/userServices/registerUserService'
import { loginAuthUser } from '../shared/services/userServices/loginUserService'

const customNotification = require('../utils/notification');

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginMode: "left-panel-active",
      firstname: "",
      lastname: "",
      pseudonyme: "",
      password: "",
      email: "",
      photo: "",
      confPassword: "",
      resgiterUser: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handlFormSubmit = this.handlFormSubmit.bind(this);
    this.switchModeHandler = this.switchModeHandler.bind(this);
  }

  fireNotificationAlert(response) {
    if (response && response.code === 200)
    customNotification.fireNotification("success", response.msg);
  if (response && response.code === 204)
    customNotification.fireNotification("warning", response.msg);
  if (response && response.code === 500)
    customNotification.fireNotification("error", response.msg);
  }

  async signupUserHandler() {
    let response = await signUpNewUser(this.state);
    this.fireNotificationAlert(response);
  }

  async loginUser() {
    let data = {
      password: this.state.password,
      email: this.state.email
    }
    let response = await loginAuthUser(data);
    this.fireNotificationAlert(response);
  }

  async handlFormSubmit(e) {
    e.preventDefault();
    const { loginMode } = this.state;

    if (loginMode == "left-panel-active")
      this.loginUser();

    if (loginMode == "right-panel-active")
      if (this.valdateFormData())
        this.signupUserHandler();

  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (target.type === "file") {
      this.setState({
        photo: target.files[0]
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  switchModeHandler() {
    if (this.state.loginMode === "right-panel-active") {
      this.setState({ loginMode: "left-panel-active" });
    } else {
      this.setState({ loginMode: "right-panel-active" });
    }
  };

  valdateFormData() {
    let validateEmail = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    const testedResult = zxcvbn(this.state.password);

    if (this.state.password !== this.state.confPassword) {
      customNotification.fireNotification("warning", "Passwords does not match")
      return false;
    } else if (this.state.password.length < 8) {
      customNotification.fireNotification("warning", "Password must contain at least 8 characters")
      return false;
    } else if (parseInt(testedResult.score) < 3) {
      customNotification.fireNotification("error", "Password must be strong")
      return false;
    } else if (!validateEmail.test(this.state.email)) {
      customNotification.fireNotification("warning", "Email not valid")
      return false;
    }
    return true;
  }

  render() {
    const { loginMode, password } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <div className="auth_page">
          <div className={"container " + loginMode} id="container">
            <div className="form-container sign-up-container">
              <form onSubmit={this.handlFormSubmit} encType="multipart/form-data">
                <h1>Create User</h1>
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
                <input
                  id="Username"
                  placeholder="Username"
                  name="pseudonyme:"
                  element="input"
                  type="text"
                  label="Username"
                  onChange={this.handleChange}
                />
                <input
                  id="Firstname"
                  placeholder="Firstname"
                  element="input"
                  type="text"
                  label="firstname"
                  name="firstname"
                  onChange={this.handleChange}
                />
                <input
                  id="Lastname"
                  placeholder="Lastname"
                  element="input"
                  type="text"
                  label="lastname"
                  name="lastname"
                  onChange={this.handleChange}
                />
                <input
                  id="Email"
                  placeholder="Email"
                  element="input"
                  type="email"
                  label="email"
                  name="email"
                  onChange={this.handleChange}
                />

                <input
                  id="Password"
                  placeholder="Password"
                  element="input"
                  type="text"
                  label="password"
                  name="password"
                  onChange={this.handleChange}
                />
                <input
                  id="Password"
                  placeholder="Confirm password"
                  element="input"
                  type="text"
                  label="Confirm password"
                  name="confPassword"
                  onChange={this.handleChange}
                />
                <PasswordStrengthMeter password={password} />
                <button>Sign Up</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form onSubmit={this.handlFormSubmit} encType="multipart/form-data">
                <h1>Sign in</h1>
                <div className="social-container">
                  <a href="./" className="social">
                    <img
                      src={LogoFacebook}
                      className="icon"
                      alt="login with facebook"
                    />
                  </a>Input email
                  <a href="./" className="social">
                    <img
                      src={Logo42}
                      className="icon"
                      alt="login with facebook"
                    />
                  </a>
                </div>
                <input
                  type="text"
                  placeholder="Input email or username"
                  name="email"
                  onChange={this.handleChange}
                  required={true}
                />

                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  placeholder="Input Password"
                  required={true}
                />

                <a className="forgotLink" href="./unknowPassword">
                  Forgot your password?
              </a>
                <button>Sign In</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay" onClick={(e) => this.switchModeHandler()}>
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
  }
};

export default Auth;
