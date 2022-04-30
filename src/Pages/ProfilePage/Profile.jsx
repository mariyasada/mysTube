import React from "react";
import { SideBar } from "../../Components";
import { useAuth } from "../../Context";
import "../ProfilePage/profile.css";

export const Profile = () => {
  const { user, logOutHandler } = useAuth();
  return (
    <div className="profile-with-sidebar-container flex-center">
      <SideBar />
      <div className="profile-data-with-btn-container flex-center flex-direction-column">
        <h2 className="profile-heading">My Profile</h2>
        <div className="users-email-name-container flex-center border-round">
          <div className="my-profile-text">
            <p className="profile-text">Profile</p>
          </div>
          <div className="profile flex-center flex-direction-column">
            <p className="username_holder">Name:</p>
            <p className="user_email">{user.userName}</p>
            <div className="email-container flex-center flex-direction-column">
              <p className="username_holder">Email:</p>
              <p className="user_email">{user.email}</p>
            </div>
          </div>
          <div className="logout-btn-container">
            <span>
              <button
                className="btn btn-history border-round"
                onClick={logOutHandler}
              >
                Logout
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
