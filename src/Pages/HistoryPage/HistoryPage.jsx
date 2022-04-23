import React from "react";
import { useLikedAndWatchLaterVideos } from "../../Context";
import { HistoryCard, LikedVideoCard, SideBar } from "../../Components";
import "../HistoryPage/HistoryPage.css";

export const HistoryPage = () => {
  const { videoState, removeAllHistory } = useLikedAndWatchLaterVideos();
  const { historyList } = videoState;
  return (
    <div className="history-video-with-sidebar-container flex-center">
      <SideBar />
      <div className="history-videos-container flex-center flex-direction-column">
        <div className="heading-and-btn-conatiner flex-center">
          <h2 className="history-video-heading">Watched Videos</h2>
          <span>
            <button
              className="btn btn-history border-round"
              onClick={() => removeAllHistory()}
            >
              Clear History
            </button>
          </span>
        </div>
        <div className="videos-of-history-container flex-center">
          {historyList.map((video) => {
            return <HistoryCard key={video._id} video={video} />;
          })}
          {/* <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard /> */}
        </div>
      </div>
    </div>
  );
};