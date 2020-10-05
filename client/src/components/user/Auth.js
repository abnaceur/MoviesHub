import React, { useState, Button } from "react";
import LogoFacebook from '../../assets/logo/Logo-Facebook-rond.png';
import Logo42 from "../../assets/logo/logo_42.jpg";
import LeftArrow from "../../assets/logo/left-arrow.png";
import RightArrow from "../../assets/logo/right-arrow.png";
import "./Auth.css";
import { useHttpClient } from "../shared/hooks/http-hook";
import ErrorModal from "../shared/UIElements/ErrorModal";
import LoadingSpinner from "../shared/UIElements/LoadingSpinner";
import { Comment, Header } from "semantic-ui-react";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../shared/util/validators";
import { useForm } from "../shared/hooks/form-hook";
// import { Input } from "@material-ui/core";
import Input from "../shared/FormElements/Input";

// Import services
import { signUpNewUser } from '../shared/services/userServices/registerUserService'

const Auth = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      firstname: {
        value: "",
        isValid: false,
      },
      lastname: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const [loginMode, setLoginMode] = useState("left-panel-active");
  const switchModeHandler = () => {
    if (loginMode === "right-panel-active") {
      setLoginMode("left-panel-active");
    } else {
      setLoginMode("right-panel-active");
    }
  };
  // TODO REFACTOR SERVICES OUT OF COMPOENENT LOGIC
  const fetchUser = async () => {
    let data = {
      username: formState.inputs.username.value,
      firstname: formState.inputs.firstname.value,
      lastname: formState.inputs.lastname.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
    };
    
    if (loginMode === "left-panel-active") { 
      try {
        await sendRequest(
          `http://localhost:5000/api/user/login`,
          "POST",

          JSON.stringify(data),
          {
            "Content-Type": "application/json",
          }
        );
      } catch (err) { }
    } else if (loginMode === "right-panel-active") {
      let response = await signUpNewUser({
        username: formState.inputs.username.value,
        firstname: formState.inputs.firstname.value,
        lastname: formState.inputs.lastname.value,
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      })
    }
  };

  return (
    <React.Fragment>
      <div className="auth_page">
        <div className={"container " + loginMode} id="container">
          <div className="form-container sign-up-container">
            <form onSubmit={fetchUser}>
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
              <Input
                id="Username"
                placeholder="Username"
                name="username"
                element="input"
                type="text"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
                label="Username"
                errorText="Please enter a valid Username. (2 characters min.)"
                initialValue=""
                initialValid={false}
                onInput={inputHandler}
              />
              <Input
                id="Firstname"
                placeholder="Firstname"
                element="input"
                type="text"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
                label="firstname"
                errorText="Please enter a valid firstname. (2 characters min.)"
                initialValue=""
                initialValid={false}
                onInput={inputHandler}
              />
              <Input
                id="Lastname"
                placeholder="Lastname"
                element="input"
                type="text"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
                label="lastname"
                errorText="Please enter a valid lastname. (2 characters min.)"
                initialValue=""
                initialValid={false}
                onInput={inputHandler}
              />
              <Input
                id="Email"
                placeholder="Email"
                element="input"
                type="email"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
                label="email"
                errorText="Please enter a valid email. (2 characters min.)"
                initialValue=""
                initialValid={false}
                onInput={inputHandler}
              />
              <Input
                id="Password"
                placeholder="Password"
                element="input"
                type="text"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
                label="password"
                errorText="Please enter a valid password. (2 characters min.)"
                initialValue=""
                initialValid={false}
                onInput={inputHandler}
              />
              <button onClick={fetchUser}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={fetchUser}>
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
              <a className="forgotLink" href="./unknowPassword">
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
