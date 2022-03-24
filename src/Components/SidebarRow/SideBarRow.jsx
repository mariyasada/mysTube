import React from "react";

export const SideBarRow = ({ Icon, title }) => {
  return (
    <div>
      <ul>
        <li className="sidebar-item-with-icon flex-center">
          <Icon className="sidebar-icon" />
          <h2 className="sidebar-item-title">{title}</h2>
        </li>
      </ul>
    </div>
  );
};
