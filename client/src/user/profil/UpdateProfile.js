import React from "react";
import Input from "../../shared/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/util/validators";
import "./UpdateProfile.css";
import "../../App.css";
import ImageUpload from "../../shared/FormElements/ImageUpload";

const UpdateProfile = (props) => {
  const [formState, inputHandler] = useForm(
    {
      picture: {
        value: null,
        isValid: false,
      },
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
  const pictureSubmitHandler = () => {};
  return (
    <React.Fragment>
      <div className="formUser">
        <form onSubmit={pictureSubmitHandler}>
          <ImageUpload
            center
            id="picture"
            onInput={inputHandler}
            errorText="Provide an Image!"
          />
        </form>
        <Input
          id="email"
          element="input"
          type="mail"
          validators={[VALIDATOR_EMAIL()]}
          label="Update Email"
          errorText="Please enter a valid email"
          initialValue=""
          initialValid={false}
          onInput={inputHandler}
        />
        <Input
          id="username"
          element="input"
          type="text"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          label="Update Username"
          errorText="Please enter a valid username"
          initialValue=""
          initialValid={false}
          onInput={inputHandler}
        />
        <button onClick={updateSubmitHandler} disabled={!formState.isValid}>
          Update
        </button>
      </div>
    </React.Fragment>
  );
};

export default UpdateProfile;
