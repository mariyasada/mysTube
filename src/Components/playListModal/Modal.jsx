import React, { useState } from "react";
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
                  onChange={(e) => {
                    if (e.target.checked) {
                      addVideoToPlayList(video, playlist._id, playlist.title);
                      setShowModal(false);
                      setIsOpen(false);
                    } else {
                      deleteVideoFromPlayList(video, playlist._id);
                      setShowModal(false);
                      setIsOpen(false);
                    }
                  }}
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
              createPlayList(playlistData);
              setPlayListData("");
            }}
          />
        </div>
      </div>
    </div>
  );
};
