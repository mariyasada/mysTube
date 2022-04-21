import React from "react";
import { SideBar, LikedVideoCard } from "../../Components";
import { useLikedAndWatchLaterVideos } from "../../Context";
import "../WatchLaterpage/WatchLaterpage.css";

export const WatchLaterPage = () => {
  const { videoState } = useLikedAndWatchLaterVideos();
  const { watchLaterList } = videoState;
  return (
    <div className="watchlater-video-with-sidebar-container flex-center">
      <SideBar />
      <div className="watchlater-videos-container flex-center flex-direction-column">
        <h2 className="watchlater-video-heading">Watch Later</h2>
        <div className="videos-of-watch-later-container flex-center">
          {watchLaterList.map((video) => {
            return <LikedVideoCard key={video._id} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};
