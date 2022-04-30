import React, { useState } from "react";
import toast from "react-hot-toast";
import { usePlayList } from "../../Context";
import { AiOutlinePlusSquare, FaTimes, AiOutlineCheckCircle } from "../Icons";
import "../playListModal/modal.css";

export const Modal = ({ setShowModal, video, setIsOpen }) => {
  const [playlistData, setPlayListData] = useState([]);
  const {
    createPlayList,
    playlistState,
    addVideoToPlayList,
    deleteVideoFromPlayList,
  } = usePlayList();
  const { playList } = playlistState;

  const checkedPlaylist = (e, playlist) => {
    if (e.target.checked) {
      addVideoToPlayList(video, playlist._id, playlist.title);
    } else {
      deleteVideoFromPlayList(video, playlist._id);
    }
    setShowModal(false);
    setIsOpen(false);
  };
  const playlistCreateHandler = (inputvalue) => {
    console.log(inputvalue, "input");
    if (inputvalue.length === 0) {
      toast("please enter something", { icon: "✔️" });
    } else {
      createPlayList(playlistData);
      setPlayListData("");
    }
  };
  return (
    <div className="modal-outer-container">
      <div className="playlist-modal-container flex-center flex-direction-column">
        <span className="title-and-cancel-icon-container flex-center">
          <p>Save to...</p>
          <FaTimes onClick={() => setShowModal(false)} />
        </span>
        <div className="playlist-items-container flex-center flex-direction-column">
          {playList.map((playlist) => {
            return (
              <span className=" playlist-item-with-icon flex-center">
                <input
                  type="checkbox"
                  className="item-checkbox"
                  checked={playlist.videos.some(
                    (item) => item._id === video._id
                  )}
                  onChange={(e) => checkedPlaylist(e, playlist)}
                />
                <li className="playlist-item" key={playlist.title._id}>
                  {playlist.title}
                </li>
              </span>
            );
          })}
        </div>
        <div className="input-and-add-btn-container flex-center">
          <input
            type="text"
            placeholder="create new playlist"
            className="modal-input"
            value={playlistData}
            onChange={(e) => setPlayListData(e.target.value)}
          />
          <AiOutlinePlusSquare
            className="plus-icon"
            onClick={() => {
              console.log(playlistData);
              // if (playlistData === []) {
              //   toast("please enter a data");
              // } else {
              //   createPlayList(playlistData);
              //   setPlayListData("");
              // }
              playlistCreateHandler(playlistData);
            }}
          />
        </div>
      </div>
    </div>
  );
};
