import React, { useState, useEffect } from "react";
import UpdatePassword from "./UpdatePassword";
import "../../userClass/Auth.css";
import { getUserInfoService } from '../../shared/services/userServices/getUserInfoService'
import { updateUserInfoService } from '../../shared/services/userServices/updateUserInfoService'

import PasswordStrengthMeter from './PasswordStrengthMeter';
import zxcvbn from 'zxcvbn';

import { ToastContainer } from 'react-toastify';
const customNotification = require('../../utils/notification');

class UpdateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      profileImg: "",
      lastname: "",
      firstname: "",
      email: "",
      password: "",
    }

    this.getProfileInformation = this.getProfileInformation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Get profile information
  async getProfileInformation() {
    let userId = localStorage.getItem('userId');
    let response = await getUserInfoService(userId)
    if (response.code === 200) {
      this.setState({
        username: response.data.pseudonyme,
        profileImg: response.data.imageUrl !== undefined ?
          response.data.imageUrl : "",
        lastname: response.data.familyName,
        firstname: response.data.givenName,
        email: response.data.email,
      })
    } else customNotification.fireNotification("error", "Sorry an error occured")
  }

  componentWillMount() {
    this.getProfileInformation();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (target.type === "file") {
      this.setState({
        profileImg: target.files[0]
      });

      var preview = document.querySelector('#profileImage'); // Image reference
      var file = target.files[0]   // File refrence

      var reader = new FileReader(); // Creating reader instance from FileReader() API

      reader.addEventListener("load", function () { // Setting up base64 URL on image
        preview.src = reader.result;
      }, false);

      reader.readAsDataURL(file); // Converting file into data URL
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  valdateFormData() {
    let validateEmail = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    const testedResult = zxcvbn(this.state.password);
    const { lastname, firstname, email, profileImg, username, password } = this.state;

    if (email === "" || firstname === "" || username === "" || lastname === "") {
      customNotification.fireNotification("warning", "Fields must not be empty")
      return false;
    } else if (this.state.password.length < 8 && this.state.password !== "") {
      customNotification.fireNotification("warning", "Password must contain at least 8 characters")
      return false;
    } else if (parseInt(testedResult.score) < 3 && this.state.password !== "") {
      customNotification.fireNotification("error", "Password must be strong")
      return false;
    } else if (!validateEmail.test(this.state.email)) {
      customNotification.fireNotification("warning", "Email not valid")
      return false;
    }
    return true;
  }

  async updateProfileInformation(e) {
    e.preventDefault();
    if (this.valdateFormData()) {
      let userId = localStorage.getItem('userId');
      let response = await updateUserInfoService(userId, this.state);
      if (response && response.code === 200) {
        localStorage.setItem('imageUrl', response.imageUrl);
        customNotification.fireNotification("success", response.msg);
        setTimeout(() => {
          window.location.href = window.location.href;
        }, 1000)
      }
      if (response && response.code === 500)
        customNotification.fireNotification("error", response.msg);
      if (response && response.code === 204)
        customNotification.fireNotification("warning", response.msg);
    }
  }

  render() {
    const { lastname, firstname, email, profileImg, username, password } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <div className="container_update">
          <h1> Update Profile </h1>

          <div className="Update_avatar">
            <h3>Update avatar</h3>
            <form style={{ display: 'flex', flexDirection: "column" }} className="avatar">
              <img
                id="profileImage"
                className="image_avatar"
                src={typeof profileImg.name !== "string" ?
                  profileImg.indexOf("https") === -1 && profileImg !== "" && profileImg !== "undefined" && profileImg !== undefined ?
                    process.env.REACT_APP_URL + "/" + profileImg : profileImg.indexOf("https") > -1 ?
                      profileImg :
                      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png"
                  : null}
                alt="Profile"
              />
              <div>
                <input
                  type="file"
                  onChange={this.handleChange}
                  name="profileImg"
                />
              </div>
            </form>
          </div>

          <div className="Update_information">
            <h3>Update information</h3>

            <input
              id="username"
              value={username}
              placeholder="Input username"
              name="username"
              type="text"
              label="Username"
              onChange={this.handleChange}
              required={true}
            />

            <input
              id="email"
              placeholder="Input email"
              name="email"
              value={email}
              type="text"
              label="Email"
              onChange={this.handleChange}
              required={true}
            />
            <input
              id="firstname"
              placeholder="Input firstname"
              value={firstname}
              name="firstname"
              type="text"
              label="Firstname"
              onChange={this.handleChange}
              required={true}
            />

            <input
              id="lastname"
              placeholder="Input lastname"
              value={lastname}
              type="text"
              name="lastname"
              label="Lastname"
              onChange={this.handleChange}
              required={true}
            />

            <select class="form-control">
              <option>English</option>
              <option>French</option>
              <option>Chinese</option>
              <option>Arabic</option>
              <option>Spanish</option>
              <option>Italian</option>
              <option>Russian</option>
            </select>

            <input
              id="password"
              value={password}
              type="password"
              name="password"
              label="password"
              onChange={this.handleChange}
              placeholder="Leave password empty if you don't want to modify"
              required={true}
            />
            <PasswordStrengthMeter password={password} />

            <button onClick={(e) => this.updateProfileInformation(e)} >Update information</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default UpdateProfile;