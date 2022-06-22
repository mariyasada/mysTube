import React from "react";
import { FilterBar, SideBar, VideoCard, Loader } from "../../Components";
import { useVideos } from "../../Context";
import "./VideoListPage.css";

export const VideoListPage = () => {
  const { videos, setVideos, FilteredData, FinalFilteredData, isLoading } =
    useVideos();
  return (
    <div className="Video-page-list-container flex-center">
      <SideBar />
      <div className="filter-video-container flex-center flex-direction-column">
        <FilterBar />
        {isLoading && (
          <div className="loader">
            <Loader />
          </div>
        )}
        <div className="Videocard-listing-grid-column-layout">
          {FinalFilteredData.length === 0 ? (
            <h1 className="msg-for-user">Not found any videos.</h1>
          ) : (
            FinalFilteredData.map((video) => {
              return <VideoCard video={video} key={video._id} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};
