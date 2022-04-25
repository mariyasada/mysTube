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

export const WatchLaterBox = ({ video, setIsOpen }) => {
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
  const navigate = useNavigate();
  const [isShowModal, setShowModal] = useState(false);

  const checkStatusForLikedVideo = () => {
    if (loginStatus) {
      addToLikeVideo(video);
      setIsOpen(false);
    } else {
      navigate("/loginpage"), toast("please login to continue", { icon: "✔️" });
    }
  };
  const checkStatusForWatchLaterVideo = () => {
    if (loginStatus) {
      addToWatchLaterVideo(video);
      setIsOpen(false);
    } else {
      toast("please login to continue", { icon: "✔️" });
      navigate("/loginpage");
    }
  };
  return (
    <div className="watchlater-likedv-container flex-center flex-direaction-column">
      <ul className="item-container">
        {watchLaterList.some((item) => item._id === video._id) ? (
          <li
            className="icon-title-container flex-center"
            onClick={() => {
              removeFromWatchLater(video), setIsOpen(false);
            }}
          >
            <MdOutlineWatchLater className="icon-md" />
            <p className="item-title">Remove from Watch Later</p>
          </li>
        ) : (
          <li
            className="icon-title-container flex-center"
            onClick={checkStatusForWatchLaterVideo}
          >
            <MdOutlineWatchLater className="icon-md" />
            <p className="item-title"> Watch Later</p>
          </li>
        )}
        {likedList.some((item) => item._id === video._id) ? (
          <li
            className="icon-title-container flex-center"
            onClick={() => {
              removeFromLikedVideo(video), setIsOpen(false);
            }}
          >
            <AiFillDislike className="icon-md" />
            <p className="item-title">Remove from Liked Videos</p>
          </li>
        ) : (
          <li
            className="icon-title-container flex-center"
            onClick={checkStatusForLikedVideo}
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
          <p className="item-title">Create PlayList</p>
        </li>

        {isShowModal && (
          <Modal
            className="playlist-modal-container"
            setShowModal={setShowModal}
            video={video}
            setIsOpen={setIsOpen}
          />
        )}
      </ul>
    </div>
  );
};
