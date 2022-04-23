import React, { useState } from "react";
import {
  useAuth,
  useLikedAndWatchLaterVideos,
  usePlayList,
} from "../../Context";
import {
  MdOutlineWatchLater,
  AiFillLike,
  RiPlayList2Line,
  AiFillDislike,
  CgPlayListRemove,
} from "../Icons";
import "./watchlater.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Modal } from "../playListModal/Modal";
import "../playListModal/modal.css";

export const WatchLaterBox = ({ video }) => {
  const {
    addToLikeVideo,
    videoState,
    removeFromLikedVideo,
    addToWatchLaterVideo,
    removeFromWatchLater,
  } = useLikedAndWatchLaterVideos();
  const {
    user: { loginStatus },
  } = useAuth();
  const { playlistState } = usePlayList();
  const { likedList, watchLaterList } = videoState;
  const { playList } = playlistState;
  console.log(playlistState, "watch");
  const navigate = useNavigate();
  const [isShowModal, setShowModal] = useState(false);
  return (
    <div className="watchlater-likedv-container flex-center flex-direaction-column">
      <ul className="item-container">
        {watchLaterList.some((item) => item._id === video._id) ? (
          <li
            className="icon-title-container flex-center"
            onClick={() => removeFromWatchLater(video)}
          >
            <MdOutlineWatchLater className="icon-md" />
            <p className="item-title">Remove from Watch Later</p>
          </li>
        ) : (
          <li
            className="icon-title-container flex-center"
            onClick={() => {
              if (loginStatus) {
                addToWatchLaterVideo(video);
              } else {
                toast("please login to continue", { icon: "✔️" });
                navigate("/loginpage");
              }
            }}
          >
            <MdOutlineWatchLater className="icon-md" />
            <p className="item-title"> Watch Later</p>
          </li>
        )}
        {likedList.some((item) => item._id === video._id) ? (
          <li
            className="icon-title-container flex-center"
            onClick={() => removeFromLikedVideo(video)}
          >
            <AiFillDislike className="icon-md" />
            <p className="item-title">Remove from Liked Videos</p>
          </li>
        ) : (
          <li
            className="icon-title-container flex-center"
            onClick={() => {
              if (loginStatus) {
                addToLikeVideo(video);
              } else {
                navigate("/loginpage"),
                  toast("please login to continue", { icon: "✔️" });
              }
            }}
          >
            <AiFillLike className="icon-md" />
            <p className="item-title">Liked Videos</p>
          </li>
        )}
        <li
          className="icon-title-container flex-center"
          onClick={() => {
            if (loginStatus) {
              setShowModal(true);
            } else {
              navigate("/loginpage"),
                toast("please login to continue", { icon: "✔️" });
            }
          }}
        >
          <RiPlayList2Line className="icon-md" />
          <p className="item-title"> PlayList</p>
        </li>

        {isShowModal && (
          <Modal
            className="playlist-modal-container"
            setShowModal={setShowModal}
            video={video}
          />
        )}
      </ul>
    </div>
  );
};
