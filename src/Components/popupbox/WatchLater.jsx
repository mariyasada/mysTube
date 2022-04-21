import React from "react";
import { useAuth, useLikedAndWatchLaterVideos } from "../../Context";
import {
  MdOutlineWatchLater,
  AiFillLike,
  RiPlayList2Line,
  AiFillDislike,
} from "../Icons";
import "./watchlater.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
  const { likedList, watchLaterList } = videoState;
  const navigate = useNavigate();
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

        <li className="icon-title-container flex-center">
          <RiPlayList2Line className="icon-md" />
          <p className="item-title">PlayList</p>
        </li>
      </ul>
    </div>
  );
};
