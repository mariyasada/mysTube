import React from "react";
import "../LikedVideoCard/Likevideocard.css";
import { BsTrash } from "../Icons";
import { useLikedAndWatchLaterVideos, useVideos } from "../../Context";
import { Link, useLocation } from "react-router-dom";
import "../LikedVideoCard/Likevideocard.css";
import { Loader } from "../Loader/Loader";

export const HistoryCard = ({ video }) => {
  const { removeVideoFromHistory } = useLikedAndWatchLaterVideos();
  const { isLoading } = useVideos();
  return (
    <div className="horizontal-card flex-center">
      <div className="thumbnail-image-conatiner">
        <Link to={`/video/${video._id}`}>
          <img src={video.thumbnail} alt="image" className="thumbanail-image" />
        </Link>
        <span className="liked-video-duration">{video.duration}</span>
      </div>
      <div className="liked-video-description-container flex-center flex-direction-column">
        <p className="liked-video-title">{video.title}</p>
        <p className="liked-video-channelname">{video.channelName}</p>
        <div className="history-video-icons-container  flex-center">
          <BsTrash
            className="liked-video-icons"
            title="remove from history"
            onClick={() => removeVideoFromHistory(video)}
          />
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
