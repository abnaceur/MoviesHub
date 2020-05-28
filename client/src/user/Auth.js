import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [mode, setMode] = useState("login");
  const switchModeHandler = () => {
    if (mode === "login") {
      setMode("signUp");
    } else {
      setMode("login");
    }
  };

  return (
    <React.Fragment>
      <div className="login_block">
        <div className="side_block">
            {mode === "login" ? "Login" : "Signup"}
        </div>
        <div className="form_block">
          {mode === "signUp" ? <button onClick={switchModeHandler}>Sign In</button> : <button onClick={switchModeHandler}>Login</button>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Auth;
