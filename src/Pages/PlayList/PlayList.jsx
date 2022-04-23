import React from "react";
import { LikedVideoCard, Modal, SideBar } from "../../Components";
import "../PlayList/playlist.css";
import { FaTrash } from "../../Components/Icons";
import { useLikedAndWatchLaterVideos, usePlayList } from "../../Context";

export const PlayList = () => {
  const { videoState } = useLikedAndWatchLaterVideos();
  const { playlistState, deleteWholePlayList } = usePlayList();
  const { playList } = playlistState;
  return (
    <div className="playlist-video-with-sidebar-container flex-center">
      <SideBar />
      <div className="playlist-videos-container flex-center flex-direction-column">
        <h2 className="playlist-video-heading">PlayList</h2>
        <hr />
        <div className="playlist-title-and-videos-container">
          {playList.map((playlist) => {
            return (
              <>
                <div className="title-and-delete-icon-container flex-center">
                  <p className="playlist-title">{playlist.title}</p>
                  <FaTrash
                    onClick={() => deleteWholePlayList(playlist._id)}
                    className="trash-icon"
                  />
                </div>
                <div className="videos-of-playlist-container flex-center">
                  {playlist.videos.map((item) => {
                    return (
                      <LikedVideoCard
                        video={item}
                        key={item._id}
                        playlistId={playlist._id}
                      />
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
