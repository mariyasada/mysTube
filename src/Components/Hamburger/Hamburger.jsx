import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../Context";
import "../Hamburger/Hamburger.css";
import "../SideBar/SideBar.css";
import {
  FaHome,
  FaBookmark,
  MdExplore,
  MdOutlinePlaylistAdd,
  MdHistory,
  MdPlaylistAdd,
  AiOutlineLike,
  FiLogOut,
  FaUserAlt,
} from "../Icons";

export const Hamburger = () => {
  const { logOutHandler, user } = useAuth();
  const { loginStatus } = user;
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
  });
  return (
    <div>
      <ul className="hamburger-menu-container">
        <NavLink to="/" className="hamburger-menu-item" style={getActiveStyle}>
          <li className="hamburger-item flex-center">
            <FaHome />
            Home
          </li>
        </NavLink>
        <NavLink
          to="/videopage"
          className="hamburger-menu-item"
          style={getActiveStyle}
        >
          <li className="hamburger-item flex-center">
            <MdExplore />
            Explore
          </li>
        </NavLink>
        <NavLink
          to="/playlist"
          className="hamburger-menu-item"
          style={getActiveStyle}
        >
          <li className="hamburger-item flex-center">
            <MdPlaylistAdd />
            PlayList
          </li>
        </NavLink>
        <NavLink
          to="/likevideopage"
          className="hamburger-menu-item"
          style={getActiveStyle}
        >
          <li className="hamburger-item flex-center">
            <AiOutlineLike />
            Liked Videos
          </li>
        </NavLink>
        <NavLink
          to="/watchlater"
          className="hamburger-menu-item"
          style={getActiveStyle}
        >
          <li className="hamburger-item flex-center">
            <FaBookmark />
            Watch later
          </li>
        </NavLink>
        <NavLink
          to="/history"
          className="hamburger-menu-item"
          style={getActiveStyle}
        >
          <li className="hamburger-item flex-center">
            <MdHistory />
            History
          </li>
        </NavLink>
        {loginStatus ? (
          <NavLink
            to="/"
            className="hamburger-menu-item"
            onClick={logOutHandler}
          >
            <li className="hamburger-item flex-center">
              <FiLogOut />
              logOut
            </li>
          </NavLink>
        ) : (
          <NavLink
            to="/loginpage"
            className="hamburger-menu-item"
            style={getActiveStyle}
          >
            <li className="hamburger-item flex-center">
              <FaUserAlt />
              login
            </li>
          </NavLink>
        )}
      </ul>
    </div>
  );
};
