import React from "react";
import { FaHome, FaBookmark } from "react-icons/fa";
import { MdExplore, MdOutlinePlaylistAdd, MdHistory } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import "./SideBar.css";
import { SideBarRow } from "../SidebarRow/SideBarRow";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const SideBar = () => {
  const getActiveStyleLink = ({ isActive }) => ({
    color: isActive ? "white" : "black",
    background: isActive ? "#7b19f7" : "#7b89e6",
  });
  return (
    <div className="sidebar-item-container flex-center">
      <ul>
        <NavLink to="/">
          <li className="sidebar-item-with-icon flex-center ">
            <FaHome className="sidebar-icon" />
            <h2 className="sidebar-item-title">Home</h2>
          </li>
        </NavLink>

        <NavLink
          to="/videopage"
          style={getActiveStyleLink}
          className="sidebar-item-with-icon flex-center"
        >
          <MdExplore className="sidebar-icon" />
          <h2 className="sidebar-item-title">Explore</h2>
        </NavLink>

        <NavLink to="/" className="sidebar-item-with-icon flex-center">
          <MdOutlinePlaylistAdd className="sidebar-icon" />
          <h2 className="sidebar-item-title">PlayList</h2>
        </NavLink>

        <NavLink to="/" className="sidebar-item-with-icon flex-center">
          <AiTwotoneLike className="sidebar-icon" />
          <h2 className="sidebar-item-title">Liked Video</h2>
        </NavLink>

        <NavLink to="/" className="sidebar-item-with-icon flex-center">
          <FaBookmark className="sidebar-icon" />
          <h2 className="sidebar-item-title">Watch Later</h2>
        </NavLink>

        <NavLink to="" className="sidebar-item-with-icon flex-center">
          <MdHistory className="sidebar-icon" />
          <h2 className="sidebar-item-title">History</h2>
        </NavLink>
      </ul>
    </div>
  );
};
