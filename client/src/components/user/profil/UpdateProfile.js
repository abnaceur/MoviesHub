import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import UpdatePassword from "./UpdatePassword";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/FormElements/Input";
import "../../userClass/Auth.css";
// import "./Profile.css";
import Icon from "@material-ui/core/Icon";

const UpdateProfile = () => {
  const [loadedUser, setLoadedUser] = useState();
  const { isLoading, sendRequest } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      fistname: {
        value: "",
        isValid: false,
      },
      lastname: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const updateProfile = async () => {
    try {
      const responseData = await sendRequest(
        `http://localhost:5000/api/user/update`,
        "POST",
        JSON.stringify({
          username: formState.inputs.username.value,
          email: formState.inputs.email.value,
          firstname: formState.inputs.firstname.value,
          lastname: formState.inputs.lastname.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      setLoadedUser(responseData.user);
    } catch (err) {}
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // const responseData = await sendRequest(
        //   // `http://localhost:5000/api/user/3`
        // );
        // console.log(responseData);
        let result = {
          username: "Sakala",
          email: "melchiorbengtsson@gmail.com",
          firstname: "Melchior",
          lastname: "Bengtsson",
        };
        setLoadedUser(result);
      } catch (err) {}
    };
    fetchComments();
  }, [sendRequest]);
  if (loadedUser && !isLoading) {
    return (
      <React.Fragment>
        <div className="container_update">
          <h1> Update Profile </h1>

          <div className="Update_avatar">
            <h3>Update avatar</h3>
            <form className="avatar">
              <img
                className="image_avatar"
                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png"
                alt="Profile"
              />
              <div>
                <button className="disketteBouton">
                  <Icon className="savedisket"> save</Icon>
                </button>
              </div>
              <div>
                <button type="button" className="penBouton">
                  <Icon className="change-image"> create</Icon>
                </button>
              </div>
            </form>
          </div>

          <div className="Update_information">
            <h3>Update information</h3>
            <input
              id="username"
              element="input"
              type="text"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
              label="Username"
              placeholder={loadedUser.username}
              errorText="Please enter a valid Username. (2 characters min.)"
              initialValue={loadedUser.username}
              initialValid={true}
              onInput={inputHandler}
            />
            <input
              id="email"
              element="input"
              type="text"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
              label="Email"
              placeholder={loadedUser.email}
              errorText="Please enter a valid Email."
              initialValue={loadedUser.email}
              initialValid={true}
              onInput={inputHandler}
            />
            <input
              id="firstname"
              element="input"
              type="text"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
              label="Firstname"
              placeholder={loadedUser.firstname}
              errorText="Please enter a firstname. (2 characters min.)"
              initialValue={loadedUser.firstname}
              initialValid={true}
              onInput={inputHandler}
            />
            <input
              id="lastname"
              element="input"
              type="text"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
              label="Lastname"
              placeholder={loadedUser.lastname}
              errorText="Please enter a lastname. (2 characters min.)"
              initialValue={loadedUser.lastname}
              initialValid={true}
              onInput={inputHandler}
            />
            <button onClick={updateProfile}>Update information</button>
          </div>
          <UpdatePassword />
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <div className="center">
        <LoadingSpinner />
        User not Found ?
      </div>
    );
  }
};

export default UpdateProfile;
