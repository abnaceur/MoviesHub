import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/FormElements/Input";
import "../Auth.css";
import "../../App.css";
import "./Profile.css";
import Icon from "@material-ui/core/Icon";

const UpdatePassword = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      oldpass: {
        value: "",
        isValid: false,
      },
      newpass: {
        value: "",
        isValid: false,
      },
      repeatpass: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const UpdatePassword = async () => {
    try {
      const responseData = await sendRequest(
        `http://localhost:5000/api/user/updatePassword`,
        "POST",
        JSON.stringify({
          oldpass: formState.inputs.oldpass.value,
          newpass: formState.inputs.newpass.value,
          repeatpass: formState.inputs.repeatpass.value,
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
        <Input
          id="oldpass"
          element="input"
          type="password"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
          label="Current Password"
          errorText="Please enter a valid Password."
          initialValue=""
          initialValid={true}
          onInput={inputHandler}
        />
        <Input
          id="newpass"
          element="input"
          type="password"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
          label="New Password"
          errorText="Please enter a valid Password."
          initialValue=""
          initialValid={true}
          onInput={inputHandler}
        />
        <Input
          id="repeatpass"
          element="input"
          type="password"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
          label="Repeat Password"
          errorText="Please enter a valid Password."
          initialValue=""
          initialValid={false}
          onInput={inputHandler}
        />
        <button onClick={UpdatePassword}>Update password</button>
      </div>
    </React.Fragment>
  );
};

export default UpdatePassword;
