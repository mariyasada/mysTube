import React from "react";
import { useNavigate } from "react-router-dom";
import { Categories, Footer, ImageSlider } from "../../Components";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-content-container flex-center">
      <div className="banner-image-container flex-center">
        <ImageSlider />

        <div className="quote-container">
          <span className="quote">
            <em>
              Art is where work meets love.Let's explore and feel the beauty of
              art with us.
            </em>
            <span className="button-container">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/videopage")}
              >
                Explore Now
              </button>
            </span>
          </span>
        </div>
      </div>
      <Categories />
      <Footer />
    </div>
  );
};
