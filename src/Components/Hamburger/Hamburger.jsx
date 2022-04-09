import React from "react";
import { Link } from "react-router-dom";
import "../Hamburger/Hamburger.css";

export const Hamburger = () => {
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
        <Link to="/" className="hamburger-menu-item">
          Liked Videos
        </Link>
        <Link to="/" className="hamburger-menu-item">
          Watch later
        </Link>
        <Link to="/loginpage" className="hamburger-menu-item">
          Login
        </Link>
      </ul>
    </div>
  );
};
