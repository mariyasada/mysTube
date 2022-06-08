import React, { useState, useEffect } from "react";
import { SideBar, VideoCard, Modal, Loader } from "../../Components";
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
import { useAuth, useLikedAndWatchLaterVideos, useVideos } from "../../Context";
import { useParams } from "react-router-dom";
import axios from "axios";

export const SingleVideoPage = () => {
  const { videos, isLoading } = useVideos();
  const { videoId } = useParams();
  const {
    addToLikeVideo,
    videoState,
    removeFromLikedVideo,
    addToWatchLaterVideo,
    removeFromWatchLater,
    addVideoToHistory,
  } = useLikedAndWatchLaterVideos();
  const { likedList, watchLaterList } = videoState;

  const singleVideo = videos?.find((video) => video._id === videoId);

  const [showModal, setShowModal] = useState(false);
  const [listofComments, setListofComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const {
    user: { userName },
  } = useAuth();

  const postACommentHandler = (inputvalue) => {
    setListofComments((prevdata) => [...prevdata, inputvalue]);
    console.log(listofComments);
    setCommentInput("");
  };
  return (
    <div className="single-video-with-sidebar-container flex-center">
      <SideBar />
      <div className="video-iframe-container">
        <iframe
          onLoad={() => addVideoToHistory(singleVideo)}
          width="727"
          height="409"
          src={`https://www.youtube.com/embed/${singleVideo?._id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <p className="singlevideopage-title">{singleVideo?.title}</p>
        <div className="title-and-icons-container flex-center">
          <div className="owner-category-date-container flex-center flex-direction-column">
            <div className="avatar-and-title-container flex-center">
              <span className="avatar-image-container">
                <img
                  src={singleVideo?.avatarImage}
                  className="avatar avatar-xsm single-video-avatar"
                  alt={singleVideo?.channelName}
                />
              </span>
              <p className="channel-owner">{singleVideo?.channelName}</p>
            </div>
            <div className="cateogory-viwes-conatiner flex-center">
              <p className="category-name">{singleVideo?.categoryName}</p>
              <BsDot className="dot-icon" />
              <p className="views-text">{singleVideo?.views}</p>
              <BsDot className="dot-icon" />
              <p className="release-date">{singleVideo?.date}</p>
            </div>
          </div>
          <div className="video-iframe-icon-container flex-center">
            {likedList.some((item) => item._id === singleVideo._id) ? (
              <AiFillDislike
                className="video-iframe-icon"
                title="like"
                onClick={() => removeFromLikedVideo(singleVideo)}
              />
            ) : (
              <AiOutlineLike
                className="video-iframe-icon"
                title="like"
                onClick={() => addToLikeVideo(singleVideo)}
              />
            )}

            {watchLaterList.some((item) => item._id === singleVideo._id) ? (
              <FaBookmark
                className="video-iframe-icon"
                title="watch later"
                onClick={() => removeFromWatchLater(singleVideo)}
              />
            ) : (
              <FaRegBookmark
                className="video-iframe-icon"
                title="watch later"
                onClick={() => addToWatchLaterVideo(singleVideo)}
              />
            )}
            <MdPlaylistAdd
              className="video-iframe-icon"
              title="save to playlist"
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>
        <div className="comment-section-part flex-center flex-direction-column">
          <h3 className="comment-section-heading">Add a Comment</h3>
          <div className="input-and-comment-btn-container flex-center">
            <input
              type="text"
              className="input-for-comment input-textbox"
              placeholder="Add Comment......"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />
            <button
              className="btn btn-for-comment"
              onClick={() => postACommentHandler(commentInput)}
            >
              Post
            </button>
          </div>
          {listofComments.map((comment, index) => {
            return (
              <>
                <div
                  className="list-of-comment-section flex-center flex-direction-column"
                  key={index}
                >
                  <h4 className="user-name-section">{userName}</h4>
                  <p className="comment">{comment}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="single-videopage-videolist flex-center flex-direction-column">
        {videos
          .map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })
          .splice(Math.floor(Math.random() * videos.length), 14)}
      </div>
      {showModal && (
        <Modal
          className="playlist-modal-container"
          setShowModal={setShowModal}
          video={singleVideo}
        />
      )}
      {isLoading && (
        <div className="loader">
          <Loader />
        </div>
      )}
    </div>
  );
};
