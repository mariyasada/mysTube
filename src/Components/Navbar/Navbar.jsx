import React, { useState } from "react";
import "../Navbar/navbar.css";
import {
  FiMenu,
  FaUserAlt,
  BsSearch,
  GiCancel,
  FiLogOut,
  FaRegSun,
  FaMoon,
} from "../Icons";
import { Hamburger } from "../index";
import "../Hamburger/Hamburger.css";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth, useVideos } from "../../Context";
import { reducerTypes } from "../../Context/Reducer/reducertype";

export const NavBar = () => {
  const { state, dispatch } = useVideos();
  const [open, setOpen] = useState(false);
  const { logOutHandler, user } = useAuth();
  const { loginStatus } = user;
  const { pathname } = useLocation();

  const getActiveLink = ({ isActive }) => ({
    color: isActive ? "red" : "#603d8f",
  });

  return (
    <div className="Header-container  flex-center">
      <div className="header-left-logo flex-center">
        <div className="menu-icon">
          {open ? (
            <GiCancel className="menu-icon" onClick={() => setOpen(!open)} />
          ) : (
            <FiMenu className="menu-icon" onClick={() => setOpen(!open)} />
          )}
        </div>
        <NavLink to="/">
          <img className="image-logo" src="/assets/logo1.png" alt="mt-logo" />
        </NavLink>
        <div className="flex-center nav-items-container">
          <ul className="nav-items">
            <NavLink to="/videopage" style={getActiveLink} className="nav-item">
              Explore
            </NavLink>
            <NavLink to="/playlist" style={getActiveLink} className="nav-item">
              PlayList
            </NavLink>
          </ul>
        </div>
      </div>

      {pathname === "/videopage" && (
        <div className="Header-input-center flex-center border-round">
          <BsSearch className="search-icon" />
          <input
            type="text"
            className="input-searchbox"
            placeholder="Search"
            onChange={(e) =>
              dispatch({
                type: reducerTypes.SEARCH_BY_QUERY,
                payload: e.target.value,
              })
            }
          />
        </div>
      )}

      <div className="Header-nav-icon-right flex-center">
        <span className="icon-with-title">
          <NavLink to="/loginpage">
            {loginStatus ? (
              <FiLogOut
                className="header-icon"
                title="logOut"
                onClick={(e) => {
                  e.preventDefault(), logOutHandler();
                }}
              />
            ) : (
              <FaUserAlt className="header-icon" title="logIn" />
            )}
            <p className="title-login">{loginStatus ? "Logout" : "Login"}</p>
          </NavLink>
        </span>
      </div>
      {open && <Hamburger className="hamburger-menu-container" />}
    </div>
  );
};
