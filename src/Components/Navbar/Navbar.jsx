import React from "react";
import "../Navbar/navbar.css";
import { FiMenu } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { Hamburger } from "../index";
import "../Hamburger/Hamburger.css";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const getActiveLink = ({ isActive }) => ({
    color: isActive ? "red" : "#603d8f",
  });
  const [open, setOpen] = useState(false);

  return (
    <div className="Header-container flex-center">
      <div className="header-left-logo flex-center">
        <div className="menu-icon">
          {open ? (
            <GiCancel className="menu-icon" onClick={() => setOpen(!open)} />
          ) : (
            <FiMenu className="menu-icon" onClick={() => setOpen(!open)} />
          )}
        </div>
        <NavLink to="/">
          <img className="image-logo" src="./assets/logo.png" alt="mt-logo" />
        </NavLink>
        <div className="flex-center nav-items-container">
          <ul className="nav-items">
            <NavLink to="/videopage" style={getActiveLink} className="nav-item">
              Explore
            </NavLink>
            <NavLink to="/" style={getActiveLink} className="nav-item">
              PlayList
            </NavLink>
          </ul>
        </div>
      </div>

      <div className="Header-input-center flex-center border-round">
        <BsSearch className="search-icon" />
        <input type="text" className="input-searchbox" placeholder="Search" />
      </div>

      <div className="Header-nav-icon-right">
        <span className="icon-with-title">
          <NavLink to="/loginpage">
            <FaUserAlt className="header-icon" title="logIn" />
            <p className="title">LogIn</p>
          </NavLink>
        </span>
      </div>
      {open && <Hamburger className="hamburger-menu-container" />}
    </div>
  );
};
