import React from "react";
import "../Auth.css";
import "../../App.css";
import "./UnknowPassword.css";

const Auth = () => {
  return (
    <React.Fragment>
      <div className="container_pwd">
        <div className="unknow_page">
          <h3>Type your email to receive a resetlink for your Password</h3>
          <form action="#">
            <input type="text" placeholder="email" />
            <button>Send</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Auth;
