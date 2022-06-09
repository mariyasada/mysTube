import React from "react";
import { LikedVideoCard, SideBar, Loader } from "../../Components";
import { useLikedAndWatchLaterVideos, useVideos } from "../../Context";
import "../LikedVideoPage/Likevideopage.css";

export const LikeVideoPage = () => {
  const { videoState } = useLikedAndWatchLaterVideos();
  const { likedList } = videoState;
  const { isLoading } = useVideos();
  return (
    <div className="liked-video-with-sidebar-container flex-center">
      <SideBar />
      <div className="liked-videos-container flex-center flex-direction-column">
        <h2 className="liked-video-heading">Liked Videos</h2>
        <div className="videos-container flex-center">
          {likedList.length === 0 ? (
            <h1 className="msg-for-user">You have not liked any video.</h1>
          ) : (
            likedList.map((video) => {
              return <LikedVideoCard key={video.id} video={video} />;
            })
          )}
        </div>
      </div>
      {isLoading && (
        <div className="loader">
          <Loader />
        </div>
      )}
    </div>
  );
};
