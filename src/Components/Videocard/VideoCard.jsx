import React from "react";
import "./VideoCard.css";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { WatchLaterBox } from "../../Components/index";
import { useState } from "react";
import "../../Components/popupbox/watchlater.css";

export const VideoCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="video-card-container flex-center">
      <div className="image-conatiner">
        <img
          className="image-of-video"
          src="./assets/costers1.jpg"
          alt="video-image"
        />
      </div>
      <div className="video-description-container flex-center">
        <span className="avatar-image-container">
          <img
            src="./assets/costers1.jpg"
            className="avatar avatar-xsm"
            alt="avatar-sm-image"
          />
        </span>
        <span className="duration">9:01</span>
        <div className="video-title-autor-detail-container flex-center">
          <p className="title-of-video">How to setup for resin Art</p>
          <p className="Channel-name">resin art</p>
          <div className="category-level-container flex-center">
            <p className="category-text">Resin art</p>
            {/* <p className="level-of-video flex-center"> */}
            <BsDot className="dot-icon" />
            <p className="Video-date">1 April 2019</p>
            <BsDot className="dot-icon" />
            <p>46k views</p>
            {/* </p> */}
          </div>
        </div>
        <div className="more-info-dots-container">
          <BsThreeDotsVertical
            className="three-dot-icon"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
        </div>
      </div>
      {isOpen && (
        <WatchLaterBox className="watchlater-likedv-container flex-center flex-direaction-column border-round" />
      )}
    </div>
  );
};
