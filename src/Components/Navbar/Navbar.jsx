import React from "react";
import "../Navbar/navbar.css";
import { FiMenu } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

export const NavBar = () => {
  return (
    <div className="Header-container flex-center">
      <div className="header-left-logo flex-center">
        <FiMenu className="menu-icon" />
        <img
          className="image-logo"
          src="./assets/logo-blue.png"
          alt="mt-logo"
        />
        <div className="nav-items flex-center">
          <span className="nav-item">Explore</span>
          <span className="nav-item">PlayList</span>
        </div>
      </div>

      <div className="Header-input-center flex-center border-round">
        <BsSearch className="search-icon" />
        <input type="text" className="input-searchbox" placeholder="Search" />
      </div>

      <div className="Header-nav-icon-right">
        <span className="icon-with-title">
          <FaUserAlt className="header-icon" title="logIn" />
          <p className="title">LogIn</p>
        </span>
      </div>
    </div>
  );
};
