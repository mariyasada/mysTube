import React from "react";
import "../LikedVideoCard/Likevideocard.css";
import {
  BsTrash,
  RiPlayList2Line,
  FaRegBookmark,
  BsThreeDotsVertical,
  AiFillDislike,
  AiOutlineLike,
  FaBookmark,
} from "../Icons";
import { useLikedAndWatchLaterVideos } from "../../Context";
import { Link, useLocation } from "react-router-dom";

export const LikedVideoCard = ({ video }) => {
  const {
    videoState,
    removeFromLikedVideo,
    addToWatchLaterVideo,
    removeFromWatchLater,
    addToLikeVideo,
  } = useLikedAndWatchLaterVideos();
  const { likedList, watchLaterList } = videoState;
  const pathname = useLocation();

  return (
    <div className="liked-video-card-container flex-center">
      <div className="thumbnail-image-conatiner">
        <Link to={`/video/${video._id}`}>
          <img src={video.thumbnail} alt="image" className="thumbanail-image" />
        </Link>
        <span className="liked-video-duration">{video.duration}</span>
      </div>
      <div className="liked-video-description-container flex-center flex-direction-column">
        <p className="liked-video-title">{video.title}</p>
        <p className="liked-video-channelname">{video.channelName}</p>
        <div className="liked-video-icons-container flex-center">
          {likedList.some((item) => item._id === video._id) ? (
            <AiFillDislike
              className="liked-video-icons"
              title="Dislike"
              onClick={() => removeFromLikedVideo(video)}
            />
          ) : (
            <AiOutlineLike
              className="liked-video-icons"
              title="like"
              onClick={() => addToLikeVideo(video)}
            />
          )}
          <RiPlayList2Line className="liked-video-icons" />

          {watchLaterList.some((item) => item._id === video._id) ? (
            <FaBookmark
              className="liked-video-icons"
              onClick={() => removeFromWatchLater(video)}
            />
          ) : (
            <FaRegBookmark
              className="liked-video-icons"
              onClick={() => addToWatchLaterVideo(video)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
