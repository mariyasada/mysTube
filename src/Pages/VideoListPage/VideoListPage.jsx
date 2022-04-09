import React from "react";
import { FilterBar, SideBar, VideoCard } from "../../Components";
import "./VideoListPage.css";

export const VideoListPage = () => {
  return (
    <div className="Video-page-list-container flex-center">
      <SideBar />
      <div className="filter-video-container flex-center flex-direction-column">
        <FilterBar />
        <div className="Videocard-listing-grid-column-layout">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
};
