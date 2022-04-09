import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./watchlater.css";

export const WatchLaterBox = () => {
  return (
    <div className="watchlater-likedv-container flex-center flex-direaction-column">
      <ul className="item-container">
        <li className="icon-title-container flex-center">
          <AiOutlinePlusCircle className="icon-md" />
          <p className="item-title">Watch Later</p>
        </li>
        <li className="icon-title-container flex-center">
          <AiOutlinePlusCircle className="icon-md" />
          <p className="item-title">Liked Videos</p>
        </li>
        <li className="icon-title-container flex-center">
          <AiOutlinePlusCircle className="icon-md" />
          <p className="item-title">PlayList</p>
        </li>
      </ul>
    </div>
  );
};
