import React from "react";
import "../Navbar/navbar.css";
import { FiMenu } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { Hamburger } from "../index";
import "../Hamburger/Hamburger.css";

export const NavBar = () => {
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
        <img
          className="image-logo"
          src="./assets/logo-blue.png"
          alt="mt-logo"
        />
        <div className="flex-center nav-items-container">
          <ul className="nav-items">
            <li className="nav-item">Explore</li>
            <li className="nav-item">PlayList</li>
          </ul>
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
      {open && <Hamburger className="hamburger-menu-container" />}
    </div>
  );
};
