import React from "react";
import "./VideoCard.css";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { WatchLaterBox } from "../../Components/index";
import { useState } from "react";
import "../../Components/popupbox/watchlater.css";
import { Link, useNavigate } from "react-router-dom";

export const VideoCard = ({ video }) => {
  const {
    _id,
    title,
    channelName,
    thumbnail,
    views,
    date,
    duration,
    avatarImage,
    categoryName,
  } = video;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="video-card-container flex-center">
      <div className="image-conatiner">
        <Link to={`/video/${_id}`}>
          <img className="image-of-video" src={thumbnail} alt={title} />
        </Link>
      </div>
      <div className="video-description-container flex-center">
        <span className="avatar-image-container">
          <img
            src={avatarImage}
            className="avatar avatar-xsm"
            alt={channelName}
          />
        </span>
        <span className="duration">{duration}</span>
        <div className="video-title-autor-detail-container flex-center">
          <p className="title-of-video">{title}</p>
          <p className="Channel-name">{channelName}</p>
          <div className="category-level-container flex-center">
            <p className="category-text">{categoryName}</p>
            <BsDot className="dot-icon" />
            <p className="Video-date">{date}</p>
            <BsDot className="dot-icon" />
            <p>{views}</p>
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
        <WatchLaterBox
          className="watchlater-likedv-container flex-center flex-direaction-column border-round"
          video={video}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};
