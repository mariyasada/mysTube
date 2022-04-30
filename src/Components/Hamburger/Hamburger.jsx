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
  FaUserCircle,
} from "../Icons";
import { sidebarOption } from "../SideBar/sidebarConstants";

export const Hamburger = () => {
  const { logOutHandler, user } = useAuth();
  const { loginStatus } = user;
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
  });
  return (
    <div>
      <ul className="hamburger-menu-container">
        {sidebarOption.map(({ path, Icon, name }) => {
          return (
            <NavLink
              to={`${path}`}
              className="hamburger-menu-item"
              style={getActiveStyle}
              key={name}
            >
              <li className="hamburger-item flex-center">
                <Icon.type />
                {name}
              </li>
            </NavLink>
          );
        })}
        {loginStatus && (
          <NavLink
            to="/profilepage"
            className="hamburger-menu-item"
            style={getActiveStyle}
          >
            <li className="hamburger-item flex-center">
              <FaUserCircle />
              Profile
            </li>
          </NavLink>
        )}
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
