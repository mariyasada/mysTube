import React, { useState } from "react";
import "../LikedVideoCard/Likevideocard.css";
import {
  RiPlayList2Line,
  FaRegBookmark,
  AiFillDislike,
  AiOutlineLike,
  FaBookmark,
  CgPlayListRemove,
} from "../Icons";
import { useLikedAndWatchLaterVideos, usePlayList } from "../../Context";
import { Link, useLocation } from "react-router-dom";
import { Modal } from "../playListModal/Modal";

export const LikedVideoCard = ({ video, playlistId }) => {
  const {
    videoState,
    removeFromLikedVideo,
    addToWatchLaterVideo,
    removeFromWatchLater,
    addToLikeVideo,
  } = useLikedAndWatchLaterVideos();
  const { likedList, watchLaterList } = videoState;
  const pathname = useLocation();
  const [isShowModal, setShowModal] = useState(false);
  const { playlistState, deleteVideoFromPlayList } = usePlayList();
  const { playList } = playlistState;

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
          {playList.map((playlist) =>
            playlist.videos.some((item) => item._id === video._id)
          ) ? (
            <CgPlayListRemove
              className="liked-video-icons"
              onClick={() => deleteVideoFromPlayList(video, playlistId)}
            />
          ) : (
            <RiPlayList2Line
              className="liked-video-icons"
              onClick={() => setShowModal(true)}
            />
          )}
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
        {isShowModal && (
          <Modal
            className="playlist-modal-container"
            setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  );
};
