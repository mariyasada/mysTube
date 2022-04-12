import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./slider.css";
import { useNavigate } from "react-router-dom";

export const ImageSlider = () => {
  const navigate = useNavigate();
  return (
    <div className="carousel-wrapper" onClick={() => navigate("/videopage")}>
      <Carousel
        className="carousel-conatainer"
        infiniteLoop
        useKeyboardArrows
        autoPlay
        onSwipeEnd={1}
        interval={2000}
      >
        <div>
          <img
            src="assets/banner.jpg"
            alt="banner-image"
            className="banner-image"
          />
        </div>
        <div>
          <img
            src="assets/banner2.jpg"
            alt="banner-image"
            className="banner-image"
          />
        </div>
        <div>
          <img
            src="https://ik.imagekit.io/qrhnvir8bf0/banner_GjkhBj6XR.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1649602900874"
            alt="banner-image"
            className="banner-image"
          />
        </div>
        <div>
          <img
            src="https://ik.imagekit.io/qrhnvir8bf0/pexels-engin-akyurt-6749429_rfd76k3A2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649661316459"
            alt="banner-image"
            className="banner-image"
          />
        </div>
      </Carousel>
    </div>
  );
};
