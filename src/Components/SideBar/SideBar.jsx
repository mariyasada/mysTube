import React from "react";
import {
  FaHome,
  FaBookmark,
  MdExplore,
  MdOutlinePlaylistAdd,
  MdHistory,
  FaUserCircle,
} from "../Icons";
import { AiTwotoneLike } from "react-icons/ai";
import "./SideBar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../Context";
import { sidebarOption } from "./sidebarConstants";

export const SideBar = () => {
  const {
    user: { loginStatus },
  } = useAuth();
  const getActiveStyleLink = ({ isActive }) => ({
    color: isActive ? "white" : "",
    background: isActive ? "#7b19f7" : "",
  });
  return (
    <aside className="sidebar-item-container flex-center">
      <ul>
        {sidebarOption.map(({ path, name, Icon }) => {
          return (
            <NavLink
              to={`${path}`}
              key={name}
              className="sidebar-item-with-icon flex-center"
              style={getActiveStyleLink}
            >
              <Icon.type className="sidebar-icon" />
              <h2 className="sidebar-item-title">{name}</h2>
            </NavLink>
          );
        })}

        {loginStatus ? (
          <NavLink
            to="/profilepage"
            className="sidebar-item-with-icon flex-center"
            style={getActiveStyleLink}
          >
            <FaUserCircle className="sidebar-icon" />
            <h2 className="sidebar-item-title">Profile</h2>
          </NavLink>
        ) : null}
      </ul>
    </aside>
  );
};
