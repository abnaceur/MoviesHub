import React from "react";
import "../Auth.css";
import "../../App.css";
import "./Profile.css";
import Icon from "@material-ui/core/Icon";

const UpdateProfile = () => {
  const profile = {
    username: "Melchior",
    lastname: "Bengtsson",
  };
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
          <form action="#">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder={profile.username} />
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
            <button>Update information</button>
          </form>
        </div>

        <div className="Update_password">
          <h3>Update password</h3>
          <form action="#">
            <input type="text" placeholder="My Password" />
            <input type="text" placeholder="My New Password" />
            <input type="text" placeholder="Repeat Password" />
            <button>Update Password</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdateProfile;
