import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context";
import "../Hamburger/Hamburger.css";

export const Hamburger = () => {
  const { logOutHandler, user } = useAuth();
  const { loginStatus } = user;
  return (
    <div>
      <ul className="hamburger-menu-container">
        <Link to="/" className="hamburger-menu-item">
          Home
        </Link>
        <Link to="/videopage" className="hamburger-menu-item">
          Explore
        </Link>
        <Link to="/" className="hamburger-menu-item">
          PlayList
        </Link>
        <Link to="/likevideopage" className="hamburger-menu-item">
          Liked Videos
        </Link>
        <Link to="/watchlater" className="hamburger-menu-item">
          Watch later
        </Link>
        <Link to="/history" className="hamburger-menu-item">
          History
        </Link>
        {loginStatus ? (
          <Link to="/" className="hamburger-menu-item" onClick={logOutHandler}>
            logOut
          </Link>
        ) : (
          <Link to="/loginpage" className="hamburger-menu-item">
            logIn
          </Link>
        )}
      </ul>
    </div>
  );
};
