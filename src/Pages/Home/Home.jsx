import React from "react";
import "../Home/Home.css";

export const Home = () => {
  return (
    <div className="home-content-container flex-center">
      <div className="banner-image-container flex-center">
        <img
          src="./assets/banner.jpg"
          alt="banner-image"
          className="banner-image"
        />
        <div className="quote-container">
          <span className="quote">
            <em>
              Art is where work meets love.Let's explore and feel the beauty of
              art with us.
            </em>
            <span className="button-container">
              <button className="btn btn-primary">Explore Now</button>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
