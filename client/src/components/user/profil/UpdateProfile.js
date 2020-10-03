import React, { useState, useEffect } from "react";
import UpdatePassword from "./UpdatePassword";
import "../../userClass/Auth.css";
import Icon from "@material-ui/core/Icon";
import { Button } from "@material-ui/core";
import { getUserInfoService } from '../../shared/services/userServices/getUserInfoService'

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
    console.log("userId :", userId);
    let response = await getUserInfoService(userId)
    if (response.code === 200) {
      this.setState({
        username: response.data.pseudonyme,
        profileImg: response.data.imageUrl,
        lastname: response.data.familyName,
        firstname: response.data.givenName,
        email: response.data.email,
      })
    } else alert("An error occured")
  }

  componentWillMount () {
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
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  render() {
    const { lastname,firstname, email, profileImg, username } = this.state;
    
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
                <Button className="disketteBouton">
                  <Icon className="savedisket"> save</Icon>
                </Button>
              </div>
              <div>
                <Button type="button" className="penBouton">
                  <Icon className="change-image"> create</Icon>
                </Button>
              </div>
            </form>
          </div>

          <div className="Update_information">
            <h3>Update information</h3>

            <input
              id="username"
              value={username}
              name="username"
              type="text"
              label="Username"
              onChange={this.handleChange}
            />

            <input
              id="email"
              name="email"
              value={email}
              type="text"
              label="Email"
              onChange={this.handleChange}
              />
            <input
              id="firstname"
              value={firstname}
              name="firstname"
              type="text"
              label="Firstname"
              onChange={this.handleChange}
              />

            <input
              id="lastname"
              value={lastname}
              type="text"
              name="lastname"
              label="Lastname"
              onChange={this.handleChange}
             />

            <button>Update information</button>
          </div>
          <UpdatePassword />
        </div>
      </React.Fragment>
    );
  }
};

export default UpdateProfile;