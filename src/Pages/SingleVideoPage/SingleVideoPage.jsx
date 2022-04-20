import React from "react";
import { SideBar, VideoCard } from "../../Components";
import "./singleVideopage.css";
import {
  AiOutlineLike,
  FaBookmark,
  BsDot,
  IoMdShareAlt,
  AiFillDislike,
  MdPlaylistAdd,
  FaRegBookmark,
} from "../../Components/Icons";
import { useLikedAndWatchLaterVideos, useVideos } from "../../Context";
import { useParams } from "react-router-dom";

export const SingleVideoPage = () => {
  const { videos } = useVideos();
  const { videoId } = useParams();
  const {
    addToLikeVideo,
    videoState,
    removeFromLikedVideo,
    addToWatchLaterVideo,
    removeFromWatchLater,
  } = useLikedAndWatchLaterVideos();
  const { likedList, watchLaterList } = videoState;

  let singlevideo = videos.find((video) => video._id === videoId);
  const { title, channelName, categoryName, avatarImage, date, views } =
    singlevideo;
  return (
    <div className="single-video-with-sidebar-container flex-center">
      <SideBar />
      <div className="video-iframe-container">
        <iframe
          width="727"
          height="409"
          src={`https://www.youtube.com/embed/${singlevideo._id}/autoplay=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p className="singlevideopage-title">{title}</p>
        <div className="title-and-icons-container flex-center">
          <div className="owner-category-date-container flex-center flex-direction-column">
            <div className="avatar-and-title-container flex-center">
              <span className="avatar-image-container">
                <img
                  src={avatarImage}
                  className="avatar avatar-xsm single-video-avatar"
                  alt={channelName}
                />
              </span>
              <p className="channel-owner">{channelName}</p>
            </div>
            <div className="cateogory-viwes-conatiner flex-center">
              <p className="category-name">{categoryName}</p>
              <BsDot className="dot-icon" />
              <p className="views-text">{views}</p>
              <BsDot className="dot-icon" />
              <p className="release-date">{date}</p>
            </div>
          </div>
          <div className="video-iframe-icon-container flex-center">
            {likedList.some((item) => item._id === singlevideo._id) ? (
              <AiFillDislike
                className="video-iframe-icon"
                title="like"
                onClick={() => removeFromLikedVideo(singlevideo)}
              />
            ) : (
              <AiOutlineLike
                className="video-iframe-icon"
                title="like"
                onClick={() => addToLikeVideo(singlevideo)}
              />
            )}

            {watchLaterList.some((item) => item._id === singlevideo._id) ? (
              <FaBookmark
                className="video-iframe-icon"
                title="watch later"
                onClick={() => removeFromWatchLater(singlevideo)}
              />
            ) : (
              <FaRegBookmark
                className="video-iframe-icon"
                title="watch later"
                onClick={() => addToWatchLaterVideo(singlevideo)}
              />
            )}
            <MdPlaylistAdd
              className="video-iframe-icon"
              title="save o playlist"
            />
          </div>
        </div>
      </div>
      <div className="single-videopage-videolist flex-center flex-direction-column">
        {videos
          .map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })
          .splice(Math.floor(Math.random() * videos.length), 14)}
      </div>
    </div>
  );
};
