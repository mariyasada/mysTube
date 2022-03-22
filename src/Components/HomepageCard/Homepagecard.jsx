import React from "react";
import "../HomepageCard/homepagecard.css";

export const HomePageCard = ({ category, index }) => {
  const { image, categoryName, subDescription } = category;
  return (
    <div className="Category-card-container flex-center">
      <div className="category-image-container flex-center">
        <img className="category-image" src={image} alt="alcoholink image" />
      </div>
      <div className="category-description-container category-description-container-reverse">
        <h2 className="category-title"> {categoryName}</h2>
        <p className="category-description">{subDescription}.</p>
        <span>
          <button className="btn btn-primary-first">Watch Now</button>
        </span>
      </div>
    </div>
  );
};
