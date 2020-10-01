import React from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
// import ErrorModal from "../../shared/UIElements/ErrorModal";
// import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/FormElements/Input";
import "../Auth.css";
import "./Profile.css";
// import Icon from "@material-ui/core/Icon";

const UpdatePassword = () => {
  const { sendRequest } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      newpass: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const UpdatePassword = async () => {
    try {
      await sendRequest(
        `http://localhost:5000/api/user/updatePassword`,
        "POST",
        JSON.stringify({
          newpass: formState.inputs.newpass.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <div className="Update_information">
        <h3>Update Password</h3>
        <input
          id="newpass"
          element="input"
          type="password"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
          label="New Password"
          placeholder="New Password"
          errorText="Please enter a valid Password."
          initialValue=""
          initialValid={true}
          onInput={inputHandler}
        />
        <button onClick={UpdatePassword}>Update password</button>
      </div>
    </React.Fragment>
  );
};

export default UpdatePassword;
