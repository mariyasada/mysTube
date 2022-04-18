import React from "react";
import { LikedVideoCard, SideBar } from "../../Components";
import "../LikedVideoPage/Likevideopage.css";

export const LikeVideoPage = () => {
  return (
    <div className="liked-video-with-sidebar-container flex-center">
      <SideBar />
      <div className="liked-videos-container flex-center flex-direction-column">
        <h2 className="liked-video-heading">Liked Videos</h2>
        <div className="videos-container flex-center">
          <LikedVideoCard />
          <LikedVideoCard />
          <LikedVideoCard />
          <LikedVideoCard />
          <LikedVideoCard />
          <LikedVideoCard />
          <LikedVideoCard />
          <LikedVideoCard />
        </div>
      </div>
    </div>
  );
};
