import React from "react";
import Input from "../../shared/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./UpdateProfile.css";
import "../../App.css";

const UpdateProfile = (props) => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const updateSubmitHandler = () => {
    console.log(formState.isValid);
  };
  return (
    <React.Fragment>
      <Input
        id="email"
        element="input"
        type="mail"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        label="Add Interest"
        errorText="Please enter a valid email"
        initialValue=""
        initialValid={false}
        onInput={inputHandler}
      />
      <button onClick={updateSubmitHandler} disabled={!formState.isValid}>
        Update
      </button>
    </React.Fragment>
  );
};

export default UpdateProfile;
