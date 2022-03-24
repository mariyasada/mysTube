import React from "react";
import { FaHome, FaBookmark } from "react-icons/fa";
import { MdExplore, MdOutlinePlaylistAdd, MdHistory } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import "./SideBar.css";
import { SideBarRow } from "../SidebarRow/SideBarRow";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sidebar-item-container flex-center">
      <ul>
        <Link to="/">
          <li className="sidebar-item-with-icon flex-center ">
            <FaHome className="sidebar-icon" />
            <h2 className="sidebar-item-title">Home</h2>
          </li>
        </Link>

        <Link to="/videopage">
          <li className="sidebar-item-with-icon flex-center ">
            <MdExplore className="sidebar-icon" />
            <h2 className="sidebar-item-title">Explore</h2>
          </li>
        </Link>

        <li className="sidebar-item-with-icon flex-center">
          <MdOutlinePlaylistAdd className="sidebar-icon" />
          <h2 className="sidebar-item-title">PlayList</h2>
        </li>
        <li className="sidebar-item-with-icon flex-center">
          <AiTwotoneLike className="sidebar-icon" />
          <h2 className="sidebar-item-title">Likes</h2>
        </li>
        <li className="sidebar-item-with-icon flex-center">
          <FaBookmark className="sidebar-icon" />
          <h2 className="sidebar-item-title">Watch Later</h2>
        </li>
        <li className="sidebar-item-with-icon flex-center">
          <MdHistory className="sidebar-icon" />
          <h2 className="sidebar-item-title">History</h2>
        </li>
      </ul>
    </div>
  );
};