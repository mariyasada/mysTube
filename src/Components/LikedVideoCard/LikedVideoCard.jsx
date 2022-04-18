import React from "react";
import "../LikedVideoCard/Likevideocard.css";
import {
  BsTrash,
  RiPlayList2Line,
  FaRegBookmark,
  BsThreeDotsVertical,
  AiFillDislike,
} from "../Icons";

export const LikedVideoCard = () => {
  return (
    <div className="liked-video-card-container flex-center">
      <div className="thumbnail-image-conatiner">
        <img
          src="https://ik.imagekit.io/qrhnvir8bf0/videolibararyimages/fBXir9qu91Q-HD_idD_SbjPob.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649502740302"
          alt="image"
          className="thumbanail-image"
        />
        <span className="liked-video-duration">9:00</span>
      </div>
      <div className="liked-video-description-container flex-center flex-direction-column">
        <p className="liked-video-title">
          How to make Resin Photo Frame ✨| step-by-step | tutorial | DIY
          Anniversary Gift | Aara Vlogs
        </p>
        <p className="liked-video-channelname">Aesthetic Hues</p>
        <div className="liked-video-icons-container flex-center">
          <AiFillDislike className="liked-video-icons" />
          <RiPlayList2Line className="liked-video-icons" />
          <FaRegBookmark className="liked-video-icons" />
          {/* <BsThreeDotsVertical className="liked-video-icons" /> */}
        </div>
      </div>
    </div>
  );
};
